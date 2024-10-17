import { setProjectAnnotations } from '@storybook/react'
import { page } from '@vitest/browser/context'
import { afterEach, beforeAll, expect } from 'vitest'
import { imageSnapshot, type TestContext, toMatchImageSnapshot } from '../src/index.js'
import * as projectAnnotations from './preview'

// This is an important step to apply the right configuration when testing your stories.
// More info at: https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#setprojectannotations
const project = setProjectAnnotations([projectAnnotations])

beforeAll((ctx) => {
	console.info('beforeAll: story', ctx)
	page.extend({ imageSnapshot })
	expect.extend({ toMatchImageSnapshot })
	project.beforeAll()
})

afterEach<TestContext>(async () => {
	// console.log('afterEach: task', ctx.task)
	// if (ctx.story) {
	// 	const { tags, parameters, id, globals, context } = ctx.story
	// 	console.log('afterEach', parameters)
	// }
	// expect('c').toMatchImageSnapshot()
})
