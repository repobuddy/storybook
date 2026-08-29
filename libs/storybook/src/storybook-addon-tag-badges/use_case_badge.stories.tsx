import dedent from 'dedent'
import { showSource, withStoryCard } from '#repobuddy/storybook'
import preview from '../../.storybook/preview'

const meta = preview.meta({
	title: 'storybook-addon-tag-badges/useCaseBadge',
	tags: ['var', '!snapshot', 'version:2.18'],
	render: () => <></>
})

export const UseCaseBadge = meta.story({
	tags: ['use-case'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Story demonstrating a specific use case or scenario. In the sidebar it appears as <code>🎯</code>.
				</p>
			)
		}),
		showSource({
			source: dedent`export const YourStory = {
				tags: ['use-case'],
				render: () => <YourComponent />
			}`
		})
	]
})
