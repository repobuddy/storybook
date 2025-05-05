import type { Meta, StoryObj } from '@storybook/react'
import dedent from 'dedent'
import { showDocSource } from '../index.ts'
import { defineDocsParam } from '../index.ts'

const meta = {
	title: 'Parameters/defineDocsParam',
	tags: ['autodocs', 'new', 'version:1.0.0'],
	parameters: defineDocsParam({
		description: {
			component:
				'`docs.description.component` can be used to describe the component in meta. It has no effect on the stories.'
		}
	}),
	decorators: [showDocSource()],
	render: () => <></>
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

/**
 * Storybook uses JSDoc to generate documentation for the story.
 */
export const JSDoc: Story = {
	parameters: defineDocsParam({
		source: {
			code: dedent`
			/**
			 * Storybook uses JSDoc to generate documentation for the story.
			 */
			export const JSDoc: Story = {}
			`
		}
	})
}

export const WithStoryDescription: Story = {
	parameters: {
		...defineDocsParam({
			description: {
				story: '`docs.description.story` can also be used to describe the story.'
			},
			source: {
				code: dedent`defineDocsParam({
					description: {
						story: '\`docs.description.story\` can also be used to describe the story.'
					}
				})`
			}
		})
	}
}

/**
 * `docs.source.code` can be used to define the source code of the story.
 */
export const SourceCode: Story = {
	parameters: defineDocsParam({
		source: {
			code: dedent`defineDocsParam({
				source: {
					code: 'Source code'
				}
			})`
		}
	})
}
