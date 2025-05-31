import { browserTestPreset } from '@repobuddy/vitest/config'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import { join } from 'node:path'
import { defineProject } from 'vitest/config'

export default defineProject({
	plugins: [
		storybookTest({ configDir: join(import.meta.dirname, '.storybook') }),
		// storybookVis(),
		browserTestPreset()
	],
	optimizeDeps: {
		include: [
			'react/jsx-dev-runtime',
			'@storybook/react-vite',
			// 'storybook-addon-vis/vitest-setup',
			'@storybook/addon-docs/blocks',
			'storybook/theming',
			'react',
			'storybook-dark-mode2',
			'@just-web/css'
		]
	},
	test: {
		name: 'sb:browser',
		setupFiles: ['.storybook/vitest.setup.ts']
	}
})
