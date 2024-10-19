import type { StoryContext } from '@storybook/react'

export type TestContext = { story?: StoryContext }

/**
 * The project parameters for the snapshot.
 *
 * These parameters are set per project in the `.storybook/preview.ts` file.
 */
export type SnapshotProjectParam = {
	/**
	 * The snapshot folder relative to the root of the project.
	 */
	snapshotPath: string
	/**
	 * The baseline folder under the snapshot folder specified in `snapshotPath`.
	 */
	baseline: string
	/**
	 * The result folder under the snapshot folder specified in `snapshotPath`.
	 *
	 * This folder stores the snapshot of the current test run.
	 */
	result: string
	/**
	 * The diff folder under the snapshot folder specified in `snapshotPath`.
	 *
	 * This folder stores the diff of the current test run if the test fails.
	 */
	diff: string
}
