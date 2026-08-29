import dedent from 'dedent'
import { showSource, withStoryCard } from '#repobuddy/storybook'
import preview from '../../.storybook/preview'

const meta = preview.meta({
	title: 'storybook-addon-tag-badges/experimentBadge',
	tags: ['var', '!snapshot', 'version:2.31'],
	render: () => <></>
})

export const ExperimentBadge = meta.story({
	tags: ['experiment'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Mark a component or prop as an early-stage experiment that may change significantly. In the sidebar it appears
					as <code>🔬</code>.
				</p>
			)
		}),
		showSource({
			source: dedent`export const YourStory = {
				tags: ['experiment'],
				render: () => <YourComponent />
			}`
		})
	]
})
