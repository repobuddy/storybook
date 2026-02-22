import type { Args, DecoratorFunction, Renderer } from 'storybook/internal/csf'
import { type ShowSourceOptions, showSource } from './show_source'

/**
 * A decorator that shows the source code of a story below the rendered story.
 * Uses {@link showSource} with `placement: 'after'`.
 *
 * @deprecated Use `showSource({ placement: 'after' })` instead.
 * @param options - Same options as showSource; placement is forced to 'after'
 * @returns A decorator function that shows the source code below the story
 */
export function showDocSource<TRenderer extends Renderer = Renderer, TArgs = Args>(
	options?: ShowSourceOptions
): DecoratorFunction<TRenderer, TArgs> {
	return showSource({ placement: 'after', ...options })
}
