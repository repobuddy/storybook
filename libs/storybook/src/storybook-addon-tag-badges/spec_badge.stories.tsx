import dedent from 'dedent'
import { showSource, withStoryCard } from '#repobuddy/storybook'
import preview from '../../.storybook/preview'

const meta = preview.meta({
	title: 'storybook-addon-tag-badges/specBadge',
	tags: ['var', '!snapshot', 'version:2.25'],
	render: () => <></>
})

export const SpecBadge = meta.story({
	tags: ['spec'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Story that serves as the specification of the component or code. In the sidebar it appears as <code>📜</code>.
				</p>
			)
		}),
		showSource({
			source: dedent`export const YourStory = {
				tags: ['spec'],
				render: () => <YourComponent />
			}`
		})
	]
})
