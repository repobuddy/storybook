import type { Meta, StoryObj } from '@storybook/react'
import { defineViewportParam } from '../index.ts'

const meta = {
	title: 'Parameters/defineViewportParam',
	tags: ['new', 'version:1.0.0', 'autodocs'],
	parameters: defineViewportParam({
		defaultViewport: 'mobile1',
		viewports: {
			mobile1: {
				name: 'Mobile',
				styles: {
					width: '320px',
					height: '568px'
				},
				type: 'mobile'
			},
			tablet1: {
				name: 'Tablet',
				styles: {
					width: '768px',
					height: '1024px'
				},
				type: 'tablet'
			}
		}
	}),
	render: () => <div>Hello</div>
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

/**
 * Basic example showing how to configure viewport parameters with custom viewports
 */
export const CustomViewports: Story = {
	parameters: defineViewportParam({
		defaultViewport: 'mobile1',
		viewports: {
			mobile1: {
				name: 'Mobile',
				styles: {
					width: '320px',
					height: '568px'
				},
				type: 'mobile'
			},
			tablet1: {
				name: 'Tablet',
				styles: {
					width: '768px',
					height: '1024px'
				},
				type: 'tablet'
			}
		}
	})
}

/**
 * Example showing how to set a default viewport orientation
 */
export const DefaultOrientation: Story = {
	parameters: defineViewportParam({
		defaultOrientation: 'landscape'
	})
}

/**
 * Example showing how to disable the viewport addon for a specific story
 */
export const DisabledViewport: Story = {
	parameters: defineViewportParam({
		disable: true
	})
}

/**
 * Example showing how to set a specific default viewport
 */
export const SpecificViewport: Story = {
	parameters: defineViewportParam({
		defaultViewport: 'tablet1'
	})
}
