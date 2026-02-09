import dedent from 'dedent'
import { defineDocsParam, withStoryCard } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/varBadge',
	tags: ['var', 'version:next'],
	render: () => <></>
} satisfies Meta

export const VarBadge: StoryObj = {
	parameters: defineDocsParam({
		source: {
			code: dedent`
			// Use this badge for stories that describe values and variables
			export default {
				tags: ['var'],
				// ...
			} satisfies Meta

			export const YourStory = {
				render: () => <YourComponent />
			}
			`
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<div>
					<div>Story that describes values and variables</div>
					<code>tags: ['var']</code>
				</div>
			)
		})
	]
}

export const DummyStory: StoryObj = {
	tags: ['unit'],
	render: () => <div>Dummy story to force badge to show in story and not hoisted up</div>
}
