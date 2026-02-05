import {
	type ComponentType,
	createContext,
	type ReactNode,
	useContext,
	useLayoutEffect,
	useMemo,
	useRef,
	useState
} from 'react'
import type { DecoratorFunction, Renderer } from 'storybook/internal/csf'
import type { RequiredPick } from 'type-plus'
import { StoryCard, type StoryCardProps } from '../components/story_card.js'
import type { StoryCardParam } from '../parameters/define_story_card_param.js'
import { generateKey } from '../utils/generate_key.js'

export type WithStoryCardProps = Omit<StoryCardProps, 'children' | 'className'> & {
	/**
	 * Additional CSS classes or a function to compute classes.
	 *
	 * If a string is provided, it will be merged with the default classes.
	 * If a function is provided, it receives the card state and default className,
	 * and should return the final className string.
	 */
	className?: ((state: Pick<StoryCardProps, 'status'> & { defaultClassName: string }) => string) | string | undefined
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
 * Using defineStoryCard parameter:
 * ```tsx
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
	status,
	content: contentProp,
	className,
	...rest
}: WithStoryCardProps = {}): DecoratorFunction<TRenderer> {
	return (Story, { parameters, viewMode }) => {
		if (viewMode === 'docs') return <Story />

		// Get story card config from parameters if available
		const storyCardParam = (parameters as Partial<StoryCardParam>).storyCard
		// Decorator props override parameter values
		// Use parameters as fallback when decorator props are not provided
		const finalTitle = title ?? storyCardParam?.title
		const finalStatus = status ?? storyCardParam?.status ?? 'info'
		const finalContent = contentProp ?? storyCardParam?.content
		const finalClassName = className ?? storyCardParam?.className

		// Fallback to docs description if no content provided
		const content = finalContent ?? parameters.docs?.description?.story ?? parameters.docs?.description?.component
		if (!content && !finalTitle) return <Story />

		return (
			<StoryCardContainerWrapper
				Story={Story}
				content={content}
				title={finalTitle}
				status={finalStatus}
				className={finalClassName}
				{...rest}
			/>
		)
	}
}

interface StoryCardContainerWrapperProps extends RequiredPick<WithStoryCardProps, 'status'> {
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

type StoryCardWithKey = RequiredPick<WithStoryCardProps, 'status'> & { key: string }

interface StoryCardCollectorProps extends RequiredPick<WithStoryCardProps, 'status'> {
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
	addCard: (card: RequiredPick<WithStoryCardProps, 'status'>) => string
	removeCard: (id: string) => void
}

const StoryCardContext = createContext<StoryCardContextValue | null>(null)
