// These stories document the legacy parameter shapes accepted by the `define*Param` helpers.
// CSF factories type `parameters` strictly against Storybook 10's own parameter types, so each
// `parameters` object is widened with `as Parameters`.
import type { Parameters } from '@storybook/react-vite'
import dedent from 'dedent'
import { defineBackgroundsParam, defineDocsParam, showSource } from '#repobuddy/storybook'
import preview from '../../.storybook/preview'

const meta = preview.meta({
	title: 'Parameters/defineBackgroundsParam',
	tags: ['func', '!snapshot', 'new', 'version:1.0'],
	decorators: [showSource()],
	render: () => <></>
})

export const SetDefaultBackground = meta.story({
	parameters: {
		...defineBackgroundsParam({
			default: 'light'
		}),
		...defineDocsParam({
			source: {
				code: dedent`defineBackgroundParam({
					default: 'light'
				})`
			}
		})
	} as Parameters
})

export const SetBackgroundOptions = meta.story({
	parameters: {
		...defineBackgroundsParam({
			options: [
				{
					name: 'light',
					value: 'light'
				},
				{ name: 'dark', value: 'dark' }
			]
		}),
		...defineDocsParam({
			source: {
				code: dedent`defineBackgroundsParam({
					options: [
						{ name: 'light', value: 'light' },
						{ name: 'dark', value: 'dark' }
					]
				})`
			}
		})
	} as Parameters
})
