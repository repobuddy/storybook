type Story = {
	id: string
	importPath: string
	name: string
	title: string
	tags?: string[] | undefined
}

type StorySortFn = (a: Story, b: Story) => number

/**
 * A nested ordering list. Each entry is either:
 * - A string (matches a title segment or tag name; `'*'` is the wildcard)
 * - A tuple `[name, children]` for nested sub-ordering (order only)
 */
export type OrderList = Array<string | [string, OrderList]>

export interface StorySortOptions {
	/**
	 * Ordered list of title path segments (root-level categories).
	 * Supports nesting via tuples and `'*'` wildcard.
	 *
	 * @example
	 * ```ts
	 * order: ['Overview', 'components', ['Pages', ['Home', 'Login']], '*', 'WIP']
	 * ```
	 */
	order?: OrderList | undefined

	/**
	 * Ordered list of story category tags.
	 * Stories sharing the same title are sorted by their first matching tag.
	 * `'*'` marks where stories with unlisted tags sort.
	 *
	 * @example
	 * ```ts
	 * tag: ['playground', 'use-case', 'spec', 'props', '*', 'unit', 'integration']
	 * ```
	 */
	tag?: OrderList | undefined
}

function getPositionInOrder(name: string, order: OrderList): number {
	const wildcardIdx = order.indexOf('*')
	for (let i = 0; i < order.length; i++) {
		const entry = order[i]
		const entryName = Array.isArray(entry) ? entry[0] : entry
		if (entryName === name) return i
	}
	if (wildcardIdx !== -1) return wildcardIdx
	return order.length
}

function getChildOrder(name: string, order: OrderList): OrderList | undefined {
	for (const entry of order) {
		if (Array.isArray(entry) && entry[0] === name) {
			return entry[1]
		}
	}
	return undefined
}

function isWildcardPosition(name: string, order: OrderList): boolean {
	for (const entry of order) {
		const entryName = Array.isArray(entry) ? entry[0] : entry
		if (entryName === name) return false
	}
	return true
}

function compareByKindOrder(aTitle: string, bTitle: string, kindOrder: OrderList): number {
	const aParts = aTitle.split('/')
	const bParts = bTitle.split('/')
	let currentOrder = kindOrder

	const maxDepth = Math.max(aParts.length, bParts.length)
	for (let depth = 0; depth < maxDepth; depth++) {
		const aPart = aParts[depth]
		const bPart = bParts[depth]

		if (aPart === undefined && bPart !== undefined) return -1
		if (aPart !== undefined && bPart === undefined) return 1
		if (aPart === bPart) {
			const childOrder = getChildOrder(aPart!, currentOrder)
			if (childOrder) {
				currentOrder = childOrder
			} else {
				continue
			}
			continue
		}

		const aPos = getPositionInOrder(aPart!, currentOrder)
		const bPos = getPositionInOrder(bPart!, currentOrder)

		if (aPos !== bPos) return aPos - bPos

		const aIsWildcard = isWildcardPosition(aPart!, currentOrder)
		const bIsWildcard = isWildcardPosition(bPart!, currentOrder)
		if (aIsWildcard && bIsWildcard) {
			return aPart!.localeCompare(bPart!, undefined, { numeric: true })
		}

		return aPart!.localeCompare(bPart!, undefined, { numeric: true })
	}

	return 0
}

function getTagPriority(tags: string[] | undefined, tagOrder: OrderList): number {
	if (!tags) return getWildcardOrEnd(tagOrder)
	let bestPriority = -1
	for (const tag of tags) {
		const pos = getExplicitPosition(tag, tagOrder)
		if (pos !== -1 && (bestPriority === -1 || pos < bestPriority)) {
			bestPriority = pos
		}
	}
	if (bestPriority === -1) return getWildcardOrEnd(tagOrder)
	return bestPriority
}

function getExplicitPosition(name: string, order: OrderList): number {
	for (let i = 0; i < order.length; i++) {
		const entry = order[i]
		const entryName = Array.isArray(entry) ? entry[0] : entry
		if (entryName === name) return i
	}
	return -1
}

function getWildcardOrEnd(order: OrderList): number {
	const wildcardIdx = order.indexOf('*')
	return wildcardIdx !== -1 ? wildcardIdx : order.length
}

/**
 * Creates a story sort function for Storybook that sorts by kind (title hierarchy)
 * and then by tag category within the same component.
 *
 * @example
 * ```ts
 * import { sortStoryWithTag } from '@repobuddy/storybook'
 *
 * const preview = {
 *   parameters: {
 *     options: {
 *       storySort: sortStoryWithTag({
 *         order: ['Overview', 'components', 'hooks', '*', 'widgets'],
 *         tag: ['playground', 'use-case', 'example', 'spec', 'props', '*', 'edge-case', 'unit', 'integration']
 *       })
 *     }
 *   }
 * }
 * ```
 */
export function sortStoryWithTag(options: StorySortOptions = {}): StorySortFn {
	const { order: kindOrder, tag: tagOrder } = options

	return (a, b) => {
		if (kindOrder && a.title !== b.title) {
			const kindResult = compareByKindOrder(a.title, b.title, kindOrder)
			if (kindResult !== 0) return kindResult
		}

		if (a.title !== b.title) {
			return a.title.localeCompare(b.title, undefined, { numeric: true })
		}

		if (tagOrder) {
			const aPriority = getTagPriority(a.tags, tagOrder)
			const bPriority = getTagPriority(b.tags, tagOrder)
			if (aPriority !== bPriority) return aPriority - bPriority
		}

		return a.name.localeCompare(b.name, undefined, { numeric: true })
	}
}
