import { withThemeByClassName } from '@storybook/addon-themes'
import type { Preview } from '@storybook/react-vite'

// @ts-ignore
import { defineDocsParam } from '../src/index.ts'

import '../tailwind.css'

const preview: Preview = {
	parameters: {
		...defineDocsParam({
			codePanel: true
		})
	},
	decorators: [
		withThemeByClassName({
			themes: {
				light: 'text-black bg-white',
				dark: 'dark dark:bg-black dark:text-white'
			},
			defaultTheme: 'dark'
		})
	]
}

export default preview
