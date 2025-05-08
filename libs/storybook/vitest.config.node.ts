import { nodeTestPreset } from '@repobuddy/vitest/config'
import { defineProject } from 'vitest/config'

// https://vitejs.dev/config/
export default defineProject({
	plugins: [nodeTestPreset({ includeGeneralTests: true })],
	test: {
		name: 'sb:node'
	}
})
