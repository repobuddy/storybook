import type { Meta, StoryObj } from '@storybook/react'
import dedent from 'dedent'
import { showDocSource } from '../decorators/show_doc_source.tsx'
import { defineBackgroundsParam } from './define_backgrounds_param'
import { defineDocsParam } from './define_docs_param'
const meta = {
	title: 'Parameters/defineBackgroundsParam',
	tags: ['new', 'version:1.0.0'],
	decorators: [showDocSource()],
	render: () => <></>
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const SetDefaultBackground: Story = {
	parameters: {
		...defineBackgroundsParam({
			default: 'light'
		}),
		...defineDocsParam({
			source: {
				code: dedent`defineBackgroundParam({
					default: 'light'
				})`
			}
		})
	}
}

export const SetBackgroundOptions: Story = {
	parameters: {
		...defineBackgroundsParam({
			options: [
				{
					name: 'light',
					value: 'light'
				},
				{ name: 'dark', value: 'dark' }
			]
		}),
		...defineDocsParam({
			source: {
				code: dedent`defineBackgroundsParam({
					options: [
						{ name: 'light', value: 'light' },
						{ name: 'dark', value: 'dark' }
					]
				})`
			}
		})
	}
}
