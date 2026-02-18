import dedent from 'dedent'
import { showDocSource, withStoryCard } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/dangerBadge',
	tags: ['var', 'version:0.11'],
	render: () => <></>
} satisfies Meta

export const DangerousBadge: StoryObj = {
	tags: ['danger'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Components that require particular attention when configuring them (e.g. for security concerns). In the
					sidebar it appears as <code>🚨</code>.
				</p>
			)
		}),
		showDocSource({
			source: dedent`export const YourStory = {
				tags: ['danger'],
				render: () => <YourComponent />
			}`
		})
	]
}
