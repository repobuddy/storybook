import type { StorybookConfig } from '@storybook/react-vite'
import { createRequire } from 'node:module'
import { dirname, join } from 'node:path'

const require = createRequire(import.meta.url)

export default {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.tsx'],
	addons: [
		getAbsolutePath('@storybook/addon-vitest'),
		getAbsolutePath('storybook-addon-tag-badges'),
		getAbsolutePath('@storybook/addon-docs'),
		getAbsolutePath('storybook-dark-mode2'),
		getAbsolutePath('storybook-addon-vis')
	],
	framework: {
		name: getAbsolutePath('@storybook/react-vite'),
		options: {}
	},
	tags: {
		'internal-sp': {
			excludeFromSidebar: process.env.NODE_ENV === 'production'
		}
	}
} satisfies StorybookConfig

function getAbsolutePath(value: string): any {
	return dirname(require.resolve(join(value, 'package.json')))
}
