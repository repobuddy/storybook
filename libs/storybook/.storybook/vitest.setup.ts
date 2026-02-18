import { setProjectAnnotations } from '@storybook/react-vite'
import { vis, visAnnotations } from 'storybook-addon-vis/vitest-setup'
import { beforeAll } from 'vitest'
import * as projectAnnotations from './preview'

// This is an important step to apply the right configuration when testing your stories.
// More info at: https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#setprojectannotations
setProjectAnnotations([visAnnotations, projectAnnotations])

beforeAll(async () => {
	await document.fonts?.ready
})

function applyTheme(isDark: boolean) {
	const doc = document.documentElement
	const iframeDoc = document.querySelector('iframe')?.contentDocument?.documentElement
	if (isDark) {
		doc.classList.add('dark')
		iframeDoc?.classList.add('dark')
	} else {
		doc.classList.remove('dark')
		iframeDoc?.classList.remove('dark')
	}
}

vis.setup({
	auto: {
		async light() {
			applyTheme(false)
		},
		async dark() {
			applyTheme(true)
		}
	}
})
