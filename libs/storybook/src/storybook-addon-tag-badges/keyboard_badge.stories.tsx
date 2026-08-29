import dedent from 'dedent'
import { showSource, withStoryCard } from '#repobuddy/storybook'
import preview from '../../.storybook/preview'

const meta = preview.meta({
	title: 'storybook-addon-tag-badges/keyboardBadge',
	tags: ['var', '!snapshot', 'version:0.15'],
	render: () => <></>
})

export const KeyboardBadge = meta.story({
	tags: ['keyboard'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Story with keyboard interactions. In the sidebar it appears as <code>⌨️</code>.
				</p>
			)
		}),
		showSource({
			source: dedent`export const YourStory = {
				tags: ['keyboard'],
				render: () => <YourComponent />
			}`
		})
	]
})
