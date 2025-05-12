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
export const editorBadge = {
	tags: 'editor',
	badge: {
		text: '✏️',
		bgColor: 'transparent',
		tooltip: 'Editor'
	},
	display: {
		sidebar: ['story']
	}
}

export const newBadge = {
	tags: 'new',
	badge: {
		text: '🆕',
		bgColor: 'transparent',
		tooltip: 'New'
	}
}

export const betaBadge = {
	tags: 'beta',
	badge: {
		text: 'β',
		bgColor: '#E3F2FD',
		borderColor: '#90CAF9',
		tooltip: 'Beta'
	}
}

export const deprecatedBadge = {
	tags: 'deprecated',
	badge: {
		text: '🪦',
		bgColor: 'transparent',
		tooltip: 'Deprecated'
	}
}

export const outdatedBadge = {
	tags: 'outdated',
	badge: {
		text: '⚠️',
		bgColor: 'transparent',
		tooltip: 'Outdated'
	}
}

export const dangerBadge = {
	tags: 'danger',
	badge: {
		text: '🚨',
		bgColor: 'transparent',
		tooltip: 'Dangerous'
	}
}

export const todoBadge = {
	tags: 'todo',
	badge: {
		text: '📋',
		bgColor: 'transparent',
		tooltip: 'Todo'
	}
}

export const codeOnlyBadge = {
	tags: 'code-only',
	badge: {
		text: '📝',
		bgColor: 'transparent',
		tooltip: 'Code Only'
	}
}

export const snapshotBadge = {
	tags: 'snapshot',
	badge: {
		text: '📸',
		bgColor: 'transparent',
		tooltip: 'Snapshot Test'
	}
}

export const unitBadge = {
	tags: 'unit',
	badge: {
		text: '🧪',
		bgColor: 'transparent',
		tooltip: 'Unit Test'
	}
}

export const integrationBadge = {
	tags: 'integration',
	badge: {
		text: '🔄',
		bgColor: 'transparent',
		tooltip: 'Integration Test'
	}
}

export const tagBadges: TagBadgeParameters = [
	editorBadge,
	newBadge,
	betaBadge,
	deprecatedBadge,
	outdatedBadge,
	dangerBadge,
	todoBadge,
	codeOnlyBadge,
	snapshotBadge,
	unitBadge,
	integrationBadge,
	versionBadge
]
