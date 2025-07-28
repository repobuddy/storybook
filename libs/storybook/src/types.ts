import type { Meta, StoryObj } from '@storybook/react-vite'

/**
 * Extends the Storybook Meta type with custom tag types
 * @template TCmpOrArgs - The component or args type
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
export type ExtendMeta<
	TCmpOrArgs,
	M extends Meta<TCmpOrArgs>,
	E extends {
		tag: string
	}
> = Omit<M, 'tags'> & {
	tags?: Array<E['tag'] | 'autodocs' | '!autodocs' | 'test' | '!test' | 'dev' | '!dev' | (string & {})> | undefined
}

/**
 * Extends the Storybook StoryObj type with custom tag types
 * @template TMetaOrCmpOrArgs - The meta, component or args type
 * @template S - The base StoryObj type
 * @template E - The extension type containing tagType
 *
 * @example
 * ```ts
 * // Create a generic StoryObj type for a project
 * type StoryObj<TMetaOrCmpOrArgs = Args> = ExtendStoryObj<TMetaOrCmpOrArgs, StoryObj<TMetaOrCmpOrArgs>, { tagType: 'tag1' | 'tag2' }>
 *
 * // Create a specific StoryObj type for a component
 * type StoryObj = ExtendStoryObj<typeof Component, StoryObj<typeof Component>, { tagType: 'tag1' | 'tag2' }>
 * ```
 */
export type ExtendStoryObj<
	TMetaOrCmpOrArgs,
	S extends StoryObj<TMetaOrCmpOrArgs>,
	E extends {
		tag: string
	}
> = Omit<S, 'tags'> & {
	tags?: Array<E['tag'] | 'autodocs' | '!autodocs' | 'test' | '!test' | 'dev' | '!dev' | (string & {})> | undefined
}
