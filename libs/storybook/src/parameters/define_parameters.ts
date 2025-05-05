import type { BackgroundsParam, GlobalApiBackgroundsParam } from './define_backgrounds_param.ts'
import type { LayoutParam } from './define_layout_param.ts'
import type { StorySortParam } from './define_story_sort.ts'
import type { TestParam } from './define_test_param.ts'

export type StorybookBuiltInParams = Partial<LayoutParam> &
	Partial<StorySortParam> &
	Partial<TestParam> &
	Partial<BackgroundsParam | GlobalApiBackgroundsParam>

export function defineParameters<P extends Record<string, any>>(parameters: P & StorybookBuiltInParams) {
	return parameters
}
