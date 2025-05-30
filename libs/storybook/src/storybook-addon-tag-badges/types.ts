import type { Args, Meta as M, StoryObj as SBO } from '@storybook/react'
import type { TagNames } from './tag_badges.ts'

export type Meta<TCmpOrArgs = Args> = Omit<M<TCmpOrArgs>, 'tags'> & {
	tags?: Array<TagNames | (string & {})> | undefined
}

export type StoryObj<TMetaOrCmpOrArgs = Args> = Omit<SBO<TMetaOrCmpOrArgs>, 'tags'> & {
	tags?: Array<TagNames | (string & {})> | undefined
}
