import dedent from 'dedent'
import { showSource, withStoryCard } from '#repobuddy/storybook'
import preview from '../../.storybook/preview'

const meta = preview.meta({
	title: 'storybook-addon-tag-badges/knownIssueBadge',
	tags: ['var', '!snapshot', 'version:2.33'],
	render: () => <></>
})

export const KnownIssueBadge = meta.story({
	tags: ['known-issue'],
	decorators: [
		withStoryCard({
			appearance: 'warn',
			content: (
				<p>
					Stories that document a known, accepted issue and are expected to fail tests. In the sidebar it appears as{' '}
					<code>🩹</code>
				</p>
			)
		}),
		showSource({
			source: dedent`export const YourStory = {
				tags: ['known-issue'],
				render: () => <YourComponent />
			}`
		})
	]
})
