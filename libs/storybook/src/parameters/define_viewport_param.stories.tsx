import type { Meta, StoryObj } from '#repobuddy/storybook/internal'
import dedent from 'dedent'
import React from 'react'
import { defineDocsParam, defineViewportParam, showDocSource } from '../index.js'

const meta = {
	title: 'Parameters/defineViewportParam',
	tags: ['new', 'version:1.0', 'autodocs'],
	decorators: [showDocSource()],
	render: () => <></>
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

/**
 * Basic example showing how to configure viewport parameters with custom viewports
 */
export const CustomViewports: Story = {
	parameters: {
		...defineViewportParam({
			defaultViewport: 'mobile1',
			viewports: {
				mobile1: {
					name: 'Mobile',
					styles: { width: '320px', height: '568px' },
					type: 'mobile'
				},
				tablet1: {
					name: 'Tablet',
					styles: { width: '768px', height: '1024px' },
					type: 'tablet'
				}
			}
		}),
		...defineDocsParam({
			source: {
				code: dedent`defineViewportParam({
					defaultViewport: 'mobile1',
					viewports: {
						mobile1: {
							name: 'Mobile',
							styles: { width: '320px', height: '568px' },
							type: 'mobile'
						},
						tablet1: {
							name: 'Tablet',
							styles: { width: '768px', height: '1024px' },
							type: 'tablet'
						}
					}
				})`
			}
		})
	}
}

/**
 * Example showing how to set a default viewport orientation
 */
export const DefaultOrientation: Story = {
	parameters: {
		...defineViewportParam({
			defaultOrientation: 'landscape'
		}),
		...defineDocsParam({
			source: {
				code: dedent`defineViewportParam({
					defaultOrientation: 'landscape'
				})`
			}
		})
	}
}

/**
 * Example showing how to disable the viewport addon for a specific story
 */
export const DisabledViewport: Story = {
	parameters: {
		...defineViewportParam({
			disable: true
		}),
		...defineDocsParam({
			source: {
				code: dedent`defineViewportParam({
					disable: true
				})`
			}
		})
	}
}

/**
 * Example showing how to set a specific default viewport
 */
export const SpecificViewport: Story = {
	parameters: {
		...defineViewportParam({
			defaultViewport: 'tablet1'
		}),
		...defineDocsParam({
			source: {
				code: dedent`defineViewportParam({
					defaultViewport: 'tablet1'
				})`
			}
		})
	}
}
