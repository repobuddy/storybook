import type { Args, Meta as M, StoryObj as SBO } from '@storybook/react-vite'
import type { ExtendMeta, ExtendStoryObj } from '../types.js'
import type { TagNames } from './tag_badges.js'

export type Meta<TCmpOrArgs = Args> = ExtendMeta<TCmpOrArgs, M<TCmpOrArgs>, { tag: TagNames }>

export type StoryObj<TMetaOrCmpOrArgs = Args> = ExtendStoryObj<
	TMetaOrCmpOrArgs,
	SBO<TMetaOrCmpOrArgs>,
	{ tag: TagNames }
>
