import { MoonIcon, SunIcon } from '@storybook/icons'
import type { VariantOptions } from '../types.ts'

/**
 * Color theme variants default configuration.
 */
export const colorThemeVariants = {
	key: 'colorTheme',
	strategy: {
		type: 'className',
		selector: 'html'
	},
	variants: {
		light: {
			icon: <SunIcon aria-hidden="true" />,
			title: 'Change color theme to light mode',
			value: 'light'
		},

		dark: {
			icon: <MoonIcon aria-hidden="true" />,
			title: 'Change color theme to dark mode',
			value: 'dark'
		}
	},
	defaultValue: 'dark'
} satisfies VariantOptions
