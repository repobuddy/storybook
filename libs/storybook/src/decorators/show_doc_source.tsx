import { useEffect } from 'react'
import Highlight from 'react-highlight'
import type { Args, DecoratorFunction, Renderer } from 'storybook/internal/csf'

let currentTheme: { key: string; element: HTMLElement | undefined }

/**
 * A decorator that shows the source code of a story above the rendered story.
 * The source code is taken from the story's `parameters.docs.source.code`.
 */
export function showDocSource<TRenderer extends Renderer = Renderer, TArgs = Args>({
	theme,
	language = 'tsx'
}: {
	theme?: { href: string } | { style: string }
	/**
	 * The highlight.js class name of the language to use for the code block.
	 * @default 'tsx'
	 *
	 * @see https://github.com/highlightjs/highlight.js/blob/main/SUPPORTED_LANGUAGES.md
	 */
	language?: string | undefined
} = {}): DecoratorFunction<TRenderer, TArgs> {
	return (
		Story,
		{
			parameters: {
				docs: { source }
			}
		}
	) => {
		useEffect(() => {
			const [themeName, style] = resolveTheme(theme)
			if (currentTheme?.key !== themeName && currentTheme?.element) {
				currentTheme.element.remove()
			}

			if (currentTheme?.key !== themeName) {
				const element =
					themeName !== undefined ? (!style ? injectThemeLink(themeName) : injectThemeStyle(style)) : undefined
				currentTheme = { key: themeName, element }
			}
		}, [theme])
		return (
			<section
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '1rem'
				}}
			>
				<Highlight className={source.language ?? language}>{source.code}</Highlight>
				<Story />
			</section>
		)
	}
}

function resolveTheme(theme?: { href: string } | { style: string }) {
	if (!theme) return []
	if ('href' in theme) return [theme.href]
	if ('style' in theme) return [theme.style, theme.style]

	return []
}

function injectThemeLink(href: string) {
	const link = document.createElement('link')
	link.rel = 'stylesheet'
	link.href = href
	document.head.appendChild(link)
	return link
}

function injectThemeStyle(style: string) {
	const styleElement = document.createElement('style')
	styleElement.textContent = style
	document.head.appendChild(styleElement)
	return styleElement
}
