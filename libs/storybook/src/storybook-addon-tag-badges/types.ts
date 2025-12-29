import type { Args, Meta as M, StoryObj as SBO } from '@storybook/react-vite'
import type { ExtendStoryObj } from '../types.js'
import type { ExtendsMeta } from '../types/extends_meta.js'
import type { TagNames } from './tag_badges.js'

export type Meta<TCmpOrArgs = Args> = ExtendsMeta<M<TCmpOrArgs>, { tag: TagNames }>

export type StoryObj<TMetaOrCmpOrArgs = Args> = ExtendStoryObj<
	TMetaOrCmpOrArgs,
	SBO<TMetaOrCmpOrArgs>,
	{ tag: TagNames }
>
