import { themes } from '@storybook/theming'
import { addons } from 'storybook/internal/manager-api'
import { tagBadges } from '../src/manager/tag_badges.ts'

addons.setConfig({
	tagBadges,
	theme: {
		...themes.dark,
		brandTitle: '@repobuddy/storybook'
	}
})
