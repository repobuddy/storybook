import type { AsyncExpectationResult, MatcherState } from '@vitest/expect'
import { page } from './context/page'

declare global {
	namespace jest {
		// biome-ignore lint/correctness/noUnusedVariables: augmentation must have matching type params.
		interface Matchers<R, T> {
			toMatchImageSnapshot(): void
		}
	}
}

export async function toMatchImageSnapshot<T extends MatcherState = MatcherState>(
	this: T,
	actual: any,
): AsyncExpectationResult {
	if (typeof actual !== 'object') {
		return {
			pass: false,
			actual,
			message: () =>
				`toMatchImageSnapshot() expects the subject to be an element, locator, or result of page.imageSnapshot(), but got: ${actual}`,
		}
	}
	page.screenshot({ element: actual })
	return {
		pass: true,
		message: () => '',
	}
}
