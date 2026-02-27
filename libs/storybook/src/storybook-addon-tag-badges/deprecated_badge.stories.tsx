import dedent from 'dedent'
import { showSource, withStoryCard } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/deprecatedBadge',
	tags: ['var', '!snapshot', 'version:0.11'],
	render: () => <></>
} satisfies Meta

export const DeprecatedBadge: StoryObj = {
	tags: ['deprecated'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Components or props that should be avoided in new code. In the sidebar it appears as <code>🗑️</code>.
				</p>
			)
		}),
		showSource({
			source: dedent`export const YourStory = {
				tags: ['deprecated'],
				render: () => <YourComponent />
			}`
		})
	]
}
