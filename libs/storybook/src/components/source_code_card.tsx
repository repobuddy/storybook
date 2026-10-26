import { SourceCode, type SourceCodeProps } from './source_code'
import { StoryCard, type StoryCardProps } from './story_card'

export type SourceCodeCardProps = Omit<SourceCodeProps, 'data-testid'> &
	Pick<StoryCardProps, 'title' | 'appearance' | 'className' | 'data-testid'>

/**
 * A card that displays source code with Storybook's syntax highlighter.
 * It combines {@link StoryCard} with {@link SourceCode}, using the `'source'` appearance by default.
 *
 * @param props.code - Source code to display
 * @param props.language - Language used for syntax highlighting
 * @param props.theme - Storybook theme to use for the code
 * @param props.dark - Initial dark mode state
 * @param props.title - Optional title displayed in the card
 * @param props.appearance - Appearance of the card. Defaults to `'source'`
 * @param props.className - Class name to apply to the card
 * @param props['data-testid'] - Test identifier for the card
 * @returns A card containing the highlighted source code
 */
export function SourceCodeCard({
	code,
	language,
	theme,
	dark,
	appearance = 'source',
	...cardProps
}: SourceCodeCardProps) {
	return (
		<StoryCard appearance={appearance} {...cardProps}>
			<SourceCode code={code} language={language} theme={theme} dark={dark} />
		</StoryCard>
	)
}
