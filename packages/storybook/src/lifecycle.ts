import type { RunnerTestFile, RunnerTestSuite, TaskContext } from 'vitest'
import { state } from './state.js'

export type SetupOptions = {
	snapshot?: null
}

export function setupBeforeAll(ctx: Readonly<RunnerTestSuite | RunnerTestFile>) {
	console.debug('setupBeforeAll')
	// console.info('setup', ctx)
	state.name = ctx.name
	state.filepath = ctx.file.filepath
	// const name = ctx.name
	// const filepath = ctx.filepath
	// ctx.meta.snapshot = '1234'
}

export function setupBeforeEach(ctx: TaskContext) {
	state.task = ctx.task
	state.snapshot[ctx.task.name] = {
		count: 1,
	}
}
