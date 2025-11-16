import { MoonIcon, SunIcon } from '@storybook/icons'
import React from 'react'
import type { VariantConfigOptions } from '../types.js'

/**
 * Color theme variants default configuration.
 */
export const colorThemeVariants = {
	key: 'colorTheme',
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
} satisfies VariantConfigOptions
