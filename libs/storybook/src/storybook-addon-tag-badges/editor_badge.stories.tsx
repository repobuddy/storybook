import dedent from 'dedent'
import { showDocSource, withStoryCard } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/editorBadge',
	tags: ['var', 'version:0.6'],
	render: () => <></>
} satisfies Meta

export const EditorBadge: StoryObj = {
	tags: ['editor'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Story with live editor. In the sidebar it appears as <code>✏️</code>.
				</p>
			)
		}),
		showDocSource({
			source: dedent`export const YourStory = {
				tags: ['editor'],
				render: () => <YourComponent />
			}`
		})
	]
}
