import React from 'react'
import { addons, types } from 'storybook/manager-api'
import { VariantBar } from './components/variant_bar.js'
import { ADDON_ID, TOOL_ID } from './constants.js'
import { colorThemeVariants } from './variants/color_theme_variants.js'

addons.register(ADDON_ID, (api) => {
	addons.add(TOOL_ID, {
		type: types.TOOL,
		title: 'Variants',
		render: () => <VariantBar api={api} />
	})
})

addons.setConfig({
	variants: [colorThemeVariants]
})
