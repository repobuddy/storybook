import { type ComponentType, memo, type ReactNode, useContext, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { StoryCard } from '../components/story_card.js'
import { generateKey } from '../utils/generate_key.js'
import {
	type StoryCardEntry,
	StoryCardRegistryContext,
	type StoryCardRegistryContextValue
} from './_story_card_registry_context.js'

type StoryCardScopeProps = { Story: ComponentType } & StoryCardEntry

/**
 * Ensures a story-card collection scope: creates the root container when no context exists,
 * otherwise renders the collector so this card participates in the existing scope.
 */
export const StoryCardScope = memo(function StoryCardScope(props: StoryCardScopeProps) {
	const context = useContext(StoryCardRegistryContext)
	const collector = <StoryCardCollector {...props} />

	if (context === null) {
		return <StoryCardContainer>{collector}</StoryCardContainer>
	}

	return collector
})

/** Renders cards from registry state without re-rendering when only children change (avoids cascade). */
const StoryCardList = memo(function StoryCardList({ cards }: { cards: StoryCardEntryWithKey[] }) {
	return (
		<>
			{cards.map(({ content, key, ...rest }) => (
				<StoryCard key={key} {...rest}>
					{content}
				</StoryCard>
			))}
		</>
	)
})

/** Keeps container children from re-rendering when container state (cards) updates. */
const StableScopeChildren = memo(function StableScopeChildren({ children }: { children: ReactNode }) {
	return <>{children}</>
})

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
			},
			update(key, card) {
				setCards((cards) => cards.map((c) => (c.key === key ? { ...card, key } : c)))
			}
		}),
		[]
	)

	return (
		<StoryCardRegistryContext.Provider value={contextValue}>
			<div className="rbsb:flex rbsb:flex-col rbsb:gap-2">
				<StoryCardList cards={cards} />
				<StableScopeChildren>{children}</StableScopeChildren>
			</div>
		</StoryCardRegistryContext.Provider>
	)
}

type StoryCardEntryWithKey = StoryCardEntry & { key: string }

interface StoryCardCollectorProps extends StoryCardScopeProps {}

function entryPropsEqual(a: StoryCardCollectorProps, b: StoryCardCollectorProps): boolean {
	return (
		a.Story === b.Story &&
		a.title === b.title &&
		a.status === b.status &&
		a.appearance === b.appearance &&
		a.className === b.className &&
		a.content === b.content
	)
}

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

	const entry = useMemo(
		() => ({ title, status, appearance, className, content }),
		[title, status, appearance, className, content]
	)

	// Register on mount, unregister on unmount only
	useLayoutEffect(() => {
		cardIdRef.current = context.add(entry)
		return () => {
			if (cardIdRef.current !== null) {
				context.remove(cardIdRef.current)
				cardIdRef.current = null
			}
		}
	}, [context])

	// Update registry when entry changes (avoids remove+add churn)
	useLayoutEffect(() => {
		if (cardIdRef.current !== null) {
			context.update(cardIdRef.current, entry)
		}
	}, [context, entry])

	return <Story />
}, entryPropsEqual)
