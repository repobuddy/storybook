import type { BrowserPage, Locator } from '@vitest/browser/context'
import { server } from '@vitest/browser/context'
import { basename } from 'pathe'
import { imageSnapshotSymbol } from './_symbols'
import { state } from './state'

declare module '@vitest/browser/context' {
	interface BrowserPage {
		imageSnapshot(
			this: BrowserPage,
			_options?: ImageSnapshotOptions,
		): Promise<{
			path: string
			base64: string
			[imageSnapshotSymbol]: boolean
		}>
	}
}

export type ImageSnapshotOptions = {
	element?: Element | Locator
}

export async function imageSnapshot(this: BrowserPage, _options?: ImageSnapshotOptions) {
	// console.log('imageSnapshot', this)
	// console.log('server', server)
	const root = server.config.root
	console.info('root', root)
	console.info('scope', state)
	console.info('scope.task.type', state.task.type)
	console.info('scope.task.name', state.task.name)
	const file = basename(state.filepath)
	const id = toId(state.task.name)
	return {
		[imageSnapshotSymbol]: true,
		...(await this.screenshot({
			base64: true,
			path: `__screenshots__/${file}/__results__/${id}-${state.snapshot[state.task.name].count++}.png`,
		})),
	}
}

function toId(name: string) {
	return `${name.replace(/[^a-z0-9]/gi, '-')}`
}
