import dedent from 'dedent'
import { expect } from 'storybook/test'
import { defineDocsParam, SourceCodeCard } from '#repobuddy/storybook'
import preview from '../../.storybook/preview'

const meta = preview.meta({
	title: 'components/SourceCodeCard',
	tags: ['new', 'version:2.34', 'autodocs'],
	component: SourceCodeCard,
	parameters: defineDocsParam({
		description: {
			component: '`SourceCodeCard` displays source code in a `StoryCard` with the `source` appearance.'
		}
	}),
	args: {
		code: dedent`
			export function hello(name: string) {
				return \`Hello \${name}\`
			}
		`,
		language: 'ts'
	}
})

export const Basic = meta.story({
	args: { 'data-testid': 'card' },
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('card')).toContainElement(canvas.getByTestId('source-content'))
	}
})

export const WithTitle = meta.story({
	tags: ['props'],
	args: { title: 'hello.ts' }
})

export const InfoAppearance = meta.story({
	tags: ['props'],
	args: { appearance: 'info', title: 'Info card with code' }
})

export const CustomClassName = meta.story({
	tags: ['props'],
	args: { className: 'rbsb:border-dashed rbsb:border-2' }
})
