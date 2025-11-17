import type { StorybookConfig } from '@storybook/react-vite'

import { dirname, join } from 'node:path'

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
	return dirname(import.meta.resolve(join(value, 'package.json')))
}
const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		// getAbsolutePath('@storybook/addon-onboarding'),
		// getAbsolutePath('@chromatic-com/storybook'),
		getAbsolutePath('@storybook/addon-docs'),
		getAbsolutePath('@storybook/addon-a11y'),
		getAbsolutePath('@storybook/addon-vitest'),
		getAbsolutePath('@repobuddy/storybook/variants'),
		getAbsolutePath('@storybook-community/storybook-dark-mode')
	],
	framework: {
		name: getAbsolutePath('@storybook/react-vite'),
		options: {}
	}
}
export default config
