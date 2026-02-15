import dedent from 'dedent'
import { showDocSource, withStoryCard } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/integrationBadge',
	tags: ['var', 'version:0.9'],
	render: () => <></>
} satisfies Meta

export const IntegrationTestBadge: StoryObj = {
	tags: ['integration'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Integration test story. This badge is hidden in the sidebar; it appears as <code>🔗</code> when displayed
					elsewhere.
				</p>
			)
		}),
		showDocSource({
			source: dedent`export const YourStory = {
				tags: ['integration'],
				render: () => <YourComponent />
			}`
		})
	]
}
