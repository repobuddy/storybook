import dedent from 'dedent'
import { showSource, withStoryCard } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/snapshotBadge',
	tags: ['var', '!test', '!snapshot', 'version:0.7'],
	render: () => <></>
} satisfies Meta

export const SnapshotBadge: StoryObj = {
	tags: ['snapshot'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Story with snapshot test. It appears as <code>📸</code> in the toolbar (not in the sidebar).
				</p>
			)
		}),
		showSource({
			source: dedent`export const YourStory = {
				tags: ['snapshot'],
				render: () => <YourComponent />
			}`
		})
	]
}
