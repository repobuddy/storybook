type StorySortConfig = {
	includeNames?: boolean
	locales?: string
	method?: 'alphabetical' | 'alphabetical-by-kind' | 'custom'
	order?: string[]
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

/**
 * Defines story sorting parameters for Storybook navigation.
 *
 * @see https://storybook.js.org/docs/api/parameters#optionsstorysort
 *
 * @param storySort - Configuration for how stories should be sorted. Can be either:
 *   - A configuration object specifying sort method and options
 *   - A custom sorting function that takes two stories and returns their sort order
 * @returns An object containing the story sort configuration
 *
 * @example
 * // Alphabetical sorting
 * defineStorySort({ method: 'alphabetical' })
 *
 * @example
 * // Custom order
 * defineStorySort({
 *   method: 'custom',
 *   order: ['Introduction', 'Components', '*']
 * })
 *
 * @example
 * // Custom sort function
 * defineStorySort((a, b) => a.title.localeCompare(b.title))
 */
export function defineStorySort(storySort: StorySortParam['storySort']) {
	return { storySort }
}
