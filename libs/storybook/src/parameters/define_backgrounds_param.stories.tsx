import type { Meta, StoryObj } from '#repobuddy/storybook/internal'
import dedent from 'dedent'
import React from 'react'
import { defineBackgroundsParam, defineDocsParam, showDocSource } from '../index.js'

const meta = {
	title: 'Parameters/defineBackgroundsParam',
	tags: ['new', 'version:1.0'],
	decorators: [showDocSource()],
	render: () => <></>
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const SetDefaultBackground: Story = {
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
	}
}

export const SetBackgroundOptions: Story = {
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
	}
}
