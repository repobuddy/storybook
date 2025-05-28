import type { ClassNameProps, StyleProps } from '@just-web/css'
import { prettify, type UserConfig } from 'htmlfy'
import { useEffect, useState } from 'react'

export type ShowHtmlProps = ClassNameProps &
	StyleProps & {
		selector?: string | undefined
		config?: UserConfig | undefined
	}
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
