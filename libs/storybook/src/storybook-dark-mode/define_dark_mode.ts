import type { ThemeVars } from '@storybook/theming'

/**
 * Configuration parameters for `storybook-dark-mode`.
 */
export interface DarkModeParam {
	/** The current theme ('dark' or 'light') */
	current?: 'dark' | 'light'
	/** CSS class(es) to apply in dark mode */
	darkClass?: string | string[]
	/** CSS class(es) to apply in light mode */
	lightClass?: string | string[]
	/** Dark theme variables */
	dark?: ThemeVars
	/** Light theme variables */
	light?: ThemeVars
	/** Element to apply theme classes to ('html' or 'body') */
	classTarget?: 'html' | 'body'
	/** Whether to apply theme styles to preview iframe */
	stylePreview?: boolean
}

/**
 * Defines `storybook-dark-mode` parameters for Storybook stories.
 *
 * @see https://storybook.js.org/addons/@storybook/addon-themes#dark-mode
 *
 * @param darkMode - Configuration for dark mode parameters
 * @param darkMode.current - The current theme ('dark' or 'light')
 * @param darkMode.darkClass - CSS class(es) to apply in dark mode
 * @param darkMode.lightClass - CSS class(es) to apply in light mode
 * @param darkMode.dark - Dark theme variables
 * @param darkMode.light - Light theme variables
 * @param darkMode.classTarget - Element to apply theme classes to ('html' or 'body')
 * @param darkMode.stylePreview - Whether to apply theme styles to preview iframe
 * @returns An object containing the dark mode parameter configuration
 */
export function defineDarkModeParam(darkMode: DarkModeParam) {
	return { darkMode }
}
