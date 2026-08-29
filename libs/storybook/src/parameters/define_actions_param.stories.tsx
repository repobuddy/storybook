import dedent from 'dedent'
import { fn } from 'storybook/test'
import { defineActionsParam, defineDocsParam, showSource } from '#repobuddy/storybook'
import preview from '../../.storybook/preview'

const meta = preview.meta({
	title: 'Parameters/defineActionsParam',
	tags: ['func', '!snapshot', 'new', 'version:1.0'],
	decorators: [showSource()],
	args: {
		onClick: fn()
	},
	render: () => <></>
})

/**
 * Basic example showing how to configure actions parameters with `argTypesRegex`
 * to automatically match event handler props.
 */
export const WithArgTypesRegex = meta.story({
	parameters: {
		...defineActionsParam({
			argTypesRegex: '^on[A-Z].*'
		}),
		...defineDocsParam({
			source: {
				code: dedent`defineActionsParam({
					argTypesRegex: '^on[A-Z].*'
				})`
			}
		})
	}
})

/**
 * Example showing how to disable actions for a story
 */
export const DisabledActions = meta.story({
	parameters: {
		...defineActionsParam({
			disable: true
		}),
		...defineDocsParam({
			source: {
				code: dedent`defineActionsParam({
					disable: true
				})`
			}
		})
	}
})

/**
 * Example showing how to explicitly specify action handlers
 */
export const ExplicitHandles = meta.story({
	parameters: {
		...defineActionsParam({
			handles: ['onClick', 'onMouseOver', 'onSubmit']
		}),
		...defineDocsParam({
			source: {
				code: dedent`defineActionsParam({
					handles: ['onClick', 'onMouseOver', 'onSubmit']
				})`
			}
		})
	}
})

/**
 * Example showing combined configuration options
 */
export const CombinedConfig = meta.story({
	parameters: {
		...defineActionsParam({
			argTypesRegex: '^on[A-Z].*',
			handles: ['customEvent', 'anotherEvent'],
			disable: false
		}),
		...defineDocsParam({
			source: {
				code: dedent`defineActionsParam({
				argTypesRegex: '^on[A-Z].*',
				handles: ['customEvent', 'anotherEvent'],
				disable: false
			})`
			}
		})
	}
})
