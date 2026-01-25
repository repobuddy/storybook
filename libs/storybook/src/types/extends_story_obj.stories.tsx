import type { ExtendsStoryObj } from '#repobuddy/storybook'
import { defineDocsParam, showDocSource } from '#repobuddy/storybook'
import type { Args, Meta, StoryObj } from '@storybook/react-vite'
import dedent from 'dedent'
import type { Component } from 'react'
import { testType } from 'type-plus'
import type { ExtractStringLiterals } from './_extract_string_literals.js'

const meta = {
	title: 'types/ExtendStoryObj',
	tags: ['new', 'version:2.4'],
	decorators: [showDocSource()],
	render: () => <></>
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const ExtendsTagLiterals: Story = {
	parameters: defineDocsParam({
		source: {
			code: dedent`
				// types.ts
				import type { ExtendsStoryObj } from '@repobuddy/storybook'
				import type { Args, StoryObj as S } from '@storybook/your-framework'

				// create a generic StoryObj type for your project
				export type StoryObj<TMetaOrCmpOrArgs = Args> = ExtendsStoryObj<
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
	}),
	async play() {
		type MyStoryObj<TCmpOrArgs = Args> = ExtendsStoryObj<StoryObj<TCmpOrArgs>, { tag: 'new' | 'beta' | 'deprecated' }>
		const story: MyStoryObj<typeof Component> = {
			tags: ['new', 'beta', 'deprecated']
		}
		testType.equal<ExtractStringLiterals<NonNullable<(typeof story)['tags']>[0]>, 'new' | 'beta' | 'deprecated'>(true)

		type YourStoryObj<TCmpOrArgs = Args> = ExtendsStoryObj<MyStoryObj<TCmpOrArgs>, { tag: 'one-more' }>
		testType.equal<
			ExtractStringLiterals<NonNullable<YourStoryObj['tags']>[0]>,
			'new' | 'beta' | 'deprecated' | 'one-more'
		>(true)
	}
}
