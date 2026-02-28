import dedent from 'dedent'
import { showSource, withStoryCard } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/specBadge',
	tags: ['var', '!snapshot', 'version:next'],
	render: () => <></>
} satisfies Meta

export const SpecBadge: StoryObj = {
	tags: ['spec'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Story that serves as the specification of the component or code. In the sidebar it appears as <code>📜</code>.
				</p>
			)
		}),
		showSource({
			source: dedent`export const YourStory = {
				tags: ['spec'],
				render: () => <YourComponent />
			}`
		})
	]
}
