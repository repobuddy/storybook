import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/snapshotBadge',
	render: () => <></>
} satisfies Meta

export const SnapshotBadge: StoryObj = {
	tags: ['snapshot', '!test'],
	render: () => (
		<div>
			<div>Story with snapshot</div>
			<code>tags: ['snapshot']</code>
		</div>
	)
}
