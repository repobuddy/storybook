import dedent from 'dedent'
import { defineDocsParam, withStoryCard } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/typeBadge',
	tags: ['var', 'version:2.15'],
	render: () => <></>
} satisfies Meta

export const TypeBadge: StoryObj = {
	tags: ['type'],
	parameters: defineDocsParam({
		source: {
			code: dedent`
			// Use this badge for stories that showcase or document TypeScript types
			export const YourStory = {
				tags: ['type'],
				render: () => <YourComponent />
			}
			`
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<div>
					<div>Story that showcases or documents TypeScript types</div>
					<code>tags: ['type']</code>
				</div>
			)
		})
	]
}

export const DummyStory: StoryObj = {
	tags: ['unit'],
	render: () => <div>Dummy story to force badge to show in story and not hoisted up</div>
}
