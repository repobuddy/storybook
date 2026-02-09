import dedent from 'dedent'
import { defineDocsParam, showDocSource } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/internalBadge',
	tags: ['var', 'version:0.13'],
	render: () => <></>
} satisfies Meta

export const InternalBadge: StoryObj = {
	tags: ['internal'],
	parameters: defineDocsParam({
		source: {
			code: dedent`
			// Use this badge to hide stories from the sidebar during production build
			export const YourStory = {
				tags: ['internal'],
			}

			// To set this up, you need to add the following to your .storybook/main.ts file:
			export default {
				tags: {
					internal: {
						excludeFromSidebar: process.env.NODE_ENV === 'production'
					}
				}
			}

			// And build your storybook with the following command:
			NODE_ENV=production storybook build
			`
		}
	}),
	decorators: [showDocSource()],
	render: () => <></>
}
