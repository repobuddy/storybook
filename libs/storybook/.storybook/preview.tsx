import { withThemeByClassName } from '@storybook/addon-themes'
import type { Preview } from '@storybook/react-vite'

// @ts-ignore
import { defineDocsParam } from '../src/index.ts'

import '../tailwind.css'

const preview: Preview = {
	parameters: defineDocsParam({
		codePanel: true
	}),
	decorators: [
		withThemeByClassName({
			themes: {
				light: '',
				dark: 'dark dark:bg-black bg-white text-white dark:text-white'
			},
			defaultTheme: 'dark'
		})
	]
}

export default preview
