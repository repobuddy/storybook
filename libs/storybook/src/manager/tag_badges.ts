import { type TagBadgeParameters, defaultConfig } from 'storybook-addon-tag-badges'

const [, , , , , , versionBadge] = defaultConfig

export const tagBadges: TagBadgeParameters = [
	{
		tags: 'new',
		badge: {
			text: '🆕',
			bgColor: 'transparent',
			tooltip: 'New'
		}
	},
	{
		tags: 'beta',
		badge: {
			text: '🅱️',
			bgColor: 'transparent',
			tooltip: 'Beta'
		}
	},
	{
		tags: 'deprecated',
		badge: {
			text: '🪦',
			bgColor: 'transparent',
			tooltip: 'Deprecated'
		}
	},
	{
		tags: 'outdated',
		badge: {
			text: '⚠️',
			bgColor: 'transparent',
			tooltip: 'Outdated'
		}
	},
	{
		tags: 'danger',
		badge: {
			text: '🚨',
			bgColor: 'transparent',
			tooltip: 'Dangerous'
		}
	},
	{
		tags: 'todo',
		badge: {
			text: '📋',
			bgColor: 'transparent',
			tooltip: 'Todo'
		}
	},
	{
		tags: 'code-only',
		badge: {
			text: '📝',
			bgColor: 'transparent',
			tooltip: 'Code Only'
		}
	},

	{
		tags: 'unit',
		badge: {
			text: '🧪',
			bgColor: 'transparent',
			tooltip: 'Unit Test'
		}
	},
	{
		tags: 'integration',
		badge: {
			text: '🔄',
			bgColor: 'transparent',
			tooltip: 'Integration Test'
		}
	},
	versionBadge
]
