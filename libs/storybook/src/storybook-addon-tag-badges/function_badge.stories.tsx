import dedent from 'dedent'
import { showSource, withStoryCard } from '#repobuddy/storybook'
import preview from '../../.storybook/preview'

const meta = preview.meta({
	title: 'storybook-addon-tag-badges/functionBadge',
	tags: ['var', '!snapshot', 'version:2.16'],
	render: () => <></>
})

export const FunctionBadge = meta.story({
	tags: ['func'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Story that showcases or documents functions. In the sidebar it appears as <code>ƒ(x)</code>.
				</p>
			)
		}),
		showSource({
			source: dedent`export const YourStory = {
				tags: ['func'],
				render: () => <YourComponent />
			}`
		})
	]
})

export const DummyStory = meta.story({
	tags: ['unit'],
	render: () => <div>Dummy story to force badge to show in story and not hoisted up</div>
})
