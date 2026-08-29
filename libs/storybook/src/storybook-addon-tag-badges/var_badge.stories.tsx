import dedent from 'dedent'
import { showSource, withStoryCard } from '#repobuddy/storybook'
import preview from '../../.storybook/preview'

const meta = preview.meta({
	title: 'storybook-addon-tag-badges/varBadge',
	tags: ['var', '!snapshot', 'version:2.16'],
	render: () => <></>
})

export const VarBadge = meta.story({
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
		showSource({
			source: dedent`export default {
				tags: ['var'],
				// ...
			} satisfies Meta

			export const YourStory = {
				render: () => <YourComponent />
			}`
		})
	]
})

export const DummyStory = meta.story({
	tags: ['unit'],
	render: () => <div>Dummy story to force badge to show in story and not hoisted up</div>
})
