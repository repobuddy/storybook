// These stories document the legacy parameter shapes accepted by the `define*Param` helpers.
// CSF factories type `parameters` strictly against Storybook 10's own parameter types, so each
// `parameters` object is widened with `as Parameters`.
import type { Parameters } from '@storybook/react-vite'
import dedent from 'dedent'
import { defineDocsParam, defineViewportParam, showSource } from '#repobuddy/storybook'
import preview from '../../.storybook/preview'

const meta = preview.meta({
	title: 'Parameters/defineViewportParam',
	tags: ['autodocs', '!snapshot', 'func', 'new', 'version:1.0'],
	decorators: [showSource()],
	render: () => <></>
})

/**
 * Basic example showing how to configure viewport parameters with custom viewports
 */
export const CustomViewports = meta.story({
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
	} as Parameters
})

/**
 * Example showing how to set a default viewport orientation
 */
export const DefaultOrientation = meta.story({
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
	} as Parameters
})

/**
 * Example showing how to disable the viewport addon for a specific story
 */
export const DisabledViewport = meta.story({
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
	} as Parameters
})

/**
 * Example showing how to set a specific default viewport
 */
export const SpecificViewport = meta.story({
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
	} as Parameters
})
