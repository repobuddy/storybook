import { withThemeByClassName } from '@storybook/addon-themes'
import { definePreview } from '@storybook/react-vite'

import '../tailwind.css'

const preview = definePreview({
	parameters: {
		docs: {
			codePanel: true
		}
	},
	decorators: [
		withThemeByClassName({
			themes: {
				light: '',
				dark: 'dark dark:bg-black bg-white text-white dark:text-white'
			},
			defaultTheme: 'dark'
		})
	]
})

export default preview
