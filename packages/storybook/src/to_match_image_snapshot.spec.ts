import { assertType } from 'type-plus'
import { expect, it } from 'vitest'
import { page } from './context/page'

it('should fail if the subject is not an element, locator, or result of page.imageSnapshot()', async () => {
	// TODO: this is not complete.
	// need to handle other cases first.
	try {
		await expect('something').toMatchImageSnapshot()
	} catch (e) {
		expect(e).toBeInstanceOf(Error)
		assertType.as<Error>(e)
		expect(e.message).toEqual(
			'`toMatchImageSnapshot()` expects the subject to be an element, locator, or result of `page.imageSnapshot()`, but got: `something`',
		)
	}
})

it('should fail when the subject is the result of page.screenshot()', async () => {
	try {
		await expect(page.screenshot({ base64: true })).toMatchImageSnapshot()
	} catch (e) {
		expect(e).toBeInstanceOf(Error)
		assertType.as<Error>(e)
		expect(e.message).toEqual(
			'`toMatchImageSnapshot()` expects the subject the result of `page.imageSnapshot()`, but seems like you are using `page.screenshot()`?',
		)
	}
})

it('save file under __results__', async () => {
	const f1 = await page.imageSnapshot()

	expect(f1.path).toMatch(
		'__screenshots__/to_match_image_snapshot.spec.ts/__results__/save-file-under---results---1.png',
	)

	const f2 = await page.imageSnapshot()
	expect(f2.path).toMatch(
		'__screenshots__/to_match_image_snapshot.spec.ts/__results__/save-file-under---results---2.png',
	)
})
