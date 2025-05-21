import type { Preview } from '@storybook/react'
import type { StorybookBuiltInParams } from '../src/index.ts'
import { createDarkModeDocsContainer } from '../src/react/index.ts'

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
		}
	} satisfies StorybookBuiltInParams
}

export default preview
