import { buddyConfigDefaults } from '@repobuddy/vitest/config'
import { defineConfig } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
	test: {
		coverage: {
			include: buddyConfigDefaults.include.source,
			exclude: [
				...buddyConfigDefaults.exclude.test,
				'src/types',
				'src/**/types.ts',
				'src/**/*.types.ts',
				'src/**/*.stories.*.tsx'
			]
		},
		projects: ['vitest.config.*.ts']
	}
})
