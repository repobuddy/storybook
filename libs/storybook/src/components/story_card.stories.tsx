import { defineDocsParam, StoryCard } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof StoryCard> = {
	title: 'components/StoryCard',
	tags: ['new', 'version:2.8', 'autodocs'],
	component: StoryCard,
	parameters: defineDocsParam({
		description: {
			component: [
				'`StoryCard` is a card component that displays information with optional title and status styling.',
				'It supports three status variants: `error`, `warn`, and `info` (default).',
				'The component accepts a `title` prop for the heading and `children` for the card body content.'
			].join('<br/>')
		}
	}),
	argTypes: {
		status: {
			control: {
				type: 'select'
			},
			options: ['error', 'warn', 'info']
		},
		title: {
			control: {
				type: 'text'
			}
		},
		className: {
			control: {
				type: 'text'
			}
		}
	}
}

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
	args: {
		children: 'This is a basic story card with default info status.'
	}
}

export const WithTitle: Story = {
	name: 'title: provided',
	parameters: defineDocsParam({
		description: {
			story: 'StoryCard with a title heading displayed above the content.'
		}
	}),
	args: {
		title: 'Card Title',
		children: 'This card has a title displayed as a heading.'
	}
}

export const StatusError: Story = {
	name: 'status: error',
	parameters: defineDocsParam({
		description: {
			story: 'StoryCard with error status displays a red background.'
		}
	}),
	args: {
		status: 'error',
		title: 'Error Card',
		children: 'This card displays an error status with red background styling.'
	}
}

export const StatusWarn: Story = {
	name: 'status: warn',
	parameters: defineDocsParam({
		description: {
			story: 'StoryCard with warn status displays a yellow background.'
		}
	}),
	args: {
		status: 'warn',
		title: 'Warning Card',
		children: 'This card displays a warning status with yellow background styling.'
	}
}

export const StatusInfo: Story = {
	name: 'status: info',
	parameters: defineDocsParam({
		description: {
			story: 'StoryCard with info status displays a blue background. This is the default status.'
		}
	}),
	args: {
		status: 'info',
		title: 'Info Card',
		children: 'This card displays an info status with blue background styling.'
	}
}

export const WithComplexContent: Story = {
	name: 'children: complex content',
	parameters: defineDocsParam({
		description: {
			story: 'StoryCard can contain complex React content, not just plain text.'
		}
	}),
	render: () => (
		<StoryCard title="Complex Content Example">
			<div className="rbsb:flex rbsb:flex-col rbsb:gap-2">
				<p>This card contains multiple elements:</p>
				<ul className="rbsb:list-disc rbsb:list-inside rbsb:ml-4">
					<li>List item one</li>
					<li>List item two</li>
					<li>List item three</li>
				</ul>
				<button
					type="button"
					className="rbsb:bg-sky-500 rbsb:text-white rbsb:rounded rbsb:px-4 rbsb:py-2 rbsb:self-start"
				>
					Action Button
				</button>
			</div>
		</StoryCard>
	)
}

export const CustomClassName: Story = {
	name: 'className: custom',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'StoryCard accepts a custom className prop to override or extend default styles.'
		}
	}),
	args: {
		title: 'Custom Styled Card',
		className: 'rbsb:border-2 rbsb:border-sky-500',
		children: 'This card has custom border styling applied via className.'
	}
}

export const CustomClassNameFunction: Story = {
	name: 'className: function',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'StoryCard accepts a function for className that receives the card state and default className.'
		}
	}),
	render: () => (
		<StoryCard
			title="Function-based className"
			status="warn"
			className={({ status, defaultClassName }) => {
				const borderColor = status === 'warn' ? 'rbsb:border-yellow-500' : 'rbsb:border-gray-500'
				return `${defaultClassName} rbsb:border-2 ${borderColor} rbsb:shadow-lg`
			}}
		>
			This card uses a function to compute className based on the card state.
		</StoryCard>
	)
}
