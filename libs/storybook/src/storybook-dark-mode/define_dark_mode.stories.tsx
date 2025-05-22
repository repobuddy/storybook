import type { Meta, StoryObj } from '@storybook/react'
import dedent from 'dedent'
import { showDocSource } from '../decorators/show_doc_source.tsx'
import { defineDocsParam } from '../parameters/define_docs_param.ts'
import { defineDarkModeParam } from './define_dark_mode.ts'

const meta = {
	title: 'storybook-dark-mode/defineDarkModeParam',
	tags: ['new', 'version:1.0.0', 'autodocs'],
	decorators: [showDocSource()],
	render: () => <></>
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const TypicalTailwindCSSUsage: Story = {
	parameters: {
		...defineDarkModeParam({
			classTarget: 'html',
			darkClass: 'dark',
			stylePreview: true
		}),
		...defineDocsParam({
			description: {
				story: [
					'In typical Tailwind CSS usage,',
					'you would place the dark class at the html element',
					'so that you can apply style to the `body` element.'
				].join('<br>')
			},
			source: {
				code: dedent`defineDarkModeParam({
					classTarget: 'html',
					darkClass: 'dark',
					stylePreview: true
				})`
			}
		})
	}
}
