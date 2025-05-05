import type { Preview } from '@storybook/react'
import { defineParameters } from '../src/index.ts'

import '../tailwind.css'

const preview: Preview = {
	parameters: defineParameters({
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	})
}

export default preview
