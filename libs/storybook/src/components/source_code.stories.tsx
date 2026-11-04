import dedent from 'dedent'
import { expect } from 'storybook/test'
import { themes } from 'storybook/theming'
import { defineDocsParam, SourceCode } from '#repobuddy/storybook'
import preview from '../../.storybook/preview'

const meta = preview.meta({
	title: 'components/SourceCode',
	tags: ['new', 'version:2.34', 'autodocs'],
	component: SourceCode,
	parameters: defineDocsParam({
		description: {
			component: [
				'`SourceCode` displays source code with the Storybook syntax highlighter.',
				'It follows the current dark mode unless a `theme` is provided.'
			].join('<br/>')
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
	play: async ({ canvas }) => {
		await expect(await canvas.findByTestId('source-content')).toBeInTheDocument()
	}
})

export const Json = meta.story({
	tags: ['props'],
	args: {
		code: JSON.stringify({ name: 'repobuddy', tags: ['storybook'] }, null, 2),
		language: 'json'
	}
})

export const DarkTheme = meta.story({
	tags: ['props'],
	args: { theme: themes.dark },
	decorators: [
		(Story) => (
			<div style={{ backgroundColor: themes.dark.appContentBg }}>
				<Story />
			</div>
		)
	]
})

export const CustomTestId = meta.story({
	tags: ['props'],
	args: { 'data-testid': 'my-code' },
	play: async ({ canvas }) => {
		await expect(await canvas.findByTestId('my-code')).toBeInTheDocument()
	}
})
