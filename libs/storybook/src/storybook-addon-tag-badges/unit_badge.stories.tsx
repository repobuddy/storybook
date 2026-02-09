import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/unitBadge',
	tags: ['var', 'version:0.11'],
	render: () => <></>
} satisfies Meta

export const UnitTestBadge: StoryObj = {
	tags: ['unit'],
	render: () => (
		<div>
			<div>Unit test story</div>
			<code>tags: ['unit']</code>
		</div>
	)
}
