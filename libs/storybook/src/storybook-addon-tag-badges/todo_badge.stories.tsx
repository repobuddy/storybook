import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/todoBadge',
	render: () => <></>
} satisfies Meta

export const TodoBadge: StoryObj = {
	tags: ['todo'],
	render: () => (
		<div>
			<div>Todo story</div>
			<code>tags: ['todo']</code>
		</div>
	)
}
