import dedent from 'dedent'
import { showSource, withStoryCard } from '#repobuddy/storybook'
import preview from '../../.storybook/preview'

const meta = preview.meta({
	title: 'storybook-addon-tag-badges/newBadge',
	tags: ['var', '!snapshot', 'version:0.11'],
	render: () => <></>
})

export const NewBadge = meta.story({
	tags: ['new'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Recently added components or props/features. In the sidebar it appears as <code>🆕</code>.
				</p>
			)
		}),
		showSource({
			source: dedent`export const YourStory = {
				tags: ['new'],
				render: () => <YourComponent />
			}`
		})
	]
})
