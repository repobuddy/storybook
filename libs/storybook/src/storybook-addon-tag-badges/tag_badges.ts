import { defaultConfig, type TagBadgeParameters } from 'storybook-addon-tag-badges/manager-helpers'

const [, , , , , , versionBadge] = defaultConfig

type TagBadgeParameter = TagBadgeParameters[0]

/**
 * Type representing the names of predefined tags used in Storybook stories.
 */
export type TagNames =
	| 'editor'
	| 'source'
	| 'type'
	| 'new'
	| 'beta'
	| 'props'
	| 'deprecated'
	| 'outdated'
	| 'danger'
	| 'todo'
	| 'code-only'
	| 'snapshot'
	| 'unit'
	| 'integration'
	| 'keyboard'
	| 'internal'
	| 'usecase'
	| 'version:next'

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

/** Badge (✏️) for stories with a live editor. Shown in sidebar on story and inherited. */
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

/** Badge (🆕) for recently added stories. */
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

/** Badge (🅱️) for stories covering features in beta. */
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

/** Badge (🔧) for stories that demonstrate props or configuration. */
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

/** Badge (🪦) for stories documenting deprecated features. */
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

/** Badge (⚠️) for stories that need updating. */
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

/** Badge (🚨) for stories demonstrating dangerous or cautionary patterns. */
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

/** Badge (📋) for stories marked as todo or incomplete. */
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

/** Badge (📝) for stories without visual examples (code-only). Hidden in MDX. */
export const codeOnlyBadge: TagBadgeParameter = {
	tags: 'code-only',
	badge: {
		text: '📝',
		style: {
			backgroundColor: 'transparent',
			borderColor: 'transparent'
		},
		tooltip: 'Code Only'
	},
	display: {
		mdx: false
	}
}

/** Badge (<T>) for stories that showcase or document TypeScript types. Hidden in MDX. */
export const typeBadge: TagBadgeParameter = {
	tags: 'type',
	badge: {
		text: '<T>',
		style: {
			backgroundColor: 'transparent',
			borderColor: 'transparent'
		},
		tooltip: 'TypeScript Types'
	},
	display: {
		mdx: false
	}
}

/** Badge (`</>`) for source-code-focused stories. Hidden in MDX. */
export const sourceBadge: TagBadgeParameter = {
	tags: 'source',
	badge: {
		text: '</>',
		style: {
			backgroundColor: 'transparent',
			borderColor: 'transparent'
		},
		tooltip: 'Source Code'
	},
	display: {
		mdx: false
	}
}

/** Badge (📸) for stories with snapshot tests. Shown in toolbar only, not in sidebar. */
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

/** Badge (🧪) for stories with unit tests. */
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
		sidebar: true
	}
}

/** Badge (🔗) for stories with integration tests. Hidden in sidebar. */
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

/** Badge (⌨️) for stories that demonstrate or test keyboard interaction. */
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

/** Badge (🔒) for internal or private-use-only stories. */
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

/** Ordered list of all tag badge configs used by the addon (includes version badge). */
export const tagBadges: TagBadgeParameters = [
	editorBadge,
	sourceBadge,
	typeBadge,
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
	versionBadge,
	internalBadge,
	snapshotBadge
]
