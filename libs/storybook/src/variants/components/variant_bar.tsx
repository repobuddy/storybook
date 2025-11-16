import type { DataAttributeProps } from '@just-web/types'
import React from 'react'
import type { API, AddonStore } from 'storybook/manager-api'
import { addons as defaultAddons } from 'storybook/manager-api'
import { CONFIG_KEY, PARAM_KEY } from '../constants.js'
import type { VariantConfigOptions, VariantOptions } from '../types.js'

type VariantBarProps = {
	api: API
	addons?: AddonStore
} & DataAttributeProps

export function VariantBar(props: VariantBarProps) {
	const { api, addons = defaultAddons, ...rest } = props
	const config = addons.getConfig()
	const storyData = api.getCurrentStoryData()
	const variantConfig = config[CONFIG_KEY] as VariantConfigOptions[]
	const variantParam = storyData?.parameters?.[PARAM_KEY] as Record<string, VariantOptions>

	if (!variantParam) return null

	console.info('variant config', variantConfig)
	const variants = Object.entries(variantParam).map(([key, value]) => {
		const config = variantConfig?.find((v) => v.key === key)
		return {
			key,
			config,
			value
		}
	})

	return (
		<div {...rest}>
			{variants.map((v) => {
				if (v.value.strategy.type === 'className') {
					return <div>class</div>
				}
				if (v.value.strategy.type === 'dataAttribute') {
					return <div>data-attribute</div>
				}
				if (v.value.strategy.type === 'provider') {
					return <div>provider</div>
				}
				return null
			})}
		</div>
	)
}
