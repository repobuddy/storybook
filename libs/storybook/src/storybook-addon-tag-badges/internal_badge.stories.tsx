import dedent from 'dedent'
import { showSource, withStoryCard } from '#repobuddy/storybook'
import preview from '../../.storybook/preview'

const meta = preview.meta({
	title: 'storybook-addon-tag-badges/internalBadge',
	tags: ['var', '!snapshot', 'version:0.13'],
	render: () => <></>
})

export const InternalBadge = meta.story({
	tags: ['internal'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Internal or private-use-only stories. Can be hidden from the sidebar in production. In the sidebar it appears
					as <code>🔒</code>.
				</p>
			)
		}),
		showSource({
			source: dedent`export const YourStory = {
				tags: ['internal'],
				render: () => <YourComponent />
			}`
		})
	]
})
