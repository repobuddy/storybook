import type { StoryContext } from '@storybook/csf'
import { setProjectAnnotations } from '@storybook/react'
import { page } from '@vitest/browser/context'
import { afterEach, beforeAll } from 'vitest'
import * as projectAnnotations from './preview'
import { beforeEach } from 'vitest'

type TestContext = { story?: StoryContext }

// This is an important step to apply the right configuration when testing your stories.
// More info at: https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#setprojectannotations
const project = setProjectAnnotations([projectAnnotations])

beforeAll((ctx) => {
	console.log('beforeAll', ctx)
	project.beforeAll()
})

afterEach<TestContext>(async (ctx) => {
	console.log('afterEach', ctx.task)
	console.log('afterEach', ctx.task.file.file)
	console.log('afterEach', ctx.task.file.tasks)
	if (ctx.story) {
		const { tags, parameters, id, globals, context } = ctx.story
		// console.log('afterEach', parameters)

	}
	await page.screenshot({ path: 'screenshot.png' })
})
