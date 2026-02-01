import type { FnToArgTypes } from '#repobuddy/storybook'
import { defineDocsParam, showDocSource, withStoryCard } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { testType } from 'type-plus'

const meta = {
	title: 'arg-types/FnToArgTypes',
	tags: ['version:2.6'],
	decorators: [showDocSource()],
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
		})
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
	}
}
