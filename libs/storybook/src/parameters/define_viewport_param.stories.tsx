import type { Meta, StoryObj } from '@storybook/react-vite'
import dedent from 'dedent'
import { defineDocsParam, defineViewportParam, showDocSource } from '#repobuddy/storybook'

const meta = {
	title: 'Parameters/defineViewportParam',
	tags: ['autodocs', 'func', 'new', 'version:1.0'],
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
