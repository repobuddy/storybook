import { cva } from 'class-variance-authority'
import type { ReactNode } from 'react'
import { twJoin, twMerge } from 'tailwind-merge'

/**
 * Resolved appearance of the card (error | warn | info | source | output).
 * Used for styling; when only `status` is provided it is mapped to this.
 */
export type StoryCardAppearance = 'error' | 'warn' | 'info' | 'source' | 'output'

/**
 * @deprecated Use `appearance` instead. Visual status of the card; equivalent to `appearance` for 'error' | 'warn' | 'info'.
 */
export type StoryCardStatus = 'error' | 'warn' | 'info' | undefined

export type StoryCardProps = {
	/**
	 * Optional title displayed as a heading in the card.
	 * Can be any React node (string, JSX, etc.).
	 */
	title?: ReactNode | undefined
	/**
	 * @deprecated Use `appearance` instead. When set, behaves like `appearance` for the same value.
	 */
	status?: StoryCardStatus
	/**
	 * Appearance of the card, affecting its background and border color.
	 * - `'error'`: Red
	 * - `'warn'`: Yellow
	 * - `'info'`: Blue (default when neither appearance nor status is set)
	 * - `'source'`: Transparent
	 * - `'output'`: Green
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
	 */
	children?: ReactNode | undefined
}

export type StoryCardThemeState = Pick<StoryCardProps, 'status' | 'appearance'> & { defaultClassName: string }

function resolveAppearance(
	appearance: StoryCardProps['appearance'],
	status: StoryCardProps['status']
): NonNullable<StoryCardAppearance> {
	if (appearance !== undefined) return appearance
	if (status !== undefined) return status
	return 'info'
}

function storyCardTheme(state: StoryCardThemeState, className: StoryCardProps['className']) {
	if (!className) return state.defaultClassName
	return twMerge(typeof className === 'function' ? className(state) : twJoin(state.defaultClassName, className))
}

const storyCardVariants = cva(
	'rbsb:flex rbsb:flex-col rbsb:gap-1 rbsb:py-3 rbsb:px-4 rbsb:rounded rbsb:border rbsb:border-solid rbsb:text-black rbsb:dark:text-gray-100',
	{
		variants: {
			appearance: {
				error: 'rbsb:bg-red-100 rbsb:dark:bg-red-900 rbsb:border-red-300 rbsb:dark:border-red-700',
				warn: 'rbsb:bg-yellow-100 rbsb:dark:bg-yellow-900 rbsb:border-yellow-300 rbsb:dark:border-yellow-700',
				info: 'rbsb:bg-sky-100 rbsb:dark:bg-sky-900 rbsb:border-sky-300 rbsb:dark:border-sky-700',
				source: 'rbsb:bg-gray-100 rbsb:dark:bg-gray-900 rbsb:border-gray-300 rbsb:dark:border-gray-700',
				output: 'rbsb:bg-green-100 rbsb:dark:bg-green-900 rbsb:border-green-300 rbsb:dark:border-green-700'
			}
		},
		defaultVariants: {
			appearance: 'info'
		}
	}
)

/**
 * A card component that displays information with optional title and appearance styling.
 *
 * @param props - StoryCard component props
 * @returns A section element containing the card content
 */
export function StoryCard({ status, appearance, className, children, title }: StoryCardProps) {
	const resolvedAppearance = resolveAppearance(appearance, status)
	const state: StoryCardThemeState = {
		status,
		appearance: resolvedAppearance,
		defaultClassName: storyCardVariants({ appearance: resolvedAppearance })
	}
	return (
		<section className={storyCardTheme(state, className)}>
			{title && <h2 className="rbsb:text-lg rbsb:font-bold">{title}</h2>}
			{children}
		</section>
	)
}
