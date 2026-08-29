import dedent from 'dedent'
import { showSource, withStoryCard } from '#repobuddy/storybook'
import preview from '../../.storybook/preview'

const meta = preview.meta({
	title: 'storybook-addon-tag-badges/classBadge',
	tags: ['autodocs', 'var', '!snapshot', 'version:2.27'],
	render: () => <></>
})

export const ClassBadge = meta.story({
	tags: ['class'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Story that showcases or documents classes. In the sidebar it appears as <code>🔷</code>.
				</p>
			)
		}),
		showSource({
			source: dedent`export const YourStory = {
				tags: ['class'],
				render: () => <YourComponent />
			}`
		})
	]
})

export const DummyStory = meta.story({
	tags: ['unit'],
	render: () => <div>Dummy story to force badge to show in story and not hoisted up</div>
})
