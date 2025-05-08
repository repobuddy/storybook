import type { Args, DecoratorFunction, Renderer } from 'storybook/internal/csf'

/**
 * A decorator that shows the source code of a story above the rendered story.
 * The source code is taken from the story's `parameters.docs.source.code`.
 */
export function showDocSource<TRenderer extends Renderer = Renderer, TArgs = Args>(): DecoratorFunction<
	TRenderer,
	TArgs
> {
	return (Story, { parameters }) => {
		return (
			<section
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '1rem'
				}}
			>
				<pre>{parameters.docs?.source?.code}</pre>
				<Story />
			</section>
		)
	}
}
