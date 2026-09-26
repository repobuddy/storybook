import addonA11y from '@storybook/addon-a11y'
import addonDocs from '@storybook/addon-docs'
import { definePreview } from '@storybook/react-vite'
import darkModeAddon from '@storybook-community/storybook-dark-mode/preview'
import { setupMonaco } from 'storybook-addon-code-editor'
import tagBadgesAddon from 'storybook-addon-tag-badges/preview'
import { createDarkModeDocsContainer, defineDarkModeParam } from '#repobuddy/storybook/storybook-dark-mode'
import { onMonacoLoad } from './code-editor'

import './tailwind.css'

setupMonaco({ onMonacoLoad })

export default definePreview({
	parameters: {
		a11y: {
			// 'todo' - report violations in the test UI only
			// 'error' - fail the test run on violations
			// 'off' - skip a11y checks entirely
			test: 'error'
		},
		docs: {
			codePanel: true,
			container: createDarkModeDocsContainer()
		},
		options: {
			// Declarative sort: title path segments in sidebar order, `'*'` is the wildcard
			// for unlisted segments. `method: 'alphabetical'` sorts unlisted siblings by name;
			// entries sharing a title keep their declaration order, which puts the autodocs
			// page first within each component.
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
	},

	addons: [addonA11y(), addonDocs(), tagBadgesAddon, darkModeAddon]
})
