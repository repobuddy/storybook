import type { ClassNameProps, StyleProps } from '@just-web/css'
import { prettify, type UserConfig } from 'htmlfy'
import React, { useEffect, useState } from 'react'

export type ShowHtmlProps = ClassNameProps &
	StyleProps & {
		selector?: string | undefined
		config?: UserConfig | undefined
	}

/**
 * A component that displays the HTML of a subject element.
 * Uses `htmlfy` internally to format and prettify the HTML output.
 *
 * @param selector - CSS selector to find the subject element. Defaults to '[data-testid="subject"]'
 * @param config - Configuration options passed to htmlfy's prettify function
 * @param props - Additional props (className, style) passed to the pre element
 * @returns A pre element containing the formatted HTML
 */
export function ShowHtml({ selector = '[data-testid="subject"]', config, ...props }: ShowHtmlProps) {
	const [html, setHtml] = useState('')
	useEffect(() => {
		const subject = document.querySelector(selector)
		if (subject) {
			setHtml(
				prettify(subject.outerHTML, {
					tag_wrap: 40,
					...config
				})
			)
		} else {
			setHtml('No subject found')
		}
	}, [selector])
	return <pre {...props}>{html}</pre>
}
