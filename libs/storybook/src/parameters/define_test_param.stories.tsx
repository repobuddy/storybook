import type { Meta, StoryObj } from '@storybook/react-vite'
import dedent from 'dedent'
import { defineDocsParam, defineTestParam, showDocSource } from '#repobuddy/storybook'

const meta = {
	title: 'Parameters/defineTestParam',
	tags: ['func', 'new', 'version:1.0'],
	parameters: {
		docs: {
			description: {
				component: 'Helper function to define test parameters for Storybook stories'
			}
		}
	},
	decorators: [showDocSource()],
	render: () => <></>
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
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
}

export const WithDangerouslyIgnoreUnhandledErrors: Story = {
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
}

export const MinimalConfig: Story = {
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
}
