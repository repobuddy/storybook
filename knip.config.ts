import type { KnipConfig } from 'knip'

const config: KnipConfig = {
	workspaces: {
		'libs/*': {
			entry: ['**/index.{ts,tsx,js,jsx}', '**/src/index.{ts,tsx,js,jsx}', '**/.storybook/**/*.{ts,tsx,js,jsx}'],
			project: ['**/*.{ts,tsx,js,jsx}'],
			ignoreDependencies: [
				// somehow it detects as unused
				'tailwindcss',
				// They are referenced in subpath usage.
				'@storybook-community/storybook-dark-mode',
				'storybook-addon-tag-badges'
			]
		}
	},
	ignore: ['apps/**']
}

export default config
