import dedent from 'dedent'
import { showDocSource, waitForDocSourceContent, withStoryCard } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/codeOnlyBadge',
	tags: ['var', 'version:0.11'],
	render: () => <></>,
	play: waitForDocSourceContent
} satisfies Meta

export const CodeOnlyBadge: StoryObj = {
	tags: ['code-only'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Components that only exist in code, and not in design. In the sidebar it appears as <code>📝</code>.
				</p>
			)
		}),
		showDocSource({
			source: dedent`export const YourStory = {
				tags: ['code-only'],
				render: () => <YourComponent />
			}`
		})
	]
}
