import dedent from 'dedent'
import { showSource, withStoryCard } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/unitBadge',
	tags: ['var', '!snapshot', 'version:0.11'],
	render: () => <></>
} satisfies Meta

export const UnitTestBadge: StoryObj = {
	tags: ['unit'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Unit test story. In the sidebar it appears as <code>🧪</code>.
				</p>
			)
		}),
		showSource({
			source: dedent`export const YourStory = {
				tags: ['unit'],
				render: () => <YourComponent />
			}`
		})
	]
}
