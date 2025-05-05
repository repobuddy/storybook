import { defineParameters } from '@repobuddy/storybook'
import type { Preview } from '@storybook/react'

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
