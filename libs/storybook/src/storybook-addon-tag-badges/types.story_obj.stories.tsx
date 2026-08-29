import dedent from 'dedent'
import { defineDocsParam, showSource } from '#repobuddy/storybook'
import preview from '../../.storybook/preview'

const meta = preview.meta({
	title: 'storybook-addon-tag-badges/types/StoryObj',
	tags: ['type', '!snapshot', 'version:1.0'],
	decorators: [showSource()],
	render: () => <></>
})

export const TypicalUsage = meta.story({
	parameters: {
		...defineDocsParam({
			source: {
				code: dedent`
				// component.stories.tsx
				import type { StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'

				type Story = StoryObj<typeof Component>

				const MyStory: Story = {
					// ...
				}
				`
			}
		})
	}
})
