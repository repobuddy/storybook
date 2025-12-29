import { createDarkModeDocsContainer, defineDarkModeParam } from '#repobuddy/storybook/storybook-dark-mode'
import type { Preview } from '@storybook/react-vite'

import '../reset.css'
import '../tailwind.css'

const preview: Preview = {
	tags: ['snapshot'],
	parameters: {
		docs: {
			codePanel: true,
			container: createDarkModeDocsContainer()
		},
		options: {
			storySort: {
				method: 'alphabetical',
				order: ['components', 'decorators', 'parameters', 'types', 'manager', 'testing', '*']
			}
		},
		...defineDarkModeParam({
			current: 'dark',
			stylePreview: true,
			darkClass: ['dark', 'text-white', 'bg-black']
		})
	}
}

export default preview
