import type { TaskContext } from 'vitest'

export const state = {
	name: '',
	filepath: '',
	snapshot: {},
} as TaskContext & { name: string; filepath: string; snapshot: Record<string, { count: number }> }
