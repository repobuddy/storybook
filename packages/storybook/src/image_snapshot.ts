import type { Locator } from '@vitest/browser/context'

declare module '@vitest/browser/context' {
	interface BrowserPage {
		imageSnapshot(): Promise<void>
	}
}

export type ImageSnapshotOptions = {
	element?: Element | Locator
	base64?: boolean
}

export async function imageSnapshot(_options?: ImageSnapshotOptions) {}
