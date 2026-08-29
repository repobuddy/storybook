import dedent from 'dedent'
import { showSource, withStoryCard } from '#repobuddy/storybook'
import preview from '../../.storybook/preview'

const meta = preview.meta({
	title: 'storybook-addon-tag-badges/playgroundBadge',
	tags: ['var', 'version:2.24'],
	render: () => <></>
})

export const PlaygroundBadge = meta.story({
	tags: ['playground'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					High-quality interactive playground story for users to explore and interact with the component. In the sidebar
					it appears as <code>▶️</code>.
				</p>
			)
		}),
		showSource({
			source: dedent`export const Playground: Story = {
				tags: ['playground'],
				render: () => <YourComponentWithControls />
			}`
		})
	]
})
