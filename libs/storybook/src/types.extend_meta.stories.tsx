import type { Meta, StoryObj } from '@storybook/react-vite'
import dedent from 'dedent'
import { showDocSource } from './decorators/show_doc_source'
import { defineDocsParam } from './parameters/define_docs_param'

const meta = {
	title: 'types/ExtendMeta',
	tags: ['new', 'version:1.1'],
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
				// types.ts
				import type { ExtendMeta } from '@repobuddy/storybook'
				import type { Args, Meta as M } from '@storybook/your-framework'

				// create a generic Meta type for your project
				export type Meta<TCmpOrArgs = Args> = ExtendMeta<
					TCmpOrArgs,
					M<TCmpOrArgs>,
					{ tag: 'new' | 'beta' | 'deprecated' }
				>

				// component.stories.tsx
				import type { Meta } from './types'

				const meta: Meta<typeof Component> = {
					tags: ['new'], // <--- gets auto-completion there
					// ...
				}

				export default meta
				`
			}
		})
	}
}
