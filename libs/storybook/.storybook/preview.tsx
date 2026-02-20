import type { Preview } from '@storybook/react-vite'
import { setupMonaco } from 'storybook-addon-code-editor'
import { defineDarkModeParam } from '#repobuddy/storybook/storybook-dark-mode'
import { onMonacoLoad } from './code-editor'

import './tailwind.css'

setupMonaco({ onMonacoLoad })

const preview: Preview = {
	parameters: {
		docs: {
			codePanel: true
		},
		options: {
			storySort: {
				method: 'alphabetical',
				order: [
					'Overview',
					'Changelog',
					'components',
					'decorators',
					'parameters',
					'arg-types',
					'types',
					'manager',
					'testing',
					'*'
				]
			}
		},
		...defineDarkModeParam({
			current: 'dark',
			stylePreview: true,
			darkClass: ['dark', 'rbsb:text-white', 'rbsb:bg-black']
		})
	}
}

export default preview
