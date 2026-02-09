import type { Meta, StoryObj } from '@storybook/react-vite'
import { defineLayoutParam } from '#repobuddy/storybook'

export default {
	title: 'parameters/defineLayoutParam',
	tags: ['func', 'new', 'version:1.0']
} satisfies Meta

export const Padded: StoryObj = {
	parameters: defineLayoutParam('padded'),
	render: () => <div>Story with padded layout</div>
}

export const Fullscreen: StoryObj = {
	parameters: defineLayoutParam('fullscreen'),
	render: () => <div>Story with fullscreen layout</div>
}

export const Centered: StoryObj = {
	parameters: defineLayoutParam('centered'),
	render: () => <div>Story with centered layout</div>
}
