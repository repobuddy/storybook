import type { Meta, StoryObj } from '@storybook/react'
import dedent from 'dedent'
import { type ActionsParam, defineParameters, showDocSource } from '../index.ts'

export default {
	title: 'parameters/defineParameters',
	tags: ['new', 'version:1.0', 'autodocs'],
	decorators: [showDocSource()],
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
	}),
	render: () => <></>
} satisfies Meta

export const WithLayout: StoryObj = {
	parameters: defineParameters({
		layout: 'centered',
		docs: {
			source: {
				code: dedent`defineParameters({
				layout: 'centered'
			})`
			}
		}
	})
}

export const WithBackgroundsParam: StoryObj = {
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
	})
}

export const WithDocsParam: StoryObj = {
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
	})
}

export const WithViewportParam: StoryObj = {
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
	})
}

export const WithOtherParams: StoryObj = {
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
	}),
	render: () => <div>You can use this to configure parameters that are not defined in the type</div>
}

/**
 * Example showing how to use `defineParameters` to configure actions parameters
 */
export const WithActionsParam: StoryObj = {
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
	)
}

export const ComposingParameters: StoryObj = {
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
	)
}
