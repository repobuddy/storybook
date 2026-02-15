import dedent from 'dedent'
import { showDocSource, withStoryCard } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/outdatedBadge',
	tags: ['var', 'version:0.11'],
	render: () => <></>
} satisfies Meta

export const OutdatedBadge: StoryObj = {
	tags: ['outdated'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Components with design changes that weren't yet implemented, which can incur extra development costs to your
					users. In the sidebar it appears as <code>⚠️</code>.
				</p>
			)
		}),
		showDocSource({
			source: dedent`export const YourStory = {
				tags: ['outdated'],
				render: () => <YourComponent />
			}`
		})
	]
}
