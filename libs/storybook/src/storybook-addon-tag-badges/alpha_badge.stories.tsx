import dedent from 'dedent'
import { showDocSource, withStoryCard } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/alphaBadge',
	tags: ['var', 'version:next'],
	render: () => <></>
} satisfies Meta

export const AlphaBadge: StoryObj = {
	tags: ['alpha'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Mark that a component or prop is in alpha (experimental). In the sidebar it appears as <code>🔴</code>.
				</p>
			)
		}),
		showDocSource({
			source: dedent`export const YourStory = {
				tags: ['alpha'],
				render: () => <YourComponent />
			}`
		})
	]
}
