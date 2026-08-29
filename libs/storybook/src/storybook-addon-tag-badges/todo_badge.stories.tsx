import dedent from 'dedent'
import { showSource, withStoryCard } from '#repobuddy/storybook'
import preview from '../../.storybook/preview'

const meta = preview.meta({
	title: 'storybook-addon-tag-badges/todoBadge',
	tags: ['var', '!snapshot', 'version:0.11'],
	render: () => <></>
})

export const TodoBadge = meta.story({
	name: 'To-Do Badge',
	tags: ['todo'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Story marked as todo or incomplete. In the sidebar it appears as <code>📋</code>.
				</p>
			)
		}),
		showSource({
			source: dedent`export const YourStory = {
				tags: ['todo'],
				render: () => <YourComponent />
			}`
		})
	]
})
