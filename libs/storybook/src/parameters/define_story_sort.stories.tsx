import type { Meta, StoryObj } from '@storybook/react'
import dedent from 'dedent'
import { defineDocsParam, defineStorySort } from '../index.ts'
import { showDocSource } from '../react/index.ts'

export default {
	title: 'parameters/defineStorySort',
	tags: ['new', 'version:1.0.0'],
	decorators: [showDocSource()],
	render: () => <></>
} satisfies Meta

export const AlphabeticalSort: StoryObj = {
	parameters: {
		...defineStorySort({ method: 'alphabetical' }),
		...defineDocsParam({
			source: {
				code: 'defineStorySort({ method: "alphabetical" })'
			}
		})
	}
}

export const CustomSort: StoryObj = {
	parameters: {
		...defineStorySort({
			method: 'custom',
			order: ['Introduction', 'Components', '*', 'Examples']
		}),
		...defineDocsParam({
			source: {
				code: dedent`defineStorySort({
					method: "custom",
					order: ["Introduction", "Components", "*", "Examples"]
				})`
			}
		})
	}
}

export const AlphabeticalByKindSort: StoryObj = {
	parameters: {
		...defineStorySort({
			method: 'alphabetical-by-kind',
			locales: 'en'
		}),
		...defineDocsParam({
			source: {
				code: dedent`defineStorySort({
					method: "alphabetical-by-kind",
					locales: "en"
				})`
			}
		})
	}
}

export const CustomSortFunction: StoryObj = {
	parameters: {
		...defineStorySort((a, b) => {
			// Custom sorting logic example
			if (a.title.includes('Introduction')) return -1
			if (b.title.includes('Introduction')) return 1
			return a.title.localeCompare(b.title)
		}),
		...defineDocsParam({
			source: {
				code: dedent`defineStorySort((a, b) => {
				// Custom sorting logic example
				if (a.title.includes('Introduction')) return -1
				if (b.title.includes('Introduction')) return 1
				return a.title.localeCompare(b.title)
			})`
			}
		})
	}
}
