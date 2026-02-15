import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/exampleBadge',
	tags: ['var', 'version:2.18'],
	render: () => <></>
} satisfies Meta

export const ExampleBadge: StoryObj = {
	tags: ['example'],
	render: () => (
		<div>
			<div>Story demonstrating the example badge</div>
			<code>tags: ['example']</code>
		</div>
	)
}
