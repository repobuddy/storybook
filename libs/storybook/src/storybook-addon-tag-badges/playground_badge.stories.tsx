import dedent from 'dedent'
import { showSource, withStoryCard } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/playgroundBadge',
	tags: ['var', '!snapshot', 'version:next'],
	render: () => <></>
} satisfies Meta

export const PlaygroundBadge: StoryObj = {
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
}
