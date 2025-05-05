export interface BackgroundsParam {
	backgrounds: {
		default?: string | undefined
		values?: Array<{
			name: string
			value: string
		}>
		disable?: boolean | undefined
		grid?:
			| {
					cellAmount?: number | undefined
					cellSize?: number | undefined
					disable?: boolean | undefined
					offsetX?: number | undefined
					offsetY?: number | undefined
					opacity?: number | undefined
			  }
			| undefined
		[k: string]: unknown
	}
}
export interface GlobalApiBackgroundsParam {
	backgrounds: {
		default?: string | undefined
		options?: Array<{
			name: string
			value: string
		}>
		disabled?: boolean | undefined
		grid?:
			| {
					cellAmount?: number | undefined
					cellSize?: number | undefined
					disable?: boolean | undefined
					offsetX?: number | undefined
					offsetY?: number | undefined
					opacity?: number | undefined
			  }
			| undefined
		[k: string]: unknown
	}
}

export const defineBackgroundsParam = (
	backgrounds: BackgroundsParam['backgrounds'] | GlobalApiBackgroundsParam['backgrounds']
): BackgroundsParam => ({
	backgrounds
})
