import dedent from 'dedent'
import { showDocSource, withStoryCard } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/removeBadge',
	tags: ['var', 'version:next'],
	render: () => <></>
} satisfies Meta

export const RemoveInVersion: StoryObj = {
	tags: ['remove:2'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Feature or component scheduled for removal in version 2.0.0. In the sidebar it appears as <code>☠️v2</code>.
				</p>
			)
		}),
		showDocSource({
			source: dedent`export const YourStory = {
				tags: ['remove:2'],
				render: () => <YourComponent />
			}`
		})
	]
}

/** Same badge as RemoveInNext; `remove` and `remove:next` are equivalent. */
export const RemovePlain: StoryObj = {
	tags: ['remove'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Feature or component scheduled for removal in the next release. In the sidebar it appears as <code>☠️</code>.
				</p>
			)
		}),
		showDocSource({
			source: dedent`export const YourStory = {
				tags: ['remove'],
				render: () => <YourComponent />
			}`
		})
	]
}

/** Same badge as RemovePlain; `remove` and `remove:next` are equivalent. */
export const RemoveInNext: StoryObj = {
	tags: ['remove:next'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Feature or component scheduled for removal in the next release. In the sidebar it appears as <code>☠️</code>.
				</p>
			)
		}),
		showDocSource({
			source: dedent`export const YourStory = {
				tags: ['remove:next'],
				render: () => <YourComponent />
			}`
		})
	]
}
