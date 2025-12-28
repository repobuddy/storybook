import { cva } from 'class-variance-authority'
import type { ClassValue } from 'class-variance-authority/types'
import {
	createContext,
	useContext,
	useLayoutEffect,
	useMemo,
	useRef,
	useState,
	type ComponentType,
	type ReactNode
} from 'react'
import type { DecoratorFunction, Renderer } from 'storybook/internal/csf'
import { twMerge } from 'tailwind-merge'

export type StoryCardProps = {
	/**
	 * Optional title displayed as a heading in the card.
	 * Can be any React node (string, JSX, etc.).
	 */
	title?: ReactNode | undefined
	/**
	 * Visual status of the card, affecting its background color.
	 * - `'error'`: Red background (bg-red-100 dark:bg-red-900)
	 * - `'warn'`: Yellow background (bg-yellow-100 dark:bg-yellow-900)
	 * - `'info'`: Blue background (bg-sky-100 dark:bg-sky-900) - default
	 */
	status?: 'error' | 'warn' | 'info' | undefined
	/**
	 * Additional CSS classes or a function to compute classes.
	 *
	 * If a string is provided, it will be merged with the default classes.
	 * If a function is provided, it receives the card state and default className,
	 * and should return the final className string.
	 */
	className?:
		| ((state: Pick<StoryCardProps, 'status'> & { defaultClassName: string }) => string)
		| ClassValue
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

/**
 * A decorator that adds a card section to display additional information about the story.
 *
 * The card is automatically hidden when the story is shown in docs mode.
 * Multiple decorators can be chained together,
 * and all cards will be collected and displayed above the story content.
 *
 * @returns A Storybook decorator function.
 *
 * @example
 * Basic usage - automatically uses component or story description:
 * ```tsx
 * export const MyStory: Story = {
 *   parameters: defineDocsParam({
 *     description: {
 *       story: 'This description will be shown in the card'
 *     }
 *   }),
 *   decorators: [withStoryCard()]
 * }
 * ```
 *
 * @example
 * With custom content:
 * ```tsx
 * export const MyStory: Story = {
 *   decorators: [
 *     withStoryCard({
 *       content: <p>This is a custom message displayed in the card.</p>
 *     })
 *   ]
 * }
 * ```
 *
 * @example
 * With title and status:
 * ```tsx
 * export const MyStory: Story = {
 *   decorators: [
 *     withStoryCard({
 *       title: 'Important Notice',
 *       status: 'warn',
 *       content: <p>Please review this carefully.</p>
 *     })
 *   ]
 * }
 * ```
 *
 * @example
 * Multiple cards:
 * ```tsx
 * export const MyStory: Story = {
 *   decorators: [
 *     withStoryCard({ title: 'First Card', status: 'info' }),
 *     withStoryCard({ title: 'Second Card', status: 'warn' })
 *   ]
 * }
 * ```
 *
 * @remarks
 * - The card will not render if both `content` and `title` are missing.
 * - If `content` is not provided, it will automatically use the story description,
 *   or fall back to the component description.
 * - Cards are collected and displayed in the order they are defined in the decorators array.
 */
export function withStoryCard<TRenderer extends Renderer = Renderer>({
	title,
	content: contentProp,
	...rest
}: StoryCardProps = {}): DecoratorFunction<TRenderer> {
	return (Story, { parameters, viewMode }) => {
		if (viewMode === 'docs') return <Story />

		const content = contentProp ?? parameters.docs?.description?.story ?? parameters.docs?.description?.component
		if (!content && !title) return <Story />

		return <StoryCardContainerWrapper Story={Story} content={content} title={title} {...rest} />
	}
}

interface StoryCardContainerWrapperProps extends StoryCardProps {
	Story: ComponentType
}

function StoryCardContainerWrapper({ Story, ...props }: StoryCardContainerWrapperProps) {
	const context = useContext(StoryCardContext)
	const collector = <StoryCardCollector Story={Story} {...props} />

	if (context === null) {
		return <StoryCardContainer>{collector}</StoryCardContainer>
	}

	return collector
}

function StoryCardContainer({ children }: { children: ReactNode }) {
	const [cards, setCards] = useState<StoryCardWithId[]>([])

	const contextValue: StoryCardContextValue = useMemo(
		() => ({
			addCard(card) {
				const id = `story-card-${crypto.randomUUID()}`
				setCards((cards) => [...cards, { ...card, id }])
				return id
			},
			removeCard(id) {
				setCards((cards) => cards.filter((card) => card.id !== id))
			}
		}),
		[]
	)

	return (
		<StoryCardContext.Provider value={contextValue}>
			<div className="flex flex-col gap-2">
				{cards.map(({ id, status, className, content, title }) => (
					<section key={id} className={storyCardTheme({ status }, className)}>
						{title && <h2 className="text-lg font-bold">{title}</h2>}
						{content}
					</section>
				))}
				{children}
			</div>
		</StoryCardContext.Provider>
	)
}

type StoryCardWithId = StoryCardProps & { id: string }

interface StoryCardCollectorProps extends StoryCardProps {
	Story: ComponentType
}

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

interface StoryCardContextValue {
	addCard: (card: StoryCardProps) => string
	removeCard: (id: string) => void
}

const StoryCardContext = createContext<StoryCardContextValue | null>(null)

const storyCardTheme = (state: Pick<StoryCardProps, 'status'>, className: StoryCardProps['className']) => {
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
