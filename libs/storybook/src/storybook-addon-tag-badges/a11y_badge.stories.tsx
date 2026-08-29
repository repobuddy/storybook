import dedent from 'dedent'
import { showSource, withStoryCard } from '#repobuddy/storybook'
import preview from '../../.storybook/preview'

const meta = preview.meta({
	title: 'storybook-addon-tag-badges/a11yBadge',
	tags: ['var', 'version:2.26'],
	render: () => <></>
})

export const A11yBadge = meta.story({
	tags: ['a11y'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Story that demonstrates or tests accessibility. In the sidebar it appears as <code>♿</code>.
				</p>
			)
		}),
		showSource({
			source: dedent`export const YourStory = {
				tags: ['a11y'],
				render: () => <YourComponent />
			}`
		})
	]
})
