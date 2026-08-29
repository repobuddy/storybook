import dedent from 'dedent'
import { showSource, withStoryCard } from '#repobuddy/storybook'
import preview from '../../.storybook/preview'

const meta = preview.meta({
	title: 'storybook-addon-tag-badges/unitBadge',
	tags: ['var', '!snapshot', 'version:0.11'],
	render: () => <></>
})

export const UnitTestBadge = meta.story({
	tags: ['unit'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Unit test story. In the sidebar it appears as <code>🧪</code>.
				</p>
			)
		}),
		showSource({
			source: dedent`export const YourStory = {
				tags: ['unit'],
				render: () => <YourComponent />
			}`
		})
	]
})
