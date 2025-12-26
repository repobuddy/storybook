import type { StorybookConfig } from '@storybook/react-vite'
import { dirname, join } from 'node:path'

export default {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.tsx'],
	addons: [
		getAbsolutePath('@storybook/addon-docs'),
		getAbsolutePath('@storybook/addon-vitest'),
		getAbsolutePath('storybook-addon-tag-badges'),
		getAbsolutePath('@storybook-community/storybook-dark-mode')
		// {
		// 	name: getAbsolutePath('storybook-addon-vis'),
		// 	options: defineStorybookVisOptions({
		// 		visProjects: [
		// 			{
		// 				snapshotRootDir({ ci, platform }) {
		// 					return ci ? `__vis__/${platform}/dark` : '__vis__/local/dark'
		// 				}
		// 			},
		// 			{
		// 				snapshotRootDir({ ci, platform }) {
		// 					return ci ? `__vis__/${platform}/light` : '__vis__/local/light'
		// 				}
		// 			},
		// 			{
		// 				snapshotRootDir({ ci, platform }) {
		// 					return ci ? `__vis__/${platform}/theme` : '__vis__/local/theme'
		// 				}
		// 			}
		// 		]
		// 	})
		// }
		// '#repobuddy/storybook/variants'
	],
	framework: {
		name: '@storybook/react-vite',
		options: {}
	},
	tags: {
		'internal-sp': {
			excludeFromSidebar: process.env.NODE_ENV === 'production'
		}
	}
} satisfies StorybookConfig

function getAbsolutePath(value: string): any {
	return dirname(import.meta.resolve(join(value, 'package.json')))
}
