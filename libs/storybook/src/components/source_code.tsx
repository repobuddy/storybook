import { useEffect, useState } from 'react'
import { type SupportedLanguage, SyntaxHighlighter } from 'storybook/internal/components'
import { addons } from 'storybook/preview-api'
import { convert, ThemeProvider, type ThemeVars, themes } from 'storybook/theming'

const channel = addons.getChannel()

export type SourceCodeProps = {
	/**
	 * Source code to display.
	 */
	code?: string | undefined
	/**
	 * Language used for syntax highlighting.
	 */
	language?: 'json' | 'md' | 'html' | 'css' | 'js' | 'ts' | (string & {}) | undefined
	/**
	 * Storybook theme to use.
	 * When not set, the light or dark theme is picked based on the current dark mode.
	 */
	theme?: ThemeVars | undefined
	/**
	 * Initial dark mode state, used when `theme` is not set and the dark mode cannot be read from storage.
	 * Updates from `@storybook-community/storybook-dark-mode` take over after the first render.
	 */
	dark?: boolean | undefined
	/**
	 * Test identifier for the code block. Defaults to `'source-content'`.
	 */
	'data-testid'?: string | undefined
}

/**
 * A component that displays source code with Storybook's syntax highlighter.
 * It follows the dark mode of `@storybook-community/storybook-dark-mode` when `theme` is not set.
 *
 * @param props.code - Source code to display
 * @param props.language - Language used for syntax highlighting
 * @param props.theme - Storybook theme to use
 * @param props.dark - Initial dark mode state
 * @returns The highlighted source code wrapped in a `ThemeProvider`
 */
export function SourceCode({ code, language, theme, dark, 'data-testid': testId = 'source-content' }: SourceCodeProps) {
	const isDark = useIsDark(dark)

	return (
		<ThemeProvider theme={convert(theme ?? (isDark ? themes.dark : themes.light))}>
			<SyntaxHighlighter data-testid={testId} language={language as SupportedLanguage}>
				{code}
			</SyntaxHighlighter>
		</ThemeProvider>
	)
}

function useIsDark(initial: boolean | undefined) {
	const [isDark, setIsDark] = useState(() => readStoredDarkMode() ?? initial ?? false)

	useEffect(() => {
		channel.on('DARK_MODE', setIsDark)
		return () => channel.off('DARK_MODE', setIsDark)
	}, [])

	return isDark
}

// Reads the current dark mode from `@storybook-community/storybook-dark-mode` without referencing it.
function readStoredDarkMode() {
	try {
		const storedItem = window.localStorage.getItem('sb-addon-themes-3')
		if (typeof storedItem !== 'string') return undefined
		const current = JSON.parse(storedItem).current
		return current === 'dark' ? true : current === 'light' ? false : undefined
	} catch {
		return undefined
	}
}
