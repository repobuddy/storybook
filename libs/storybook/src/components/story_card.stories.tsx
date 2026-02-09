import { defineDocsParam, StoryCard, withStoryCard } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

const meta: Meta<typeof StoryCard> = {
	title: 'components/StoryCard',
	tags: ['new', 'version:2.8', 'autodocs'],
	component: StoryCard,
	parameters: defineDocsParam({
		description: {
			component: [
				'`StoryCard` is a card component that displays information with optional title and appearance styling.',
				'It supports appearance variants: `error`, `warn`, `info` (default), `source`, and `output`.',
				'The component accepts a `title` prop for the heading and `children` for the card body content.'
			].join('<br/>')
		}
	}),
	argTypes: {
		appearance: {
			control: {
				type: 'select'
			},
			options: ['error', 'warn', 'info', 'source', 'output']
		},
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
	tags: ['props'],
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
	tags: ['props', 'deprecated', 'version:2.14', '!version:2.8'],
	parameters: defineDocsParam({
		description: {
			story: 'Deprecated: use `appearance: "error"` instead.'
		}
	}),
	args: {
		status: 'error',
		title: 'Error Card',
		children: 'This card displays an error status with red background styling.'
	},
	decorators: [withStoryCard({ appearance: 'warn' })]
}

export const StatusWarn: Story = {
	name: 'status: warn',
	tags: ['props', 'deprecated', 'version:2.14', '!version:2.8'],
	parameters: defineDocsParam({
		description: {
			story: 'Deprecated: use `appearance: "warn"` instead.'
		}
	}),
	args: {
		status: 'warn',
		title: 'Warning Card',
		children: 'This card displays a warning status with yellow background styling.'
	},
	decorators: [withStoryCard({ appearance: 'warn' })]
}

export const StatusInfo: Story = {
	name: 'status: info',
	tags: ['props', 'deprecated', 'version:2.14', '!version:2.8'],
	parameters: defineDocsParam({
		description: {
			story: 'Deprecated: use `appearance: "info"` instead.'
		}
	}),
	args: {
		status: 'info',
		title: 'Info Card',
		children: 'This card displays an info status with blue background styling.'
	},
	decorators: [withStoryCard({ appearance: 'warn' })]
}

export const AppearanceError: Story = {
	name: 'appearance: error',
	tags: ['props', 'version:2.14', '!version:2.8'],
	parameters: defineDocsParam({
		description: {
			story: 'Use for failure states, validation errors, or critical messages that require immediate attention.'
		}
	}),
	args: {
		appearance: 'error',
		title: 'Error Card',
		children: 'Use appearance="error" when the card conveys a failure or critical message.'
	}
}

export const AppearanceWarn: Story = {
	name: 'appearance: warn',
	tags: ['props', 'version:2.14', '!version:2.8'],
	parameters: defineDocsParam({
		description: {
			story: 'Use for cautions, deprecation notices, or non-blocking issues the user should be aware of.'
		}
	}),
	args: {
		appearance: 'warn',
		title: 'Warning Card',
		children: 'Use appearance="warn" when the card conveys a caution or deprecation.'
	}
}

export const AppearanceInfo: Story = {
	name: 'appearance: info',
	tags: ['props', 'version:2.14', '!version:2.8'],
	parameters: defineDocsParam({
		description: {
			story: 'Use for general context, tips, or neutral information. Default when neither appearance nor status is set.'
		}
	}),
	args: {
		appearance: 'info',
		title: 'Info Card',
		children: 'Use appearance="info" for neutral context or tips (default).'
	}
}

export const AppearanceSource: Story = {
	name: 'appearance: source',
	tags: ['props', 'version:2.14', '!version:2.8'],
	parameters: defineDocsParam({
		description: {
			story: 'Use when embedding code or source snippets so the card blends with the page (e.g. with showDocSource).'
		}
	}),
	args: {
		appearance: 'source',
		title: 'Source Card',
		children: 'Use appearance="source" for code/source blocks that should blend in.'
	}
}

export const AppearanceOutput: Story = {
	name: 'appearance: output',
	tags: ['props', 'version:2.14', '!version:2.8'],
	parameters: defineDocsParam({
		description: {
			story: 'Use when showing results, success feedback, or generated output.'
		}
	}),
	args: {
		appearance: 'output',
		title: 'Output Card',
		children: 'Use appearance="output" for results or success feedback.'
	}
}

export const WithComplexContent: Story = {
	name: 'children: complex content',
	tags: ['props'],
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
			story:
				'StoryCard accepts a function for className that receives the card state (including appearance) and default className.'
		}
	}),
	render: () => (
		<StoryCard
			title="Function-based className"
			appearance="warn"
			className={({ appearance, defaultClassName }) => {
				const borderColor = appearance === 'warn' ? 'rbsb:border-yellow-500' : 'rbsb:border-gray-500'
				return `${defaultClassName} rbsb:border-2 ${borderColor} rbsb:shadow-lg`
			}}
		>
			This card uses a function to compute className based on the card state.
		</StoryCard>
	)
}
