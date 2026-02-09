import { expect } from 'storybook/test'
import { twMerge } from 'tailwind-merge'
import { defineDocsParam, showDocSource, withStoryCard } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

const meta = {
	title: 'decorators/withStoryCard',
	tags: ['autodocs', 'version:2.2'],
	parameters: defineDocsParam({
		description: {
			component:
				'The `withStoryCard` decorator adds a card section to should additional information about the story. It is hidden when the story is shown in docs.'
		}
	}),
	render: () => <p>This is the story content</p>
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const ShowsComponentDescription: Story = {
	tags: ['usecase', 'snapshot'],
	decorators: [
		withStoryCard(),
		withStoryCard({
			content: (
				<p>
					When component description is defined and no <code>`content`</code> are provided, the component description
					will be shown.
				</p>
			)
		})
	],
	play: async ({ canvasElement }) => {
		const sections = canvasElement.querySelectorAll('section')
		await expect(sections).toHaveLength(2)
	}
}

export const ShowsStoryDescription: Story = {
	tags: ['usecase', 'snapshot'],
	parameters: defineDocsParam({
		description: {
			story: 'This is story description'
		}
	}),
	decorators: [
		withStoryCard(),
		withStoryCard({
			content: (
				<p>
					When story description is provided and no <code>`content`</code> are provided, story description will be shown
					instead of component description.
				</p>
			)
		})
	],
	play: async ({ canvasElement }) => {
		const sections = canvasElement.querySelectorAll('section')
		await expect(sections).toHaveLength(2)
	}
}

export const WithContent: Story = {
	name: 'content: ReactNode',
	tags: ['props'],
	decorators: [
		withStoryCard({
			content: <p>Custom message.</p>
		})
	],
	render: () => (
		<p>
			When providing a custom <code>`content`</code> value, it will be used over component andy story description.
		</p>
	),
	play: async ({ canvas }) => {
		const message = canvas.getByText('Custom message.')
		await expect(message).toBeInTheDocument()
	}
}

export const WithTitle: Story = {
	name: 'title: ReactNode',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'The decorator can be used with a title.'
		}
	}),
	decorators: [withStoryCard({ title: 'Story Card Title' })],
	play: async ({ canvas }) => {
		const title = canvas.getByText('Story Card Title')
		await expect(title).toBeInTheDocument()
	}
}

export const WithInfoStatus: Story = {
	name: 'status: info',
	tags: ['props', 'deprecated', 'version:next', '!version:2.2'],
	parameters: defineDocsParam({
		description: {
			story: 'Info status displays with a blue background.'
		}
	}),
	decorators: [
		withStoryCard({
			title: 'Deprecated',
			appearance: 'warn',
			content: (
				<p>
					The <code>status</code> prop is deprecated. Use <code>appearance: &quot;info&quot;</code> instead.
				</p>
			)
		}),
		withStoryCard({ title: 'Info Card', status: 'info' })
	],
	play: async ({ canvasElement }) => {
		const sections = canvasElement.querySelectorAll('section')
		await expect(sections).toHaveLength(2)
		const statusCard = sections[1]
		await expect(statusCard).toHaveClass('rbsb:bg-sky-100', 'rbsb:dark:bg-sky-900')
	}
}

export const WithWarnStatus: Story = {
	name: 'status: warn',
	tags: ['props', 'deprecated', 'version:next', '!version:2.2'],
	parameters: defineDocsParam({
		description: {
			story: 'Warn status displays with a yellow background.'
		}
	}),
	decorators: [
		withStoryCard({
			title: 'Deprecated',
			appearance: 'warn',
			content: (
				<p>
					The <code>status</code> prop is deprecated. Use <code>appearance: &quot;warn&quot;</code> instead.
				</p>
			)
		}),
		withStoryCard({ title: 'Warning Card', status: 'warn' })
	],
	play: async ({ canvasElement }) => {
		const sections = canvasElement.querySelectorAll('section')
		await expect(sections).toHaveLength(2)
		const statusCard = sections[1]
		await expect(statusCard).toHaveClass('rbsb:bg-yellow-100', 'rbsb:dark:bg-yellow-900')
	}
}

export const WithErrorStatus: Story = {
	name: 'status: error',
	tags: ['props', 'deprecated', 'version:next', '!version:2.2'],
	parameters: defineDocsParam({
		description: {
			story: 'Error status displays with a red background.'
		}
	}),
	decorators: [
		withStoryCard({
			title: 'Deprecated',
			appearance: 'warn',
			content: (
				<p>
					The <code>status</code> prop is deprecated. Use <code>appearance: &quot;error&quot;</code> instead.
				</p>
			)
		}),
		withStoryCard({ title: 'Error Card', status: 'error' })
	],
	play: async ({ canvasElement }) => {
		const sections = canvasElement.querySelectorAll('section')
		await expect(sections).toHaveLength(2)
		const statusCard = sections[1]
		await expect(statusCard).toHaveClass('rbsb:bg-red-100', 'rbsb:dark:bg-red-900')
	}
}

export const WithAppearanceError: Story = {
	name: 'appearance: error',
	tags: ['props', 'version:next', '!version:2.2'],
	parameters: defineDocsParam({
		description: {
			story: 'Use for failure states, validation errors, or critical messages that require immediate attention.'
		}
	}),
	decorators: [
		withStoryCard({
			title: 'Error Card',
			appearance: 'error',
			content: (
				<p>
					Use <code>appearance="error"</code> when the card conveys a failure or critical message.
				</p>
			)
		})
	],
	play: async ({ canvasElement }) => {
		const section = canvasElement.querySelector('section')
		await expect(section).toHaveClass(
			'rbsb:bg-red-100',
			'rbsb:dark:bg-red-900',
			'rbsb:border-red-300',
			'rbsb:dark:border-red-700'
		)
	}
}

export const WithAppearanceWarn: Story = {
	name: 'appearance: warn',
	tags: ['props', 'version:next', '!version:2.2'],
	parameters: defineDocsParam({
		description: {
			story: 'Use for cautions, deprecation notices, or non-blocking issues the user should be aware of.'
		}
	}),
	decorators: [
		withStoryCard({
			title: 'Warning Card',
			appearance: 'warn',
			content: (
				<p>
					Use <code>appearance="warn"</code> when the card conveys a caution or deprecation.
				</p>
			)
		})
	],
	play: async ({ canvasElement }) => {
		const section = canvasElement.querySelector('section')
		await expect(section).toHaveClass(
			'rbsb:bg-yellow-100',
			'rbsb:dark:bg-yellow-900',
			'rbsb:border-yellow-300',
			'rbsb:dark:border-yellow-700'
		)
	}
}

export const WithAppearanceInfo: Story = {
	name: 'appearance: info',
	tags: ['props', 'version:next', '!version:2.2'],
	parameters: defineDocsParam({
		description: {
			story: 'Use for general context, tips, or neutral information. Default when neither appearance nor status is set.'
		}
	}),
	decorators: [
		withStoryCard({
			title: 'Info Card',
			appearance: 'info',
			content: (
				<p>
					Use <code>appearance="info"</code> for neutral context or tips (default).
				</p>
			)
		})
	],
	play: async ({ canvasElement }) => {
		const section = canvasElement.querySelector('section')
		await expect(section).toHaveClass(
			'rbsb:bg-sky-100',
			'rbsb:dark:bg-sky-900',
			'rbsb:border-sky-300',
			'rbsb:dark:border-sky-700'
		)
	}
}

export const WithAppearanceSource: Story = {
	name: 'appearance: source',
	tags: ['props', 'version:next', '!version:2.2'],
	parameters: defineDocsParam({
		description: {
			story: 'Use when embedding code or source snippets so the card blends with the page (e.g. with showDocSource).'
		}
	}),
	decorators: [
		withStoryCard({
			title: 'Source Card',
			appearance: 'source',
			content: (
				<p>
					Use <code>appearance="source"</code> for code/source blocks (e.g. with <code>showDocSource</code>).
				</p>
			)
		})
	],
	play: async ({ canvasElement }) => {
		const section = canvasElement.querySelector('section')
		await expect(section).toHaveClass(
			'rbsb:bg-gray-100',
			'rbsb:dark:bg-gray-900',
			'rbsb:border-gray-300',
			'rbsb:dark:border-gray-700'
		)
	}
}

export const WithAppearanceOutput: Story = {
	name: 'appearance: output',
	tags: ['props', 'version:next', '!version:2.2'],
	parameters: defineDocsParam({
		description: {
			story: 'Use when showing results, success feedback, or generated output.'
		}
	}),
	decorators: [
		withStoryCard({
			title: 'Output Card',
			appearance: 'output',
			content: (
				<p>
					Use <code>appearance="output"</code> for results or success feedback.
				</p>
			)
		})
	],
	play: async ({ canvasElement }) => {
		const section = canvasElement.querySelector('section')
		await expect(section).toHaveClass(
			'rbsb:bg-green-100',
			'rbsb:dark:bg-green-900',
			'rbsb:border-green-300',
			'rbsb:dark:border-green-700'
		)
	}
}

export const WithCustomClassName: Story = {
	name: 'className: string',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'The card can be customized with additional className.'
		}
	}),
	decorators: [
		withStoryCard({
			title: 'Custom Styled Card',
			status: 'info',
			className: 'rbsb:border-2 rbsb:border-blue-500 rbsb:shadow-lg'
		})
	],
	play: async ({ canvasElement }) => {
		const section = canvasElement.querySelector('section')
		await expect(section).toHaveClass('rbsb:border-2 rbsb:border-blue-500 rbsb:shadow-lg')
	}
}

export const WithClassNameFunction: Story = {
	name: 'className: function',
	tags: ['props', 'snapshot'],
	parameters: defineDocsParam({
		description: {
			story:
				'The card can be customized with a className function that receives the `appearance` and `defaultClassName`. The function should return the final className string.'
		}
	}),
	decorators: [
		withStoryCard({
			title: 'Function-Based Styling',
			appearance: 'info',
			className: ({ appearance, defaultClassName }) =>
				twMerge(
					defaultClassName,
					{
						info: 'rbsb:bg-green-200 rbsb:dark:bg-green-800',
						warn: 'rbsb:bg-amber-300 rbsb:dark:bg-amber-900',
						error: 'rbsb:bg-rose-400 rbsb:dark:bg-rose-900',
						source: '',
						output: 'rbsb:bg-emerald-200 rbsb:dark:bg-emerald-800'
					}[appearance ?? 'info']
				)
		}),
		showDocSource({
			source: 'className: ({ appearance, defaultClassName }) => string'
		})
	]
}

export const HiddenWithoutMessage: Story = {
	tags: ['edgecase'],
	parameters: defineDocsParam({
		description: {
			component: ''
		}
	}),
	decorators: [withStoryCard()],
	render: () => (
		<p>
			When there are no component or story description, and the `withStoryCard` call does not provide `title` or
			`children`, it will not render anything.
		</p>
	),
	play: async ({ canvasElement }) => {
		const section = canvasElement.querySelector('section')
		await expect(section).not.toBeInTheDocument()
	}
}
