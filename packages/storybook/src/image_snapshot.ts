import type { BrowserPage, Locator } from '@vitest/browser/context'
import { basename } from 'pathe'
import { toImageData } from './_image_data.js'
import { server } from './context/page.js'
import { state } from './state.js'

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
		testfilename: string
		snapshotFilename: string
		baselinePath: string
		resultPath: string
		diffPath: string
		base64: string
		image: ImageData
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
	const snapshotFilename = `${id}-${state.snapshot[state.task.name]!.count++}.png`
	const baselinePath = `__screenshots__/${testfilename}/${snapshotFilename}`
	const resultPath = `__screenshots__/${testfilename}/__results__/${snapshotFilename}`
	const diffPath = `__screenshots__/${testfilename}/__diffs__/${snapshotFilename}`
	const screenshot = await this.screenshot({
		base64: true,
		path: resultPath,
	})
	const image = await toImageData(screenshot.base64)

	return {
		[imageSnapshotSymbol]: {
			rootDir,
			testfilename,
			snapshotFilename,
			baselinePath,
			resultPath,
			diffPath,
			base64: screenshot.base64,
			image,
		},
	}
}

function toId(name: string) {
	return `${name.replace(/[^a-z0-9]/gi, '-')}`
}
