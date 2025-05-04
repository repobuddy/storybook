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

export function brandTitle(options: BrandTitleOptions) {
	return `<span style="display: flex; align-items: center; gap: 2px;">
		${options.icon ?? ''}
		${options.title}
	</span>`
}
