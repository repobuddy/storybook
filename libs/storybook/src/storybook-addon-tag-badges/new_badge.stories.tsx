import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/newBadge',
	tags: ['var', 'version:0.11'],
	render: () => <></>
} satisfies Meta

export const NewBadge: StoryObj = {
	tags: ['new'],
	render: () => (
		<div>
			<div>Recently added components or props/features</div>
			<code>tags: ['new']</code>
		</div>
	)
}
