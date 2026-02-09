import dedent from 'dedent'
import { defineDocsParam, withStoryCard } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/functionBadge',
	tags: ['var', 'version:2.16'],
	render: () => <></>
} satisfies Meta

export const FunctionBadge: StoryObj = {
	parameters: defineDocsParam({
		source: {
			code: dedent`
			// Use this badge for stories that showcase or document functions
			export const YourStory = {
				tags: ['func'],
				render: () => <YourComponent />
			}
			`
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<div>
					<div>Story that showcases or documents functions</div>
					<code>tags: ['func']</code>
				</div>
			)
		})
	]
}

export const DummyStory: StoryObj = {
	tags: ['unit'],
	render: () => <div>Dummy story to force badge to show in story and not hoisted up</div>
}
