import { type ComponentType, type ReactNode, useContext, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { StoryCard } from '../components/story_card.js'
import { generateKey } from '../utils/generate_key.js'
import { StoryCardContext, type StoryCardContextCard, type StoryCardContextValue } from './story_card_context.js'

export type StoryCardScopeProps = { Story: ComponentType } & StoryCardContextCard

/**
 * Ensures a story-card collection scope: creates the root container when no context exists,
 * otherwise renders the collector so this card participates in the existing scope.
 */
export function StoryCardScope({ Story, ...props }: StoryCardScopeProps) {
	const context = useContext(StoryCardContext)
	const collector = <StoryCardCollector Story={Story} {...props} />

	if (context === null) {
		return <StoryCardContainer>{collector}</StoryCardContainer>
	}

	return collector
}

function StoryCardContainer({ children }: { children: ReactNode }) {
	const [cards, setCards] = useState<StoryCardWithKey[]>([])

	const contextValue: StoryCardContextValue = useMemo(
		() => ({
			addCard(card) {
				const key = generateKey('story-card')
				setCards((cards) => [...cards, { ...card, key }])
				return key
			},
			removeCard(key) {
				setCards((cards) => cards.filter((card) => card.key !== key))
			}
		}),
		[]
	)

	return (
		<StoryCardContext.Provider value={contextValue}>
			<div className="rbsb:flex rbsb:flex-col rbsb:gap-2">
				{cards.map(({ content, key, ...rest }) => (
					<StoryCard key={key} {...rest}>
						{content}
					</StoryCard>
				))}
				{children}
			</div>
		</StoryCardContext.Provider>
	)
}

type StoryCardWithKey = StoryCardContextCard & { key: string }

interface StoryCardCollectorProps extends StoryCardScopeProps {}

function StoryCardCollector({ Story, title, status, className, content }: StoryCardCollectorProps) {
	// StoryCardCollector is an internal component. Context is guaranteed to be not null by `StoryCardContainer`.
	const context = useContext(StoryCardContext)!
	const cardIdRef = useRef<string | null>(null)

	// Collect this card once into the collection
	useLayoutEffect(() => {
		// Only add if not already added (handles Strict Mode double-render)
		if (cardIdRef.current === null) {
			cardIdRef.current = context.addCard({ title, status, className, content })
		}

		return () => {
			if (cardIdRef.current !== null) {
				context.removeCard(cardIdRef.current)
				cardIdRef.current = null
			}
		}
	}, [])

	return <Story />
}
