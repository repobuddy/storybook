import type { Args, StoryObj as SBO } from '@storybook/react'

export type StoryObj<TMetaOrCmpOrArgs = Args> = Omit<SBO<TMetaOrCmpOrArgs>, 'tags'> & {
	tags?:
		| Array<
				| 'editor'
				| 'new'
				| 'beta'
				| 'props'
				| 'deprecated'
				| 'outdated'
				| 'danger'
				| 'todo'
				| 'code-only'
				| 'snapshot'
				| 'unit'
				| 'integration'
				| 'keyboard'
				| 'internal'
				| (string & {})
		  >
		| undefined
}
