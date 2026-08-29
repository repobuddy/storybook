import dedent from 'dedent'
import { showSource, withStoryCard } from '#repobuddy/storybook'
import preview from '../../.storybook/preview'

const meta = preview.meta({
	title: 'storybook-addon-tag-badges/dangerBadge',
	tags: ['var', '!snapshot', 'version:0.11'],
	render: () => <></>
})

export const DangerousBadge = meta.story({
	tags: ['danger'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Components that require particular attention when configuring them (e.g. for security concerns). In the
					sidebar it appears as <code>🚨</code>.
				</p>
			)
		}),
		showSource({
			source: dedent`export const YourStory = {
				tags: ['danger'],
				render: () => <YourComponent />
			}`
		})
	]
})
