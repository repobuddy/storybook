import dedent from 'dedent'
import { showSource, withStoryCard } from '#repobuddy/storybook'
import preview from '../../.storybook/preview'

const meta = preview.meta({
	title: 'storybook-addon-tag-badges/sourceBadge',
	tags: ['var', '!snapshot', 'version:2.28'],
	render: () => <></>
})

export const SourceBadge = meta.story({
	tags: ['source'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Story that shows the source code. In the sidebar it appears as <code>{'</>'}</code>.
				</p>
			)
		}),
		showSource({
			source: dedent`export const YourStory = {
				tags: ['source'],
				decorators: [showSource()],
				render: () => <YourComponent />
			}`
		})
	]
})

export const DummyStory = meta.story({
	tags: ['unit'],
	render: () => <div>Dummy story to force badge to show in story and not hoisted up</div>
})
