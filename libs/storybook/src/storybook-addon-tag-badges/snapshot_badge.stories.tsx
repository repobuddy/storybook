import dedent from 'dedent'
import { showSource, withStoryCard } from '#repobuddy/storybook'
import preview from '../../.storybook/preview'

const meta = preview.meta({
	title: 'storybook-addon-tag-badges/snapshotBadge',
	tags: ['var', '!test', '!snapshot', 'version:0.7'],
	render: () => <></>
})

export const SnapshotBadge = meta.story({
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
})
