import { setProjectAnnotations } from '@storybook/react-vite'
import { vis, visAnnotations } from 'storybook-addon-vis/vitest-setup'
import { beforeAll } from 'vitest'
import { waitForDocSourceContent } from '#repobuddy/storybook'
import * as projectAnnotations from './preview'

// This is an important step to apply the right configuration when testing your stories.
// More info at: https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#setprojectannotations
setProjectAnnotations([visAnnotations, projectAnnotations])

beforeAll(async () => {
	await document.fonts?.ready
})

// /** Wait for layout and paint so visual snapshots are stable across runs. */
// function waitForStable(): Promise<void> {
// 	return new Promise((resolve) => {
// 		requestAnimationFrame(() => {
// 			requestAnimationFrame(() => setTimeout(resolve, 100))
// 		})
// 	})
// }

/** Body of the story (iframe when present) so we wait in the same document that is screenshotted. */
function getSnapshotBody(): HTMLElement | null {
	const iframe = document.querySelector('iframe')
	const iframeBody = iframe?.contentDocument?.body
	return iframeBody ?? document.body
}

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
			// await waitForStable()
			await waitForDocSourceContent({ canvasElement: getSnapshotBody() ?? undefined })
		},
		async dark() {
			applyTheme(true)
			// await waitForStable()
			await waitForDocSourceContent({ canvasElement: getSnapshotBody() ?? undefined })
		}
	}
})
