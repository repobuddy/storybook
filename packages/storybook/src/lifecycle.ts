import type { RunnerTestFile, RunnerTestSuite, TaskContext } from 'vitest'
import { state } from './state.js'

export type SetupOptions = {
	snapshot?: null
}

export function setupBeforeAll(ctx: Readonly<RunnerTestSuite | RunnerTestFile>) {
	state.name = ctx.name
	state.filepath = ctx.file.filepath
}

export function setupBeforeEach(ctx: TaskContext) {
	state.task = ctx.task
	state.snapshot[ctx.task.name] = {
		count: 1,
	}
}
