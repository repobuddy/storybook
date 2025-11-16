import type { Meta, StoryObj } from '#repobuddy/storybook/internal'
import React from 'react'
import { ctx } from './variant_bar.ctx.js'
import { VariantBar } from './variant_bar.js'

export default {
	title: 'variants/components/VariantBar'
} satisfies Meta

export const Hidden: StoryObj = {
	beforeEach: () => {
		ctx.addons.getConfig = () => ({})
	},
	afterEach: () => {
		ctx.reset()
	},
	loaders: [() => ({ api: { getCurrentStoryData: () => ({ parameters: { colorTheme: 'light' } }) } })],
	render: (_, { loaded: { api } }) => <VariantBar api={api} />
}
