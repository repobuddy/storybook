export interface ViewportParam {
	viewport: {
		/**
		 * @see https://storybook.js.org/docs/essentials/viewport#viewports
		 */
		viewports?: Record<string, Viewport> | undefined
		/**
		 * @see https://storybook.js.org/docs/essentials/viewport#defaultorientation
		 */
		defaultOrientation?: 'landscape' | 'portrait' | undefined
		/**
		 * @see https://storybook.js.org/docs/essentials/viewport#defaultviewport
		 */
		defaultViewport?: string | undefined
		/**
		 * Disables the viewport parameter.
		 * @deprecated Use `disabled` instead.
		 */
		disable?: boolean | undefined
		[k: string]: unknown
	}
}

export interface Viewport {
	name: string
	styles: {
		width: string
		height: string
	}
	type: 'mobile' | 'tablet' | 'desktop'
}

export interface GlobalApiViewportParam {
	viewport: {
		/**
		 * @see https://storybook.js.org/docs/essentials/viewport#viewports
		 */
		options?: Record<string, Viewport> | undefined
		/**
		 * @see https://storybook.js.org/docs/essentials/viewport#defaultviewport
		 */
		defaultViewport?: string | undefined
		/**
		 * @see https://storybook.js.org/docs/essentials/viewport#defaultorientation
		 */
		defaultOrientation?: 'landscape' | 'portrait' | undefined
		/**
		 * @see https://storybook.js.org/docs/essentials/viewport#disable
		 */
		disabled?: boolean | undefined
	}
}

export function defineViewportParam(
	viewport: ViewportParam['viewport'] | GlobalApiViewportParam['viewport']
): ViewportParam {
	return { viewport }
}
