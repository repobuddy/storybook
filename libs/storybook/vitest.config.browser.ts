import { browserTestPreset } from '@repobuddy/vitest/config'
import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin'
import { join } from 'node:path'
import { storybookVis } from 'storybook-addon-vis/vitest-plugin'
import { defineProject } from 'vitest/config'

export default defineProject({
	plugins: [storybookTest({ configDir: join(import.meta.dirname, '.storybook') }), storybookVis(), browserTestPreset()],
	optimizeDeps: {
		include: [
			'react/jsx-dev-runtime',
			'@storybook/react',
			'storybook-addon-vis/vitest-setup',
			'@storybook/blocks',
			'@storybook/theming',
			'react',
			'storybook-dark-mode',
			'@just-web/css'
		]
	},
	test: {
		name: 'sb:browser',
		setupFiles: ['.storybook/vitest.setup.ts']
	}
})
