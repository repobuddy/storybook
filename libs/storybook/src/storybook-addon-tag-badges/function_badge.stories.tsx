import dedent from 'dedent'
import { showDocSource, withStoryCard } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/functionBadge',
	tags: ['var', 'version:2.16'],
	render: () => <></>
} satisfies Meta

export const FunctionBadge: StoryObj = {
	tags: ['func'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Story that showcases or documents functions. In the sidebar it appears as <code>ƒ(x)</code>.
				</p>
			)
		}),
		showDocSource({
			source: dedent`export const YourStory = {
				tags: ['func'],
				render: () => <YourComponent />
			}`
		})
	]
}

export const DummyStory: StoryObj = {
	tags: ['unit'],
	render: () => <div>Dummy story to force badge to show in story and not hoisted up</div>
}
