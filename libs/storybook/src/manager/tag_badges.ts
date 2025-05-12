import { type TagBadgeParameters, defaultConfig } from 'storybook-addon-tag-badges'

const [, , , , , , versionBadge] = defaultConfig

/**
 * Configuration for story tag badges that appear in the Storybook sidebar.
 * Each badge is associated with a specific tag and displays an emoji with a tooltip.
 *
 * The badges help visually identify stories with certain characteristics:
 * - ✏️ Editor - Stories with live editor
 * - 🆕 New - Recently added stories
 * - 🅱️ Beta - Stories for features in beta
 * - 🪦 Deprecated - Stories for deprecated features
 * - ⚠️ Outdated - Stories that need updating
 * - 🚨 Danger - Stories demonstrating dangerous patterns
 * - 📋 Todo - Stories marked as todo/incomplete
 * - 📝 Code Only - Stories without visual examples
 * - 🧪 Unit - Stories with unit tests
 * - 🔄 Integration - Stories with integration tests
 *
 * Also includes the default version badge from `storybook-addon-tag-badges`.
 */
export const tagBadges: TagBadgeParameters = [
	{
		tags: 'editor',
		badge: {
			text: '✏️',
			bgColor: 'transparent',
			tooltip: 'Editor'
		},
		display: {
			sidebar: ['story']
		}
	},
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
		tags: 'snapshot',
		badge: {
			text: '📸',
			bgColor: 'transparent',
			tooltip: 'Snapshot Test'
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
