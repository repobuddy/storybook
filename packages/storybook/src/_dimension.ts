export function getDimensionsFromBase64(base64String: string) {
	return new Promise<{ width: number; height: number }>((resolve, reject) => {
		const img = new Image()
		img.src = `data:image/png;base64,${base64String}`

		img.onload = () => {
			resolve({
				width: img.width,
				height: img.height,
			})
		}

		img.onerror = () => {
			reject(new Error('Failed to load image'))
		}
	})
}
