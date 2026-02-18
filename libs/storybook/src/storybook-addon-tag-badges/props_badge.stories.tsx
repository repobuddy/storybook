import dedent from 'dedent'
import { showDocSource, waitForDocSourceContent, withStoryCard } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/propsBadge',
	tags: ['var', 'version:0.11'],
	render: () => <></>,
	play: waitForDocSourceContent
} satisfies Meta

export const PropsBadge: StoryObj = {
	tags: ['props'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Story focused on props or configuration. In the sidebar it appears as <code>🔧</code>.
				</p>
			)
		}),
		showDocSource({
			source: dedent`export const YourStory = {
				tags: ['props'],
				render: () => <YourComponent />
			}`
		})
	]
}
