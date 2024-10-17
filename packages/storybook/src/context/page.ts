import {
	getByAltText,
	getByLabelText,
	getByPlaceholderText,
	getByRole,
	getByTestId,
	getByText,
	getByTitle,
} from '@storybook/test'
import type { BrowserCommands, BrowserPage, CDPSession } from '@vitest/browser/context'

let ctx: Awaited<typeof import('@vitest/browser/context')>

if ((globalThis as any).__vitest_browser__) {
	ctx = await import('@vitest/browser/context')
}

export function cdp(): CDPSession {
	return ctx?.cdp()
}

export const commands = new Proxy<BrowserCommands>({} as any, {
	get(target, prop) {
		return (target as any)[prop] ?? (ctx?.commands as any)[prop]
	},
})

export const page = new Proxy<BrowserPage>(
	{
		getByAltText,
		getByRole,
		getByTestId,
		getByText,
		getByTitle,
		getByPlaceholder: getByPlaceholderText,
		getByLabelText,
	} as any,
	{
		get(target, prop) {
			return (target as any)[prop] ?? (ctx?.page as any)[prop]
		},
	},
)
