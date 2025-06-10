import React, { useEffect, type PropsWithChildren } from 'react'
import type { DecoratorFunction, Renderer } from 'storybook/internal/types'
import { pluckVariantFromContext } from '../helpers.js'
import type { ClassNameStrategy, VariantOptions } from '../types.js'

export function withVariants<TRenderer extends Renderer = Renderer>(
	...variants: VariantOptions[]
): DecoratorFunction<TRenderer> {
	return (storyFn, context) => {
		console.debug('withVariants', variants)
		if (variants.length === 0) return storyFn()

		const variant = variants.shift()!
		const current = pluckVariantFromContext(context, variant.key)
		console.debug('current', current)

		if (variant.strategy.type === 'className') {
			return (
				<ClassNameStrategyDecorator variant={variant}>
					{withVariants(...variants)(storyFn, context)}
				</ClassNameStrategyDecorator>
			)
		}
		for (const variant of variants) {
			const _overrides = context.parameters[variant.key] as Record<string, string> | undefined
		}
		return storyFn()
	}
}

export function ClassNameStrategyDecorator({
	children,
	variant
}: PropsWithChildren<{ variant: VariantOptions<ClassNameStrategy> }>) {
	const selector = variant.strategy.selector

	useEffect(() => {
		const element = document.querySelector(selector)
		if (!element) return
	}, [variant])
	return <>{children}</>
}
