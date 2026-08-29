import dedent from 'dedent'
import { showSource, withStoryCard } from '#repobuddy/storybook'
import preview from '../../.storybook/preview'

const meta = preview.meta({
	title: 'storybook-addon-tag-badges/outdatedBadge',
	tags: ['var', '!snapshot', 'version:0.11'],
	render: () => <></>
})

export const OutdatedBadge = meta.story({
	tags: ['outdated'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Components with design changes that weren't yet implemented, which can incur extra development costs to your
					users. In the sidebar it appears as <code>⚠️</code>.
				</p>
			)
		}),
		showSource({
			source: dedent`export const YourStory = {
				tags: ['outdated'],
				render: () => <YourComponent />
			}`
		})
	]
})
