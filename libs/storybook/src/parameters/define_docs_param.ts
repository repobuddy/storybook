import type { StoryContext } from '@storybook/react-vite'

declare global {
	namespace JSX {
		interface Element {}
	}
}

export interface SourceProps {
	/**
	 * Provides the source code to be rendered.
	 *
	 * This is useful when the story contains extra code that would be confusing in the docs.
	 *
	 * @see https://storybook.js.org/docs/api/doc-blocks/doc-block-source#code
	 */
	code?: string | undefined
	/**
	 * Specifies whether the source code should be rendered in dark mode.
	 *
	 * @see https://storybook.js.org/docs/api/doc-blocks/doc-block-source#dark
	 */
	dark?: boolean | undefined
	/**
	 * Specifies whether decorators should be excluded from the source code.
	 *
	 * @see https://storybook.js.org/docs/api/doc-blocks/doc-block-source#excludedecorators
	 */
	excludeDecorators?: boolean | undefined
	/**
	 * Specifies the language of the source code.
	 *
	 * @see https://storybook.js.org/docs/api/doc-blocks/doc-block-source#language
	 */
	language?: string | undefined
	/**
	 * A function to dynamically transform the source before being rendered,
	 * based on the original source and any story context necessary.
	 * The returned string is displayed as-is.
	 *
	 * If both code and transform are specified, transform will be ignored.
	 *
	 * @see https://storybook.js.org/docs/api/doc-blocks/doc-block-source#transform
	 */
	transform?: ((code: string, storyContext: StoryContext) => string) | undefined
	/**
	 * Specifies how the source code is rendered.
	 *
	 * - auto: Same as dynamic, if the story's render function accepts args inputs and dynamic is supported by the framework in use; otherwise same as code
	 * - code: Renders the value of code prop, otherwise renders static story source
	 * - dynamic: Renders the story source with dynamically updated arg values
	 *
	 * @see https://storybook.js.org/docs/api/doc-blocks/doc-block-source#type
	 */
	type?: 'auto' | 'code' | 'dynamic' | undefined
}

export interface DocsParam {
	docs: {
		argTypes?:
			| {
					/**
					 * Specifies which controls to exclude from the args table.
					 * Any controls whose names match the regex or are part of the array will be left out.
					 *
					 * @see https://storybook.js.org/docs/api/doc-blocks/doc-block-argtypes#exclude
					 */
					exclude?: string[] | RegExp | undefined

					/**
					 * Specifies which controls to include in the args table.
					 * Any controls whose names don't match the regex or are not part of the array will be left out.
					 *
					 * @see https://storybook.js.org/docs/api/doc-blocks/doc-block-argtypes#include
					 */
					include?: string[] | RegExp | undefined

					/**
					 * Specifies how the arg types are sorted.
					 *
					 * - none: Unsorted, displayed in the same order the arg types are processed in
					 * - alpha: Sorted alphabetically, by the arg type's name
					 * - requiredFirst: Same as alpha, with any required arg types displayed first
					 *
					 * @see https://storybook.js.org/docs/api/doc-blocks/doc-block-argtypes#sort
					 */
					sort?: 'alpha' | 'requiredFirst' | 'none' | undefined
			  }
			| undefined
		description?:
			| {
					/**
					 * `docs.description.story` can be used to describe the story in doc.
					 */
					story?: string | JSX.Element | undefined
					/**
					 * `docs.description.component` can be used to describe the component in meta.
					 * It has no effect on the stories.
					 */
					component?: string | JSX.Element | undefined
			  }
			| undefined
		/**
		 * Determines whether to show the code panel.
		 *
		 * @see https://storybook.js.org/docs/writing-docs/code-panel
		 */
		codePanel?: boolean | undefined
		source?: SourceProps | undefined
		canvas?:
			| {
					/**
					 * Provides any additional custom actions to show in the bottom right corner.
					 * These are simple buttons that do anything you specify in the onClick function.
					 *
					 * @see https://storybook.js.org/docs/api/doc-blocks/doc-block-canvas#additionalactions
					 */
					additionalActions?:
						| Array<{
								title: string | JSX.Element
								className?: string
								onClick: () => void
								disabled?: boolean
						  }>
						| undefined

					/**
					 * Provides HTML class(es) to the preview element, for custom styling.
					 *
					 * @see https://storybook.js.org/docs/api/doc-blocks/doc-block-canvas#classname
					 */
					className?: string | undefined

					/**
					 * Specifies how the canvas should layout the story.
					 *
					 * @see https://storybook.js.org/docs/api/doc-blocks/doc-block-canvas#layout
					 */
					layout?: 'centered' | 'padded' | 'fullscreen' | undefined

					/**
					 * Specifies the initial state of the source panel.
					 *
					 * @see https://storybook.js.org/docs/api/doc-blocks/doc-block-canvas#sourcestate
					 */
					sourceState?: 'hidden' | 'shown' | 'none' | undefined

					/**
					 * Determines whether to render a toolbar containing tools to interact with the story.
					 *
					 * @see https://storybook.js.org/docs/api/doc-blocks/doc-block-canvas#withtoolbar
					 */
					withToolbar?: boolean | undefined
			  }
			| undefined
		controls?:
			| {
					/**
					 * Specifies which controls to exclude from the args table.
					 * Any controls whose names match the regex or are part of the array will be left out.
					 *
					 * @see https://storybook.js.org/docs/api/doc-blocks/doc-block-controls#exclude
					 */
					exclude?: string[] | RegExp | undefined

					/**
					 * Specifies which controls to include in the args table.
					 * Any controls whose names don't match the regex or are not part of the array will be left out.
					 *
					 * @see https://storybook.js.org/docs/api/doc-blocks/doc-block-controls#include
					 */
					include?: string[] | RegExp | undefined

					/**
					 *
					 * Specifies how the controls are sorted.
					 *
					 * - none: Unsorted, displayed in the same order the controls are processed in
					 * - alpha: Sorted alphabetically, by the arg type's name
					 * - requiredFirst: Same as alpha, with any required controls displayed first
					 *
					 * @see https://storybook.js.org/docs/api/doc-blocks/doc-block-controls#sort
					 */
					sort?: 'alpha' | 'requiredFirst' | 'none' | undefined
			  }
			| undefined
		story?:
			| {
					/**
					 * Specifies whether the story should be autoplayed.
					 *
					 * @see https://storybook.js.org/docs/api/doc-blocks/doc-block-story#autoplay
					 */
					autoplay?: boolean | undefined
					/**
					 * Set a minimum height (note for an iframe this is the actual height) when rendering a story in an iframe or inline.
					 * This overrides parameters.docs.story.iframeHeight for iframes.
					 */
					height?: string | undefined
					/**
					 * Determines whether the story is rendered inline (in the same browser frame as the other docs content) or in an iframe.
					 */
					inline?: boolean | undefined
			  }
			| undefined
		[k: string]: unknown
	}
}

/**
 * Defines docs parameters for Storybook stories.
 *
 * @param docs - Configuration for docs parameters including options for:
 * - Controls display and sorting
 * - Story rendering (autoplay, height, inline vs iframe)
 * - And other docs-related settings
 * @returns An object containing the docs parameter configuration
 *
 * @example
 * ```ts
 * import { defineDocsParam } from '@repobuddy/storybook'
 *
 * export default {
 *   parameters: defineDocsParam({
 *     controls: {
 *       sort: 'alpha',
 *       exclude: ['internal*']
 *     },
 *     story: {
 *       inline: true,
 *       height: '400px'
 *     }
 *   })
 * }
 * ```
 */
export function defineDocsParam(docs: DocsParam['docs']): DocsParam['docs'] {
	return { docs }
}
