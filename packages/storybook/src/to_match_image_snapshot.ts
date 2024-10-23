import type { AsyncExpectationResult, MatcherState } from '@vitest/expect'
import pixelmatch from 'pixelmatch'
import { toDataURL, toImageData } from './_image_data.js'
import { commands, page } from './context/page.js'
import { assertImageSnapshot, imageSnapshotSymbol, isImageSnapshot } from './image_snapshot.js'

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
		if (subject?.path && subject?.base64) {
			return {
				pass: false,
				actual,
				message: () =>
					'`toMatchImageSnapshot()` expects the subject to be the result of `page.imageSnapshot()`, but seems like you are using `page.screenshot()`?',
			}
		}

		if (typeof subject !== 'object') {
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
	const baseline = await tryReadSnapshot(subject[imageSnapshotSymbol].baselinePath)
	if (!baseline) {
		await page.screenshot({
			path: subject[imageSnapshotSymbol].baselinePath,
		})
	} else {
		const baselineImage = await toImageData(baseline)
		// const diff = new PNG({
		// 	width: baselineImage.width,
		// 	height: baselineImage.height,
		// })
		const diffData = new Uint8Array(baselineImage.width * baselineImage.height * 4)

		pixelmatch(
			subject[imageSnapshotSymbol].image.data,
			baselineImage.data,
			diffData,
			// diff.data,
			baselineImage.width,
			baselineImage.height,
		)
		// writeSnapshot(
		// 	`${subject[imageSnapshotSymbol].diffPath}`,
		// 	await uint8ArrayToBase64(subject[imageSnapshotSymbol].image.data),
		// )
		const diffImage = new ImageData(baselineImage.width, baselineImage.height)
		diffImage.data.set(baselineImage.data)
		const diffUrl = (await toDataURL(diffImage)).split(',')[1]
		// console.info('baseline', baseline)
		// console.info('diff', diffUrl)
		writeSnapshot(`${subject[imageSnapshotSymbol].diffPath}`, diffUrl!)
	}
	return {
		pass: true,
		message: () => '',
	}
}

function tryReadSnapshot(path: string) {
	return new Promise<string>((resolve) => resolve(commands.readFile(path, { encoding: 'base64' }))).catch(
		() => undefined,
	)
}
function writeSnapshot(path: string, content: string) {
	return commands.writeFile(path, content, 'base64url')
}
