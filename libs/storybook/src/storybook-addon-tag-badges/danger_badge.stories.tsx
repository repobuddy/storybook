import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/dangerBadge',
	tags: ['var', 'version:0.11'],
	render: () => <></>
} satisfies Meta

export const DangerousBadge: StoryObj = {
	tags: ['danger'],
	render: () => (
		<div>
			<div>Components that require particular attention when configuring them (e.g. for with security concerns)</div>
			<code>tags: ['danger']</code>
		</div>
	)
}
