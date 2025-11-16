import type { Meta, StoryObj } from '#repobuddy/storybook/internal'
import dedent from 'dedent'
import React from 'react'
import { defineDocsParam, showDocSource } from '../index.js'
import { defineDarkModeParam } from './index.js'

const meta = {
	title: 'storybook-dark-mode/defineDarkModeParam',
	tags: ['new', 'version:1.0', 'autodocs'],
	decorators: [showDocSource()],
	render: () => <></>
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const TypicalTailwindCSSUsage: Story = {
	parameters: {
		...defineDarkModeParam({
			classTarget: 'html',
			darkClass: 'dark',
			stylePreview: true
		}),
		...defineDocsParam({
			description: {
				story: [
					'In typical Tailwind CSS usage,',
					'you would place the dark class at the html element',
					'so that you can apply style to the `body` element.'
				].join('<br>')
			},
			source: {
				code: dedent`defineDarkModeParam({
					classTarget: 'html',
					darkClass: 'dark',
					stylePreview: true
				})`
			}
		})
	}
}
