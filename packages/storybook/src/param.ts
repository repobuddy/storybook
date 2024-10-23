import type { PixelmatchOptions } from 'pixelmatch'
import type { SnapshotProjectParam } from './types.js'

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
