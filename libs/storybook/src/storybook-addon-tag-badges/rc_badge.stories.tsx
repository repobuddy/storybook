import dedent from 'dedent'
import { showDocSource, waitForDocSourceContent, withStoryCard } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/rcBadge',
	tags: ['var', 'version:2.19'],
	render: () => <></>,
	play: waitForDocSourceContent
} satisfies Meta

export const RcBadge: StoryObj = {
	tags: ['rc'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Mark that a component or prop is a release candidate. In the sidebar it appears as <code>🔵</code>.
				</p>
			)
		}),
		showDocSource({
			source: dedent`export const YourStory = {
				tags: ['rc'],
				render: () => <YourComponent />
			}`
		})
	]
}
