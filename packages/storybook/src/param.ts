import type { PixelmatchOptions } from 'pixelmatch'

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


export function defineSnapshotProjectParam(snapshot: SnapshotProjectParam) {
	return { snapshot }
}

export type SnapshotStoryParam = {
	/**
	 * The method by which images are compared.
	 * `pixelmatch` does a pixel by pixel comparison, whereas `ssim` does a structural similarity comparison.
	 * @default 'pixelmatch'
	 */
	comparisonMethod?: 'pixelmatch' | 'ssim' | undefined
	/**
	 * Custom config passed to 'pixelmatch' or 'ssim'
	 */
	customDiffConfig?: PixelmatchOptions | undefined
	failureThreshold?: number | undefined
	failureThresholdType?: 'percent' | 'pixel' | undefined
	blur?: number | undefined
	delay?: number | undefined
	// x: MatchImageSnapshotOptions
}

export function defineSnapshotParam(snapshot: SnapshotStoryParam) {
	return { snapshot }
}
