import dedent from 'dedent'
import { showSource, withStoryCard } from '#repobuddy/storybook'
import preview from '../../.storybook/preview'

const meta = preview.meta({
	title: 'storybook-addon-tag-badges/propsBadge',
	tags: ['var', '!snapshot', 'version:0.11'],
	render: () => <></>
})

export const PropsBadge = meta.story({
	tags: ['props'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Story focused on props or configuration. In the sidebar it appears as <code>🔧</code>.
				</p>
			)
		}),
		showSource({
			source: dedent`export const YourStory = {
				tags: ['props'],
				render: () => <YourComponent />
			}`
		})
	]
})
