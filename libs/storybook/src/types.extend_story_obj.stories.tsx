import type { Meta, StoryObj } from '@storybook/react-vite'
import dedent from 'dedent'
import { showDocSource } from './decorators/show_doc_source'
import { defineDocsParam } from './parameters/define_docs_param'

const meta = {
	title: 'types/ExtendStoryObj',
	tags: ['new', 'version:1.1'],
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
				// types.ts
				import type { ExtendStoryObj } from '@repobuddy/storybook'
				import type { StoryObj as S } from '@storybook/your-framework'

				// create a generic StoryObj type for your project
				export type StoryObj<TMetaOrCmpOrArgs = Args> = ExtendStoryObj<
					TMetaOrCmpOrArgs,
					S<TMetaOrCmpOrArgs>,
					{ tag: 'new' | 'beta' | 'deprecated' }
				>

				// component.stories.tsx
				import type { StoryObj } from './types'

				type Story = StoryObj<typeof Component>

				const MyStory: Story = {
					tags: ['new'], // <--- gets auto-completion there
					// ...
				}
				`
			}
		})
	}
}
