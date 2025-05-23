import type { CSSProperties } from '@just-web/css'
import { toDOMStyle } from '@just-web/css'
import { useDarkMode } from 'storybook-dark-mode'
import type { DecoratorFunction } from 'storybook/internal/types'

interface StoryRootOptions {
	classTarget?: 'html' | 'body' | undefined
	dark?:
		| {
				className?: string | string[] | undefined
				style?: CSSProperties | undefined
		  }
		| undefined
	light?:
		| {
				className?: string | string[] | undefined
				style?: CSSProperties | undefined
		  }
		| undefined
}

export function withStoryRoot(param: StoryRootOptions): DecoratorFunction<any, any> {
	return function storyRootDecorator(Story) {
		const dark = useDarkMode()
		if (param.classTarget === 'html') {
			if (dark) {
				removeClass(param.light?.className)
				addClass(param.dark?.className)
				removeStyle(param.light?.style)
				addStyle(param.dark?.style)
			} else {
				removeClass(param.dark?.className)
				addClass(param.light?.className)
				removeStyle(param.dark?.style)
				addStyle(param.light?.style)
			}
			return <Story />
		}

		if (dark) {
			return (
				<div
					className={
						typeof param.dark?.className === 'string' ? param.dark.className : param.dark?.className?.join(' ')
					}
					style={param.dark?.style}
				>
					<Story />
				</div>
			)
		}
		return (
			<div
				className={
					typeof param.light?.className === 'string' ? param.light.className : param.light?.className?.join(' ')
				}
				style={param.light?.style}
			>
				<Story />
			</div>
		)
	}
}

function addClass(className: string | string[] | undefined) {
	if (!className) return
	if (typeof className === 'string') {
		document.body.classList.add(...className.split(' '))
	} else if (Array.isArray(className)) {
		document.body.classList.add(...className)
	}
}

function removeClass(className: string | string[] | undefined) {
	if (!className) return
	if (typeof className === 'string') {
		document.body.classList.remove(...className.split(' '))
	} else if (Array.isArray(className)) {
		document.body.classList.remove(...className)
	}
}

function addStyle(style: CSSProperties | undefined) {
	if (style) {
		for (const [key, value] of Object.entries(toDOMStyle(style)!)) {
			document.body.style.setProperty(key, value as any)
		}
	}
}

function removeStyle(style: CSSProperties | undefined) {
	if (style) {
		for (const key of Object.keys(toDOMStyle(style)!)) {
			document.body.style.removeProperty(key)
		}
	}
}
