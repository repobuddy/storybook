import type { Locator } from '@vitest/browser/context'

declare global {
	namespace jest {
		// biome-ignore lint/correctness/noUnusedVariables: augmentation must have matching type params.
		interface Matchers<R, T> {
			toMatchImageSnapshot(): void
		}
	}
}

export async function toMatchImageSnapshot(): Promise<jest.CustomMatcherResult> {
	return {
		pass: true,
		message: () => '',
	}
}

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
