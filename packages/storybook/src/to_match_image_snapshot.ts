import type { AsyncExpectationResult, MatcherState } from '@vitest/expect'
import { page } from './context/page'
import { AssertionError } from 'chai'

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
		throw new AssertionError('toMatchImageSnapshot expects an object', null, toMatchImageSnapshot)
	}
	page.screenshot({ element: actual })
	return {
		pass: true,
		message: () => '',
	}
}
