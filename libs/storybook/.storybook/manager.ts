import { addons } from 'storybook/internal/manager-api'
import { themes } from 'storybook/theming'
// @ts-ignore
import { colorThemeVariants } from '#repobuddy/storybook/variants/manager'
// @ts-ignore
import { brandTitle } from '../src/manager/index.ts'
// @ts-ignore
import { tagBadges } from '../src/storybook-addon-tag-badges/index.ts'

addons.setConfig({
	tagBadges,
	variants: [colorThemeVariants],
	theme: {
		...themes.dark,
		brandTitle: brandTitle({
			title: '@repobuddy/storybook',
			logo: '<img src="https://avatars.githubusercontent.com/u/97370623?s=400&u=9698dbb5f8f3590a3d7f50e7b5ce6f3db72fcc35&v=4" alt="Repobuddy Logo" width="24" height="24">'
		})
	}
})
