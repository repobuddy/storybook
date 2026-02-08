import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/codeOnlyBadge',
	render: () => <></>
} satisfies Meta

export const CodeOnlyBadge: StoryObj = {
	tags: ['code-only'],
	render: () => (
		<div>
			<div>Components that only exist in code, and not in design</div>
			<code>tags: ['code-only']</code>
		</div>
	)
}
