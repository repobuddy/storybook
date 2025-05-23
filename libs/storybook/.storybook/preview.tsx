import type { Preview } from '@storybook/react'
// @ts-ignore
import type { StorybookBuiltInParams } from '../src/index.ts'
// @ts-ignore
import { createDarkModeDocsContainer, defineDarkModeParam, withDarkMode } from '../src/storybook-dark-mode/index.ts'

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
		backgrounds: {
			disable: true
		},
		options: {
			storySort: {
				method: 'alphabetical',
				order: ['decorators', 'parameters', 'manager', 'testing', '*']
			}
		},
		...defineDarkModeParam({
			classTarget: 'html',
			darkClass: ['dark', 'bg-black', 'text-white'],
			lightClass: ['bg-white', 'text-black'],
			stylePreview: true
		}),
		decorators: [withDarkMode()]
	} satisfies StorybookBuiltInParams
}

export default preview
