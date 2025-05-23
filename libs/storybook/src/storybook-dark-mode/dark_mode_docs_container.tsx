import { DocsContainer, type DocsContextProps } from '@storybook/blocks'
import { type ThemeVars, themes } from '@storybook/theming'
import { type PropsWithChildren, useEffect, useState } from 'react'
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode'

/**
 * Creates a `DocsContainer` for `storybook` that works with `storybook-dark-mode`.
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
		const [isDark, setDark] = useState(true)

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
