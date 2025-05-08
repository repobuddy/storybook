export interface LayoutParam {
	layout: 'padded' | 'fullscreen' | 'centered'
}

/**
 * Helper function to define the layout parameter for a story
 *
 * @see https://storybook.js.org/docs/api/parameters#layout
 *
 * @param layout - The layout type to use ('padded', 'fullscreen', or 'centered')
 * @returns An object containing the layout parameter
 * @example
 * ```ts
 * export const MyStory = {
 *   parameters: defineLayoutParam('centered')
 * }
 * ```
 */
export const defineLayoutParam = (layout: LayoutParam['layout']) => ({
	layout
})
