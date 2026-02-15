import dedent from 'dedent'
import { showDocSource, withStoryCard } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/betaBadge',
	tags: ['var', 'version:2.19'],
	render: () => <></>
} satisfies Meta

export const BetaBadge: StoryObj = {
	tags: ['beta'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Warn that a component or prop is not stable yet. In the sidebar it appears as <code>🟡</code>.
				</p>
			)
		}),
		showDocSource({
			source: dedent`export const YourStory = {
				tags: ['beta'],
				render: () => <YourComponent />
			}`
		})
	]
}
