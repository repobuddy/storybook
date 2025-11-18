import type { CSSProperties } from '@just-web/css'
import { toDOMStyle } from '@just-web/css'
import { useDarkMode } from '@storybook-community/storybook-dark-mode'
import type { DecoratorFunction } from 'storybook/internal/types'
import type { DarkModeParam } from './define_dark_mode.js'

/**
 * Applies additional dark mode behavior.
 *
 * @see https://storybook.js.org/addons/@storybook/addon-themes#dark-mode
 * @returns A decorator function that applies additional dark mode behavior.
 */
export function withDarkMode(
	options?:
		| {
				/**
				 * CSS class(es) to apply to the body element.
				 *
				 * Useful when using Tailwind CSS and `classTarget: 'html'`
				 */
				bodyClass?: string | string[] | undefined
				/**
				 * CSS style(s) to apply to the body element.
				 *
				 * Useful when using Tailwind CSS and `classTarget: 'html'`
				 */
				bodyStyle?: CSSProperties | undefined
		  }
		| undefined
): DecoratorFunction<any, any> {
	return function darkModeDecorator(Story, { parameters }) {
		const darkMode = parameters.darkMode as DarkModeParam | undefined
		if (!darkMode) return <Story />

		// biome-ignore lint/correctness/useHookAtTopLevel: on purpose
		const dark = useDarkMode()
		const target = darkMode.classTarget === 'html' ? document.documentElement : document.body
		if (dark) {
			removeStyle(target, darkMode.lightStyle)
			addStyle(target, darkMode.darkStyle)
		} else {
			removeStyle(target, darkMode.darkStyle)
			addStyle(target, darkMode.lightStyle)
		}
		if (options?.bodyClass) {
			addClass(document.body, options.bodyClass)
		}
		if (options?.bodyStyle) {
			addStyle(document.body, options.bodyStyle)
		}
		return <Story />
	}
}

function addClass(target: HTMLElement, className: string | string[] | undefined) {
	if (!className) return
	if (typeof className === 'string') {
		target.classList.add(...className.split(' '))
	} else if (Array.isArray(className)) {
		target.classList.add(...className)
	}
}

function addStyle(target: HTMLElement, style: CSSProperties | undefined) {
	if (style) {
		for (const [key, value] of Object.entries(toDOMStyle(style)!)) {
			target.style.setProperty(key, value as any)
		}
	}
}

function removeStyle(target: HTMLElement, style: CSSProperties | undefined) {
	if (style) {
		for (const key of Object.keys(toDOMStyle(style)!)) {
			target.style.removeProperty(key)
		}
	}
}
