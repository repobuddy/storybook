import type { ComponentAnnotations } from 'storybook/internal/csf'

/**
 * Extends the Storybook Meta type with custom tag types
 * @template TRenderer - The renderer type
 * @template TInput - The input type
 * @template M - The base Meta type
 * @template E - The extension type containing tagType
 *
 * @example
 * ```ts
 * // Create a generic Meta type for a project
 * type Meta<TCmpOrArgs = Args> = ExtendMeta<TCmpOrArgs, Meta<TCmpOrArgs>, { tagType: 'tag1' | 'tag2' }>
 *
 * // Create a specific Meta type for a component
 * type Meta = ExtendMeta<typeof Component, Meta<typeof Component>, { tagType: 'tag1' | 'tag2' }>
 * ```
 */
export type ExtendsMeta<M extends ComponentAnnotations<any, any>, E extends { tag: string }> = Omit<M, keyof M> & {
	tags?: Array<E['tag'] | (string & {})> | undefined
}
