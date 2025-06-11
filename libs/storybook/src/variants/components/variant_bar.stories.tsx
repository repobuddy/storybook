import type { Meta, StoryObj } from '#repobuddy/storybook/internal'
import React from 'react'
import { expect } from 'storybook/test'
import { VariantBar } from './variant_bar.js'

export default {
	title: 'variants/components/VariantBar'
} satisfies Meta

export const HiddenWithoutParameters: StoryObj = {
	loaders: [
		() => ({
			api: { getCurrentStoryData: () => ({ parameters: {} }) },
			addons: { getConfig: () => ({}) }
		})
	],
	render: (_, { loaded: { api, addons } }) => (
		<div>
			<div>The VariantBar should be hidden when there are no `variant` parameters</div>
			<VariantBar api={api} addons={addons} data-testid="variant-bar" />
		</div>
	),
	play: async ({ canvas }) => {
		const variantBar = canvas.queryByTestId('variant-bar')
		await expect(variantBar).not.toBeInTheDocument()
	}
}

export const WithDefaultConfig: StoryObj = {
	parameters: {
		variants: {
			colorTheme: {
				strategy: {
					type: 'className',
					selector: 'html'
				},
				variants: {
					light: 'light',
					dark: 'dark'
				},
				current: 'light'
			}
		}
	},
	loaders: [
		() => ({
			api: { getCurrentStoryData: () => ({ parameters: WithDefaultConfig.parameters }) }
		})
	],
	render: (_, { loaded: { api, addons } }) => <VariantBar api={api} addons={addons} data-testid="variant-bar" />
}
