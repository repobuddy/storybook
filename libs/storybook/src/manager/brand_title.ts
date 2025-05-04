export interface BrandTitleOptions {
	/**
	 * The title to display in the brand title.
	 * It can be a simple string or raw HTML.
	 */
	title: string
	/**
	 * The icon to display in the brand title.
	 * It can be a simple string or raw HTML (e.g. `<svg>`).
	 */
	icon?: string | undefined
}

/**
 * Creates a brand title element for the Storybook manager UI.
 *
 * @param options - The options for customizing the brand title
 * @param options.title - The title text or HTML to display
 * @param options.icon - Optional icon HTML to display before the title
 * @returns An HTML string containing the brand title element
 *
 * @example
 *
 * ```ts
 * import { brandTitle } from '@repobuddy/storybook'
 * import { addons } from '@storybook/manager-api'
 *
 * addons.setConfig({
 *   brandTitle: brandTitle({
 *     title: 'My Storybook',
 *     icon: '<img src="logo.png" alt="Logo" width="24" height="24">'
 *   })
 * })
 * ```
 */
export function brandTitle(options: BrandTitleOptions) {
	return `<span style="display: flex; align-items: center; gap: 2px;">
		${options.icon ?? ''}
		${options.title}
	</span>`
}
