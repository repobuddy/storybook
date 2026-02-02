import { defineDocsParam, showDocSource, withStoryCard } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'
import { themes } from 'storybook/theming'

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
	tags: ['props', 'version:2.7'],
	decorators: [showDocSource({ source: '() => <DemoComponent text="Hello World" />' })]
}
