import { type TagBadgeParameters, defaultConfig } from 'storybook-addon-tag-badges'

const [, , , , , , versionBadge] = defaultConfig

type TagBadgeParameter = TagBadgeParameters[0]

/**
 * Type representing the names of predefined tags used in Storybook stories.
 */
export type TagNames =
	| 'editor'
	| 'new'
	| 'beta'
	| 'props'
	| 'deprecated'
	| 'outdated'
	| 'danger'
	| 'todo'
	| 'code-only'
	| 'snapshot'
	| '!snapshot'
	| 'unit'
	| 'integration'
	| 'keyboard'
	| 'internal'

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
		style: {
			backgroundColor: 'transparent',
			borderColor: 'transparent'
		},
		tooltip: 'Editor'
	},
	display: {
		sidebar: {
			type: 'story',
			skipInherited: false
		}
	}
}

export const newBadge: TagBadgeParameter = {
	tags: 'new',
	badge: {
		text: '🆕',
		style: {
			backgroundColor: 'transparent',
			borderColor: 'transparent'
		},
		tooltip: 'New'
	}
}

export const betaBadge: TagBadgeParameter = {
	tags: 'beta',
	badge: {
		text: '🅱️',
		style: {
			backgroundColor: 'transparent',
			borderColor: 'transparent'
		},
		tooltip: 'Beta'
	}
}

export const propsBadge: TagBadgeParameter = {
	tags: 'props',
	badge: {
		text: '🔧',
		style: {
			backgroundColor: 'transparent',
			borderColor: 'transparent'
		},
		tooltip: 'Props'
	}
}

export const deprecatedBadge: TagBadgeParameter = {
	tags: 'deprecated',
	badge: {
		text: '🪦',
		style: {
			backgroundColor: 'transparent',
			borderColor: 'transparent'
		},
		tooltip: 'Deprecated'
	}
}

export const outdatedBadge: TagBadgeParameter = {
	tags: 'outdated',
	badge: {
		text: '⚠️',
		style: {
			backgroundColor: 'transparent',
			borderColor: 'transparent'
		},
		tooltip: 'Outdated'
	}
}

export const dangerBadge: TagBadgeParameter = {
	tags: 'danger',
	badge: {
		text: '🚨',
		style: {
			backgroundColor: 'transparent',
			borderColor: 'transparent'
		},
		tooltip: 'Dangerous'
	}
}

export const todoBadge: TagBadgeParameter = {
	tags: 'todo',
	badge: {
		text: '📋',
		style: {
			backgroundColor: 'transparent',
			borderColor: 'transparent'
		},
		tooltip: 'Todo'
	}
}

export const codeOnlyBadge: TagBadgeParameter = {
	tags: 'code-only',
	badge: {
		text: '📝',
		style: {
			backgroundColor: 'transparent',
			borderColor: 'transparent'
		},
		tooltip: 'Code Only'
	}
}

export const snapshotBadge: TagBadgeParameter = {
	tags: 'snapshot',
	badge: {
		text: '📸',
		style: {
			backgroundColor: 'transparent',
			borderColor: 'transparent'
		},
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
		style: {
			backgroundColor: 'transparent',
			borderColor: 'transparent'
		},
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
		style: {
			backgroundColor: 'transparent',
			borderColor: 'transparent'
		},
		tooltip: 'Integration Test'
	},
	display: {
		sidebar: false
	}
}

export const keyboardBadge: TagBadgeParameter = {
	tags: 'keyboard',
	badge: {
		text: '⌨️',
		style: {
			backgroundColor: 'transparent',
			borderColor: 'transparent'
		},
		tooltip: 'Keyboard Interaction'
	}
}

export const internalBadge: TagBadgeParameter = {
	tags: 'internal',
	badge: {
		text: '🔒',
		style: {
			backgroundColor: 'transparent',
			borderColor: 'transparent'
		},
		tooltip: 'Internal'
	}
}

export const tagBadges: TagBadgeParameters = [
	editorBadge,
	unitBadge,
	integrationBadge,
	keyboardBadge,
	newBadge,
	betaBadge,
	deprecatedBadge,
	outdatedBadge,
	dangerBadge,
	propsBadge,
	todoBadge,
	codeOnlyBadge,
	internalBadge,
	snapshotBadge,
	versionBadge
]
