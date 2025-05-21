import type { Meta, StoryObj } from '@storybook/react'
import dedent from 'dedent'
import { type StorySortParam, defineDocsParam, defineParameters } from '../index.ts'
import { showDocSource } from '../react/index.ts'

export default {
	title: 'parameters/StorySortParam',
	tags: ['new', 'version:1.0.0', 'autodocs'],
	decorators: [showDocSource()],
	parameters: defineParameters({
		docs: {
			description: {
				component:
					'`StorySortParam` is used to define how stories should be sorted in the navigation sidebar. It is used in `preview.ts`.'
			}
		}
	}),
	render: () => <></>
} satisfies Meta

export const AlphabeticalSort: StoryObj = {
	parameters: {
		options: {
			options: {
				storySort: { method: 'alphabetical' }
			} satisfies StorySortParam
		},
		...defineDocsParam({
			source: {
				code: dedent`{
					options: {
						storySort: { method: "alphabetical" }
					} satisfies StorySortParam
				}`
			}
		})
	}
}

export const CustomSort: StoryObj = {
	parameters: {
		options: {
			options: {
				storySort: { method: 'custom', order: ['Introduction', 'Components', '*', 'Examples'] }
			} satisfies StorySortParam
		},
		...defineDocsParam({
			source: {
				code: dedent`{
					options: {
						storySort: { method: "custom", order: ["Introduction", "Components", "*", "Examples"] }
					} satisfies StorySortParam
				}`
			}
		})
	}
}

export const AlphabeticalByKindSort: StoryObj = {
	parameters: {
		options: {
			options: {
				storySort: { method: 'alphabetical-by-kind', locales: 'en' }
			} satisfies StorySortParam
		},
		...defineDocsParam({
			source: {
				code: dedent`{
					options: {
						storySort: { method: "alphabetical-by-kind", locales: "en" }
					} satisfies StorySortParam
				}`
			}
		})
	}
}

export const CustomSortFunction: StoryObj = {
	parameters: {
		options: {
			storySort: (a, b) => {
				// Custom sorting logic example
				if (a.title.includes('Introduction')) return -1
				if (b.title.includes('Introduction')) return 1
				return a.title.localeCompare(b.title)
			}
		} satisfies StorySortParam,
		...defineDocsParam({
			source: {
				code: dedent`{
					options: {
						storySort: (a, b) => {
							// Custom sorting logic example
							if (a.title.includes('Introduction')) return -1
							if (b.title.includes('Introduction')) return 1
							return a.title.localeCompare(b.title)
						}
					} satisfies StorySortParam
				}`
			}
		})
	}
}
