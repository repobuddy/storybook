import dedent from 'dedent'
import { showSource, withStoryCard } from '#repobuddy/storybook'
import preview from '../../.storybook/preview'

const meta = preview.meta({
	title: 'storybook-addon-tag-badges/integrationBadge',
	tags: ['var', '!snapshot', 'version:0.9'],
	render: () => <></>
})

export const IntegrationTestBadge = meta.story({
	tags: ['integration'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Integration test story. This badge is hidden in the sidebar; it appears as <code>🔗</code> when displayed
					elsewhere.
				</p>
			)
		}),
		showSource({
			source: dedent`export const YourStory = {
				tags: ['integration'],
				render: () => <YourComponent />
			}`
		})
	]
})
