import dedent from 'dedent'
import { showSource, withStoryCard } from '#repobuddy/storybook'
import preview from '../../.storybook/preview'

const meta = preview.meta({
	title: 'storybook-addon-tag-badges/codeOnlyBadge',
	tags: ['var', '!snapshot', 'version:0.11'],
	render: () => <></>
})

export const CodeOnlyBadge = meta.story({
	tags: ['code-only'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Components that only exist in code, and not in design. In the sidebar it appears as <code>📝</code>.
				</p>
			)
		}),
		showSource({
			source: dedent`export const YourStory = {
				tags: ['code-only'],
				render: () => <YourComponent />
			}`
		})
	]
})
