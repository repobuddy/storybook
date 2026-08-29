import dedent from 'dedent'
import { showSource, withStoryCard } from '#repobuddy/storybook'
import preview from '../../.storybook/preview'

const meta = preview.meta({
	title: 'storybook-addon-tag-badges/exampleBadge',
	tags: ['var', '!snapshot', 'version:2.18'],
	render: () => <></>
})

export const ExampleBadge = meta.story({
	tags: ['example'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Example or demo story. In the sidebar it appears as <code>✨</code>.
				</p>
			)
		}),
		showSource({
			source: dedent`export const YourStory = {
				tags: ['example'],
				render: () => <YourComponent />
			}`
		})
	]
})
