import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
	stories: ['../src/**/*.@(mdx|stories.tsx)'],
	addons: [
		'@storybook/addon-docs',
		'@storybook/addon-a11y',
		'@storybook/addon-vitest',
		'@storybook-community/storybook-dark-mode'
	],
	framework: {
		name: '@storybook/react-vite',
		options: {}
	}
}
export default config
