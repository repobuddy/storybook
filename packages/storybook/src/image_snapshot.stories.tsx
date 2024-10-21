import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/test'
import { page } from './context/page.js'
import { defineSnapshotParam } from './index.js'
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
	async play() {
		const s = await page.imageSnapshot()
		expect(s).toMatchImageSnapshot()
	},
}

export const Failed: Story = {
	parameters: defineSnapshotParam({}),
	args: {
		primary: true,
		label: 'Faleed',
	},
	async play() {
		await page.screenshot()
	},
}
