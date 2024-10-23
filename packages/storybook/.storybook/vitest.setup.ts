import { setProjectAnnotations } from '@storybook/react'
import { afterEach, beforeAll, beforeEach, expect } from 'vitest'
import type { TestContext } from '../src/index.js'
import { setupBeforeAll, setupBeforeEach, toMatchImageSnapshot } from '../src/index.js'
import * as projectAnnotations from './preview'

// This is an important step to apply the right configuration when testing your stories.
// More info at: https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#setprojectannotations
const project = setProjectAnnotations([projectAnnotations])

beforeAll((ctx) => {
	setupBeforeAll(ctx)
	expect.extend({ toMatchImageSnapshot })

	project.beforeAll()
})

beforeEach((ctx) => {
	setupBeforeEach(ctx)
})

afterEach<TestContext>(async (ctx) => {
	// console.info('afterEach: key(ctx)', Object.keys(ctx))
	// console.info('afterEach: task', ctx.task)
	// console.info('afterEach: story', ctx.story)
	if (ctx.story) {
		// const { tags, parameters, id, globals,  context } = ctx.story
		// console.log('afterEach', parameters)
		// const image = await page.screenshot({ base64: true })
		// const r = await getDimensionsFromBase64(image.base64)
		// console.info(r)
		// 		const canvas = document.createElement('canvas')
		// const ctx = canvas.getContext('2d')
		// console.info(ctx)
		// const imageData = atob(image.base64)
		// console.info(imageData)
		// pixelmatch(imageData, imageData, )
	}
	// expect('c').toMatchImageSnapshot()
})

// const base64String = '...'; // your Base64 string
// const canvas = document.createElement('canvas');
// const ctx = canvas.getContext('2d');

// const imageData = atob(base64String); // decode Base64 string
// const imageWidth = ...; // extract width from Base64 string (e.g., from PNG header)
// const imageHeight = ...; // extract height from Base64 string (e.g., from PNG header)

// ctx.drawImage(new Image(), 0, 0, imageWidth, imageHeight);
// ctx.putImageData(imageData, 0, 0);

// const img = canvas.toDataURL(); // convert canvas to DataU
