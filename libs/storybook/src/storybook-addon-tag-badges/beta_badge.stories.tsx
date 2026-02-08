import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/betaBadge',
	render: () => <></>
} satisfies Meta

export const BetaBadge: StoryObj = {
	tags: ['beta'],
	render: () => (
		<div>
			<div>Warn that a component or prop is not stable yet</div>
			<code>tags: ['beta']</code>
		</div>
	)
}
