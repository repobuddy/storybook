import { vis, visAnnotations } from 'storybook-addon-vis/vitest-setup'
import { beforeAll } from 'vitest'
import preview from './preview'

// CSF factories bind every story to `.storybook/preview`, so a story run composes
// `preview.composed` instead of the annotations `setProjectAnnotations` registers.
// Attach the vis hook there so the `!snapshot` tag is still honored.
preview.composed.beforeEach = [
	...(preview.composed.beforeEach ? [preview.composed.beforeEach].flat() : []),
	visAnnotations.beforeEach
]

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
