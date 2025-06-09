import { showDocSource } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#repobuddy/storybook/internal'
import colorVariantCode from './color_theme_variants.tsx?raw'

export default {
	title: 'variants/manager/colorThemeVariants',
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
	render: () => <></>
}
