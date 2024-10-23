import type { SnapshotProjectParam } from './types.js'

export function defineProjectSnapshotParam(snapshot: SnapshotProjectParam) {
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

export type PixelmatchOptions = {
	/**
	 * Matching threshold, ranges from 0 to 1. Smaller values make the comparison more sensitive.
	 * @default 0.1
	 */
	readonly threshold?: number | undefined
	/**
	 * If true, disables detecting and ignoring anti-aliased pixels.
	 * @default false
	 */
	readonly includeAA?: boolean | undefined
	/**
	 * Blending factor of unchanged pixels in the diff output.
	 * Ranges from 0 for pure white to 1 for original brightness
	 * @default 0.1
	 */
	alpha?: number | undefined
	/**
	 * The color of anti-aliased pixels in the diff output.
	 * @default [255, 255, 0]
	 */
	aaColor?: RGBTuple | undefined
	/**
	 * The color of differing pixels in the diff output.
	 * @default [255, 0, 0]
	 */
	diffColor?: RGBTuple | undefined
	/**
	 * An alternative color to use for dark on light differences to differentiate between "added" and "removed" parts.
	 * If not provided, all differing pixels use the color specified by `diffColor`.
	 * @default null
	 */
	diffColorAlt?: RGBTuple | undefined
	/**
	 * Draw the diff over a transparent background (a mask), rather than over the original image.
	 * Will not draw anti-aliased pixels (if detected)
	 * @default false
	 */
	diffMask?: boolean | undefined
}
type RGBTuple = [number, number, number]

export function defineSnapshotParam(snapshot: SnapshotStoryParam) {
	return { snapshot }
}
