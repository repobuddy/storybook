import type { KnipConfig } from 'knip'

const config: KnipConfig = {
	workspaces: {
		'libs/*': {
			entry: ['**/index.{ts,tsx,js,jsx}', '**/src/index.{ts,tsx,js,jsx}', '**/.storybook/**/*.{ts,tsx,js,jsx}'],
			project: ['**/*.{ts,tsx,js,jsx,mdx,css}']
		}
	},
	ignoreDependencies: ['@types/react']
}

export default config
