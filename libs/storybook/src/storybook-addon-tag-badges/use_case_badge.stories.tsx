import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/useCaseBadge',
	tags: ['var', 'version:2.18'],
	render: () => <></>
} satisfies Meta

export const UseCaseBadge: StoryObj = {
	tags: ['use-case'],
	render: () => (
		<div>
			<div>Story demonstrating a specific use case</div>
			<code>tags: ['use-case']</code>
		</div>
	)
}
