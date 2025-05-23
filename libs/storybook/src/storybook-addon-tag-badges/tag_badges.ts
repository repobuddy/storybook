import { type TagBadgeParameters, defaultConfig } from 'storybook-addon-tag-badges'

const [, , , , , , versionBadge] = defaultConfig

type TagBadgeParameter = TagBadgeParameters[0]

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
 * - 📸 Snapshot - Stories with snapshot tests
 * - 🧪 Unit - Stories with unit tests
 * - 🔗 Integration - Stories with integration tests
 *
 * Also includes the default version badge from `storybook-addon-tag-badges`.
 */
export const editorBadge: TagBadgeParameter = {
	tags: 'editor',
	badge: {
		text: '✏️',
		bgColor: 'transparent',
		borderColor: 'transparent',
		tooltip: 'Editor'
	},
	display: {
		sidebar: ['story'],
		toolbar: ['story']
	}
}

export const newBadge: TagBadgeParameter = {
	tags: 'new',
	badge: {
		text: '🆕',
		bgColor: 'transparent',
		borderColor: 'transparent',
		tooltip: 'New'
	}
}

export const betaBadge: TagBadgeParameter = {
	tags: 'beta',
	badge: {
		text: '🅱️',
		bgColor: 'transparent',
		borderColor: 'transparent',
		tooltip: 'Beta'
	}
}

export const deprecatedBadge: TagBadgeParameter = {
	tags: 'deprecated',
	badge: {
		text: '🪦',
		bgColor: 'transparent',
		borderColor: 'transparent',
		tooltip: 'Deprecated'
	}
}

export const outdatedBadge: TagBadgeParameter = {
	tags: 'outdated',
	badge: {
		text: '⚠️',
		bgColor: 'transparent',
		borderColor: 'transparent',
		tooltip: 'Outdated'
	}
}

export const dangerBadge: TagBadgeParameter = {
	tags: 'danger',
	badge: {
		text: '🚨',
		bgColor: 'transparent',
		borderColor: 'transparent',
		tooltip: 'Dangerous'
	}
}

export const todoBadge: TagBadgeParameter = {
	tags: 'todo',
	badge: {
		text: '📋',
		bgColor: 'transparent',
		borderColor: 'transparent',
		tooltip: 'Todo'
	}
}

export const codeOnlyBadge: TagBadgeParameter = {
	tags: 'code-only',
	badge: {
		text: '📝',
		bgColor: 'transparent',
		borderColor: 'transparent',
		tooltip: 'Code Only'
	}
}

export const snapshotBadge: TagBadgeParameter = {
	tags: 'snapshot',
	badge: {
		text: '📸',
		bgColor: 'transparent',
		borderColor: 'transparent',
		tooltip: 'Snapshot Test'
	},
	display: {
		sidebar: false,
		toolbar: ['story']
	}
}

export const unitBadge: TagBadgeParameter = {
	tags: 'unit',
	badge: {
		text: '🧪',
		bgColor: 'transparent',
		borderColor: 'transparent',
		tooltip: 'Unit Test'
	},
	display: {
		sidebar: false
	}
}

export const integrationBadge: TagBadgeParameter = {
	tags: 'integration',
	badge: {
		text: '🔗',
		bgColor: 'transparent',
		borderColor: 'transparent',
		tooltip: 'Integration Test'
	},
	display: {
		sidebar: false
	}
}

export const tagBadges: TagBadgeParameters = [
	editorBadge,
	unitBadge,
	integrationBadge,
	newBadge,
	betaBadge,
	deprecatedBadge,
	outdatedBadge,
	dangerBadge,
	todoBadge,
	codeOnlyBadge,
	snapshotBadge,
	versionBadge
]
