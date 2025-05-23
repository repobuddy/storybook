import type { BackgroundsParam, GlobalApiBackgroundsParam } from './define_backgrounds_param.ts'
import type { DocsParam } from './define_docs_param.ts'
import type { LayoutParam } from './define_layout_param.ts'
import type { TestParam } from './define_test_param.ts'
import type { ViewportParam } from './define_viewport_param.ts'
import type { StorySortParam } from './story_sort.ts'

export type StorybookBuiltInParams = Partial<BackgroundsParam | GlobalApiBackgroundsParam> &
	Partial<DocsParam> &
	Partial<LayoutParam> &
	Partial<TestParam> &
	Partial<ViewportParam> & { options?: StorySortParam & Record<string, any> } & Record<string, any>

/**
 * Defines parameters for Storybook stories, combining built-in parameters with custom ones.
 *
 * @param parameters - Configuration object containing both built-in Storybook parameters and custom parameters
 * @returns The combined parameters object
 *
 * @example
 * ```ts
 * import { defineParameters } from '@repobuddy/storybook'
 *
 * export default {
 *   parameters: defineParameters({
 *     // Built-in parameters
 *     layout: 'centered',
 *     backgrounds: {
 *       default: 'light',
 *       values: [
 *         { name: 'light', value: '#ffffff' },
 *         { name: 'dark', value: '#333333' }
 *       ]
 *     },
 *     // Custom parameters
 *     myCustomParam: {
 *       someValue: true
 *     }
 *   })
 * }
 * ```
 */
export function defineParameters<P extends Record<string, any>>(
	param: P & StorybookBuiltInParams,
	...rest: Array<StorybookBuiltInParams>
) {
	return rest.reduce((acc, param) => Object.assign(acc, param), param)
}
