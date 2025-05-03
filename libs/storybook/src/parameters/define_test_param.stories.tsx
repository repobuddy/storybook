import type { Meta, StoryObj } from '@storybook/react'
import { defineTestParam } from './define_test_param'

const meta = {
	title: 'Parameters/defineTestParam',
	tags: ['new', 'version:1.0.0'],
	parameters: {
		docs: {
			description: {
				component: 'Helper function to define test parameters for Storybook stories'
			}
		}
	},
	render: () => <div>Hello</div>
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	parameters: defineTestParam({
		clearMocks: true,
		mockReset: true,
		restoreMocks: true
	})
}

export const WithDangerouslyIgnoreUnhandledErrors: Story = {
	parameters: defineTestParam({
		clearMocks: true,
		mockReset: true,
		restoreMocks: true,
		dangerouslyIgnoreUnhandledErrors: true
	})
}

export const MinimalConfig: Story = {
	parameters: defineTestParam({
		clearMocks: true
	})
}
