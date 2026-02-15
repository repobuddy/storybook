import type { IsStringLiteral } from 'type-plus'
import type { ExtractStringLiterals } from './_extract_string_literals.js'

/**
 * Extends the Storybook Meta type with custom tag types.
 *
 * This utility type allows you to extend the `tags` property of a Storybook Meta type
 * with custom string literal types while preserving existing tag types from the base Meta.
 *
 * @template M - The base Meta type to extend
 * @template E - The extension type containing a `tag` property with the custom tag types
 *
 * @example
 * ```ts
 * import type { ExtendsMeta } from '@repobuddy/storybook'
 * import type { Args, Meta as M } from '@storybook/your-framework'
 *
 * // Create a generic Meta type for your project
 * type Meta<TCmpOrArgs = Args> = ExtendsMeta<
 *   M<TCmpOrArgs>,
 *   { tag: 'new' | 'beta' | 'deprecated' | 'remove:next' }
 * >
 *
 * // Use in component stories
 * const meta: Meta<typeof Component> = {
 *   tags: ['new'], // <--- gets auto-completion for 'new' | 'beta' | 'deprecated' | 'remove:next'
 *   // ...
 * }
 * ```
 */
export type ExtendsMeta<M extends { tags?: string[] | undefined }, E extends { tag: string }> = Omit<M, 'tags'> & {
	tags?: ExtractStringLiterals<NonNullable<M['tags']>[number]> extends infer MT
		? IsStringLiteral<MT> extends true
			? Array<(string & {}) | MT | E['tag']> | undefined
			: Array<(string & {}) | E['tag']> | undefined
		: never
}
