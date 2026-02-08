import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/deprecatedBadge',
	render: () => <></>
} satisfies Meta

export const DeprecatedBadge: StoryObj = {
	tags: ['deprecated'],
	render: () => (
		<div>
			<div>Components or props that should be avoided in new code</div>
			<code>tags: ['deprecated']</code>
		</div>
	)
}
