import { useEffect, useState } from 'react'
import { SyntaxHighlighter } from 'storybook/internal/components'
import type { Args, DecoratorFunction, Renderer } from 'storybook/internal/csf'
import { convert, ThemeProvider, themes } from 'storybook/internal/theming'
import { addons } from 'storybook/preview-api'

const channel = addons.getChannel()

/**
 * A decorator that shows the source code of a story above the rendered story.
 * The source code is taken from the story's `parameters.docs.source.code`.
 */
export function showDocSource<TRenderer extends Renderer = Renderer, TArgs = Args>(): DecoratorFunction<
	TRenderer,
	TArgs
> {
	return (Story, { parameters: { docs, darkMode } }) => {
		// This is a workaround to get the current dark mode from `storybook-dark-mode2` without referencing it.
		const storedItem = window.localStorage.getItem('sb-addon-themes-3')
		const current = typeof storedItem === 'string' ? JSON.parse(storedItem).current : darkMode?.current
		const [isDark, setIsDark] = useState((darkMode?.stylePreview && current === 'dark') ?? false)

		useEffect(() => {
			channel.on('DARK_MODE', setIsDark)

			return () => channel.off('DARK_MODE', setIsDark)
		}, [])

		return (
			<ThemeProvider theme={convert(docs?.theme ?? (isDark ? themes.dark : themes.light))}>
				<section
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '1rem'
					}}
				>
					<SyntaxHighlighter language={docs?.source?.language}>{docs?.source?.code}</SyntaxHighlighter>
					<Story />
				</section>
			</ThemeProvider>
		)
	}
}
