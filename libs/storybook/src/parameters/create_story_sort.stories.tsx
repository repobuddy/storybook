import dedent from 'dedent'
import { defineDocsParam, defineParameters, showSource, withStoryCard } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#storybook-addon-tag-badges'

export default {
	title: 'parameters/createStorySort',
	tags: ['version:next', 'autodocs'],
	decorators: [withStoryCard(), showSource()],
	parameters: defineParameters({
		docs: {
			description: {
				component: dedent`\`createStorySort\` creates a story sort comparator that sorts by kind (title hierarchy) and then by tag category within the same component.

				In Storybook 10+, \`storySort\` must be defined as an inline function in your preview config.
				Assign the result of \`createStorySort\` to a variable and delegate from the inline function:`
			}
		}
	}),
	render: () => <></>
} satisfies Meta

type Story = StoryObj

export const BasicUsage: Story = {
	tags: ['use-case'],
	parameters: {
		...defineDocsParam({
			description: {
				story:
					'A typical configuration combining both `order` and `tag` sorting, compatible with Storybook 10+ inline requirement.'
			},
			source: {
				code: dedent`import { createStorySort } from '@repobuddy/storybook'

				const compare = createStorySort({
					order: ['Overview', 'Components', 'Hooks', '*', 'WIP'],
					tag: ['playground', 'use-case', 'spec', 'props', '*', 'unit', 'integration']
				})

				export default {
					parameters: {
						options: {
							storySort(a, b) {
								return compare(a, b)
							}
						}
					}
				}`
			}
		})
	}
}

export const OrderOnly: Story = {
	tags: ['use-case'],
	parameters: {
		...defineDocsParam({
			description: {
				story:
					'Sort only by title hierarchy order. Stories within the same component fall back to alphabetical name sorting.'
			},
			source: {
				code: dedent`const compare = createStorySort({
					order: ['Introduction', 'Components', 'Hooks', '*', 'Utilities']
				})

				// in preview config:
				storySort(a, b) {
					return compare(a, b)
				}`
			}
		})
	}
}

export const TagOnly: Story = {
	tags: ['use-case'],
	parameters: {
		...defineDocsParam({
			description: {
				story: 'Sort only by tag priority within the same component. Titles fall back to alphabetical sorting.'
			},
			source: {
				code: dedent`const compare = createStorySort({
					tag: ['playground', 'use-case', 'example', 'spec', 'props', '*', 'edge-case', 'unit', 'integration']
				})

				// in preview config:
				storySort(a, b) {
					return compare(a, b)
				}`
			}
		})
	}
}

export const NestedOrder: Story = {
	tags: ['use-case'],
	parameters: {
		...defineDocsParam({
			description: {
				story: 'Nested ordering uses tuples `[name, children]` to control sub-level sort order.'
			},
			source: {
				code: dedent`const compare = createStorySort({
					order: ['Overview', ['Components', ['Button', 'Input', 'Select']], '*', 'WIP']
				})

				// in preview config:
				storySort(a, b) {
					return compare(a, b)
				}`
			}
		})
	}
}

export const WildcardPositioning: Story = {
	tags: ['use-case'],
	parameters: {
		...defineDocsParam({
			description: {
				story:
					'The `*` wildcard controls where unlisted items appear. Items before `*` sort first, items after `*` sort last, and unlisted items land at the `*` position sorted alphabetically.'
			},
			source: {
				code: dedent`const compare = createStorySort({
					order: ['First', '*', 'Last'],
					tag: ['playground', 'spec', '*', 'unit', 'integration']
				})

				// in preview config:
				storySort(a, b) {
					return compare(a, b)
				}`
			}
		})
	}
}
