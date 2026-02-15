import { defineConfig, type UserConfig } from 'tsdown'

const commonConfig: UserConfig = {
	platform: 'browser',
	format: 'esm',
	target: 'esnext',
	tsconfig: './tsconfig.build.json',
	external: [
		/^@storybook-community\/.*$/,
		/^@storybook\/.*$/,
		'react',
		/^react\/.*$/,
		'storybook',
		/^storybook\/.*$/,
		'storybook-addon-tag-badges'
	],
	banner: ({ format }) => {
		if (format === 'esm')
			return {
				js: `import { createRequire } from 'module'; const require = createRequire(import.meta.url);`
			}
		return {}
	}
}

export default defineConfig([
	{
		...commonConfig,
		entry: ['./src/index.ts'],
		outDir: './esm'
	},
	{
		...commonConfig,
		entry: ['./src/manager/index.ts'],
		outDir: './esm/manager'
	},
	{
		...commonConfig,
		entry: ['./src/storybook-addon-tag-badges/index.ts'],
		outDir: './esm/storybook-addon-tag-badges'
	},
	{
		...commonConfig,
		entry: ['./src/storybook-dark-mode/index.ts'],
		outDir: './esm/storybook-dark-mode'
	},
	{
		entry: ['./src/index.ts'],
		clean: true,
		outDir: '.storybook/types/repobuddy_storybook',
		dts: {
			emitDtsOnly: true
		}
	},
	{
		entry: ['./src/storybook-addon-tag-badges/index.ts'],
		clean: true,
		outDir: '.storybook/types/repobuddy_storybook_tag_badges',
		dts: {
			emitDtsOnly: true
		}
	}
])
