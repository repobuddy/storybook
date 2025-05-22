import type { Preview } from '@storybook/react'
// @ts-ignore
import type { StorybookBuiltInParams } from '../src/index.ts'
import { createDarkModeDocsContainer, defineDarkModeParam } from '../src/index.ts'

import '../tailwind.css'

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},
		docs: {
			container: createDarkModeDocsContainer()
		},
		options: {
			storySort: {
				method: 'alphabetical',
				order: ['decorators', 'parameters', 'manager', 'testing', '*']
			}
		},
		darkMode: defineDarkModeParam({
			darkClass: 'dark',
			stylePreview: true,
			classTarget: 'html'
		})
	} satisfies StorybookBuiltInParams,
	decorators: [
		(Story) => {
			document.documentElement.classList.add('dark:bg-black', 'dark:text-white')
			return <Story />
		}
	]
}

export default preview
