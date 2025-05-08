import { configDefaults } from '@repobuddy/vitest/config'
import { defineConfig } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
	test: {
		coverage: {
			include: configDefaults.include.source,
			exclude: [...configDefaults.exclude.test, 'src/manager.tsx', 'src/preset.ts']
		},
		workspace: ['vitest.config.browser.ts', 'vitest.config.node.ts']
	}
})
