import type { Meta, StoryObj } from '@storybook/react'
import { page } from './context/page.js'
import { defineSnapshotParam } from './snapshot.js'
import { Button } from './stories/Button.js'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: 'page.imageSnapshot',
	component: Button,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered',
	},
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Success: Story = {
	parameters: defineSnapshotParam({}),
	args: {
		primary: true,
		label: 'Button',
	},
	async play(ctx) {
		console.info('play: ctx.globalTypes', ctx.globalTypes)
		console.info('play: ctx.globals', ctx.globals)
		// console.info('play: ctx.context', ctx.context)
		await page.imageSnapshot()
	},
}

export const Failed: Story = {
	parameters: defineSnapshotParam({}),
	args: {
		primary: true,
		label: 'Faeailed',
	},
	async play(ctx) {
		console.info('play: ctx.globalTypes', ctx.globalTypes)
		console.info('play: ctx.globals', ctx.globals)
		// console.info('play: ctx.context', ctx.context)
		// await page.imageSnapshot()
	},
}
