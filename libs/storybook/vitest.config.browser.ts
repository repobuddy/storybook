import { join } from 'node:path'
import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin'
import { storybookVis } from 'storybook-addon-vis/vitest-plugin'
import { defineProject } from 'vitest/config'

export default defineProject({
	plugins: [storybookTest({ configDir: join(import.meta.dirname, '.storybook') }), storybookVis()],
	test: {
		name: 'sb:browser',
		browser: {
			enabled: true,
			headless: true,
			provider: 'playwright',
			instances: [{ browser: 'chromium' }]
		},
		setupFiles: ['.storybook/vitest.setup.ts']
	}
})
