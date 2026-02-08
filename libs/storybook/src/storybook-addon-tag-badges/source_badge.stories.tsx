import dedent from 'dedent'
import { defineDocsParam, showDocSource, withStoryCard } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/sourceBadge',
	tags: ['version:2.13'],
	render: () => <></>
} satisfies Meta

export const SourceBadge: StoryObj = {
	tags: ['source'],
	parameters: defineDocsParam({
		source: {
			code: dedent`
			// Use this badge to indicate stories that show source code in the docs
			export const YourStory = {
				tags: ['source'],
				decorators: [showDocSource()],
				render: () => <YourComponent />
			}
			`
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<div>
					<div>Story with source code visible in docs</div>
					<code>tags: ['source']</code>
				</div>
			)
		}),
		showDocSource()
	]
}

export const DummyStory: StoryObj = {
	tags: ['unit'],
	render: () => <div>Dummy story to force badge to show in story and not hoisted up</div>
}
