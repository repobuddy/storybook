import dedent from 'dedent'
import { showDocSource, withStoryCard } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/internalBadge',
	tags: ['var', 'version:0.13'],
	render: () => <></>
} satisfies Meta

export const InternalBadge: StoryObj = {
	tags: ['internal'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Internal or private-use-only stories. Can be hidden from the sidebar in production. In the sidebar it appears
					as <code>🔒</code>.
				</p>
			)
		}),
		showDocSource({
			source: dedent`export const YourStory = {
				tags: ['internal'],
				render: () => <YourComponent />
			}`
		})
	]
}
