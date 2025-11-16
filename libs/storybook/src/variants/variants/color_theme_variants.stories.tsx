import { showDocSource } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#repobuddy/storybook/internal'
import React from 'react'
import colorVariantCode from './color_theme_variants.js?raw'

export default {
	title: 'variants/colorThemeVariants',
	tags: ['new', 'version:1.1'],
	decorators: [showDocSource()]
} satisfies Meta

export const SourceCode: StoryObj = {
	parameters: {
		docs: {
			source: {
				code: colorVariantCode
			}
		}
	},
	render: () => <div>Hello</div>
}
