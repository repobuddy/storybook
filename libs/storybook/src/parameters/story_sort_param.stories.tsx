// These stories document the legacy parameter shapes accepted by the `define*Param` helpers.
// CSF factories type `parameters` strictly against Storybook 10's own parameter types, so each
// `parameters` object is widened with `as Parameters`.
import type { Parameters } from '@storybook/react-vite'
import dedent from 'dedent'
import { defineDocsParam, defineParameters, type StorySortParam, showSource } from '#repobuddy/storybook'
import preview from '../../.storybook/preview'

const meta = preview.meta({
	title: 'parameters/StorySortParam',
	tags: ['type', '!snapshot', 'version:1.0', 'autodocs'],
	decorators: [showSource()],
	parameters: defineParameters({
		docs: {
			description: {
				component:
					'`StorySortParam` is used to define how stories should be sorted in the navigation sidebar. It is used in `preview.ts`.'
			}
		}
	}) as Parameters,
	render: () => <></>
})

export const AlphabeticalSort = meta.story({
	parameters: {
		options: {
			options: {
				storySort: { method: 'alphabetical' }
			} satisfies StorySortParam
		},
		...defineDocsParam({
			source: {
				code: dedent`{
					options: {
						storySort: { method: "alphabetical" }
					} satisfies StorySortParam
				}`
			}
		})
	} as Parameters
})

export const CustomSort = meta.story({
	parameters: {
		options: {
			options: {
				storySort: {
					method: 'custom',
					order: ['Introduction', 'Components', '*', 'Examples']
				}
			} satisfies StorySortParam
		},
		...defineDocsParam({
			source: {
				code: dedent`{
					options: {
						storySort: { method: "custom", order: ["Introduction", "Components", "*", "Examples"] }
					} satisfies StorySortParam
				}`
			}
		})
	} as Parameters
})

export const AlphabeticalByKindSort = meta.story({
	parameters: {
		options: {
			options: {
				storySort: { method: 'alphabetical-by-kind', locales: 'en' }
			} satisfies StorySortParam
		},
		...defineDocsParam({
			source: {
				code: dedent`{
					options: {
						storySort: { method: "alphabetical-by-kind", locales: "en" }
					} satisfies StorySortParam
				}`
			}
		})
	} as Parameters
})

export const CustomSortFunction = meta.story({
	parameters: {
		options: {
			storySort: (a, b) => {
				// Custom sorting logic example
				if (a.title.includes('Introduction')) return -1
				if (b.title.includes('Introduction')) return 1
				return a.title.localeCompare(b.title)
			}
		} satisfies StorySortParam,
		...defineDocsParam({
			source: {
				code: dedent`{
					options: {
						storySort: (a, b) => {
							// Custom sorting logic example
							if (a.title.includes('Introduction')) return -1
							if (b.title.includes('Introduction')) return 1
							return a.title.localeCompare(b.title)
						}
					} satisfies StorySortParam
				}`
			}
		})
	} as Parameters
})
