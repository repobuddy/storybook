import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/betaBadge',
	tags: ['var', 'version:0.11'],
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
