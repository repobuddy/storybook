import type { Meta, StoryObj } from '@storybook/react'
import { defineLayoutParam } from '../index.ts'

export default {
	title: 'manager/tagBadges',
	parameters: defineLayoutParam('centered'),
	tags: ['new', 'version:1.0.0']
} satisfies Meta

export const NewBadge: StoryObj = {
	tags: ['new'],
	render: () => <div>New</div>
}

export const BetaBadge: StoryObj = {
	tags: ['beta'],
	render: () => <div>Beta</div>
}

export const DeprecatedBadge: StoryObj = {
	tags: ['deprecated'],
	render: () => <div>Deprecated</div>
}

export const OutdatedBadge: StoryObj = {
	tags: ['outdated'],
	render: () => <div>Outdated</div>
}

export const DangerousBadge: StoryObj = {
	tags: ['danger'],
	render: () => <div>Dangerous</div>
}

export const TodoBadge: StoryObj = {
	tags: ['todo'],
	render: () => <div>Todo</div>
}

export const CodeOnlyBadge: StoryObj = {
	tags: ['code-only'],
	render: () => <div>Code Only</div>
}

export const UnitTestBadge: StoryObj = {
	tags: ['unit'],
	render: () => <div>Unit Test</div>
}

export const IntegrationTestBadge: StoryObj = {
	tags: ['integration'],
	render: () => <div>Integration Test</div>
}

export const VersionBadge: StoryObj = {
	tags: ['version:1.0.0'],
	render: () => <div>Version 1.0.0</div>
}
