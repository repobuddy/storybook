type StorySortConfig = {
	includeNames?: boolean
	locales?: string
	method?: 'alphabetical' | 'alphabetical-by-kind' | 'custom'
	order?: string[]
	[k: string]: unknown
}

type Story = {
	id: string
	importPath: string
	name: string
	title: string
}

type StorySortFn = (a: Story, b: Story) => number

/**
 * Interface for story sorting parameters in Storybook.
 * Used to define how stories should be sorted in the navigation sidebar.
 */
export interface StorySortParam {
	/**
	 * Configuration for story sorting. Can be either:
	 * - A StorySortConfig object specifying sort method and options
	 * - A custom sorting function that takes two stories and returns their sort order
	 */
	storySort: StorySortConfig | StorySortFn
}
