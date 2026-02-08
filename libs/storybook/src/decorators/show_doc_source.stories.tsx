import { themes } from 'storybook/theming'
import { defineDocsParam, showDocSource, withStoryCard } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

// Simple demo component for testing the decorator
const DemoComponent = ({ text = 'Hello World' }: { text?: string }) => (
	<div className="rbsb:p-4 rbsb:bg-gray-100 rbsb:dark:bg-gray-500 rbsb:rounded">{text}</div>
)

const meta = {
	title: 'decorators/showDocSource',
	tags: ['version:2.4'],
	render: () => <></>
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const ShowDocsSourceCode: Story = {
	parameters: {
		docs: {
			source: {
				code: `() => /* from docs.source.code */ <DemoComponent text="Hello World" />`
			}
		}
	},
	decorators: [
		withStoryCard({
			content: (
				<p>
					When <code>docs.source.code</code> is provided, the decorator will show it by default.
				</p>
			)
		}),
		showDocSource()
	],
	render: () => <DemoComponent text="Hello World" />
}

export const ShowStorySource: Story = {
	decorators: [
		withStoryCard({
			content: <p>When no `source` is provided, the decorator will use the original source code of the story.</p>
		}),
		showDocSource()
	],
	render: () => <DemoComponent text="Hello World" />
}

export const WithLanguageJson: Story = {
	name: 'With docs.source.language: json',
	parameters: defineDocsParam({
		source: {
			code: '{ "hello": "world" }',
			language: 'json'
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					Use <code>docs.source.language</code> to specify the language of the source code.
				</p>
			)
		}),
		showDocSource(),
		showDocSource({ showOriginalSource: true })
	]
}

export const WithLanguageMd: Story = {
	name: 'With docs.source.language: md',
	parameters: defineDocsParam({
		source: {
			code: 'This is a `markdown` text',
			language: 'md'
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					Use <code>docs.source.language</code> to specify the language of the source code.
				</p>
			)
		}),
		showDocSource(),
		showDocSource({ showOriginalSource: true })
	]
}

export const WithDocsTheme: Story = {
	name: 'With docs.theme: dark',
	parameters: defineDocsParam({
		source: {
			code: '<div>Hello, World!</div>'
		},
		theme: themes.dark
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					Use <code>docs.theme</code> to specify the theme of the source code.
				</p>
			)
		}),
		showDocSource(),
		showDocSource({ showOriginalSource: true })
	]
}

export const ShowDocsSource: Story = {
	name: 'showOriginalSource: true',
	tags: ['props'],
	parameters: {
		docs: {
			source: {
				code: `() => <DemoComponent text="Hello World" />`
			}
		}
	},
	decorators: [
		withStoryCard({
			content: (
				<p>
					Use <code>showOriginalSource: true</code> to show the source code of the story instead of the one in{' '}
					<code>docs.source.code</code>.
				</p>
			)
		}),
		showDocSource({ showOriginalSource: true })
	]
}

export const WithClassNameString: Story = {
	name: 'className: string',
	tags: ['props', 'version:2.5', '!version:2.4'],
	parameters: defineDocsParam({
		source: {
			code: '<div>Hello, World!</div>'
		},
		description: {
			story: 'Demonstrates using className as a string to add custom styling'
		}
	}),
	decorators: [
		showDocSource({
			className: 'rbsb:bg-blue-500 rbsb:dark:bg-blue-900'
		})
	],
	render: () => <DemoComponent text="Custom border and shadow" />
}

export const WithClassNameFunction: Story = {
	name: 'className: function',
	tags: ['props', 'version:2.5', '!version:2.4'],
	parameters: defineDocsParam({
		source: {
			code: '<div>Hello, World!</div>'
		},
		description: {
			story: 'Demonstrates using className as a function to conditionally apply styles based on state'
		}
	}),
	decorators: [
		showDocSource({
			className: ({ defaultClassName }) => {
				return `${defaultClassName} rbsb:border-2 rbsb:border-purple-500 rbsb:rounded-lg`
			}
		})
	],
	render: () => <DemoComponent text="Function-based styling" />
}

export const WithClassNameConditional: Story = {
	name: 'className: conditional function',
	tags: ['props', 'version:2.5', '!version:2.4'],
	parameters: defineDocsParam({
		source: {
			code: '<div>Hello, World!</div>'
		},
		description: {
			story: 'Demonstrates using className function to access state and apply conditional styles'
		}
	}),
	decorators: [
		showDocSource({
			className: ({ defaultClassName, status }) => {
				// Status will be 'info' by default since showDocSource doesn't set it
				const additionalStyles =
					status === 'info'
						? 'rbsb:border-2 rbsb:border-blue-500 rbsb:ring-2 rbsb:ring-blue-200 rbsb:dark:ring-blue-800'
						: 'rbsb:border-2 rbsb:rounded-lg'
				return `${defaultClassName} ${additionalStyles}`
			}
		})
	],
	render: () => <DemoComponent text="Conditional styling with function" />
}

export const WithSourceString: Story = {
	name: 'source: string',
	tags: ['props', 'version:2.7', '!version:2.4'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Pass <code>source</code> as a string to the decorator to override the displayed source code.
				</p>
			)
		}),
		showDocSource({ source: '() => <DemoComponent text="Hello World" />' })
	],
	render: () => <DemoComponent text="Hello World" />
}

export const BeforeTrue: Story = {
	name: 'before: true',
	tags: ['props', 'version:2.12', '!version:2.4'],
	parameters: defineDocsParam({
		source: {
			code: '() => <DemoComponent text="Rendered below the source" />'
		},
		description: {
			story: 'Use `before: true` to show the source code above the rendered story instead of below.'
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					Use <code>before: true</code> to display the source code card above the story output.
				</p>
			)
		}),
		showDocSource({ before: true })
	],
	render: () => <DemoComponent text="Rendered below the source" />
}

export const TwoShowDocSourceBefore: Story = {
	name: 'two showDocSource (before: true)',
	tags: ['unit', '!version:2.4', 'snapshot'],
	parameters: defineDocsParam({
		source: {
			code: '() => <DemoComponent text="Story content" />'
		},
		description: {
			story:
				'With two showDocSource(before: true), cards are rendered in decorator order: first source card, second source card, then the story.'
		}
	}),
	decorators: [
		showDocSource({ before: true, source: '// First source block' }),
		showDocSource({ before: true, source: '// Second source block' })
	],
	render: () => <DemoComponent text="Story content" />
}

export const TwoShowDocSourceAfter: Story = {
	name: 'two showDocSource (default after)',
	tags: ['unit', '!version:2.4', 'snapshot'],
	parameters: defineDocsParam({
		source: {
			code: '() => <DemoComponent text="Story content" />'
		},
		description: {
			story: 'With two showDocSource() (after), order is: story first, then first source card, then second source card.'
		}
	}),
	decorators: [showDocSource({ source: '// First source block' }), showDocSource({ source: '// Second source block' })],
	render: () => <DemoComponent text="Story content" />
}

export const TwoWithStoryCardTwoShowDocSource: Story = {
	name: 'two withStoryCard + two showDocSource',
	tags: ['unit', '!version:2.4', 'snapshot'],
	parameters: defineDocsParam({
		source: {
			code: '() => <DemoComponent text="Story content" />'
		},
		description: {
			story:
				'Cards render in decorator order: First card (withStoryCard), source before (showDocSource before: true), second card (withStoryCard), story, then source after (showDocSource).'
		}
	}),
	decorators: [
		withStoryCard({ title: 'First card', content: <p>This card should appear first.</p> }),
		showDocSource({ before: true, source: '// Source shown before the story' }),
		withStoryCard({ title: 'Second card', content: <p>This card should appear after the first source.</p> }),
		showDocSource({ source: '// Source shown after the story' })
	],
	render: () => <DemoComponent text="Story content" />
}
