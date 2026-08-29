// This file has been automatically migrated to valid ESM format by Storybook.
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineMain } from '@storybook/react-vite/node'
import { getCodeEditorStaticDirs } from 'storybook-addon-code-editor/getStaticDirs'

const __filename = fileURLToPath(import.meta.url)

export default defineMain({
	stories: ['../src/**/*.mdx', '../src/**/*.stories.tsx'],
	staticDirs: [...getCodeEditorStaticDirs(__filename)],
	addons: [
		getAbsolutePath('@storybook/addon-docs'),
		getAbsolutePath('@storybook/addon-vitest'),
		getAbsolutePath('storybook-addon-tag-badges'),
		getAbsolutePath('@storybook-community/storybook-dark-mode'),
		getAbsolutePath('storybook-addon-code-editor'),
		getAbsolutePath('storybook-addon-vis')
	],
	docs: { defaultName: 'Overview' },
	framework: {
		name: getAbsolutePath('@storybook/react-vite'),
		options: {}
	},
	tags: {
		'internal-sp': {
			excludeFromSidebar: process.env.NODE_ENV === 'production'
		},
		unit: {
			defaultFilterSelection: process.env.NODE_ENV === 'production' ? 'exclude' : undefined
		},
		internal: {
			defaultFilterSelection: process.env.NODE_ENV === 'production' ? 'exclude' : undefined
		}
	}
})

function getAbsolutePath(value: string): any {
	return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)))
}
