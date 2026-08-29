import dedent from 'dedent'
import { defineDocsParam, showSource } from '#repobuddy/storybook'
import preview from '../../.storybook/preview'

const meta = preview.meta({
	title: 'Parameters/defineDocsParam',
	tags: ['autodocs', 'func', '!snapshot', 'new', 'version:1.0'],
	parameters: defineDocsParam({
		description: {
			component:
				'`docs.description.component` can be used to describe the component in meta. It has no effect on the stories.'
		}
	}),
	decorators: [showSource()],
	render: () => <></>
})

/**
 * Storybook uses JSDoc to generate documentation for the story.
 */
export const JSDoc = meta.story({
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
})

export const WithStoryDescription = meta.story({
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
})

/**
 * `docs.source.code` can be used to define the source code of the story.
 */
export const SourceCode = meta.story({
	parameters: defineDocsParam({
		source: {
			code: dedent`defineDocsParam({
				source: {
					code: 'Source code'
				}
			})`
		}
	})
})
