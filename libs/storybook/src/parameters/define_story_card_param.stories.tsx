import type { Meta, StoryObj } from '@storybook/react-vite'
import dedent from 'dedent'
import { defineDocsParam, defineStoryCardParam, showDocSource, withStoryCard } from '#repobuddy/storybook'

const meta: Meta = {
	title: 'parameters/defineStoryCard',
	tags: ['func', 'new', 'version:2.9'],
	decorators: [showDocSource()],
	render: () => <p>This is the story content</p>
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Basic example showing how to configure story card parameters with title and content.
 */
export const WithTitleAndContent: Story = {
	parameters: {
		...defineStoryCardParam({
			title: 'Important Notice',
			status: 'info',
			content: <p>This is a custom message displayed in the card.</p>
		}),
		...defineDocsParam({
			source: {
				code: dedent`defineStoryCard({
					title: 'Important Notice',
					status: 'info',
					content: <p>This is a custom message displayed in the card.</p>
				})`
			}
		})
	},
	decorators: [withStoryCard()]
}

/**
 * Example showing how to use story card with automatic content from story description.
 */
export const WithStoryDescription: Story = {
	parameters: {
		...defineDocsParam({
			description: {
				story: 'This description will be automatically shown in the card.'
			}
		}),
		...defineStoryCardParam({
			title: 'Story Information',
			status: 'info'
		}),
		...defineDocsParam({
			source: {
				code: dedent`defineStoryCard({
					title: 'Story Information',
					status: 'info'
				})`
			}
		})
	},
	decorators: [withStoryCard()]
}

/**
 * Example showing error status card.
 */
export const WithErrorStatus: Story = {
	parameters: {
		...defineStoryCardParam({
			title: 'Error Card',
			status: 'error',
			content: <p>This card displays an error status with red background styling.</p>
		}),
		...defineDocsParam({
			source: {
				code: dedent`defineStoryCard({
					title: 'Error Card',
					status: 'error',
					content: <p>This card displays an error status with red background styling.</p>
				})`
			}
		})
	},
	decorators: [withStoryCard()]
}

/**
 * Example showing warn status card.
 */
export const WithWarnStatus: Story = {
	parameters: {
		...defineStoryCardParam({
			title: 'Warning Card',
			status: 'warn',
			content: <p>This card displays a warning status with yellow background styling.</p>
		}),
		...defineDocsParam({
			source: {
				code: dedent`defineStoryCard({
					title: 'Warning Card',
					status: 'warn',
					content: <p>This card displays a warning status with yellow background styling.</p>
				})`
			}
		})
	},
	decorators: [withStoryCard()]
}

/**
 * Example showing info status card (default).
 */
export const WithInfoStatus: Story = {
	parameters: {
		...defineStoryCardParam({
			title: 'Info Card',
			status: 'info',
			content: <p>This card displays an info status with blue background styling. This is the default status.</p>
		}),
		...defineDocsParam({
			source: {
				code: dedent`defineStoryCard({
					title: 'Info Card',
					status: 'info',
					content: <p>This card displays an info status with blue background styling. This is the default status.</p>
				})`
			}
		})
	},
	decorators: [withStoryCard()]
}

/**
 * Example showing custom className string.
 */
export const WithCustomClassName: Story = {
	parameters: {
		...defineStoryCardParam({
			title: 'Custom Styled Card',
			status: 'info',
			content: <p>This card has custom border styling applied via className.</p>,
			className: 'rbsb:border-2 rbsb:border-blue-500 rbsb:shadow-lg'
		}),
		...defineDocsParam({
			source: {
				code: dedent`defineStoryCard({
					title: 'Custom Styled Card',
					status: 'info',
					content: <p>This card has custom border styling applied via className.</p>,
					className: 'rbsb:border-2 rbsb:border-blue-500 rbsb:shadow-lg'
				})`
			}
		})
	},
	decorators: [withStoryCard()]
}

/**
 * Example showing className function.
 */
export const WithClassNameFunction: Story = {
	parameters: {
		...defineStoryCardParam({
			title: 'Function-Based Styling',
			status: 'info',
			content: <p>This card uses a function to compute className based on the card state.</p>,
			className: ({ status, defaultClassName }) => {
				const borderColor =
					status === 'info'
						? 'rbsb:border-green-500'
						: status === 'warn'
							? 'rbsb:border-yellow-500'
							: 'rbsb:border-red-500'
				return `${defaultClassName} rbsb:border-2 ${borderColor} rbsb:shadow-lg`
			}
		}),
		...defineDocsParam({
			source: {
				code: dedent`defineStoryCard({
					title: 'Function-Based Styling',
					status: 'info',
					content: <p>This card uses a function to compute className based on the card state.</p>,
					className: ({ status, defaultClassName }) => {
						const borderColor = status === 'info' ? 'rbsb:border-green-500' : ...
						return \`\${defaultClassName} rbsb:border-2 \${borderColor} rbsb:shadow-lg\`
					}
				})`
			}
		})
	},
	decorators: [withStoryCard()]
}

/**
 * Example showing that decorator props override parameter values.
 */
export const DecoratorPropsOverride: Story = {
	parameters: {
		...defineStoryCardParam({
			title: 'Parameter Title',
			status: 'info',
			content: <p>This content will be overridden by the decorator.</p>
		}),
		...defineDocsParam({
			source: {
				code: dedent`// Parameters define default values
				defineStoryCard({
					title: 'Parameter Title',
					status: 'info',
					content: <p>This content will be overridden by the decorator.</p>
				})

				// Decorator props override parameters
				withStoryCard({
					title: 'Decorator Title',
					status: 'warn',
					content: <p>This content comes from the decorator.</p>
				})`
			}
		})
	},
	decorators: [
		withStoryCard({
			title: 'Decorator Title',
			status: 'warn',
			content: <p>This content comes from the decorator and overrides the parameter values.</p>
		})
	]
}
