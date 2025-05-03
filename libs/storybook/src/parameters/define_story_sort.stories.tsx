import type { Meta, StoryObj } from '@storybook/react'
import { defineStorySort } from '../index.ts'

export default {
	title: 'parameters/defineStorySort',
	tags: ['new']
} satisfies Meta

export const AlphabeticalSort: StoryObj = {
	parameters: defineStorySort({
		method: 'alphabetical'
	}),
	render: () => (
		<div>
			Story with alphabetical sorting using <code>defineStorySort</code>
		</div>
	)
}

export const CustomSort: StoryObj = {
	parameters: defineStorySort({
		method: 'custom',
		order: ['Introduction', 'Components', '*', 'Examples']
	}),
	render: () => (
		<div>
			Story with custom sort order using <code>defineStorySort</code>
		</div>
	)
}

export const AlphabeticalByKindSort: StoryObj = {
	parameters: defineStorySort({
		method: 'alphabetical-by-kind',
		locales: 'en'
	}),
	render: () => (
		<div>
			Story with alphabetical sorting by kind using <code>defineStorySort</code>
		</div>
	)
}

export const CustomSortFunction: StoryObj = {
	parameters: defineStorySort((a, b) => {
		// Custom sorting logic example
		if (a.title.includes('Introduction')) return -1
		if (b.title.includes('Introduction')) return 1
		return a.title.localeCompare(b.title)
	}),
	render: () => (
		<div>
			Story with custom sort function using <code>defineStorySort</code>
		</div>
	)
}
