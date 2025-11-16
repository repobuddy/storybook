import { defineConfig } from 'vitest/config'

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
	test: {
		coverage: {
			include: ['libs/*/{src,source,code}/**/*.{js,mjs,cjs,ts,jsx,tsx,cts,mts}'],
			exclude: [
				'**/*.{spec,test,unit,accept,integrate,system,perf,stress}.{js,jsx,cjs,mjs,ts,tsx,cts,mts}',
				'**/*.{spec,test,unit,accept,integrate,system,perf,stress}.*.{js,jsx,cjs,mjs,ts,tsx,cts,mts}',
				'**/*.stories.{js,mjs,jsx,tsx}'
			]
		},
		workspace: [
			'./libs/storybook/vitest.config.dark.ts',
			'./libs/storybook/vitest.config.light.ts',
			'./libs/storybook/vitest.config.theme.ts',
			'./apps/app/vitest.config.ts'
		]
	}
})
