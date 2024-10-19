import type { Meta, StoryObj } from '@storybook/react'
import { expect, fn } from '@storybook/test'
import { page } from '../context/page'
import { defineSnapshotParam } from '../snapshot'
import { Button } from './Button'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: 'Example/Button',
	component: Button,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const PageHasImageSnapshotFn: Story = {
	parameters: defineSnapshotParam({}),
	args: {
		primary: true,
		label: 'Button',
	},
	async play(ctx) {
		console.info('play: ctx.globalTypes', ctx.globalTypes)
		console.info('play: ctx.globals', ctx.globals)
		// console.info('play: ctx.context', ctx.context)
		expect(typeof page.imageSnapshot).toBe('function')
	},
}
