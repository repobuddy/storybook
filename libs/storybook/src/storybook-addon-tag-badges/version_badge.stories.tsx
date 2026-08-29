import dedent from 'dedent'
import { showSource, withStoryCard } from '#repobuddy/storybook'
import preview from '../../.storybook/preview'

const meta = preview.meta({
	title: 'storybook-addon-tag-badges/versionBadge',
	tags: ['var', '!snapshot', 'version:2.4'],
	render: () => <></>
})

export const VersionBadge = meta.story({
	tags: ['version:1.0'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Version tag indicates when the component/feature/property becomes available. In the sidebar it appears as the
					version label (e.g. <code>1.0</code>).
				</p>
			)
		}),
		showSource({
			source: dedent`export const YourStory = {
				tags: ['version:1.0'],
				render: () => <YourComponent />
			}`
		})
	]
})
