import type { Meta, StoryObj } from '@storybook/react-vite'
import dedent from 'dedent'
import { defineDocsParam, defineParameters, showDocSource, sortStoryWithTag } from '#repobuddy/storybook'

export default {
	title: 'parameters/sortStoryWithTag',
	tags: ['new', '!snapshot', 'version:next', 'autodocs'],
	decorators: [showDocSource()],
	parameters: defineParameters({
		docs: {
			description: {
				component:
					'`sortStoryWithTag` creates a story sort function that sorts by kind (title hierarchy) and then by tag category within the same component. Use it in `preview.ts` as the `storySort` option.'
			}
		}
	}),
	render: () => <></>
} satisfies Meta

type Story = StoryObj

export const BasicUsage: Story = {
	parameters: {
		options: {
			storySort: sortStoryWithTag({
				order: ['Overview', 'Components', 'Hooks', '*', 'WIP'],
				tag: ['playground', 'use-case', 'spec', 'props', '*', 'unit', 'integration']
			})
		},
		...defineDocsParam({
			description: {
				story: 'A typical configuration combining both `order` and `tag` sorting.'
			},
			source: {
				code: dedent`import { sortStoryWithTag } from '@repobuddy/storybook'

				const preview = {
					parameters: {
						options: {
							storySort: sortStoryWithTag({
								order: ['Overview', 'Components', 'Hooks', '*', 'WIP'],
								tag: ['playground', 'use-case', 'spec', 'props', '*', 'unit', 'integration']
							})
						}
					}
				}`
			}
		})
	}
}

export const OrderOnly: Story = {
	parameters: {
		options: {
			storySort: sortStoryWithTag({
				order: ['Introduction', 'Components', 'Hooks', '*', 'Utilities']
			})
		},
		...defineDocsParam({
			description: {
				story:
					'Sort only by title hierarchy order. Stories within the same component fall back to alphabetical name sorting.'
			},
			source: {
				code: dedent`sortStoryWithTag({
					order: ['Introduction', 'Components', 'Hooks', '*', 'Utilities']
				})`
			}
		})
	}
}

export const TagOnly: Story = {
	parameters: {
		options: {
			storySort: sortStoryWithTag({
				tag: ['playground', 'use-case', 'example', 'spec', 'props', '*', 'edge-case', 'unit', 'integration']
			})
		},
		...defineDocsParam({
			description: {
				story: 'Sort only by tag priority within the same component. Titles fall back to alphabetical sorting.'
			},
			source: {
				code: dedent`sortStoryWithTag({
					tag: ['playground', 'use-case', 'example', 'spec', 'props', '*', 'edge-case', 'unit', 'integration']
				})`
			}
		})
	}
}

export const NestedOrder: Story = {
	parameters: {
		options: {
			storySort: sortStoryWithTag({
				order: ['Overview', ['Components', ['Button', 'Input', 'Select']], '*', 'WIP']
			})
		},
		...defineDocsParam({
			description: {
				story: 'Nested ordering uses tuples `[name, children]` to control sub-level sort order.'
			},
			source: {
				code: dedent`sortStoryWithTag({
					order: ['Overview', ['Components', ['Button', 'Input', 'Select']], '*', 'WIP']
				})`
			}
		})
	}
}

export const WildcardPositioning: Story = {
	parameters: {
		options: {
			storySort: sortStoryWithTag({
				order: ['First', '*', 'Last'],
				tag: ['playground', 'spec', '*', 'unit', 'integration']
			})
		},
		...defineDocsParam({
			description: {
				story:
					'The `*` wildcard controls where unlisted items appear. Items before `*` sort first, items after `*` sort last, and unlisted items land at the `*` position sorted alphabetically.'
			},
			source: {
				code: dedent`sortStoryWithTag({
					order: ['First', '*', 'Last'],
					tag: ['playground', 'spec', '*', 'unit', 'integration']
				})`
			}
		})
	}
}

export const NoOptions: Story = {
	parameters: {
		options: {
			storySort: sortStoryWithTag()
		},
		...defineDocsParam({
			description: {
				story:
					'Without any options, stories are sorted alphabetically by title then by name (with numeric-aware collation).'
			},
			source: {
				code: dedent`sortStoryWithTag()`
			}
		})
	}
}
