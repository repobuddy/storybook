import { isRunningInTest } from '@repobuddy/test'
import { type ReactNode, useCallback, useEffect, useMemo, useState } from 'react'
import { SyntaxHighlighter } from 'storybook/internal/components'
import type { Args, DecoratorFunction, Renderer } from 'storybook/internal/csf'
import { addons } from 'storybook/preview-api'
import { convert, ThemeProvider, themes } from 'storybook/theming'
import { twJoin } from 'tailwind-merge'
import { StoryCard, type StoryCardProps } from '../components/story_card'
import { StoryCardScope } from '../contexts/_story_card_scope'

const channel = addons.getChannel()

/**
 * Options for the {@link showSource} decorator.
 *
 * @property className - Class name to apply to the source card. Can be a string or a function that receives the card state and returns a string.
 * @property source - Source code to display. A string, or a function `(originalSource) => string` that receives the story's original source and returns the code to show. Defaults to the story's docs source.
 * @property showOriginalSource - When true, use the story's original (untransformed) source instead of the rendered source.
 * @property placement - Where to show the source code relative to the story. Defaults to `'before'`.
 */
export type ShowSourceOptions = Pick<StoryCardProps, 'className' | 'data-testid'> & {
	source?: ((source: string | undefined) => string) | string | undefined
	showOriginalSource?: boolean | undefined
	placement?: 'before' | 'after' | undefined
}

/**
 * A decorator that shows the source code of a story relative to the rendered story.
 * The source code is taken from the story's `parameters.docs.source.code`.
 *
 * @param options - Options for the showSource decorator
 * @param options.showOriginalSource - Whether to show the original source code in a card
 * @param options.className - Class name to apply to the card
 * @param options.source - Source code to show. Can be a string, or a function `(originalSource) => string` that receives the story's original source and returns the code to display.
 * @param options.placement - Where to show the source code relative to the story.
 * @returns A decorator function that shows the source code of a story above or below the rendered story
 */
export function showSource<TRenderer extends Renderer = Renderer, TArgs = Args>({
	className,
	placement,
	showOriginalSource,
	source,
	...options
}: ShowSourceOptions = {}): DecoratorFunction<TRenderer, TArgs> {
	if (isRunningInTest()) {
		return (Story) => <Story />
	}

	return (Story, { parameters: { docs, darkMode } }) => {
		// This is a workaround to get the current dark mode from `@storybook-community/storybook-dark-mode` without referencing it.
		const storedItem = window.localStorage.getItem('sb-addon-themes-3')
		const current = typeof storedItem === 'string' ? JSON.parse(storedItem).current : darkMode?.current
		const [isDark, setIsDark] = useState((darkMode?.stylePreview && current === 'dark') ?? false)

		useEffect(() => {
			channel.on('DARK_MODE', setIsDark)

			return () => channel.off('DARK_MODE', setIsDark)
		}, [])

		const originalSource = showOriginalSource
			? docs?.source?.originalSource
			: (docs?.source?.code ?? docs?.source?.originalSource)

		const code = typeof source === 'function' ? source(originalSource) : (source ?? originalSource)

		const language = code === docs?.source?.originalSource ? undefined : docs?.source?.language

		const isOriginalSource = code === docs?.source?.originalSource

		const sourceContent = useMemo(
			() => (
				<SyntaxHighlighter data-testid="source-content" language={language}>
					{code}
				</SyntaxHighlighter>
			),
			[code, language]
		)

		const showBefore = (placement ?? 'before') === 'before'

		const sourceCardClassName = useCallback(
			(state: Pick<StoryCardProps, 'status' | 'appearance'> & { defaultClassName: string }) => {
				const modifiedState = {
					...state,
					defaultClassName: twJoin(
						state.defaultClassName,
						isOriginalSource && 'rbsb:bg-transparent rbsb:dark:bg-transparent'
					)
				}

				return typeof className === 'function'
					? className(modifiedState)
					: twJoin(modifiedState.defaultClassName, className)
			},
			[className, isOriginalSource]
		)

		const theme = convert(docs?.theme ?? (isDark ? themes.dark : themes.light))

		function DocSourceCard({ children }: { children: ReactNode }) {
			return <div>{children}</div>
		}

		if (isRunningInTest()) {
			return <Story />
		}

		// For 'before', use StoryCardScope so this card participates in parent scope order.
		// Wrap content in ThemeProvider so SyntaxHighlighter has theme when rendered by parent.
		if (showBefore) {
			const scopeContent = (
				<ThemeProvider theme={theme}>
					<DocSourceCard>{sourceContent}</DocSourceCard>
				</ThemeProvider>
			)
			return <StoryCardScope Story={Story} content={scopeContent} className={sourceCardClassName} appearance="source" />
		}

		const storyCard = (
			<StoryCard className={sourceCardClassName} appearance="source" {...options}>
				<DocSourceCard>{sourceContent}</DocSourceCard>
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
