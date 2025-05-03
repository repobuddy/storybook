import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/test'

export default {
	title: 'testing/it',
	tags: ['todo']
} satisfies Meta

export const BasicUsage: StoryObj = {
	parameters: {
		storyName: 'test description'
	},
	tags: ['!test'],
	render: () => {
		return <div>Hello</div>
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByText('Hello')).toBeInTheDocument()
	}
}

export const SkipTest: StoryObj = {
	tags: ['!test'],
	render: () => {
		return <div>Hello</div>
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByText('Hello')).toBeInTheDocument()
	}
}
