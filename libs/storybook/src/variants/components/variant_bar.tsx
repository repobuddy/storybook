import React from 'react'
import type { API } from 'storybook/manager-api'
import { ctx } from './variant_bar.ctx'

export function VariantBar({ api }: { api: API }) {
	const config = ctx.addons.getConfig()
	const storyData = api.getCurrentStoryData()
	console.info('variant config', config)
	console.info('story data', storyData)
	return <div>VariantBar</div>
}
