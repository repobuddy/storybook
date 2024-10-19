import { assertType } from 'type-plus'
import { expect, it } from 'vitest'

it('should fail if the subject is not an element, locator, or result of page.imageSnapshot()', async () => {
	// TODO: this is not complete.
	// need to handle other cases first.
	try {
		await expect('something').toMatchImageSnapshot()
	} catch (e) {
		expect(e).toBeInstanceOf(Error)
		assertType.as<Error>(e)
		expect(e.message).toEqual(
			'toMatchImageSnapshot() expects the subject to be an element, locator, or result of page.imageSnapshot(), but got: something',
		)
	}
})
