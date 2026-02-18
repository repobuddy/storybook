import dedent from 'dedent'
import { showDocSource, withStoryCard } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/newBadge',
	tags: ['var', 'version:0.11'],
	render: () => <></>
} satisfies Meta

export const NewBadge: StoryObj = {
	tags: ['new'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Recently added components or props/features. In the sidebar it appears as <code>🆕</code>.
				</p>
			)
		}),
		showDocSource({
			source: dedent`export const YourStory = {
				tags: ['new'],
				render: () => <YourComponent />
			}`
		})
	]
}
