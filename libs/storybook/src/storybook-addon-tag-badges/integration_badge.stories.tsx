import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/integrationBadge',
	render: () => <></>
} satisfies Meta

export const IntegrationTestBadge: StoryObj = {
	tags: ['integration'],
	render: () => (
		<div>
			<div>Integration test story</div>
			<code>tags: ['integration']</code>
		</div>
	)
}
