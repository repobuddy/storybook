import type { StorybookConfig } from '@storybook/react-vite'

export default {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.tsx'],
	addons: [
		'@storybook/addon-essentials',
		'@storybook/addon-storysource',
		'@storybook/experimental-addon-test',
		'storybook-addon-tag-badges',
		'storybook-dark-mode'
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
