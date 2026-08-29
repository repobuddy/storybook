import dedent from 'dedent'
import { showSource, withStoryCard } from '#repobuddy/storybook'
import preview from '../../.storybook/preview'

const meta = preview.meta({
	title: 'storybook-addon-tag-badges/editorBadge',
	tags: ['var', '!snapshot', 'version:0.6'],
	render: () => <></>
})

export const EditorBadge = meta.story({
	tags: ['editor'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Story with live editor. In the sidebar it appears as <code>✏️</code>.
				</p>
			)
		}),
		showSource({
			source: dedent`export const YourStory = {
				tags: ['editor'],
				render: () => <YourComponent />
			}`
		})
	]
})
