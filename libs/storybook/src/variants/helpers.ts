import type { StoryContext } from 'storybook/internal/types'
import { GLOBAL_KEY, PARAM_KEY } from './constants.js'

/**
 * @param StoryContext
 * @returns The global theme name set for your stories
 */
export function pluckVariantFromContext({ globals, parameters }: StoryContext, key: string): string | undefined {
	return parameters[PARAM_KEY]?.[key]?.current ?? globals[GLOBAL_KEY]?.[key]?.current
}
