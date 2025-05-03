import type { LayoutParam } from './define_layout_param.ts'
import type { StorySortParam } from './define_story_sort.ts'
import type { TestParam } from './define_test_param.ts'

export interface StorybookBuiltInParams extends Partial<LayoutParam>, Partial<StorySortParam>, Partial<TestParam> {}

export function defineParameters<P extends Record<string, any>>(parameters: P & StorybookBuiltInParams) {
	return parameters
}
