import type { Meta, StoryObj } from '@storybook/react'
import { defineParameters } from './define_parameters.ts'

export default {
	title: 'parameters/defineParameters',
	tags: ['new']
} satisfies Meta

export const WithLayout: StoryObj = {
	parameters: defineParameters({
		layout: 'centered'
	}),
	render: () => (
		<div>
			Story with centered layout using <code>defineParameters</code>
		</div>
	)
}

export const WithOtherParams: StoryObj = {
	parameters: defineParameters({
		layout: 'padded',
		something: {
			blah: 'beer'
		}
	}),
	render: () => <div>Story with other parameters not defined in the type</div>
}
