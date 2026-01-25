import { useEffect, useState } from 'react'
import { SyntaxHighlighter } from 'storybook/internal/components'
import type { Args, DecoratorFunction, Renderer } from 'storybook/internal/csf'
import { addons } from 'storybook/preview-api'
import { convert, ThemeProvider, themes } from 'storybook/theming'
import { StoryCard } from '../components/story_card'

const channel = addons.getChannel()

/**
 * A decorator that shows the source code of a story above the rendered story.
 * The source code is taken from the story's `parameters.docs.source.code`.
 */
export function showDocSource<TRenderer extends Renderer = Renderer, TArgs = Args>(options?: {
	showOriginalSource?: boolean | undefined
}): DecoratorFunction<TRenderer, TArgs> {
	return (Story, { parameters: { docs, darkMode } }) => {
		// This is a workaround to get the current dark mode from `@storybook-community/storybook-dark-mode` without referencing it.
		const storedItem = window.localStorage.getItem('sb-addon-themes-3')
		const current = typeof storedItem === 'string' ? JSON.parse(storedItem).current : darkMode?.current
		const [isDark, setIsDark] = useState((darkMode?.stylePreview && current === 'dark') ?? false)

		useEffect(() => {
			channel.on('DARK_MODE', setIsDark)

			return () => channel.off('DARK_MODE', setIsDark)
		}, [])

		const code = options?.showOriginalSource
			? docs?.source?.originalSource
			: (docs?.source?.code ?? docs?.source?.originalSource)

		const language = code === docs?.source?.originalSource ? undefined : docs?.source?.language

		const isOriginalSource = code === docs?.source?.originalSource

		const content = <SyntaxHighlighter language={language}>{code}</SyntaxHighlighter>

		return (
			<ThemeProvider theme={convert(docs?.theme ?? (isDark ? themes.dark : themes.light))}>
				<section
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '1rem'
					}}
				>
					<Story />
					{isOriginalSource ? <StoryCard className="bg-gray-100 dark:bg-gray-900">{content}</StoryCard> : content}
				</section>
			</ThemeProvider>
		)
	}
}
