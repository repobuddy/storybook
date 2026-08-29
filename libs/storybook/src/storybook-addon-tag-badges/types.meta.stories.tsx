import dedent from 'dedent'
import { defineDocsParam, showSource } from '#repobuddy/storybook'
import preview from '../../.storybook/preview'

const meta = preview.meta({
	title: 'storybook-addon-tag-badges/types/Meta',
	tags: ['type', '!snapshot', 'version:1.0'],
	decorators: [showSource()],
	render: () => <></>
})

export const TypicalUsage = meta.story({
	name: 'TypicalUsage',
	parameters: {
		...defineDocsParam({
			source: {
				code: dedent`
				// component.stories.tsx
				import type { Meta } from '@repobuddy/storybook/storybook-addon-tag-badges'

				const meta: Meta<typeof Component> = {
					// ...
				}

				export default meta
				`
			}
		})
	}
})
