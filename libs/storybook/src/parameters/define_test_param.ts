export interface TestParam {
	test: {
		clearMocks?: boolean | undefined
		mockReset?: boolean | undefined
		restoreMocks?: boolean | undefined
		dangerouslyIgnoreUnhandledErrors?: boolean | undefined
	}
}

/**
 * Defines test parameters for Storybook stories.
 *
 * @see https://storybook.js.org/docs/api/parameters#test
 *
 * @param test - Configuration for test parameters
 * @returns An object containing the test parameter configuration
 *
 * @example
 * defineTestParam({
 *   clearMocks: true,
 *   mockReset: true,
 *   restoreMocks: true,
 *   dangerouslyIgnoreUnhandledErrors: true
 * })
 */
export function defineTestParam(test: TestParam['test']) {
	return { test }
}
