import dedent from 'dedent'
import { showSource, withStoryCard } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/a11yBadge',
	tags: ['var', 'version:2.26'],
	render: () => <></>
} satisfies Meta

export const A11yBadge: StoryObj = {
	tags: ['a11y'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Story that demonstrates or tests accessibility. In the sidebar it appears as <code>♿</code>.
				</p>
			)
		}),
		showSource({
			source: dedent`export const YourStory = {
				tags: ['a11y'],
				render: () => <YourComponent />
			}`
		})
	]
}
