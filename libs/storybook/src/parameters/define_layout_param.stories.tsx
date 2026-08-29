import { defineLayoutParam } from '#repobuddy/storybook'
import preview from '../../.storybook/preview'

const meta = preview.meta({
	title: 'parameters/defineLayoutParam',
	tags: ['func', 'new', 'version:1.0']
})

export const Padded = meta.story({
	parameters: defineLayoutParam('padded'),
	render: () => <div>Story with padded layout</div>
})

export const Fullscreen = meta.story({
	parameters: defineLayoutParam('fullscreen'),
	render: () => <div>Story with fullscreen layout</div>
})

export const Centered = meta.story({
	parameters: defineLayoutParam('centered'),
	render: () => <div>Story with centered layout</div>
})
