import type { BackgroundsParam, GlobalApiBackgroundsParam } from './define_backgrounds_param.ts'
import type { DocsParam } from './define_docs_param.ts'
import type { LayoutParam } from './define_layout_param.ts'
import type { StorySortParam } from './define_story_sort.ts'
import type { TestParam } from './define_test_param.ts'
import type { ViewportParam } from './define_viewport_param.ts'

export type StorybookBuiltInParams = Partial<BackgroundsParam | GlobalApiBackgroundsParam> &
	Partial<DocsParam> &
	Partial<LayoutParam> &
	Partial<StorySortParam> &
	Partial<TestParam> &
	Partial<ViewportParam>

export function defineParameters<P extends Record<string, any>>(parameters: P & StorybookBuiltInParams) {
	return parameters
}
