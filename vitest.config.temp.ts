import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		resolveSnapshotPath(path, extension, ...args) {
			// console.info(this)
			console.info(path, extension, ...args)
			return path.replace('__snapshots__', '__snapshots__/custom')
		}
	}
})
