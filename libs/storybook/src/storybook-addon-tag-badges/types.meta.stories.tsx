import type { Meta, StoryObj } from '@storybook/react-vite'
import dedent from 'dedent'
import { showDocSource } from '../decorators/show_doc_source'
import { defineDocsParam } from '../parameters/define_docs_param'

const meta = {
	title: 'storybook-addon-tag-badges/types/Meta',
	tags: ['new', 'version:1.0'],
	decorators: [showDocSource()],
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
