import { cva } from 'class-variance-authority'
import type { ReactNode } from 'react'
import { twJoin, twMerge } from 'tailwind-merge'

export type StoryCardProps = {
	/**
	 * Optional title displayed as a heading in the card.
	 * Can be any React node (string, JSX, etc.).
	 */
	title?: ReactNode | undefined
	/**
	 * Visual status of the card, affecting its background color.
	 * - `'error'`: Red background (rbsb:bg-red-100 rbsb:dark:bg-red-900)
	 * - `'warn'`: Yellow background (rbsb:bg-yellow-100 rbsb:dark:bg-yellow-900)
	 * - `'info'`: Blue background (rbsb:bg-sky-100 rbsb:dark:bg-sky-900) - default
	 */
	status?: 'error' | 'warn' | 'info' | undefined
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
	 */
	children?: ReactNode | undefined
}

function storyCardTheme(state: Pick<StoryCardProps, 'status'>, className: StoryCardProps['className']) {
	const defaultClassName = storyCardVariants(state)
	if (!className) return defaultClassName
	return twMerge(
		typeof className === 'function' ? className({ ...state, defaultClassName }) : twJoin(defaultClassName, className)
	)
}

const storyCardVariants = cva(
	'rbsb:flex rbsb:flex-col rbsb:gap-1 rbsb:py-3 rbsb:px-4 rbsb:rounded rbsb:text-black rbsb:dark:text-gray-100',
	{
		variants: {
			status: {
				error: 'rbsb:bg-red-100 rbsb:dark:bg-red-900',
				warn: 'rbsb:bg-yellow-100 rbsb:dark:bg-yellow-900',
				info: 'rbsb:bg-sky-100 rbsb:dark:bg-sky-900'
			}
		},
		defaultVariants: {
			status: 'info'
		}
	}
)

/**
 * A card component that displays information with optional title and status styling.
 *
 * @param props - StoryCard component props
 * @returns A section element containing the card content
 */
export function StoryCard({ status, className, children, title }: StoryCardProps) {
	return (
		<section className={storyCardTheme({ status }, className)}>
			{title && <h2 className="rbsb:text-lg rbsb:font-bold">{title}</h2>}
			{children}
		</section>
	)
}
