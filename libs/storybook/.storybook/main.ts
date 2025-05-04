import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.tsx'],
	addons: [
		'@storybook/addon-essentials',
		'@storybook/addon-storysource',
		'@storybook/experimental-addon-test',
		'storybook-addon-tag-badges'
	],
	framework: {
		name: '@storybook/react-vite',
		options: {}
	},
	managerHead: (head) => `
		${head}
		<link rel="icon" type="image/svg+xml" href="https://avatars.githubusercontent.com/u/97370623?s=400&u=9698dbb5f8f3590a3d7f50e7b5ce6f3db72fcc35&v=4" />
	`
}
export default config
