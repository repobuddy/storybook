import { defineConfig, type UserConfig } from 'tsdown'

const commonConfig: UserConfig = {
	platform: 'browser',
	target: 'esnext',
	external: [
		'@storybook-community/storybook-dark-mode',
		'@storybook/addon-docs',
		'@storybook/addon-themes',
		'@storybook/addon-vitest',
		'@storybook/icons',
		'@storybook/react-vite',
		'react',
		'react-dom',
		'storybook',
		'storybook-addon-tag-badges'
	]
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
	}
])
