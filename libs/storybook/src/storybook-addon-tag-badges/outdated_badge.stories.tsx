import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/outdatedBadge',
	tags: ['var', 'version:0.11'],
	render: () => <></>
} satisfies Meta

export const OutdatedBadge: StoryObj = {
	tags: ['outdated'],
	render: () => (
		<div>
			<div>
				Components with design changes that weren't yet implemented, which can incur extra development costs to your
				users
			</div>
			<code>tags: ['outdated']</code>
		</div>
	)
}
