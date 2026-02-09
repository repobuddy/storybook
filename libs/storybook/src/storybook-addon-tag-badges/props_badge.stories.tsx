import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/propsBadge',
	tags: ['var', 'version:0.11'],
	render: () => <></>
} satisfies Meta

export const PropsBadge: StoryObj = {
	tags: ['props'],
	render: () => (
		<div>
			<div>Story focused on props</div>
			<code>tags: ['props']</code>
		</div>
	)
}
