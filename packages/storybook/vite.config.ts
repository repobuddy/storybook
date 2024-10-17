import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin'
import react from '@vitejs/plugin-react'
import { defineProject } from 'vitest/config'

// https://vitejs.dev/config/
export default defineProject({
	plugins: [
		react(),
		// See options at: https://storybook.js.org/docs/writing-tests/vitest-plugin#storybooktest
		storybookTest(),
	],
	test: {
		name: 'sb',
		browser: {
			enabled: true,
			headless: true,
			name: 'chromium',
			provider: 'playwright',
		},
		globals: true,
		include: [
			// Technically non-storybook tests can be execute in NodeJS.
			// But we are including them here to cover this scenario that
			// not all tests are stories.
			'**/*.spec.ts',
			'**/*.stories.?(m)[jt]s?(x)',
		],
		setupFiles: ['./.storybook/vitest.setup.ts'],
	},
})
