import { defaultConfig, type TagBadgeParameters } from 'storybook-addon-tag-badges/manager-helpers'

const [, , , , , , versionBadge] = defaultConfig

type TagBadgeParameter = TagBadgeParameters[0]

/**
 * Type representing the names of predefined tags used in Storybook stories.
 */
export type TagNames =
	| '!test'
	| 'editor'
	| 'source'
	| 'type'
	| '!type'
	| 'func'
	| '!func'
	| 'var'
	| '!var'
	| 'new'
	| 'alpha'
	| 'beta'
	| 'rc'
	| 'props'
	| 'deprecated'
	| 'outdated'
	| 'danger'
	| 'todo'
	| 'docs'
	| 'code-only'
	| 'snapshot'
	| '!snapshot'
	| 'unit'
	| 'integration'
	| 'keyboard'
	| 'internal'
	| 'usecase'
	| 'use-case'
	| 'example'
	| 'version:next'
	| 'remove'
	| 'remove:next'
	| 'autodocs'

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

/** Badge (🔴) for stories covering features in alpha. */
export const alphaBadge: TagBadgeParameter = {
	tags: 'alpha',
	badge: {
		text: '🔴',
		style: {
			backgroundColor: 'transparent',
			borderColor: 'transparent'
		},
		tooltip: 'Alpha'
	}
}

/** Badge (🟡) for stories covering features in beta. */
export const betaBadge: TagBadgeParameter = {
	tags: 'beta',
	badge: {
		text: '🟡',
		style: {
			backgroundColor: 'transparent',
			borderColor: 'transparent'
		},
		tooltip: 'Beta'
	}
}

/** Badge (🔵) for stories covering release candidates. */
export const rcBadge: TagBadgeParameter = {
	tags: 'rc',
	badge: {
		text: '🔵',
		style: {
			backgroundColor: 'transparent',
			borderColor: 'transparent'
		},
		tooltip: 'Release Candidate'
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

/** Badge (🗑️) for stories documenting deprecated features. */
export const deprecatedBadge: TagBadgeParameter = {
	tags: 'deprecated',
	badge: {
		text: '🗑️',
		style: {
			backgroundColor: 'transparent',
			borderColor: 'transparent'
		},
		tooltip: 'Deprecated'
	}
}

/** Badge (☠️) for stories documenting features scheduled for removal in a future version. Matches `remove`, `remove:next` (same meaning), or `remove:<version>` (e.g. `remove:2`). */
export const removeBadge: TagBadgeParameter = {
	tags: ['remove', { prefix: 'remove' }],
	badge: ({ getTagSuffix, tag }) => {
		const version = getTagSuffix(tag) ?? 'next'
		return {
			text: version === 'next' ? '☠️' : `☠️ v${version}`,
			style: {
				backgroundColor: 'transparent',
				borderColor: 'transparent'
			},
			tooltip:
				version === 'next' ? 'Will be removed in the next major release' : `Will be removed in version ${version}`
		}
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
		mdx: true
	}
}

/** Badge (ƒ(x)) for stories that showcase or document functions. Hidden in MDX. */
export const functionBadge: TagBadgeParameter = {
	tags: 'func',
	badge: {
		text: 'ƒ(x)',
		style: {
			backgroundColor: 'transparent',
			borderColor: 'transparent'
		},
		tooltip: 'Function'
	},
	display: {
		mdx: true
	}
}

/** Badge (var) for stories that describe values and variables. */
export const varBadge: TagBadgeParameter = {
	tags: 'var',
	badge: {
		text: 'var',
		style: {
			backgroundColor: 'transparent',
			borderColor: 'transparent'
		},
		tooltip: 'Variables'
	},
	display: {
		mdx: true
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

/** Badge (🎯) for stories that demonstrate a specific use case or scenario. */
export const useCaseBadge: TagBadgeParameter = {
	tags: 'use-case',
	badge: {
		text: '🎯',
		style: {
			backgroundColor: 'transparent',
			borderColor: 'transparent'
		},
		tooltip: 'Use Case'
	}
}

/** Badge (✨) for example or demo stories. */
export const exampleBadge: TagBadgeParameter = {
	tags: 'example',
	badge: {
		text: '✨',
		style: {
			backgroundColor: 'transparent',
			borderColor: 'transparent'
		},
		tooltip: 'Example'
	}
}

/** Badge (📖) for stories that are primarily documentation. */
export const docsBadge: TagBadgeParameter = {
	tags: 'docs',
	badge: {
		text: '📖',
		style: {
			backgroundColor: 'transparent',
			borderColor: 'transparent'
		},
		tooltip: 'Documentation'
	}
}

/**
 * Configuration for story tag badges that appear in the Storybook sidebar.
 * Each badge is associated with a specific tag and displays an emoji or symbol with a tooltip.
 *
 * Badge order (first match wins): New → Alpha → Beta → RC → Deprecated → Remove → Outdated → Danger → Use Case →
 * Example → Docs → Keyboard → Source → Type → Function → Var → Props → Todo → Unit → Integration →
 * Editor → Code Only → Version → Internal → Snapshot.
 *
 * - 🆕 New - Recently added stories
 * - 🔴 Alpha - Stories for features in alpha
 * - 🟡 Beta - Stories for features in beta
 * - 🔵 RC - Release candidate
 * - 🗑️ Deprecated - Stories for deprecated features
 * - ☠️ Remove - (`remove` or `remove:next` = next release; `remove:<version>` = specific version) The feature or component will be removed in the specified version
 * - ⚠️ Outdated - Stories that need updating
 * - 🚨 Danger - Stories demonstrating dangerous patterns
 * - 🎯 Use Case - Stories that demonstrate a specific use case or scenario
 * - ✨ Example - Example or demo stories
 * - 📖 Docs - Stories that are primarily documentation
 * - ⌨️ Keyboard - Stories that demonstrate or test keyboard interaction
 * - `</>` Source - Source-code-focused stories
 * - `<T>` Type - Stories that showcase or document TypeScript types
 * - `ƒ(x)` Function - Stories that showcase or document functions
 * - `var` Variables - Stories that describe values and variables
 * - 🔧 Props - Stories that demonstrate props or configuration
 * - 📋 Todo - Stories marked as todo/incomplete
 * - 🧪 Unit - Stories with unit tests
 * - 🔗 Integration - Stories with integration tests
 * - ✏️ Editor - Stories with live editor
 * - 📝 Code Only - Stories without visual examples
 * - `next` - (`version:next`) The component or function is available in the next version
 * - `x.y` - (`version:x.y`) The component or function was created or updated in the x.y version
 * - 🔒 Internal - Internal or private-use-only stories
 * - 📸 Snapshot - Stories with snapshot tests
 */
export const tagBadges: TagBadgeParameters = [
	newBadge,
	alphaBadge,
	betaBadge,
	rcBadge,
	deprecatedBadge,
	removeBadge,
	outdatedBadge,
	dangerBadge,
	useCaseBadge,
	exampleBadge,
	keyboardBadge,
	sourceBadge,
	typeBadge,
	functionBadge,
	varBadge,
	propsBadge,
	todoBadge,
	docsBadge,
	unitBadge,
	integrationBadge,
	editorBadge,
	codeOnlyBadge,
	versionBadge,
	internalBadge,
	snapshotBadge
]
