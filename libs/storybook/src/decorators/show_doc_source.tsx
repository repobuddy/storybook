import { type ReactNode, useEffect, useRef, useState } from 'react'
import { SyntaxHighlighter } from 'storybook/internal/components'
import type { Args, DecoratorFunction, Renderer } from 'storybook/internal/csf'
import { addons } from 'storybook/preview-api'
import { convert, ThemeProvider, themes } from 'storybook/theming'
import { twJoin } from 'tailwind-merge'
import { StoryCard, type StoryCardProps } from '../components/story_card'
import { StoryCardScope } from '../contexts/_story_card_scope'

const channel = addons.getChannel()

/**
 * Data attribute on the doc-source card root. Use this selector so waitForDocSourceContent
 * can find all showDocSource instances in the given document (no iframe lookup).
 */
export const DOC_SOURCE_ROOT_ATTR = 'data-doc-source-root'
/** Selector for doc-source roots that receive data-content when source is ready. */
export const DOC_SOURCE_READY_SELECTOR = `[${DOC_SOURCE_ROOT_ATTR}]`

export type WaitForDocSourceContentOptions = {
	/** When roots exist, wait for all to have data-content at most this long (ms). Default 1500. */
	contentReadyTimeoutMs?: number
}

/**
 * Wait until all roots have data-content attribute (ready), using MutationObserver.
 * Resolves when every element has data-content, or after timeout.
 */
function waitForAllContentReady(roots: Element[], timeoutMs: number): Promise<void> {
	if (roots.length === 0) return Promise.resolve()

	const checkAll = () => roots.every((r) => r.hasAttribute('data-content'))

	if (checkAll()) return Promise.resolve()

	return new Promise((resolve) => {
		let resolved = false
		const done = () => {
			if (resolved) return
			resolved = true
			for (const o of observers) o.disconnect()
			clearTimeout(t)
			resolve()
		}

		const observers = roots.map((root) => {
			const ob = new MutationObserver(() => {
				if (checkAll()) done()
			})
			ob.observe(root, { attributes: true, attributeFilter: ['data-content'] })
			return ob
		})

		const t = setTimeout(done, timeoutMs)
	})
}

function isWaitForDocSourceContentOptions(x: unknown): x is WaitForDocSourceContentOptions {
	return typeof x === 'object' && x !== null && 'contentReadyTimeoutMs' in x
}

/**
 * Play helper: wait for showDocSource content to be ready (SyntaxHighlighter has rendered).
 * The StoryCard is already in the DOM when play runs; this only waits for content to be ready.
 * Use in story play when the story uses showDocSource so snapshots capture the source.
 * When used as a story play function, the play context is passed as first argument and ignored.
 *
 * @param contextOrOptions - When called as play, story context (ignored). Otherwise options.
 * @param contextOrOptions.contentReadyTimeoutMs - Wait for all roots to have data-content at most this long (ms). Default 1500.
 * @see DOC_SOURCE_READY_SELECTOR - selector to find doc-source roots in the document
 */
export async function waitForDocSourceContent(
	contextOrOptions?: WaitForDocSourceContentOptions | unknown
): Promise<void> {
	const options = isWaitForDocSourceContentOptions(contextOrOptions) ? contextOrOptions : undefined
	const contentReadyMs = options?.contentReadyTimeoutMs ?? 1500

	const roots = Array.from(document.querySelectorAll(DOC_SOURCE_READY_SELECTOR))
	if (roots.length === 0) return

	await waitForAllContentReady(roots, contentReadyMs)
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
					const element = root.querySelector('pre code, [class*="syntax"]')
					if (element?.textContent?.trim()) {
						root.setAttribute('data-content', 'ready')
						return true
					}
					return false
				}
				if (check()) return
				const observer = new MutationObserver(() => {
					if (check()) observer.disconnect()
				})
				observer.observe(root, { childList: true, subtree: true, characterData: true })
				return () => observer.disconnect()
			}, [])
			return (
				<div ref={rootRef} {...{ [DOC_SOURCE_ROOT_ATTR]: true }}>
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
