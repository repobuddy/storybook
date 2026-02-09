import { useEffect, useState } from 'react'
import { SyntaxHighlighter } from 'storybook/internal/components'
import type { Args, DecoratorFunction, Renderer } from 'storybook/internal/csf'
import { addons } from 'storybook/preview-api'
import { convert, ThemeProvider, themes } from 'storybook/theming'
import { twJoin } from 'tailwind-merge'
import { StoryCard, type StoryCardProps } from '../components/story_card'
import { StoryCardScope } from '../contexts/_story_card_scope'

const channel = addons.getChannel()

/**
 * A decorator that shows the source code of a story above the rendered story.
 * The source code is taken from the story's `parameters.docs.source.code`.
 *
 * @param options - Options for the showDocSource decorator
 * @param options.showOriginalSource - Whether to show the original source code in a card
 * @param options.className - Class name to apply to the card
 * @param options.source - Source code to show if provided.
 * @param options.placement - Where to show the source code relative to the story.
 * @returns A decorator function that shows the source code of a story above or below the rendered story
 */
export function showDocSource<TRenderer extends Renderer = Renderer, TArgs = Args>(
	options?: Pick<StoryCardProps, 'className'> & {
		source?: string | undefined
		showOriginalSource?: boolean | undefined
		/**
		 * Where to show the source code relative to the story.
		 *
		 * @default 'after'
		 */
		placement?: 'before' | 'after' | undefined
	}
): DecoratorFunction<TRenderer, TArgs> {
	return (Story, { parameters: { docs, darkMode } }) => {
		// This is a workaround to get the current dark mode from `@storybook-community/storybook-dark-mode` without referencing it.
		const storedItem = window.localStorage.getItem('sb-addon-themes-3')
		const current = typeof storedItem === 'string' ? JSON.parse(storedItem).current : darkMode?.current
		const [isDark, setIsDark] = useState((darkMode?.stylePreview && current === 'dark') ?? false)

		useEffect(() => {
			channel.on('DARK_MODE', setIsDark)

			return () => channel.off('DARK_MODE', setIsDark)
		}, [])

		const code =
			options?.source ??
			(options?.showOriginalSource
				? docs?.source?.originalSource
				: (docs?.source?.code ?? docs?.source?.originalSource))

		const language = code === docs?.source?.originalSource ? undefined : docs?.source?.language

		const isOriginalSource = code === docs?.source?.originalSource

		const sourceContent = <SyntaxHighlighter language={language}>{code}</SyntaxHighlighter>

		const showBefore = options?.placement === 'before'

		const sourceCardClassName = (
			state: Pick<StoryCardProps, 'status' | 'appearance'> & { defaultClassName: string }
		) => {
			const modifiedState = {
				...state,
				defaultClassName: twJoin(
					state.defaultClassName,
					isOriginalSource && 'rbsb:bg-transparent rbsb:dark:bg-transparent'
				)
			}

			const className = options?.className
			return typeof className === 'function'
				? className(modifiedState)
				: twJoin(modifiedState.defaultClassName, className)
		}

		const theme = convert(docs?.theme ?? (isDark ? themes.dark : themes.light))

		if (showBefore) {
			return (
				<ThemeProvider theme={theme}>
					<StoryCardScope Story={Story} content={sourceContent} className={sourceCardClassName} appearance="source" />
				</ThemeProvider>
			)
		}

		const storyCard = (
			<StoryCard className={sourceCardClassName} appearance="source">
				{sourceContent}
			</StoryCard>
		)

		return (
			<ThemeProvider theme={theme}>
				<section
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '1rem'
					}}
				>
					<Story />
					{storyCard}
				</section>
			</ThemeProvider>
		)
	}
}
