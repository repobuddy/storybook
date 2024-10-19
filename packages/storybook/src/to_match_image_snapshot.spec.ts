import { AssertionError } from 'chai'
import { expect, it } from 'vitest'

it('should fail if the subject is not an image, element or locator', async () => {
	try {
		await expect('something').toMatchImageSnapshot()
	} catch (e) {
		expect(e).toBeInstanceOf(AssertionError)
	}
})
