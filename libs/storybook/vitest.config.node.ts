import { defineProject } from 'vitest/config'

// https://vitejs.dev/config/
export default defineProject({
	test: {
		name: 'sb:node',
		include: ['src/**/*.{spec,test,unit,accept,integrate,system,study,perf,stress}.ts']
	}
})
