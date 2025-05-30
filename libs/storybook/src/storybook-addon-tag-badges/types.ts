import type { Args, StoryObj as SBO } from '@storybook/react'
import type { TagNames } from './tag_badges.ts'

export type StoryObj<TMetaOrCmpOrArgs = Args> = Omit<SBO<TMetaOrCmpOrArgs>, 'tags'> & {
	tags?: Array<TagNames | (string & {})> | undefined
}
