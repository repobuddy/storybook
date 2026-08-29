import { defineDocsParam, ShowHtml, withStoryCard } from '#repobuddy/storybook'
import preview from '../../.storybook/preview'

const meta = preview.meta({
	title: 'components/ShowHtml',
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
})

export const DefaultSubject = meta.story({
	parameters: defineDocsParam({
		description: {
			story: 'The `selector` prop is default to `[data-testid="subject"]`.'
		}
	}),
	decorators: [withStoryCard()],
	render: () => (
		<div className="rbsb:flex rbsb:flex-col rbsb:gap-4">
			<div data-testid="subject">
				<button type="button" className="rbsb:bg-sky-700 rbsb:text-white rbsb:rounded rbsb:p-2">
					This is a button
				</button>
			</div>
			<ShowHtml />
		</div>
	)
})

export const NoSubjectFound = meta.story({
	render: () => <ShowHtml selector="not-exist" />
})

export const CustomizeWithClassName = meta.story({
	tags: ['props'],
	render: () => <ShowHtml className="rbsb:bg-sky-700 rbsb:text-white rbsb:rounded rbsb:p-2" />
})

export const CustomizeWithStyle = meta.story({
	tags: ['props'],
	render: () => <ShowHtml style={{ backgroundColor: 'darkred', color: 'white' }} />
})
