import { fileURLToPath } from 'node:url'
import type { StorybookConfig } from '@storybook/react-vite'
import { getCodeEditorStaticDirs } from 'storybook-addon-code-editor/getStaticDirs'

const __filename = fileURLToPath(import.meta.url)

export default {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.tsx'],
	staticDirs: [...getCodeEditorStaticDirs(__filename)],
	addons: [
		'@storybook/addon-docs',
		'@storybook/addon-vitest',
		'storybook-addon-tag-badges',
		'@storybook-community/storybook-dark-mode',
		'storybook-addon-code-editor'
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
		},
		unit: {
			defaultFilterSelection: 'exclude'
		},
		internal: {
			defaultFilterSelection: 'exclude'
		}
	}
} satisfies StorybookConfig
