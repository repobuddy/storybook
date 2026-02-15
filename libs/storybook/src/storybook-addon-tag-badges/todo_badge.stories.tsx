import dedent from 'dedent'
import { showDocSource, withStoryCard } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/todoBadge',
	tags: ['var', 'version:0.11'],
	render: () => <></>
} satisfies Meta

export const TodoBadge: StoryObj = {
	name: 'To-Do Badge',
	tags: ['todo'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Story marked as todo or incomplete. In the sidebar it appears as <code>📋</code>.
				</p>
			)
		}),
		showDocSource({
			source: dedent`export const YourStory = {
				tags: ['todo'],
				render: () => <YourComponent />
			}`
		})
	]
}
