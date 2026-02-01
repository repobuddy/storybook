import type { ParamsToArgTypes } from '#repobuddy/storybook'
import { defineDocsParam, showDocSource, withStoryCard } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { testType } from 'type-plus'

const meta = {
	title: 'arg-types/ParamsToArgTypes',
	tags: ['version:next'],
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
				import type { ParamsToArgTypes } from '@repobuddy/storybook'
				import { testSubject } from './test-subject.ts'

				const meta: Meta<ParamsToArgTypes<typeof testSubject, ['a', 'b']>> = { ... }
				export default meta
				`
		}
	}),
	decorators: [
		withStoryCard({
			title: 'ParamsToArgTypes',
			content: (
				<p>
					<code>ParamsToArgTypes&lt;F, Names&gt;</code> converts a function's parameter types to <code>Args</code> type
					for Storybook.
				</p>
			)
		})
	],
	async play() {
		testType.equal<ParamsToArgTypes<(a: number) => void, ['x']>, { x: number }>(true)
		testType.equal<ParamsToArgTypes<(a: number, b: string) => void, ['x', 'y']>, { x: number; y: string }>(true)
		testType.equal<ParamsToArgTypes<(a: number, b?: string) => void, ['x', 'y']>, { x: number; y: string | undefined }>(
			true
		)
		testType.equal<
			ParamsToArgTypes<(a: number, b: string, c: boolean) => void, ['x', 'y', 'z']>,
			{ x: number; y: string; z: boolean }
		>(true)
	}
}
