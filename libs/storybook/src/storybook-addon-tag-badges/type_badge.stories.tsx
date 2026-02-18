import dedent from 'dedent'
import { showDocSource, withStoryCard } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/typeBadge',
	tags: ['var', 'version:2.15'],
	render: () => <></>
} satisfies Meta

export const TypeBadge: StoryObj = {
	tags: ['type'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Story that showcases or documents TypeScript types. In the sidebar it appears as <code>{'<T>'}</code>.
				</p>
			)
		}),
		showDocSource({
			source: dedent`export const YourStory = {
				tags: ['type'],
				render: () => <YourComponent />
			}`
		})
	]
}

export const DummyStory: StoryObj = {
	tags: ['unit'],
	render: () => <div>Dummy story to force badge to show in story and not hoisted up</div>
}
