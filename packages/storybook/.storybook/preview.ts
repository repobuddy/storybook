import type { Preview } from '@storybook/react'
import { page } from '@vitest/browser/context'
import { imageSnapshot } from '../src/index.js'

page.extend({ imageSnapshot })

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
}

export default preview
