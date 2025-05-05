export interface ActionsParam {
	actions: {
		argTypesRegex?: string | undefined
		disable?: boolean | undefined
		handles?: string[] | undefined
		[k: string]: unknown
	}
}

/**
 * Defines actions parameters for Storybook stories.
 *
 * @see https://storybook.js.org/docs/essentials/actions#parameters
 *
 * @param actions - Configuration for actions parameters
 * @returns An object containing the actions parameter configuration
 */
export function defineActionsParam(actions: ActionsParam['actions']) {
	return { actions }
}
