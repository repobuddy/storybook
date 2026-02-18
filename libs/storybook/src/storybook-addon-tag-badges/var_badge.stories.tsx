import dedent from 'dedent'
import { showDocSource, withStoryCard } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/varBadge',
	tags: ['var', 'version:2.16'],
	render: () => <></>
} satisfies Meta

export const VarBadge: StoryObj = {
	name: 'Variable Badge',
	tags: ['var'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Story that describes values and variables. In the sidebar it appears as <code>var</code>.
				</p>
			)
		}),
		showDocSource({
			source: dedent`export default {
				tags: ['var'],
				// ...
			} satisfies Meta

			export const YourStory = {
				render: () => <YourComponent />
			}`
		})
	]
}

export const DummyStory: StoryObj = {
	tags: ['unit'],
	render: () => <div>Dummy story to force badge to show in story and not hoisted up</div>
}
