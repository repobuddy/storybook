// import { withThemeByClassName } from '#repobuddy/storybook/themes'
import type { Preview } from '@storybook/react-vite'

// @ts-expect-error
import { defineDocsParam } from '#repobuddy/storybook'
// @ts-expect-error
import {
	createDarkModeDocsContainer,
	defineDarkModeParam,
	withDarkMode
} from '#repobuddy/storybook/storybook-dark-mode'

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
	]
}

export default preview
