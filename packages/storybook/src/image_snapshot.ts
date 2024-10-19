import type { BrowserPage, Locator } from '@vitest/browser/context'
import { imageSnapshotSymbol } from './_symbols'

declare module '@vitest/browser/context' {
	interface BrowserPage {
		imageSnapshot(
			this: BrowserPage,
			_options?: ImageSnapshotOptions,
		): Promise<{
			path: string
			base64: string
			[imageSnapshotSymbol]: boolean
		}>
	}
}

export type ImageSnapshotOptions = {
	element?: Element | Locator
}

export async function imageSnapshot(this: BrowserPage, _options?: ImageSnapshotOptions) {
	return {
		[imageSnapshotSymbol]: true,
		...(await this.screenshot({ base64: true })),
	}
}
