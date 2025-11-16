import { MoonIcon, SunIcon } from '@storybook/icons'

/**
 * Color theme variants default configuration.
 */
export const colorThemeVariants = {
	key: 'colorTheme',
	defaultValue: 'dark',
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
	}
}
