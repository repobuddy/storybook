import type { BrowserPage, Locator } from '@vitest/browser/context'
import { server } from '@vitest/browser/context'
import { basename } from 'pathe'
import { getDimensionsFromBase64 } from './_dimension'
import { state } from './state'

export const imageSnapshotSymbol = Symbol('imageSnapshot')

declare module '@vitest/browser/context' {
	interface BrowserPage {
		imageSnapshot(this: BrowserPage, _options?: ImageSnapshotOptions): Promise<ImageSnapshot>
	}
}

export type ImageSnapshotOptions = {
	element?: Element | Locator
}

export type ImageSnapshot = {
	[imageSnapshotSymbol]: {
		rootDir: string
		width: number
		height: number
		testfilename: string
		snapshotFilename: string
		baselinePath: string
		resultPath: string
		diffPath: string
		base64: string
	}
}

export function isImageSnapshot(subject: any): subject is ImageSnapshot {
	return !!subject && subject[imageSnapshotSymbol]
}

export function assertImageSnapshot(subject: any): asserts subject is ImageSnapshot {
	if (!isImageSnapshot(subject)) {
		throw new Error('Expected subject to be an image snapshot')
	}
}

export async function imageSnapshot(this: BrowserPage, _options?: ImageSnapshotOptions): Promise<ImageSnapshot> {
	// console.log('imageSnapshot', this)
	// console.log('server', server)
	const rootDir = server.config.root
	const testfilename = basename(state.filepath)
	const id = toId(state.task.name)
	const snapshotFilename = `${id}-${state.snapshot[state.task.name].count++}.png`
	const baselinePath = `__screenshots__/${testfilename}/${snapshotFilename}`
	const resultPath = `__screenshots__/${testfilename}/__results__/${snapshotFilename}`
	const diffPath = `__screenshots__/${testfilename}/__diffs__/${snapshotFilename}`
	const screenshot = await this.screenshot({
		base64: true,
		path: resultPath,
	})
	const dimensions = await getDimensionsFromBase64(screenshot.base64)

	return {
		[imageSnapshotSymbol]: {
			rootDir,
			testfilename,
			snapshotFilename,
			baselinePath,
			resultPath,
			diffPath,
			base64: screenshot.base64,
			...dimensions,
		},
	}
}

function toId(name: string) {
	return `${name.replace(/[^a-z0-9]/gi, '-')}`
}
