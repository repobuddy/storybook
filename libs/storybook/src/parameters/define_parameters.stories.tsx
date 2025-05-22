import type { Meta, StoryObj } from '@storybook/react'
import dedent from 'dedent'
import { type ActionsParam, defineDocsParam, defineParameters, showDocSource } from '../index.ts'

export default {
	title: 'parameters/defineParameters',
	tags: ['new', 'version:1.0.0', 'autodocs'],
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
	parameters: {
		...defineParameters({
			layout: 'centered'
		}),
		...defineDocsParam({
			source: {
				code: dedent`defineParameters({
				layout: 'centered'
			})`
			}
		})
	}
}

export const WithBackgroundsParam: StoryObj = {
	parameters: {
		...defineParameters({
			backgrounds: {
				default: 'light'
			}
		}),
		...defineDocsParam({
			source: {
				code: dedent`defineParameters({
				backgrounds: {
					default: 'light'
				}
			})`
			}
		})
	}
}

export const WithDocsParam: StoryObj = {
	parameters: {
		...defineParameters({
			docs: {
				description: {
					story: 'This is a story'
				}
			}
		}),
		...defineDocsParam({
			source: {
				code: dedent`defineParameters({
				docs: {
					description: {
						story: 'This is a story'
					}
				}
			})`
			}
		})
	}
}

export const WithViewportParam: StoryObj = {
	parameters: {
		...defineParameters({
			viewport: {
				defaultViewport: 'tablet1'
			}
		}),
		...defineDocsParam({
			source: {
				code: dedent`defineParameters({
				viewport: {
					defaultViewport: 'tablet1'
				}
			})`
			}
		})
	}
}

export const WithOtherParams: StoryObj = {
	parameters: {
		...defineParameters({
			layout: 'padded',
			something: {
				blah: 'beer'
			}
		}),
		...defineDocsParam({
			source: {
				code: dedent`defineParameters({
				layout: 'padded',
				something: {
					blah: 'beer'
				}
			})`
			}
		})
	},
	render: () => <div>You can use this to configure parameters that are not defined in the type</div>
}

/**
 * Example showing how to use `defineParameters` to configure actions parameters
 */
export const WithActionsParam: StoryObj = {
	parameters: {
		...defineParameters<ActionsParam>({
			actions: {
				argTypesRegex: '^on[A-Z].*'
			}
		}),
		...defineDocsParam({
			source: {
				code: dedent`defineParameters<ActionsParam>({
				actions: {
					argTypesRegex: '^on[A-Z].*'
				}
			})`
			}
		})
	}
}
