import type { StorybookConfig } from '@storybook/react-vite'
import { createRequire } from 'node:module'
import { dirname, join } from 'node:path'
import { defineStorybookVisOptions } from 'storybook-addon-vis'

const require = createRequire(import.meta.url)

export default {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.tsx'],
	addons: [
		getAbsolutePath('@storybook/addon-vitest'),
		getAbsolutePath('storybook-addon-tag-badges'),
		getAbsolutePath('@storybook/addon-docs'),
		getAbsolutePath('@storybook-community/storybook-dark-mode'),
		{
			name: getAbsolutePath('storybook-addon-vis'),
			options: defineStorybookVisOptions({
				visProjects: [
					{
						snapshotRootDir({ ci, platform }) {
							return ci ? `__vis__/${platform}/dark` : '__vis__/local/dark'
						}
					},
					{
						snapshotRootDir({ ci, platform }) {
							return ci ? `__vis__/${platform}/light` : '__vis__/local/light'
						}
					},
					{
						snapshotRootDir({ ci, platform }) {
							return ci ? `__vis__/${platform}/theme` : '__vis__/local/theme'
						}
					}
				]
			})
		},
		'#repobuddy/storybook/variants'
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
