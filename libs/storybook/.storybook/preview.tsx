// import { withThemeByClassName } from '#repobuddy/storybook/themes'
import type { Preview } from '@storybook/react-vite'

// @ts-ignore
import { defineDocsParam } from '../src/index.ts'
// @ts-ignore
import { createDarkModeDocsContainer, defineDarkModeParam, withDarkMode } from '../src/storybook-dark-mode/index.ts'

import '../tailwind.css'

const preview: Preview = {
	tags: ['snapshot'],
	parameters: {
		...defineDocsParam({
			codePanel: true,
			container: createDarkModeDocsContainer()
		}),
		...defineDarkModeParam({
			current: 'dark',
			stylePreview: true
		}),
		options: {
			storySort: {
				method: 'alphabetical',
				order: ['decorators', 'parameters', 'manager', 'testing', '*']
			}
		}
	},
	decorators: [
		withDarkMode({
			bodyClass: 'text-black bg-white dark:text-white dark:bg-black'
		})
		// withThemeByClassName({
		// 	themes: {
		// 		light: 'light',
		// 		dark: 'dark'
		// 	},
		// 	defaultTheme: 'light'
		// })
	],
	initialGlobals: {}
}

export default preview
