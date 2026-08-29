import dedent from 'dedent'
import { defineDocsParam, showSource } from '#repobuddy/storybook'
import preview from '../.storybook/preview'

const meta = preview.meta({
	title: 'types/ExtendStoryObj',
	tags: ['type', '!snapshot', 'version:1.1'],
	decorators: [showSource()],
	render: () => <></>
})

export const TypicalUsage = meta.story({
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
})
