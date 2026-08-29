import dedent from 'dedent'
import { showSource, withStoryCard } from '#repobuddy/storybook'
import preview from '../../.storybook/preview'

const meta = preview.meta({
	title: 'storybook-addon-tag-badges/rcBadge',
	tags: ['var', '!snapshot', 'version:2.19'],
	render: () => <></>
})

export const RcBadge = meta.story({
	tags: ['rc'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Mark that a component or prop is a release candidate. In the sidebar it appears as <code>🔵</code>.
				</p>
			)
		}),
		showSource({
			source: dedent`export const YourStory = {
				tags: ['rc'],
				render: () => <YourComponent />
			}`
		})
	]
})
