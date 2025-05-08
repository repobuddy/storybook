import { join } from 'node:path'
import { browserTestPreset } from '@repobuddy/vitest/config'
import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin'
import { storybookVis } from 'storybook-addon-vis/vitest-plugin'
import { defineProject } from 'vitest/config'

export default defineProject({
	plugins: [storybookTest({ configDir: join(import.meta.dirname, '.storybook') }), storybookVis(), browserTestPreset()],
	optimizeDeps: {
		include: ['react/jsx-dev-runtime']
	},
	test: {
		name: 'sb:browser',
		setupFiles: ['.storybook/vitest.setup.ts']
	}
})
