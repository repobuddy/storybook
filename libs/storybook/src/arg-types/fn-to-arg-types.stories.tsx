import dedent from 'dedent'
import { makeLiveEditStory } from 'storybook-addon-code-editor'
import { testType } from 'type-plus'
import type { FnToArgTypes } from '#repobuddy/storybook'
import * as repobuddyStorybook from '#repobuddy/storybook'
import { defineDocsParam, showDocSource, withStoryCard } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'
import * as repobuddyStorybookTagBadges from '#repobuddy/storybook/storybook-addon-tag-badges'
import variadicCode from './fn-to-arg-types.stories.variadic.tsx?raw'

const meta = {
	title: 'arg-types/FnToArgTypes',
	tags: ['type', 'version:2.6'],
	render: () => <></>
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
	parameters: defineDocsParam({
		source: {
			code: dedent`
				// test-subject.ts
				export function testSubject(a: number, b: string) { ... }

				// test-subject.stories.tsx
				import type { Meta } from '@repobuddy/storybook/storybook-addon-tag-badges'
				import type { FnToArgTypes } from '@repobuddy/storybook'
				import { testSubject } from './test-subject.ts'

				const meta: Meta<FnToArgTypes<typeof testSubject, ['a', 'b']>> = { ... }
				export default meta
				`
		}
	}),
	decorators: [
		withStoryCard({
			title: 'FnToArgTypes',
			content: (
				<p>
					<code>FnToArgTypes&lt;F, Names&gt;</code> converts a function's parameter types to <code>Args</code> type for
					Storybook.
				</p>
			)
		}),
		showDocSource({ placement: 'before' })
	],
	async play() {
		testType.equal<FnToArgTypes<() => void>, unknown>(true)
		testType.equal<keyof FnToArgTypes<() => void>, never>(true)
		const _m0: Meta<FnToArgTypes<() => void, []>> = { argTypes: {} }

		const _m0X: Meta<FnToArgTypes<() => void>> = { argTypes: { x: { control: 'text' } } }

		testType.equal<FnToArgTypes<(a: number) => void, ['x']>, { x: number }>(true)
		const _m1: Meta<FnToArgTypes<(a: number) => void>> = {
			argTypes: { x: { control: 'number' } }
		}
		const _m1X: Meta<FnToArgTypes<(a: number) => void, ['x']>> = {
			argTypes: {
				x: { control: 'number' },
				// @ts-expect-error
				y: { control: 'text' }
			}
		}

		testType.equal<FnToArgTypes<(a: number, b: string) => void, ['x', 'y']>, { x: number; y: string }>(true)
		testType.equal<FnToArgTypes<(a: number, b?: string) => void, ['x', 'y']>, { x: number; y: string | undefined }>(
			true
		)
		testType.equal<
			FnToArgTypes<(a: number, b: string, c: boolean) => void, ['x', 'y', 'z']>,
			{ x: number; y: string; z: boolean }
		>(true)
		const _m2: Meta<FnToArgTypes<(a: number, b: string, c: boolean) => void, ['x', 'y', 'z']>> = {
			argTypes: {
				x: { control: 'number' },
				y: { control: 'text' },
				z: { control: 'boolean' },
				// @ts-expect-error
				p: { control: 'text' }
			}
		}

		// Variable (rest) arguments: rest is a single parameter of array type
		const _mRestOnly: Meta<FnToArgTypes<(...args: number[]) => void, ['values']>> = {
			argTypes: { values: { control: 'object' } }
		}
		// Fixed params + rest: FnToArgTypes maps each name to the param at same index (rest = one param)
		const _mFixedAndRest: Meta<FnToArgTypes<(x: number, ...rest: string[]) => void, ['x', 'rest']>> = {
			argTypes: {
				x: { control: 'number' },
				rest: { control: 'object' }
			}
		}
	}
}

export const VariadicFunction: Story = {
	parameters: defineDocsParam({
		source: {
			code: variadicCode
		}
	}),
	decorators: [withStoryCard(), showDocSource({ placement: 'before' })]
}

makeLiveEditStory(VariadicFunction, {
	availableImports: {
		'@repobuddy/storybook': repobuddyStorybook,
		'@repobuddy/storybook/storybook-addon-tag-badges': repobuddyStorybookTagBadges
	},
	code: VariadicFunction.parameters?.docs?.source?.code ?? ''
})
