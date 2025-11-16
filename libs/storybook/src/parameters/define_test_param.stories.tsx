import type { Meta, StoryObj } from '#repobuddy/storybook/internal'
import dedent from 'dedent'
import React from 'react'
import { defineDocsParam, defineTestParam, showDocSource } from '../index.js'

const meta = {
	title: 'Parameters/defineTestParam',
	tags: ['new', 'version:1.0'],
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
