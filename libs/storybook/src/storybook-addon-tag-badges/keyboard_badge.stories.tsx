import dedent from 'dedent'
import { showDocSource, waitForDocSourceContent, withStoryCard } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/keyboardBadge',
	tags: ['var', 'version:0.15'],
	render: () => <></>,
	play: waitForDocSourceContent
} satisfies Meta

export const KeyboardBadge: StoryObj = {
	tags: ['keyboard'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Story with keyboard interactions. In the sidebar it appears as <code>⌨️</code>.
				</p>
			)
		}),
		showDocSource({
			source: dedent`export const YourStory = {
				tags: ['keyboard'],
				render: () => <YourComponent />
			}`
		})
	]
}
