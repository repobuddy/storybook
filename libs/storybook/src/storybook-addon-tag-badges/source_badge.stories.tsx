import dedent from 'dedent'
import { showDocSource, withStoryCard } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/sourceBadge',
	tags: ['var', 'version:2.13'],
	render: () => <></>
} satisfies Meta

export const SourceBadge: StoryObj = {
	tags: ['source'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Story that shows the source code. In the sidebar it appears as <code>{'</>'}</code>.
				</p>
			)
		}),
		showDocSource({
			source: dedent`export const YourStory = {
				tags: ['source'],
				decorators: [showDocSource()],
				render: () => <YourComponent />
			}`
		})
	]
}

export const DummyStory: StoryObj = {
	tags: ['unit'],
	render: () => <div>Dummy story to force badge to show in story and not hoisted up</div>
}
