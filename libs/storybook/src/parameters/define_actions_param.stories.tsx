import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { type ActionsParam, defineActionsParam, defineParameters } from '../index.ts'

const meta: Meta = {
	title: 'Parameters/defineActionsParam',
	tags: ['new', 'version:1.0.0'],
	parameters: defineActionsParam({
		argTypesRegex: '^on[A-Z].*'
	}),
	args: {
		onClick: fn()
	},
	render: () => <div>Hello</div>
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Basic example showing how to configure actions parameters with `argTypesRegex`
 * to automatically match event handler props.
 */
export const WithArgTypesRegex: Story = {}

/**
 * Example showing how to disable actions for a story
 */
export const DisabledActions: Story = {
	parameters: defineActionsParam({
		disable: true
	})
}

/**
 * Example showing how to explicitly specify action handlers
 */
export const ExplicitHandles: Story = {
	parameters: defineActionsParam({
		handles: ['onClick', 'onMouseOver', 'onSubmit']
	})
}

/**
 * Example showing combined configuration options
 */
export const CombinedConfig: Story = {
	parameters: defineActionsParam({
		argTypesRegex: '^on[A-Z].*',
		handles: ['customEvent', 'anotherEvent'],
		disable: false
	})
}

export const WithDefineParameters: Story = {
	parameters: defineParameters<ActionsParam>({
		actions: {
			argTypesRegex: '^on[A-Z].*'
		}
	})
}
