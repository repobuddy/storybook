import type { DataAttributeProps } from '@just-web/types'
import React from 'react'
import type { API, AddonStore } from 'storybook/manager-api'
import { addons as defaultAddons } from 'storybook/manager-api'
import { PARAM_KEY } from '../constants.js'

type VariantBarProps = {
	api: API
	addons?: AddonStore
} & DataAttributeProps

export function VariantBar(props: VariantBarProps) {
	const { api, addons = defaultAddons, ...rest } = props
	const config = addons.getConfig()
	const storyData = api.getCurrentStoryData()
	console.info('variant config', config)
	console.info('story data', storyData)
	if (!storyData.parameters?.[PARAM_KEY]) return null

	return <div {...rest}>VariantBar</div>
}
