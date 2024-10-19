import { page } from '@vitest/browser/context'
import type { RunnerTestFile, RunnerTestSuite } from 'vitest'
import { expect } from 'vitest'
import { imageSnapshot, toMatchImageSnapshot } from '../src/index.js'

export type SetupOptions = {
	snapshot?: null
}

export function setupBeforeAll(ctx: Readonly<RunnerTestSuite | RunnerTestFile>) {
	console.info('setup', ctx)
	console.info('file', ctx.file.filepath)
	// const name = ctx.name
	// const filepath = ctx.filepath
	// ctx.meta.snapshot = '1234'
	page.extend({ imageSnapshot })
	expect.extend({ toMatchImageSnapshot })
}
