import type { Meta, StoryObj } from '@storybook/react-vite'
import dedent from 'dedent'
// @ts-ignore
import customStyle from 'highlight.js/styles/rainbow.css?raw'
import { defineDocsParam } from '../parameters/define_docs_param'
import { showDocSource } from './show_doc_source'

// Simple demo component for testing the decorator
const DemoComponent = ({ text = 'Hello World' }: { text?: string }) => (
	<div className="p-4 bg-gray-100 dark:bg-gray-500 rounded">{text}</div>
)

const meta = {
	title: 'decorators/showDocSource',
	tags: ['autodocs'],
	parameters: {
		layout: 'padded'
	}
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
	parameters: {
		docs: {
			source: {
				code: `() => <DemoComponent text="Hello World" />`
			}
		}
	},
	decorators: [showDocSource()],
	render: () => <DemoComponent text="Hello World" />
}

export const ShowSourceOnly: Story = {
	parameters: {
		docs: {
			source: {
				code: `() => <DemoComponent text="Hello World" />`
			}
		}
	},
	decorators: [showDocSource()],
	render: () => <></>
}

export const WithLanguageInParameters: Story = {
	parameters: defineDocsParam({
		source: {
			code: dedent`
				<div>Hello, World!</div>
				`,
			language: 'html'
		}
	}),
	decorators: [
		showDocSource({
			theme: {
				href: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.5.0/styles/arta.min.css'
			}
		})
	],
	render: () => <></>
}

export const WithCustomThemeHref: Story = {
	name: 'theme.href',
	tags: ['props'],
	decorators: [
		showDocSource({
			theme: {
				href: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.5.0/styles/arta.min.css'
			}
		})
	],
	parameters: {
		docs: {
			source: {
				code: `() => <DemoComponent text="Hello World" />`
			}
		}
	},
	render: () => <></>
}

export const WithCustomThemeStyle: Story = {
	name: 'theme.style',
	tags: ['props'],
	parameters: {
		docs: {
			source: {
				code: `() => <DemoComponent text="Hello World" />`
			}
		}
	},
	decorators: [showDocSource({ theme: { style: customStyle } })],
	render: () => <></>
}

export const WithLanguage: Story = {
	name: 'language',
	tags: ['props'],
	parameters: defineDocsParam({
		source: {
			code: dedent`
				package main

				import "fmt"

				func main() {
					fmt.Println("Hello, World!")
				}
				`
		}
	}),
	decorators: [
		showDocSource({
			language: 'go',
			theme: {
				href: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.5.0/styles/arta.min.css'
			}
		})
	],
	render: () => <></>
}
