import { setProjectAnnotations } from '@storybook/react'
import { afterEach, beforeAll } from 'vitest'
import { type TestContext, setupBeforeAll } from '../src/index.js'
import * as projectAnnotations from './preview'

// This is an important step to apply the right configuration when testing your stories.
// More info at: https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#setprojectannotations
const project = setProjectAnnotations([projectAnnotations])

beforeAll((ctx) => {
	setupBeforeAll(ctx)
	project.beforeAll()
})

afterEach<TestContext>(async (ctx) => {
	// console.info('afterEach: key(ctx)', Object.keys(ctx))
	console.info('afterEach: task', ctx.task)
	console.info('afterEach: story', ctx.story)
	// if (ctx.story) {
	// 	const { tags, parameters, id, globals, context } = ctx.story
	// 	console.log('afterEach', parameters)
	// }
	// expect('c').toMatchImageSnapshot()
})
