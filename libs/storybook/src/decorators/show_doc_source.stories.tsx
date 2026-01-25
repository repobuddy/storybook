import { defineDocsParam, showDocSource, withStoryCard } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'
import { themes } from 'storybook/theming'

// Simple demo component for testing the decorator
const DemoComponent = ({ text = 'Hello World' }: { text?: string }) => (
	<div className="p-4 bg-gray-100 dark:bg-gray-500 rounded">{text}</div>
)

const meta = {
	title: 'decorators/showDocSource',
	tags: ['version:2.4'],
	render: () => <></>
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const ShowStoryCode: Story = {
	decorators: [showDocSource()],
	render: () => <DemoComponent text="Hello World" />
}

export const ShowDocsSource: Story = {
	name: 'Show docs.source.code',
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
					Shows the code in <code>docs.source.code</code> parameter
				</p>
			)
		}),
		showDocSource(),
		showDocSource({ showOriginalSource: true })
	]
}

export const WithLanguageJson: Story = {
	name: 'With docs.source.language: json',
	parameters: defineDocsParam({
		source: {
			code: '{ "hello": "world" }',
			language: 'json'
		}
	}),
	decorators: [showDocSource(), showDocSource({ showOriginalSource: true })]
}

export const WithLanguageMd: Story = {
	name: 'With docs.source.language: md',
	parameters: defineDocsParam({
		source: {
			code: 'This is a `markdown` text',
			language: 'md'
		}
	}),
	decorators: [showDocSource(), showDocSource({ showOriginalSource: true })]
}

export const WithDocsTheme: Story = {
	name: 'With docs.theme: dark',
	parameters: defineDocsParam({
		source: {
			code: '<div>Hello, World!</div>'
		},
		theme: themes.dark
	}),
	decorators: [showDocSource(), showDocSource({ showOriginalSource: true })]
}
