import { defineDocsParam, withStoryCard } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'
import { expect } from 'storybook/test'
import { twMerge } from 'tailwind-merge'

const meta = {
	title: 'decorators/withStoryCard',
	tags: ['autodocs'],
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
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'Info status displays with a blue background.'
		}
	}),
	decorators: [withStoryCard({ title: 'Info Card', status: 'info' })],
	play: async ({ canvasElement }) => {
		const section = canvasElement.querySelector('section')
		await expect(section).toHaveClass('bg-sky-100', 'dark:bg-sky-900')
	}
}

export const WithWarnStatus: Story = {
	name: 'status: warn',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'Warn status displays with a yellow background.'
		}
	}),
	decorators: [withStoryCard({ title: 'Warning Card', status: 'warn' })],
	play: async ({ canvasElement }) => {
		const section = canvasElement.querySelector('section')
		await expect(section).toHaveClass('bg-yellow-100', 'dark:bg-yellow-900')
	}
}

export const WithErrorStatus: Story = {
	name: 'status: error',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'Error status displays with a red background.'
		}
	}),
	decorators: [withStoryCard({ title: 'Error Card', status: 'error' })],
	play: async ({ canvasElement }) => {
		const section = canvasElement.querySelector('section')
		await expect(section).toHaveClass('bg-red-100', 'dark:bg-red-900')
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
			className: 'border-2 border-blue-500 shadow-lg'
		})
	],
	play: async ({ canvasElement }) => {
		const section = canvasElement.querySelector('section')
		await expect(section).toHaveClass('border-2 border-blue-500 shadow-lg')
	}
}

export const WithClassNameFunction: Story = {
	name: 'className: function',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'The card can be customized with a className function that receives the `status` and `defaultClassName`. The function should return the final className string.'
		}
	}),
	decorators: [
		withStoryCard({
			title: 'Function-Based Styling',
			status: 'info',
			className: ({ status, defaultClassName }) =>
				twMerge(
					defaultClassName,
					{
						info: 'bg-green-200 dark:bg-green-800',
						warn: 'bg-amber-300 dark:bg-amber-900',
						error: 'bg-rose-400 dark:bg-rose-900'
					}[status!]
				)
		})
	],
	render: () => <pre>{'className: ({ status, defaultClassName }) => string'}</pre>,
	play: async ({ canvasElement }) => {
		const section = canvasElement.querySelector('section')
		await expect(section).toHaveClass('bg-green-200', 'dark:bg-green-800')
	}
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
