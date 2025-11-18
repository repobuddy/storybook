import { defineDocsParam, showDocSource } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '@storybook/react-vite'
import dedent from 'dedent'

const meta = {
	title: 'storybook-addon-tag-badges/types/StoryObj',
	tags: ['new', 'version:1.0'],
	decorators: [showDocSource()],
	render: () => <></>
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const TypicalUsage: Story = {
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
}
