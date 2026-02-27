import dedent from 'dedent'
import { showSource, withStoryCard } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/exampleBadge',
	tags: ['var', '!snapshot', 'version:2.18'],
	render: () => <></>
} satisfies Meta

export const ExampleBadge: StoryObj = {
	tags: ['example'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Example or demo story. In the sidebar it appears as <code>✨</code>.
				</p>
			)
		}),
		showSource({
			source: dedent`export const YourStory = {
				tags: ['example'],
				render: () => <YourComponent />
			}`
		})
	]
}
