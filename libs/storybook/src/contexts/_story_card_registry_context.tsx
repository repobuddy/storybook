import type { ReactNode } from 'react'
import { createContext } from 'react'
import type { StoryCardProps } from '../components/story_card.js'

/**
 * Payload for adding a card to the story card registry.
 * Matches the shape of card props with `status` required.
 */
export type StoryCardEntry = Omit<StoryCardProps, 'children'> & { content?: ReactNode }

export interface StoryCardRegistryContextValue {
	add: (card: StoryCardEntry) => string
	remove: (id: string) => void
}

export const StoryCardRegistryContext = createContext<StoryCardRegistryContextValue | null>(null)
