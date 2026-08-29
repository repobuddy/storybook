import dedent from 'dedent'
import { showSource, withStoryCard } from '#repobuddy/storybook'
import preview from '../../.storybook/preview'

const meta = preview.meta({
	title: 'storybook-addon-tag-badges/typeBadge',
	tags: ['var', '!snapshot', 'version:2.15'],
	render: () => <></>
})

export const TypeBadge = meta.story({
	tags: ['type'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Story that showcases or documents TypeScript types. In the sidebar it appears as <code>{'<T>'}</code>.
				</p>
			)
		}),
		showSource({
			source: dedent`export const YourStory = {
				tags: ['type'],
				render: () => <YourComponent />
			}`
		})
	]
})

export const DummyStory = meta.story({
	tags: ['unit'],
	render: () => <div>Dummy story to force badge to show in story and not hoisted up</div>
})
