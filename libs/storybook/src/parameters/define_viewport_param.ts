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

/**
 * Defines viewport parameters for Storybook stories.
 *
 * @see https://storybook.js.org/docs/api/parameters#viewport
 *
 * @param viewport - Configuration for viewport parameters including:
 * - viewports: Custom viewport definitions
 * - defaultViewport: The default viewport to use
 * - defaultOrientation: Default orientation (landscape/portrait)
 * - disabled: Whether viewport controls are disabled
 * @returns An object containing the viewport parameter configuration
 *
 * @example
 * ```ts
 * defineViewportParam({
 *   viewports: {
 *     mobile: {
 *       name: 'Mobile',
 *       styles: { width: '320px', height: '568px' },
 *       type: 'mobile'
 *     }
 *   },
 *   defaultViewport: 'mobile',
 *   defaultOrientation: 'portrait'
 * })
 * ```
 */
export function defineViewportParam(
	viewport: ViewportParam['viewport'] | GlobalApiViewportParam['viewport']
): ViewportParam {
	return { viewport }
}
