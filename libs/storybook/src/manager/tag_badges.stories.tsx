import type { Meta, StoryObj } from '@storybook/react'

export default {
	title: 'manager/tagBadges'
} satisfies Meta

export const NewBadge: StoryObj = {
	tags: ['new'],
	render: () => <code>tags: ['new']</code>
}

export const BetaBadge: StoryObj = {
	tags: ['beta'],
	render: () => <code>tags: ['beta']</code>
}

export const DeprecatedBadge: StoryObj = {
	tags: ['deprecated'],
	render: () => <code>tags: ['deprecated']</code>
}

export const OutdatedBadge: StoryObj = {
	tags: ['outdated'],
	render: () => <code>tags: ['outdated']</code>
}

export const DangerousBadge: StoryObj = {
	tags: ['danger'],
	render: () => <code>tags: ['danger']</code>
}

export const TodoBadge: StoryObj = {
	tags: ['todo'],
	render: () => <code>tags: ['todo']</code>
}

export const CodeOnlyBadge: StoryObj = {
	tags: ['code-only'],
	render: () => <code>tags: ['code-only']</code>
}

export const UnitTestBadge: StoryObj = {
	tags: ['unit'],
	render: () => <code>tags: ['unit']</code>
}

export const IntegrationTestBadge: StoryObj = {
	tags: ['integration'],
	render: () => <code>tags: ['integration']</code>
}

export const VersionBadge: StoryObj = {
	tags: ['version:1.0.0'],
	render: () => <code>tags: ['version:1.0.0']</code>
}
