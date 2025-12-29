import type { ExtendsMeta } from '#repobuddy/storybook'
import { defineDocsParam, showDocSource } from '#repobuddy/storybook'
import type { Args, Meta, StoryObj } from '@storybook/react-vite'
import dedent from 'dedent'
import type { Component } from 'react'
import { testType } from 'type-plus'
import type { ExtractStringLiterals } from './_extract_string_literals.js'

const meta = {
	title: 'types/ExtendMeta',
	tags: ['new', 'version:next'],
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
				import type { ExtendMeta } from '@repobuddy/storybook'
				import type { Args, Meta as M } from '@storybook/your-framework'

				// create a generic Meta type for your project
				export type Meta<TCmpOrArgs = Args> = ExtendMeta<
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
	}),
	async play() {
		type MyMeta<TCmpOrArgs = Args> = ExtendsMeta<Meta<TCmpOrArgs>, { tag: 'new' | 'beta' | 'deprecated' }>
		const meta: MyMeta<typeof Component> = {
			title: '',
			tags: ['new', 'beta', 'deprecated']
		}
		testType.equal<ExtractStringLiterals<NonNullable<(typeof meta)['tags']>[0]>, 'new' | 'beta' | 'deprecated'>(true)

		type YourMeta<TCmpOrArgs = Args> = ExtendsMeta<MyMeta<TCmpOrArgs>, { tag: 'one-more' }>
		testType.equal<ExtractStringLiterals<NonNullable<YourMeta['tags']>[0]>, 'new' | 'beta' | 'deprecated' | 'one-more'>(
			true
		)
	}
}
