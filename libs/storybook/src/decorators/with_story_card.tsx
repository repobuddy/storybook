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

type StoryCardContextValue = {
	addCard: (card: ReactNode) => void
}

const StoryCardContext = createContext<StoryCardContextValue | null>(null)

interface StoryCardProps extends WithStoryCardProps {
	Story: ComponentType
}

type CardWithId = {
	id: string
	content: ReactNode
}

function StoryCard({ Story, title, status, className, content }: StoryCardProps) {
	const parentContext = useContext(StoryCardContext)

	const cardsRef = useRef<CardWithId[]>([])
	const [cards, setCards] = useState<CardWithId[]>([])
	const cardIdCounterRef = useRef(0)
	const registeredRef = useRef(false)

	// Create the card element
	const cardElement = (
		<section className={storyCardTheme({ status }, className)}>
			{title && <Heading className="text-lg font-bold">{title}</Heading>}
			{content}
		</section>
	)

	const addCard = (card: ReactNode) => {
		const id = `story-card-${cardIdCounterRef.current++}`
		cardsRef.current.push({ id, content: card })
		setCards([...cardsRef.current])
	}

	const contextValue: StoryCardContextValue = {
		addCard
	}

	// Register this card once with parent context or local state
	useLayoutEffect(() => {
		if (!registeredRef.current) {
			if (parentContext) {
				parentContext.addCard(cardElement)
			} else {
				addCard(cardElement)
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
				{cards.map((card) => (
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
