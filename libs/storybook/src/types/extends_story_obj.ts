import type { IsStringLiteral } from 'type-plus'
import type { ExtractStringLiterals } from './_extract_string_literals.js'

/**
 * Extends the Storybook StoryObj type with custom tag types.
 *
 * This utility type allows you to extend the `tags` property of a Storybook StoryObj type
 * with custom string literal types while preserving existing tag types from the base StoryObj.
 *
 * @template S - The base StoryObj type to extend (must have an optional `tags` property)
 * @template E - The extension type containing a `tag` property with the custom tag types
 *
 * @example
 * ```ts
 * import type { ExtendsStoryObj } from '@repobuddy/storybook'
 * import type { Args, StoryObj as S } from '@storybook/your-framework'
 *
 * // Create a generic StoryObj type for your project
 * type StoryObj<TCmpOrArgs = Args> = ExtendsStoryObj<
 *   S<TCmpOrArgs>,
 *   { tag: 'new' | 'beta' | 'deprecated' | 'remove:next' }
 * >
 *
 * // Use in component stories
 * const story: StoryObj<typeof Component> = {
 *   tags: ['new'], // <--- gets auto-completion for 'new' | 'beta' | 'deprecated' | 'remove:next'
 *   // ...
 * }
 * ```
 */
export type ExtendsStoryObj<
	S extends { tags?: string[] | undefined },
	E extends {
		tag: string
	}
> = Omit<S, 'tags'> & {
	tags?: ExtractStringLiterals<NonNullable<S['tags']>[number]> extends infer MT
		? IsStringLiteral<MT> extends true
			? Array<(string & {}) | MT | E['tag']> | undefined
			: Array<(string & {}) | E['tag']> | undefined
		: never
}
