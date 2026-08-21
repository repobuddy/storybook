import { DocsContainer, type DocsContextProps } from '@storybook/addon-docs/blocks'
import { DARK_MODE_EVENT_NAME } from '@storybook-community/storybook-dark-mode'
import { type PropsWithChildren, useEffect, useState } from 'react'
import { type ThemeVars, themes } from 'storybook/theming'

/**
 * Creates a `DocsContainer` for `storybook` that works with `@storybook-community/storybook-dark-mode`.
 *
 * @see https://github.com/hipstersmoothie/storybook-dark-mode/issues/282
 *
 * @example
 * ```ts
 * // .storybook/preview.tsx
 * const preview: Preview = {
 *   parameters: {
 *     docs: {
 *       container: createDarkModeDocsContainer()
 *     }
 *   }
 * }
 * ```
 */
export function createDarkModeDocsContainer(
	customThemes?:
		| {
				light?: ThemeVars | undefined
				dark?: ThemeVars | undefined
		  }
		| undefined
) {
	return function DarkModeDocsContainer(props: PropsWithChildren<{ context: DocsContextProps }>) {
		const [isDark, setDark] = useState(readStoredMode)

		useEffect(() => {
			props.context.channel.on(DARK_MODE_EVENT_NAME, setDark)

			return () => props.context.channel.removeListener(DARK_MODE_EVENT_NAME, setDark)
		}, [props.context.channel])
		return (
			<DocsContainer
				{...props}
				theme={isDark ? (customThemes?.dark ?? themes.dark) : (customThemes?.light ?? themes.light)}
			>
				{props.children}
			</DocsContainer>
		)
	}
}

/**
 * Reads the mode `@storybook-community/storybook-dark-mode` persisted,
 * so the container renders the correct theme on first paint
 * instead of waiting for the first `DARK_MODE` event.
 */
function readStoredMode() {
	try {
		const stored = globalThis.localStorage?.getItem('sb-addon-themes-3')
		if (stored) return JSON.parse(stored).current === 'dark'
	} catch {
		// ignore malformed or unavailable storage
	}
	return globalThis.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false
}
