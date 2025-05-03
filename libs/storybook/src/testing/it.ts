import type { Args, Renderer, StoryAnnotations } from 'storybook/internal/csf'

export type ItObj<TRenderer extends Renderer, TArgs extends Args> = StoryAnnotations<TRenderer, TArgs>

export function it<TRenderer extends Renderer, TArgs extends Args>(
	description: string,
	story: StoryAnnotations<TRenderer, TArgs>
): StoryAnnotations<TRenderer, TArgs> {
	const { play, ...rest } = story
	return {
		...rest,
		async play(context) {
			await context.step(description, async () => {
				await play?.(context)
			})
		}
	}
}

// does not work
it.skip = <TRenderer extends Renderer, TArgs extends Args>(
	description: string,
	story: StoryAnnotations<TRenderer, TArgs>
) => {
	const { tags = [], ...rest } = story
	return it(description, {
		tags: [...tags, '!test'],
		...rest
	})
}
