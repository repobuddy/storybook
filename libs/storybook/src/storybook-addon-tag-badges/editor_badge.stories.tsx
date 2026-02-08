import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/editorBadge',
	render: () => <></>
} satisfies Meta

export const EditorBadge: StoryObj = {
	tags: ['editor'],
	render: () => (
		<div>
			<div>Story with live editor</div>
			<code>tags: ['editor']</code>
		</div>
	)
}
