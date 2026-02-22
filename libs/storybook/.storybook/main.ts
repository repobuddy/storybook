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
		'storybook-addon-code-editor',
		'storybook-addon-vis'
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
			defaultFilterSelection: process.env.NODE_ENV === 'production' ? 'exclude' : undefined
		},
		internal: {
			defaultFilterSelection: process.env.NODE_ENV === 'production' ? 'exclude' : undefined
		}
	}
} satisfies StorybookConfig
