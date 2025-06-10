import { addons } from 'storybook/manager-api'

export const ctx = {
	addons,
	reset() {
		ctx.addons = addons
	}
}
