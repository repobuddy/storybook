// This file has been automatically migrated to valid ESM format by Storybook.
import { fileURLToPath } from 'node:url'
import { defineMain } from '@storybook/react-vite/node'
import { getCodeEditorStaticDirs } from 'storybook-addon-code-editor/getStaticDirs'

const __filename = fileURLToPath(import.meta.url)

export default defineMain({
	stories: ['../src/**/*.@(mdx|stories.@(ts|tsx))'],
	staticDirs: [...getCodeEditorStaticDirs(__filename)],
	addons: [
		'@storybook/addon-a11y',
		'@storybook/addon-docs',
		'@storybook/addon-vitest',
		'storybook-addon-tag-badges',
		'@storybook-community/storybook-dark-mode',
		'storybook-addon-code-editor',
		'storybook-addon-vis'
	],
	docs: { defaultName: 'Overview' },
	framework: {
		name: '@storybook/react-vite',
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
