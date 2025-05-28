import type { Meta, StoryObj } from '@storybook/react'
import { defineDocsParam, ShowHtml } from '../../index.ts'

const meta: Meta<typeof ShowHtml> = {
	title: 'testing/ShowHtml',
	tags: ['new', 'version:1.0', 'autodocs'],
	component: ShowHtml,
	parameters: defineDocsParam({
		description: {
			component: [
				'`ShowHtml` is a component that displays the HTML of a subject.',
				'It uses `htmlfy` internally.',
				'You can pass additional config to customize the output.'
			].join('<br/>')
		}
	}),
	argTypes: {
		config: {
			control: {
				type: 'object'
			}
		}
	}
}

export default meta

export const DefaultSubject: StoryObj = {
	parameters: defineDocsParam({
		description: {
			story: 'The `selector` prop is default to `[data-testid="subject"]`.'
		}
	}),
	render: () => (
		<div className="flex flex-col gap-4">
			<div data-testid="subject">
				<button type="button" className="bg-sky-500 text-white rounded p-2">
					This is a button
				</button>
			</div>
			<ShowHtml />
		</div>
	)
}

export const NoSubjectFound: StoryObj = {
	render: () => <ShowHtml selector="not-exist" />
}

export const CustomizeWithClassName: StoryObj = {
	tags: ['props'],
	render: () => <ShowHtml className="bg-sky-500 text-white rounded p-2" />
}

export const CustomizeWithStyle: StoryObj = {
	tags: ['props'],
	render: () => <ShowHtml style={{ backgroundColor: 'red', color: 'white' }} />
}
