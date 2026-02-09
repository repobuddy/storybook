import type { ReactNode } from 'react'
import type { StoryCardAppearance, StoryCardProps, StoryCardStatus } from '../components/story_card.js'

export interface StoryCardParam {
	storyCard: {
		/**
		 * Optional title displayed as a heading in the card.
		 * Can be any React node (string, JSX, etc.).
		 */
		title?: ReactNode | undefined
		/**
		 * @deprecated Use `appearance` instead.
		 */
		status?: StoryCardStatus
		/**
		 * Appearance of the card (error | warn | info | source | output). Default: `'info'`.
		 */
		appearance?: StoryCardAppearance | undefined
		/**
		 * Additional CSS classes or a function to compute classes.
		 *
		 * If a string is provided, it will be merged with the default classes.
		 * If a function is provided, it receives the card state and default className,
		 * and should return the final className string.
		 */
		className?:
			| ((state: Pick<StoryCardProps, 'status' | 'appearance'> & { defaultClassName: string }) => string)
			| string
			| undefined
		/**
		 * Content to display in the card body.
		 * Can be any React node (string, JSX, etc.).
		 *
		 * If not provided, the decorator will automatically use:
		 * 1. Story description (`parameters.docs.description.story`)
		 * 2. Component description (`parameters.docs.description.component`)
		 * 3. Nothing (card won't render if no content and no title)
		 */
		content?: ReactNode | undefined
	}
}

/**
 * Defines story card parameters for Storybook stories.
 *
 * These parameters can be consumed by the `withStoryCard` decorator
 * to automatically configure story cards without passing props directly.
 *
 * @param storyCard - Configuration for story card parameters
 * @returns An object containing the story card parameter configuration
 *
 * @example
 * ```tsx
 * import { defineStoryCard, withStoryCard } from '@repobuddy/storybook'
 *
 * export const MyStory: Story = {
 *   parameters: defineStoryCard({
 *     title: 'Important Notice',
 *     status: 'warn',
 *     content: <p>Please review this carefully.</p>
 *   }),
 *   decorators: [withStoryCard()]
 * }
 * ```
 *
 * @example
 * With automatic content from story description:
 * ```tsx
 * export const MyStory: Story = {
 *   parameters: {
 *     ...defineDocsParam({
 *       description: {
 *         story: 'This description will be shown in the card'
 *       }
 *     }),
 *     ...defineStoryCard({
 *       title: 'Story Information',
 *       status: 'info'
 *     })
 *   },
 *   decorators: [withStoryCard()]
 * }
 * ```
 */
export function defineStoryCardParam(storyCard: StoryCardParam['storyCard']): StoryCardParam {
	return { storyCard }
}
