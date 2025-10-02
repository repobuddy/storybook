import type { CSSProperties } from '@just-web/css'
import type { ThemeVars } from 'storybook/internal/theming'

/**
 * Configuration parameters for `@storybook-community/storybook-dark-mode`.
 */
export interface DarkModeParam {
	/** The current theme ('dark' or 'light') */
	current?: 'dark' | 'light' | undefined
	/**
	 * CSS class(es) to apply in dark mode.
	 */
	darkClass?: string | string[] | undefined
	/**
	 * CSS style(s) to apply in dark mode.
	 *
	 * This only works when using `withStoryRoot`.
	 */
	darkStyle?: CSSProperties | undefined
	/** CSS class(es) to apply in light mode */
	lightClass?: string | string[] | undefined
	/**
	 * CSS style(s) to apply in light mode.
	 *
	 * This only works when using `withStoryRoot`.
	 */
	lightStyle?: CSSProperties | undefined
	/** Dark theme variables */
	dark?: ThemeVars
	/** Light theme variables */
	light?: ThemeVars
	/** Element to apply theme classes to ('html' or 'body') */
	classTarget?: 'html' | 'body' | undefined
	/** Whether to apply theme styles to preview iframe */
	stylePreview?: boolean | undefined
}

/**
 * Defines `@storybook-community/storybook-dark-mode` parameters for Storybook stories.
 *
 * @see https://storybook.js.org/addons/@storybook/addon-themes#dark-mode
 * @returns An object containing the dark mode parameter configuration
 *
 * @example
 * ```ts
 * // ./storybook/preview.tsx
 *
 * export const preview = {
 *   parameters: {
 *     ...defineDarkModeParam({ darkClass: 'dark' })
 *   }
 * }
 */
export function defineDarkModeParam(darkMode: DarkModeParam) {
	return { darkMode }
}
