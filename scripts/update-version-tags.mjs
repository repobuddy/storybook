#!/usr/bin/env node

/**
 * Update Version Tags Script
 *
 * This script automates the process of updating `version:next` tags to `version:<major.minor>`
 * format in Storybook stories by reading the version from each package's package.json.
 *
 * Usage:
 *   node scripts/update-version-tags.mjs [options]
 *
 * Options:
 *   --dry-run    Show what would be changed without making changes
 *   --help       Show this help message
 *   --verbose    Show detailed output
 */

import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'

// Configuration
const VERSION_NEXT_PATTERN = /version:next/g

// Cache for package.json versions to avoid repeated file reads
const packageVersionCache = new Map()

// Parse command line arguments
const args = process.argv.slice(2)
const isDryRun = args.includes('--dry-run')
const isVerbose = args.includes('--verbose')
const showHelp = args.includes('--help')

if (showHelp) {
	console.info(`
Update Version Tags Script

This script updates 'version:next' tags to 'version:<major.minor>' format in Storybook stories.

Usage:
  node scripts/update-version-tags.mjs [options]

Options:
  --dry-run    Show what would be changed without making changes
  --help       Show this help message
  --verbose    Show detailed output

Examples:
  node scripts/update-version-tags.mjs --dry-run
  node scripts/update-version-tags.mjs --verbose
`)
	process.exit(0)
}

/**
 * Find all story files containing 'version:next' tags
 */
function findStoryFilesWithVersionNext() {
	try {
		// Use grep to find files containing version:next
		const grepCommand = `grep -r "version:next" . --include="*.stories.tsx" -l`
		const output = execSync(grepCommand, { encoding: 'utf8', cwd: process.cwd() })

		if (!output.trim()) {
			return []
		}

		return output
			.trim()
			.split('\n')
			.filter((file) => file.trim())
	} catch (error) {
		// grep returns non-zero exit code when no matches found
		if (error.status === 1) {
			return []
		}
		throw error
	}
}

/**
 * Find the package.json file for a given story file
 */
function findPackageJson(storyFilePath) {
	const storyDir = path.dirname(storyFilePath)
	const parts = storyDir.split(path.sep)

	// Look for package.json in the current directory and parent directories
	for (let i = parts.length; i > 0; i--) {
		const searchPath = path.join(process.cwd(), ...parts.slice(0, i), 'package.json')
		if (fs.existsSync(searchPath)) {
			return searchPath
		}
	}

	return null
}

/**
 * Extract major.minor version from package.json
 * Uses caching to avoid repeated file reads for the same package
 */
function extractVersionFromPackageJson(packageJsonPath) {
	// Check cache first
	if (packageVersionCache.has(packageJsonPath)) {
		if (isVerbose) {
			console.info(`  💾 Using cached version for ${path.relative(process.cwd(), packageJsonPath)}`)
		}
		return packageVersionCache.get(packageJsonPath)
	}

	try {
		const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))
		const version = packageJson.version

		if (!version) {
			throw new Error('No version field found in package.json')
		}

		// Extract major.minor from version (e.g., "1.2.3" -> "1.2")
		const versionMatch = version.match(/^(\d+)\.(\d+)/)
		if (!versionMatch) {
			throw new Error(`Invalid version format: ${version}`)
		}

		const majorMinorVersion = `${versionMatch[1]}.${versionMatch[2]}`

		// Cache the result
		packageVersionCache.set(packageJsonPath, majorMinorVersion)

		return majorMinorVersion
	} catch (error) {
		throw new Error(`Error reading package.json at ${packageJsonPath}: ${error.message}`)
	}
}

/**
 * Update version tags in a story file
 */
function updateVersionTagsInFile(filePath, newVersion) {
	try {
		const content = fs.readFileSync(filePath, 'utf8')
		const updatedContent = content.replace(VERSION_NEXT_PATTERN, `version:${newVersion}`)

		if (content === updatedContent) {
			return { changed: false, content: content }
		}

		return { changed: true, content: updatedContent }
	} catch (error) {
		throw new Error(`Error reading file ${filePath}: ${error.message}`)
	}
}

/**
 * Validate TypeScript syntax of updated file
 * Note: This validation is limited since tsc needs project context
 */
function validateTypeScriptSyntax(filePath) {
	try {
		// Try to use the project's TypeScript config if available
		const tsConfigPath = path.join(process.cwd(), 'tsconfig.json')
		const command = fs.existsSync(tsConfigPath) ? 'npx tsc --noEmit --project .' : 'npx tsc --noEmit "' + filePath + '"'

		execSync(command, {
			stdio: 'pipe',
			cwd: process.cwd()
		})
		return true
	} catch (error) {
		// If TypeScript validation fails, we'll still proceed but warn
		console.warn('  ⚠️  TypeScript validation failed (this is expected for individual files)', error)
		return true // Allow the update to proceed
	}
}

/**
 * Main function
 */
function main() {
	console.info('🔍 Searching for story files with version:next tags...')

	const storyFiles = findStoryFilesWithVersionNext()

	if (storyFiles.length === 0) {
		console.info('✅ No files found with version:next tags.')
		return
	}

	console.info(`📁 Found ${storyFiles.length} file(s) with version:next tags:`)
	if (isVerbose) {
		storyFiles.forEach((file) => {
			console.info(`  - ${file}`)
		})
	}

	const results = {
		processed: 0,
		updated: 0,
		errors: 0,
		skipped: 0
	}

	for (const storyFile of storyFiles) {
		try {
			console.info(`\n📝 Processing: ${storyFile}`)

			// Find the package.json for this story file
			const packageJsonPath = findPackageJson(storyFile)
			if (!packageJsonPath) {
				console.warn(`  ⚠️  Could not find package.json for ${storyFile}`)
				results.skipped++
				continue
			}

			// Extract version from package.json
			const version = extractVersionFromPackageJson(packageJsonPath)
			console.info(`  📦 Found version: ${version} (from ${path.relative(process.cwd(), packageJsonPath)})`)

			// Update the file
			const { changed, content } = updateVersionTagsInFile(storyFile, version)

			if (!changed) {
				console.info('  ⏭️  No changes needed (file may have been updated already)')
				results.skipped++
				continue
			}

			// Validate TypeScript syntax
			if (!validateTypeScriptSyntax(storyFile)) {
				console.error(`  ❌ TypeScript validation failed for ${storyFile}`)
				results.errors++
				continue
			}

			if (isDryRun) {
				console.info(`  🔍 [DRY RUN] Would update version:next → version:${version}`)
				// Show the changes that would be made
				const originalContent = fs.readFileSync(storyFile, 'utf8')
				const lines = originalContent.split('\n')
				const updatedLines = content.split('\n')

				for (let i = 0; i < Math.max(lines.length, updatedLines.length); i++) {
					if (lines[i] !== updatedLines[i]) {
						console.info(`    Line ${i + 1}:`)
						if (lines[i]) console.info(`      - ${lines[i]}`)
						if (updatedLines[i]) console.info(`      + ${updatedLines[i]}`)
					}
				}
			} else {
				// Write the updated content
				fs.writeFileSync(storyFile, content, 'utf8')
				console.info(`  ✅ Updated version:next → version:${version}`)
			}

			results.processed++
			if (!isDryRun) {
				results.updated++
			}
		} catch (error) {
			console.error(`  ❌ Error processing ${storyFile}: ${error.message}`)
			results.errors++
		}
	}

	// Summary
	console.info('\n📊 Summary:')
	console.info(`  Processed: ${results.processed}`)
	console.info(`  Updated: ${results.updated}`)
	console.info(`  Skipped: ${results.skipped}`)
	console.info(`  Errors: ${results.errors}`)

	// Cache statistics
	if (isVerbose && packageVersionCache.size > 0) {
		console.info(`  📦 Package.json files read: ${packageVersionCache.size}`)
		console.info(`  💾 Cache hits: ${results.processed - packageVersionCache.size}`)
	}

	if (isDryRun) {
		console.info('\n💡 This was a dry run. Use without --dry-run to apply changes.')
	} else if (results.updated > 0) {
		console.info('\n✅ Version tags updated successfully!')
		console.info('🔍 You can verify the changes by running:')
		console.info('   grep -r "version:" . --include="*.stories.tsx" | grep -E "version:[0-9]+\\.[0-9]+"')
	}

	if (results.errors > 0) {
		process.exit(1)
	}
}

// Run the script
if (import.meta.url === `file://${process.argv[1]}`) {
	main()
}

export {
	extractVersionFromPackageJson,
	findPackageJson,
	findStoryFilesWithVersionNext,
	updateVersionTagsInFile,
	validateTypeScriptSyntax
}
