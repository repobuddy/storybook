import { cva } from 'class-variance-authority'
import type { ClassValue } from 'class-variance-authority/types'
import { createContext, useContext, useLayoutEffect, useRef, useState, type ComponentType, type ReactNode } from 'react'
import { Heading } from 'react-aria-components'
import type { DecoratorFunction, Renderer } from 'storybook/internal/types'
import { twMerge } from 'tailwind-merge'

export type WithStoryCardProps = {
	title?: string | undefined
	status?: 'error' | 'warn' | 'info' | undefined
	className?:
		| ((state: Pick<WithStoryCardProps, 'status'> & { defaultClassName: string }) => string)
		| ClassValue
		| undefined
	content?: ReactNode | undefined
}

export function withStoryCard<TRenderer extends Renderer = Renderer>({
	title,
	content: contentProp,
	...rest
}: WithStoryCardProps = {}): DecoratorFunction<TRenderer> {
	return (Story, { parameters, viewMode }) => {
		if (viewMode === 'docs') return <Story />

		const content = contentProp ?? parameters.docs?.description?.story ?? parameters.docs?.description?.component
		if (!content && !title) return <Story />
		return <StoryCard Story={Story} content={content} title={title} {...rest} />
	}
}

type StoryCard = {
	id: string
	content: ReactNode
}

type StoryCardContextValue = {
	addCard: (card: ReactNode) => void
	getCards: () => StoryCard[]
}

const StoryCardContext = createContext<StoryCardContextValue | null>(null)

interface StoryCardProps extends WithStoryCardProps {
	Story: ComponentType
}

function StoryCard({ Story, title, status, className, content }: StoryCardProps) {
	const parentContext = useContext(StoryCardContext)
	const cardRef = useRef<ReactNode | null>(null)
	const registeredRef = useRef(false)

	const cardsRef = useRef<StoryCard[]>([])
	const cardIdCounterRef = useRef(0)
	const [, setCards] = useState<StoryCard[]>([])

	// Create the card element once
	if (!cardRef.current) {
		cardRef.current = (
			<section className={storyCardTheme({ status }, className)}>
				{title && <Heading className="text-lg font-bold">{title}</Heading>}
				{content}
			</section>
		)
	}

	const addCard = (card: ReactNode) => {
		const id = `story-card-${cardIdCounterRef.current++}`
		cardsRef.current.push({ id, content: card })
		// Trigger re-render to show all collected cards
		setCards([...cardsRef.current])
	}

	const getCards = () => {
		// Cards are collected in definition order (outermost decorator registers first, then inner ones)
		return [...cardsRef.current]
	}

	const contextValue: StoryCardContextValue = {
		addCard,
		getCards
	}

	// Register this card once - always call useLayoutEffect
	useLayoutEffect(() => {
		if (cardRef.current && !registeredRef.current) {
			if (parentContext) {
				parentContext.addCard(cardRef.current)
			} else {
				addCard(cardRef.current)
			}
			registeredRef.current = true
		}
	})

	// If there's a parent context, just render the Story
	if (parentContext) {
		return <Story />
	}

	// This is the outermost decorator - render all cards
	return (
		<StoryCardContext.Provider value={contextValue}>
			<div className="flex flex-col gap-2">
				{getCards().map((card) => (
					<div key={card.id}>{card.content}</div>
				))}
				<Story />
			</div>
		</StoryCardContext.Provider>
	)
}

const storyCardTheme = (state: Pick<WithStoryCardProps, 'status'>, className: WithStoryCardProps['className']) => {
	const defaultClassName = storyCardVariants(state)
	if (!className) return defaultClassName
	return twMerge(
		defaultClassName,
		typeof className === 'function' ? className({ ...state, defaultClassName }) : className
	)
}

const storyCardVariants = cva('flex flex-col gap-1 py-3 px-4 rounded text-black dark:text-gray-100', {
	variants: {
		status: {
			error: 'bg-red-100 dark:bg-red-900',
			warn: 'bg-yellow-100 dark:bg-yellow-900',
			info: 'bg-sky-100 dark:bg-sky-900'
		}
	},
	defaultVariants: {
		status: 'info'
	}
})
