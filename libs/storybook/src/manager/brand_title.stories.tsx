import dedent from 'dedent'
import { brandTitle } from '#repobuddy/storybook/manager'
import preview from '../../.storybook/preview'

const meta = preview.meta({
	title: 'Manager/brandTitle',
	tags: ['new', 'version:1.0', 'autodocs']
})

// These stories demonstrate specific colors, so the contrast rule is excluded
// rather than the colors changed -- the colors are the subject.
const demoColors = { a11y: { options: { rules: { 'color-contrast': { enabled: false } } } } }

/**
 * Basic example showing how to create a brand title with just text
 */
export const SimpleString = meta.story({
	parameters: {
		docs: {
			source: {
				code: dedent`brandTitle({
					title: 'My Storybook'
				})`
			}
		}
	},
	render: () => (
		<div
			// biome-ignore lint/security/noDangerouslySetInnerHtml: on purpose
			dangerouslySetInnerHTML={{
				__html: brandTitle({
					title: 'My Storybook'
				})
			}}
		/>
	)
})

export const InHtml = meta.story({
	parameters: {
		...demoColors,
		docs: {
			source: {
				code: dedent`brandTitle({
					title: '<span style="color: #ff4785;">My Storybook</span>'
				})`
			}
		}
	},
	render: () => (
		<div
			// biome-ignore lint/security/noDangerouslySetInnerHtml: on purpose
			dangerouslySetInnerHTML={{
				__html: brandTitle({
					title: '<span style="color: #ff4785;">My Storybook</span>'
				})
			}}
		/>
	)
})

export const WithEmoji = meta.story({
	parameters: {
		docs: {
			source: {
				code: dedent`brandTitle({
					title: 'My Storybook 🚀'
				})`
			}
		}
	},
	render: () => (
		<div
			// biome-ignore lint/security/noDangerouslySetInnerHtml: on purpose
			dangerouslySetInnerHTML={{
				__html: brandTitle({
					title: 'My Storybook 🚀'
				})
			}}
		/>
	)
})

/**
 * Example showing how to add an icon to the brand title
 */
export const WithSvgIcon = meta.story({
	parameters: {
		docs: {
			source: {
				code: dedent`brandTitle({
					title: 'My Storybook',
					icon: '<svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#ff4785"/></svg>'
				})`
			}
		}
	},
	render: () => (
		<div
			// biome-ignore lint/security/noDangerouslySetInnerHtml: on purpose
			dangerouslySetInnerHTML={{
				__html: brandTitle({
					title: 'My Storybook',
					logo: '<svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#ff4785"/></svg>'
				})
			}}
		/>
	)
})
