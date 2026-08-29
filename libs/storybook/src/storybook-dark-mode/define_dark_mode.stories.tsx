import dedent from 'dedent'
import { defineDocsParam, showSource } from '#repobuddy/storybook'
import { defineDarkModeParam } from '#repobuddy/storybook/storybook-dark-mode'
import preview from '../../.storybook/preview'

const meta = preview.meta({
	title: 'storybook-dark-mode/defineDarkModeParam',
	tags: ['new', '!snapshot', 'version:1.0', 'autodocs'],
	decorators: [showSource()],
	render: () => <></>
})

export const TypicalTailwindCSSUsage = meta.story({
	parameters: {
		...defineDarkModeParam({
			classTarget: 'html',
			darkClass: 'dark',
			stylePreview: true
		}),
		...defineDocsParam({
			description: {
				story: [
					'In typical Tailwind CSS usage,',
					'you would place the dark class at the html element',
					'so that you can apply style to the `body` element.'
				].join('<br>')
			},
			source: {
				code: dedent`defineDarkModeParam({
					classTarget: 'html',
					darkClass: 'dark',
					stylePreview: true
				})`
			}
		})
	}
})
