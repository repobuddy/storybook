import { brandTitle } from '#repobuddy/storybook/manager'
import { tagBadges } from '#repobuddy/storybook/storybook-addon-tag-badges'
import { addons } from 'storybook/manager-api'
import { themes } from 'storybook/theming'

addons.setConfig({
	tagBadges,
	theme: {
		...themes.dark,
		brandTitle: brandTitle({
			title: '@repobuddy/storybook',
			logo: '<img src="https://avatars.githubusercontent.com/u/97370623?s=400&u=9698dbb5f8f3590a3d7f50e7b5ce6f3db72fcc35&v=4" alt="Repobuddy Logo" width="24" height="24">'
		})
	}
})
