import type { Preview } from '@storybook/react'
// @ts-ignore
import type { StorybookBuiltInParams } from '../src/index.ts'
// @ts-ignore
import { createDarkModeDocsContainer, defineDarkModeParam, withStoryRoot } from '../src/storybook-dark-mode/index.ts'

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
			classTarget: 'html',
			darkClass: 'dark',
			stylePreview: true
		})
	} satisfies StorybookBuiltInParams,
	decorators: [
		withStoryRoot({
			classTarget: 'html',
			dark: {
				className: 'dark:bg-black dark:text-white'
			}
		})
	]
}

export default preview
