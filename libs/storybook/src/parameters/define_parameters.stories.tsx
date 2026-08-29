// These stories document the legacy parameter shapes accepted by the `define*Param` helpers.
// CSF factories type `parameters` strictly against Storybook 10's own parameter types, so each
// `parameters` object is widened with `as Parameters`.
import type { Parameters } from '@storybook/react-vite'
import dedent from 'dedent'
import { type ActionsParam, defineParameters, showSource } from '#repobuddy/storybook'
import preview from '../../.storybook/preview'

const meta = preview.meta({
	title: 'parameters/defineParameters',
	tags: ['autodocs', '!snapshot', 'func', 'new', 'version:1.0'],
	decorators: [showSource()],
	parameters: defineParameters({
		docs: {
			description: {
				component: [
					'`defineParameters` is used to define parameters for a story or component.',
					'Note that it does not work in `preview.ts`, which requires the parameters to be inlined.',
					'In that case, use the `satisfies StorybookBuiltInParams` instead.'
				].join('\n')
			}
		}
	}) as Parameters,
	render: () => <></>
})

export const WithLayout = meta.story({
	parameters: defineParameters({
		layout: 'centered',
		docs: {
			source: {
				code: dedent`defineParameters({
				layout: 'centered'
			})`
			}
		}
	}) as Parameters
})

export const WithBackgroundsParam = meta.story({
	parameters: defineParameters({
		backgrounds: {
			default: 'light'
		},
		docs: {
			source: {
				code: dedent`defineParameters({
				backgrounds: {
					default: 'light'
				}
			})`
			}
		}
	}) as Parameters
})

export const WithDocsParam = meta.story({
	parameters: defineParameters({
		docs: {
			description: {
				story: 'This is a story'
			},
			source: {
				code: dedent`defineParameters({
				docs: {
					description: {
						story: 'This is a story'
					}
				}
			})`
			}
		}
	}) as Parameters
})

export const WithViewportParam = meta.story({
	parameters: defineParameters({
		viewport: {
			defaultViewport: 'tablet1'
		},
		docs: {
			source: {
				code: dedent`defineParameters({
				viewport: {
					defaultViewport: 'tablet1'
				}
			})`
			}
		}
	}) as Parameters
})

export const WithOtherParams = meta.story({
	parameters: defineParameters({
		something: {
			blah: 'beer'
		},
		docs: {
			source: {
				code: dedent`defineParameters({
				something: {
					blah: 'beer'
				}
			})`
			}
		}
	}) as Parameters,
	render: () => <div>You can use this to configure parameters that are not defined in the type</div>
})

/**
 * Example showing how to use `defineParameters` to configure actions parameters
 */
export const WithActionsParam = meta.story({
	parameters: defineParameters<ActionsParam>(
		{
			actions: {
				argTypesRegex: '^on[A-Z].*'
			}
		},
		{
			docs: {
				source: {
					code: dedent`defineParameters<ActionsParam>({
				actions: {
					argTypesRegex: '^on[A-Z].*'
				}
			})`
				}
			}
		}
	) as Parameters
})

export const ComposingParameters = meta.story({
	parameters: defineParameters(
		{
			layout: 'centered'
		},
		{
			docs: {
				description: { story: 'This is a story' },
				source: {
					code: dedent`defineParameters(
					{ layout: 'centered' },
					{ docs: { description: { story: 'This is a story' } } }
				)`
				}
			}
		}
	) as Parameters
})
