import dedent from 'dedent'
import { showSource, withStoryCard } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/classBadge',
	tags: ['var', '!snapshot', 'version:2.27'],
	render: () => <></>
} satisfies Meta

export const ClassBadge: StoryObj = {
	tags: ['class'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Story that showcases or documents classes. In the sidebar it appears as <code>🔷</code>.
				</p>
			)
		}),
		showSource({
			source: dedent`export const YourStory = {
				tags: ['class'],
				render: () => <YourComponent />
			}`
		})
	]
}

export const DummyStory: StoryObj = {
	tags: ['unit'],
	render: () => <div>Dummy story to force badge to show in story and not hoisted up</div>
}
