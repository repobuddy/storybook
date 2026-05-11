import type { Preview } from '@storybook/react-vite'
import { setupMonaco } from 'storybook-addon-code-editor'
import { createStorySort } from '#repobuddy/storybook'
import { defineDarkModeParam } from '#repobuddy/storybook/storybook-dark-mode'
import { onMonacoLoad } from './code-editor'

import './tailwind.css'

setupMonaco({ onMonacoLoad })

const compare = createStorySort({
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
	],
	tag: ['playground', 'use-case', 'example', 'spec', 'props', 'edge-case', 'unit']
})

const preview: Preview = {
	parameters: {
		docs: {
			codePanel: true
		},
		options: {
			storySort(a: Parameters<typeof compare>[0], b: Parameters<typeof compare>[1]) {
				return compare(a, b)
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
