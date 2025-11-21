import { defineConfig } from 'tsdown'

export default defineConfig([
	{
		entry: ['./src/index.ts'],
		outDir: './esm'
	},
	{
		entry: ['./src/manager/index.ts'],
		outDir: './esm/manager'
	},
	{
		entry: ['./src/storybook-addon-tag-badges/index.ts'],
		outDir: './esm/storybook-addon-tag-badges'
	},
	{
		entry: ['./src/storybook-dark-mode/index.ts'],
		outDir: './esm/storybook-dark-mode'
	},
	{
		entry: ['./src/variants/index.ts'],
		outDir: './esm/variants'
	}
])
