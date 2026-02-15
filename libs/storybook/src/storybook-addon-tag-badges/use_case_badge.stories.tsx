import dedent from 'dedent'
import { showDocSource, withStoryCard } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/useCaseBadge',
	tags: ['var', 'version:2.18'],
	render: () => <></>
} satisfies Meta

export const UseCaseBadge: StoryObj = {
	tags: ['use-case'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Story demonstrating a specific use case or scenario. In the sidebar it appears as <code>🎯</code>.
				</p>
			)
		}),
		showDocSource({
			source: dedent`export const YourStory = {
				tags: ['use-case'],
				render: () => <YourComponent />
			}`
		})
	]
}
