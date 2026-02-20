import type { FnToArgTypes } from '@repobuddy/storybook'
import { withStoryCard } from '@repobuddy/storybook'
import type { Meta } from '@repobuddy/storybook/storybook-addon-tag-badges'

declare function variadicFunction(...args: number[]): void

declare function variadicFunction2(arg1: number, ...args: number[]): void

const _meta = {
	decorators: [withStoryCard()]
} satisfies Meta<FnToArgTypes<typeof variadicFunction>>

const _meta2 = {
	decorators: [withStoryCard()]
} satisfies Meta<FnToArgTypes<typeof variadicFunction2>>

export default () => <></>
