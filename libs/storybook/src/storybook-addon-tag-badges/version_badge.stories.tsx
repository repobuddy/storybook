import dedent from 'dedent'
import { showDocSource, withStoryCard } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/versionBadge',
	tags: ['var', 'version:2.4'],
	render: () => <></>
} satisfies Meta

export const VersionBadge: StoryObj = {
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
		showDocSource({
			source: dedent`export const YourStory = {
				tags: ['version:1.0'],
				render: () => <YourComponent />
			}`
		})
	]
}
