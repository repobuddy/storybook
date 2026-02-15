import dedent from 'dedent'
import { showDocSource, withStoryCard } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/docBadge',
	tags: ['var', 'version:next'],
	render: () => <></>
} satisfies Meta

export const DocBadge: StoryObj = {
	tags: ['docs'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Stories that are primarily documentation. In the sidebar it appears as <code>📖</code>.
				</p>
			)
		}),
		showDocSource({
			source: dedent`export const YourStory = {
				tags: ['docs'],
				render: () => <YourComponent />
			}`
		})
	]
}
