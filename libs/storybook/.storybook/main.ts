/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
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
	}
}
export default config
