import type { Args, DecoratorFunction, Renderer } from 'storybook/internal/csf'

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
