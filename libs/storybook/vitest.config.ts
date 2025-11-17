import { buddyConfigDefaults } from '@repobuddy/vitest/config'
import { defineConfig } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
	test: {
		coverage: {
			include: buddyConfigDefaults.include.source,
			exclude: [...buddyConfigDefaults.exclude.test, 'src/manager.tsx', 'src/preset.ts']
		},
		projects: ['vitest.config.*.ts']
	}
})
