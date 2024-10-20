import { page } from '@vitest/browser/context'
import type { RunnerTestFile, RunnerTestSuite } from 'vitest'
import { expect } from 'vitest'
import type { TaskContext } from 'vitest'
import { imageSnapshot, toMatchImageSnapshot } from './index.js'
import { state } from './state.js'

export type SetupOptions = {
	snapshot?: null
}

export function setupBeforeAll(ctx: Readonly<RunnerTestSuite | RunnerTestFile>) {
	// console.info('setup', ctx)
	state.name = ctx.name
	state.filepath = ctx.file.filepath
	// const name = ctx.name
	// const filepath = ctx.filepath
	// ctx.meta.snapshot = '1234'
	page.extend({ imageSnapshot })
	expect.extend({ toMatchImageSnapshot })
}

export function setupBeforeEach(ctx: TaskContext) {
	state.task = ctx.task
	state.snapshot[ctx.task.name] = {
		count: 1,
	}
}
