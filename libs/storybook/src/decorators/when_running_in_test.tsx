import type { Decorator, StrictArgs } from '@storybook/react'
import { ctx } from './when_running_in_text.ctx.ts'

/**
 * executes the specified decorator or handler if the code is running in test.
 */
export function whenRunningInTest<TArgs = StrictArgs>(
	decoratorOrHandler: // biome-ignore lint/suspicious/noConfusingVoidType: on purpose
		| ((...args: Parameters<Decorator<TArgs>>) => ReturnType<Decorator<TArgs>> | undefined | void)
		// biome-ignore lint/suspicious/noConfusingVoidType: on purpose
		| (() => ReturnType<Decorator<TArgs>> | undefined | void)
): Decorator<TArgs> {
	return function RunInTest(Story, context) {
		return ctx.isRunningInTest() ? (decoratorOrHandler(Story, context) ?? <Story />) : <Story />
	}
}
