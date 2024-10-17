import { describe, expect, it } from 'vitest'
import { toMatchImageSnapshot } from './index.js'

describe(`${toMatchImageSnapshot.name}()`, () => {
	it('should be available in vitest expect', () => {
		expect(typeof expect('something').toMatchImageSnapshot).toBe('function')
	})
})
