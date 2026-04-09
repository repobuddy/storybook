import dedent from 'dedent'
import { showSource, withStoryCard } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/bugBadge',
	tags: ['var', '!snapshot', 'version:2.28'],
	render: () => <></>
} satisfies Meta

export const BugBadge: StoryObj = {
	tags: ['bug'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Stories that document or reproduce a known bug until it is fixed. In the sidebar it appears as <code>🐛</code>
				</p>
			)
		}),
		showSource({
			source: dedent`export const YourStory = {
				tags: ['bug'],
				render: () => <YourComponent />
			}`
		})
	]
}
