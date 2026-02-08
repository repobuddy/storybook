import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/keyboardBadge',
	render: () => <></>
} satisfies Meta

export const KeyboardBadge: StoryObj = {
	tags: ['keyboard'],
	render: () => (
		<div>
			<div>Story with keyboard interactions</div>
			<code>tags: ['keyboard']</code>
		</div>
	)
}
