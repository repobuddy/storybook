import type { Meta, StoryObj } from '@storybook/react-vite'
import { showDocSource } from './show_doc_source'

// Simple demo component for testing the decorator
const DemoComponent = ({ text = 'Hello World' }: { text?: string }) => (
	<div className="p-4 bg-gray-100 dark:bg-gray-500 rounded">{text}</div>
)

const meta = {
	title: 'decorators/showDocSource',
	component: DemoComponent,
	tags: ['autodocs'],
	parameters: {
		layout: 'padded'
	}
} satisfies Meta<typeof DemoComponent>

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
	parameters: {
		docs: {
			source: {
				code: `<DemoComponent text="Hello World" />`
			}
		}
	},
	args: {
		text: 'Hello World'
	},
	decorators: [showDocSource()]
}

export const ShowDocSourceOnly: Story = {
	name: 'Without Source Code',
	decorators: [showDocSource()],
	parameters: {
		docs: {
			source: {
				code: `<DemoComponent text="Hello World" />`
			}
		}
	},
	render: () => <></>
}
