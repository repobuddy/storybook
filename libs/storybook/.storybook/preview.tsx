import type { Preview } from '@storybook/react-vite'
import { setupMonaco } from 'storybook-addon-code-editor'
import { defineDarkModeParam } from '#repobuddy/storybook/storybook-dark-mode'
import { onMonacoLoad } from './code-editor'

import './tailwind.css'

setupMonaco({ onMonacoLoad })

const preview: Preview = {
	parameters: {
		docs: {
			codePanel: true
		},
		options: {
			// storySort must be a self-contained inline function — Storybook 10+ performs
			// static AST analysis and rejects variable references and function-call results.
			// TypeScript annotations are intentionally omitted from the helpers below:
			// Storybook parses this function body in plain Node.js, which does not understand
			// TypeScript syntax.
			// @ts-expect-error -- `a.type` is not in Storybook's public sort entry type
			storySort: (a, b) => {
				const order = [
					'Overview',
					'Changelog',
					'components',
					'decorators',
					'parameters',
					'arg-types',
					'types',
					'manager',
					'testing',
					'*'
				]
				const tag = ['playground', 'use-case', 'example', 'spec', 'props', 'edge-case', 'unit']

				return (
					compareByTitle(a.title, b.title) ??
					compareByType(a.type, b.type) ??
					compareByTag(a.tags, b.tags) ??
					a.name.localeCompare(b.name, undefined, { numeric: true })
				)

				// @ts-expect-error -- untyped by design, see above
				function compareByTitle(aTitle, bTitle) {
					if (aTitle === bTitle) return undefined
					return (
						compareByKindOrder(aTitle, bTitle) ||
						aTitle.localeCompare(bTitle, undefined, { numeric: true }) ||
						undefined
					)
				}

				// @ts-expect-error -- untyped by design, see above
				function compareByKindOrder(aTitle, bTitle) {
					const aParts = aTitle.split('/')
					const bParts = bTitle.split('/')
					let currentOrder = order
					const maxDepth = Math.max(aParts.length, bParts.length)
					for (let depth = 0; depth < maxDepth; depth++) {
						const aPart = aParts[depth]
						const bPart = bParts[depth]
						if (aPart === undefined && bPart !== undefined) return -1
						if (aPart !== undefined && bPart === undefined) return 1
						if (aPart === bPart) {
							const child = childOrderOf(aPart, currentOrder)
							if (child) currentOrder = child
							continue
						}
						const aPos = positionOf(aPart, currentOrder)
						const bPos = positionOf(bPart, currentOrder)
						if (aPos !== bPos) return aPos - bPos
						return aPart.localeCompare(bPart, undefined, { numeric: true })
					}
					return 0
				}

				// @ts-expect-error -- untyped by design, see above
				function positionOf(name, orderList) {
					const idx = indexIn(name, orderList)
					if (idx !== -1) return idx
					const wildcardIdx = indexIn('*', orderList)
					return wildcardIdx !== -1 ? wildcardIdx : orderList.length
				}

				// @ts-expect-error -- untyped by design, see above
				function childOrderOf(name, orderList) {
					for (let i = 0; i < orderList.length; i++) {
						const entry = orderList[i]
						if (Array.isArray(entry) && entry[0] === name) return entry[1]
					}
					return undefined
				}

				// @ts-expect-error -- untyped by design, see above
				function compareByType(aType, bType) {
					if (aType === bType) return undefined
					if (aType === 'docs') return -1
					if (bType === 'docs') return 1
					return undefined
				}

				// @ts-expect-error -- untyped by design, see above
				function compareByTag(aTags, bTags) {
					const aPriority = tagPriorityOf(aTags)
					const bPriority = tagPriorityOf(bTags)
					if (aPriority === bPriority) return undefined
					return aPriority < bPriority ? -1 : 1
				}

				// @ts-expect-error -- untyped by design, see above
				function tagPriorityOf(tags) {
					const wildcardIdx = indexIn('*', tag)
					const fallback = wildcardIdx !== -1 ? wildcardIdx : tag.length
					if (!tags) return fallback
					let best = fallback
					for (let i = 0; i < tags.length; i++) {
						const pos = indexIn(tags[i], tag)
						if (pos !== -1 && pos < best) best = pos
					}
					return best
				}

				// @ts-expect-error -- untyped by design, see above
				function indexIn(name, orderList) {
					for (let i = 0; i < orderList.length; i++) {
						const entry = orderList[i]
						const entryName = Array.isArray(entry) ? entry[0] : entry
						if (entryName === name) return i
					}
					return -1
				}
			}
		},
		...defineDarkModeParam({
			current: 'dark',
			stylePreview: true,
			darkClass: ['dark', 'rbsb:text-white', 'rbsb:bg-black']
		})
	}
}

export default preview
