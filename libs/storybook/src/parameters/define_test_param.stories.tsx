import dedent from 'dedent'
import { defineDocsParam, defineTestParam, showSource } from '#repobuddy/storybook'
import preview from '../../.storybook/preview'

const meta = preview.meta({
	title: 'Parameters/defineTestParam',
	tags: ['func', '!snapshot', 'new', 'version:1.0'],
	parameters: {
		docs: {
			description: {
				component: 'Helper function to define test parameters for Storybook stories'
			}
		}
	},
	decorators: [showSource()],
	render: () => <></>
})

export const Default = meta.story({
	parameters: {
		...defineTestParam({
			clearMocks: true,
			mockReset: true,
			restoreMocks: true
		}),
		...defineDocsParam({
			source: {
				code: dedent`defineTestParam({
					clearMocks: true,
					mockReset: true,
					restoreMocks: true
				})`
			}
		})
	}
})

export const WithDangerouslyIgnoreUnhandledErrors = meta.story({
	parameters: {
		...defineTestParam({
			clearMocks: true,
			mockReset: true,
			restoreMocks: true,
			dangerouslyIgnoreUnhandledErrors: true
		}),
		...defineDocsParam({
			source: {
				code: dedent`defineTestParam({
					clearMocks: true,
					mockReset: true,
					restoreMocks: true,
					dangerouslyIgnoreUnhandledErrors: true
				})`
			}
		})
	}
})

export const MinimalConfig = meta.story({
	parameters: {
		...defineTestParam({
			clearMocks: true
		}),
		...defineDocsParam({
			source: {
				code: dedent`defineTestParam({
					clearMocks: true
				})`
			}
		})
	}
})
