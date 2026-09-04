import dedent from 'dedent'
import { showSource, withStoryCard } from '#repobuddy/storybook'
import preview from '../../.storybook/preview'

const meta = preview.meta({
	title: 'storybook-addon-tag-badges/exploreBadge',
	tags: ['var', '!snapshot', 'version:2.33'],
	render: () => <></>
})

export const ExploreBadge = meta.story({
	tags: ['explore'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Mark a story as a guide for exploring component behavior and configurations. In the sidebar it appears as{' '}
					<code>🔭</code>.
				</p>
			)
		}),
		showSource({
			source: dedent`export const YourStory = {
				tags: ['explore'],
				render: () => <YourComponent />
			}`
		})
	]
})
