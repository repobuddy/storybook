import { type ReactNode, useEffect, useRef, useState } from 'react'
import { SyntaxHighlighter } from 'storybook/internal/components'
import type { Args, DecoratorFunction, Renderer } from 'storybook/internal/csf'
import { addons } from 'storybook/preview-api'
import { convert, ThemeProvider, themes } from 'storybook/theming'
import { twJoin } from 'tailwind-merge'
import { StoryCard, type StoryCardProps } from '../components/story_card'
import { StoryCardScope } from '../contexts/_story_card_scope'

const channel = addons.getChannel()

/** Selector for the doc-source root element that receives data-content when source text is present. */
export const DOC_SOURCE_READY_SELECTOR = '[data-doc-source-root]'

/**
 * Play helper: wait for showDocSource content to be ready (SyntaxHighlighter has rendered).
 * Use in story play when the story uses showDocSource so snapshots capture the source.
 *
 * @param context - Story play context; uses canvasElement's ownerDocument when provided
 * @param options - timeoutMs (default 3000)
 */
export async function waitForDocSourceContent(
	context?: { canvasElement?: HTMLElement },
	options?: { timeoutMs?: number }
): Promise<void> {
	const doc = context?.canvasElement?.ownerDocument ?? document
	const timeoutMs = options?.timeoutMs ?? 3000
	const start = Date.now()
	return new Promise((resolve) => {
		function check() {
			const el = doc.querySelector(`${DOC_SOURCE_READY_SELECTOR}[data-content]`)
			if (el) {
				resolve()
				return
			}
			if (Date.now() - start >= timeoutMs) resolve()
			else setTimeout(check, 50)
		}
		check()
	})
}

/**
 * A decorator that shows the source code of a story above the rendered story.
 * The source code is taken from the story's `parameters.docs.source.code`.
 *
 * @param options - Options for the showDocSource decorator
 * @param options.showOriginalSource - Whether to show the original source code in a card
 * @param options.className - Class name to apply to the card
 * @param options.source - Source code to show. Can be a string, or a function `(originalSource) => string` that receives the story's original source and returns the code to display.
 * @param options.placement - Where to show the source code relative to the story.
 * @returns A decorator function that shows the source code of a story above or below the rendered story
 */
export function showDocSource<TRenderer extends Renderer = Renderer, TArgs = Args>(
	options?: Pick<StoryCardProps, 'className'> & {
		source?: ((source: string | undefined) => string) | string | undefined
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

		const originalSource = options?.showOriginalSource
			? docs?.source?.originalSource
			: (docs?.source?.code ?? docs?.source?.originalSource)

		const code =
			typeof options?.source === 'function' ? options?.source(originalSource) : (options?.source ?? originalSource)

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

		function DocSourceCard({ children }: { children: ReactNode }) {
			const rootRef = useRef<HTMLDivElement>(null)
			useEffect(() => {
				const root = rootRef.current
				if (!root) return
				const check = () => {
					const hasText = root.querySelector('pre code, [class*="syntax"]')?.textContent?.trim().length ?? 0
					if (hasText >= 20) {
						root.setAttribute('data-content', 'ready')
					}
				}
				check()
				const t = setInterval(check, 50)
				return () => clearInterval(t)
			}, [])
			return (
				<div ref={rootRef} data-doc-source-root>
					{children}
				</div>
			)
		}

		if (showBefore) {
			return (
				<ThemeProvider theme={theme}>
					<StoryCardScope
						Story={Story}
						content={<DocSourceCard>{sourceContent}</DocSourceCard>}
						className={sourceCardClassName}
						appearance="source"
					/>
				</ThemeProvider>
			)
		}

		const storyCard = (
			<StoryCard className={sourceCardClassName} appearance="source">
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
