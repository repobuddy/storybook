import type { Meta, StoryObj } from '@storybook/react-vite'
import dedent from 'dedent'
import { defineDocsParam, showSource } from '#repobuddy/storybook'

const meta = {
	title: 'storybook-addon-tag-badges/types/Meta',
	tags: ['type', '!snapshot', 'version:1.0'],
	decorators: [showSource()],
	render: () => <></>
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const TypicalUsage: Story = {
	name: 'TypicalUsage',
	parameters: {
		...defineDocsParam({
			source: {
				code: dedent`
				// component.stories.tsx
				import type { Meta } from '@repobuddy/storybook/storybook-addon-tag-badges'

				const meta: Meta<typeof Component> = {
					// ...
				}

				export default meta
				`
			}
		})
	}
}
