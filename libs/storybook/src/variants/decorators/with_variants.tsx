import type { DecoratorFunction, Renderer } from 'storybook/internal/types'
import type { VariantOptions } from '../types.ts'

export function withVariants<TRenderer extends Renderer = Renderer>(
	...variants: VariantOptions[]
): DecoratorFunction<TRenderer> {
	return (storyFn, context) => {
		console.debug('withVariants', variants)

		for (const variant of variants) {
			const _overrides = context.parameters[variant.key] as Record<string, string> | undefined
		}
		return storyFn()
	}
}
