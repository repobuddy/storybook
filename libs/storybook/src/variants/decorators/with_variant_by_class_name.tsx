import type { ReactNode } from 'react'
import type { DecoratorFunction, Renderer } from 'storybook/internal/types'

export type WithVariantByClassNameOptions = {
	key: string
	variants: Record<
		string,
		{
			icon?: ReactNode | undefined
			label?: string | undefined
			value: string
		}
	>
}

export function withVariantByClassName<TRenderer extends Renderer = Renderer>(
	options: WithVariantByClassNameOptions
): DecoratorFunction<TRenderer> {
	return (storyFn, context) => {
		const _overrides = context.parameters[options.key] as Record<string, string> | undefined
		return storyFn()
	}
}
