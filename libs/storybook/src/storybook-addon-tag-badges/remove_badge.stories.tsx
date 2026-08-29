import dedent from 'dedent'
import { showSource, withStoryCard } from '#repobuddy/storybook'
import preview from '../../.storybook/preview'

const meta = preview.meta({
	title: 'storybook-addon-tag-badges/removeBadge',
	tags: ['var', '!snapshot', 'version:2.19'],
	render: () => <></>
})

export const RemoveInVersion = meta.story({
	tags: ['remove:2'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Feature or component scheduled for removal in version 2.0.0. In the sidebar it appears as <code>☠️v2</code>.
				</p>
			)
		}),
		showSource({
			source: dedent`export const YourStory = {
				tags: ['remove:2'],
				render: () => <YourComponent />
			}`
		})
	]
})

/** Same badge as RemoveInNext; `remove` and `remove:next` are equivalent. */
export const RemovePlain = meta.story({
	tags: ['remove'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Feature or component scheduled for removal in the next release. In the sidebar it appears as <code>☠️</code>.
				</p>
			)
		}),
		showSource({
			source: dedent`export const YourStory = {
				tags: ['remove'],
				render: () => <YourComponent />
			}`
		})
	]
})

/** Same badge as RemovePlain; `remove` and `remove:next` are equivalent. */
export const RemoveInNext = meta.story({
	tags: ['remove:next'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Feature or component scheduled for removal in the next release. In the sidebar it appears as <code>☠️</code>.
				</p>
			)
		}),
		showSource({
			source: dedent`export const YourStory = {
				tags: ['remove:next'],
				render: () => <YourComponent />
			}`
		})
	]
})
