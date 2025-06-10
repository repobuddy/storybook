import type { Meta, StoryObj } from '#repobuddy/storybook/internal'
import dedent from 'dedent'
import React from 'react'
import { fn } from 'storybook/test'
import { defineActionsParam, defineDocsParam, showDocSource } from '../index.js'

const meta: Meta = {
	title: 'Parameters/defineActionsParam',
	tags: ['new', 'version:1.0', 'code-only'],
	decorators: [showDocSource()],
	args: {
		onClick: fn()
	},
	render: () => <></>
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Basic example showing how to configure actions parameters with `argTypesRegex`
 * to automatically match event handler props.
 */
export const WithArgTypesRegex: Story = {
	parameters: {
		...defineActionsParam({
			argTypesRegex: '^on[A-Z].*'
		}),
		...defineDocsParam({
			source: {
				code: dedent`defineActionsParam({
					argTypesRegex: '^on[A-Z].*'
				})`
			}
		})
	}
}

/**
 * Example showing how to disable actions for a story
 */
export const DisabledActions: Story = {
	parameters: {
		...defineActionsParam({
			disable: true
		}),
		...defineDocsParam({
			source: {
				code: dedent`defineActionsParam({
					disable: true
				})`
			}
		})
	}
}

/**
 * Example showing how to explicitly specify action handlers
 */
export const ExplicitHandles: Story = {
	parameters: {
		...defineActionsParam({
			handles: ['onClick', 'onMouseOver', 'onSubmit']
		}),
		...defineDocsParam({
			source: {
				code: dedent`defineActionsParam({
					handles: ['onClick', 'onMouseOver', 'onSubmit']
				})`
			}
		})
	}
}

/**
 * Example showing combined configuration options
 */
export const CombinedConfig: Story = {
	parameters: {
		...defineActionsParam({
			argTypesRegex: '^on[A-Z].*',
			handles: ['customEvent', 'anotherEvent'],
			disable: false
		}),
		...defineDocsParam({
			source: {
				code: dedent`defineActionsParam({
				argTypesRegex: '^on[A-Z].*',
				handles: ['customEvent', 'anotherEvent'],
				disable: false
			})`
			}
		})
	}
}
