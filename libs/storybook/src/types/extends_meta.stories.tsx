import type { Args } from '@storybook/react-vite'
import dedent from 'dedent'
import type { Component } from 'react'
import { testType } from 'type-plus'
import type { ExtendsMeta } from '#repobuddy/storybook'
import { defineDocsParam, showSource } from '#repobuddy/storybook'
import type { Meta, TagNames } from '#repobuddy/storybook/storybook-addon-tag-badges'
import preview from '../../.storybook/preview'
import type { ExtractStringLiterals } from './_extract_string_literals.js'

const meta = preview.meta({
	title: 'types/ExtendMeta',
	tags: ['type', '!snapshot', 'version:2.4'],
	decorators: [showSource()],
	render: () => <></>
})

export const ExtendsTagLiterals = meta.story({
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
		type MyMeta<TCmpOrArgs = Args> = ExtendsMeta<Meta<TCmpOrArgs>, { tag: 'custom' }>
		const meta: MyMeta<typeof Component> = {
			title: '',
			tags: ['custom']
		}
		testType.equal<ExtractStringLiterals<NonNullable<(typeof meta)['tags']>[0]>, TagNames | 'custom'>(true)

		type YourMeta<TCmpOrArgs = Args> = ExtendsMeta<MyMeta<TCmpOrArgs>, { tag: 'one-more' }>
		testType.equal<ExtractStringLiterals<NonNullable<YourMeta['tags']>[0]>, TagNames | 'custom' | 'one-more'>(true)
	}
})
