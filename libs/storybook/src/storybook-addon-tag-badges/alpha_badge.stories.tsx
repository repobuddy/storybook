import dedent from 'dedent'
import { showSource, withStoryCard } from '#repobuddy/storybook'
import preview from '../../.storybook/preview'

const meta = preview.meta({
	title: 'storybook-addon-tag-badges/alphaBadge',
	tags: ['var', '!snapshot', 'version:2.19'],
	render: () => <></>
})

export const AlphaBadge = meta.story({
	tags: ['alpha'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Mark that a component or prop is in alpha (experimental). In the sidebar it appears as <code>🔴</code>.
				</p>
			)
		}),
		showSource({
			source: dedent`export const YourStory = {
				tags: ['alpha'],
				render: () => <YourComponent />
			}`
		})
	]
})
