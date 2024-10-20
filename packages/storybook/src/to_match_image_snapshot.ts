import type { AsyncExpectationResult, MatcherState } from '@vitest/expect'
import { assertImageSnapshot, isImageSnapshot } from './image_snapshot.js'

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
	const subject = await actual
	if (!isImageSnapshot(subject)) {
		if (subject.path && subject.base64) {
			return {
				pass: false,
				actual,
				message: () =>
					'`toMatchImageSnapshot()` expects the subject to be the result of `page.imageSnapshot()`, but seems like you are using `page.screenshot()`?',
			}
		}
		if (typeof actual !== 'object') {
			return {
				pass: false,
				actual,
				message: () =>
					`\`toMatchImageSnapshot()\` expects the subject to be an element, locator, or result of \`page.imageSnapshot()\`, but got: \`${actual}\``,
			}
		}
		//await page.imageSnapshot({ element: actual })
	}
	assertImageSnapshot(subject)
	// const baseline = await commands.readFile(subject[imageSnapshotSymbol].baselinePath)
	// console.log('baseline', baseline)

	return {
		pass: true,
		message: () => '',
	}
}
