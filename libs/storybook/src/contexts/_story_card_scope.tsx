import { type ComponentType, memo, type ReactNode, useContext, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { StoryCard } from '../components/story_card.js'
import { generateKey } from '../utils/generate_key.js'
import {
	type StoryCardEntry,
	StoryCardRegistryContext,
	type StoryCardRegistryContextValue
} from './_story_card_registry_context.js'

export type StoryCardScopeProps = { Story: ComponentType } & StoryCardEntry

/**
 * Ensures a story-card collection scope: creates the root container when no context exists,
 * otherwise renders the collector so this card participates in the existing scope.
 */
export function StoryCardScope(props: StoryCardScopeProps) {
	const context = useContext(StoryCardRegistryContext)
	const collector = <StoryCardCollector {...props} />

	if (context === null) {
		return <StoryCardContainer>{collector}</StoryCardContainer>
	}

	return collector
}

function StoryCardContainer({ children }: { children: ReactNode }) {
	const [cards, setCards] = useState<StoryCardEntryWithKey[]>([])

	const contextValue: StoryCardRegistryContextValue = useMemo(
		() => ({
			add(card) {
				const key = generateKey('story-card')
				setCards((cards) => [...cards, { ...card, key }])
				return key
			},
			remove(key) {
				setCards((cards) => cards.filter((card) => card.key !== key))
			}
		}),
		[]
	)

	return (
		<StoryCardRegistryContext.Provider value={contextValue}>
			<div className="rbsb:flex rbsb:flex-col rbsb:gap-2">
				{cards.map(({ content, key, ...rest }) => (
					<StoryCard key={key} {...rest}>
						{content}
					</StoryCard>
				))}
				{children}
			</div>
		</StoryCardRegistryContext.Provider>
	)
}

type StoryCardEntryWithKey = StoryCardEntry & { key: string }

interface StoryCardCollectorProps extends StoryCardScopeProps {}

const StoryCardCollector = memo(function StoryCardCollector({
	Story,
	title,
	status,
	appearance,
	className,
	content
}: StoryCardCollectorProps) {
	const context = useContext(StoryCardRegistryContext)!
	const cardIdRef = useRef<string | null>(null)

	// Collect this card once into the collection
	useLayoutEffect(() => {
		if (cardIdRef.current === null) {
			cardIdRef.current = context.add({ title, status, appearance, className, content })
		}

		return () => {
			if (cardIdRef.current !== null) {
				context.remove(cardIdRef.current)
				cardIdRef.current = null
			}
		}
	}, [])

	return <Story />
})
