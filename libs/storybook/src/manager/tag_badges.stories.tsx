import type { Meta, StoryObj } from '@storybook/react'

export default {
	title: 'manager/tagBadges'
} satisfies Meta

export const EditorBadge: StoryObj = {
	tags: ['editor'],
	render: () => (
		<div>
			<div>Story with live editor</div>
			<code>tags: ['editor']</code>
		</div>
	)
}

export const NewBadge: StoryObj = {
	tags: ['new'],
	render: () => (
		<div>
			<div>Recently added components or props/features</div>
			<code>tags: ['new']</code>
		</div>
	)
}

export const BetaBadge: StoryObj = {
	tags: ['beta'],
	render: () => (
		<div>
			<div>Warn that a component or prop is not stable yet</div>
			<code>tags: ['beta']</code>
		</div>
	)
}

export const DeprecatedBadge: StoryObj = {
	tags: ['deprecated'],
	render: () => (
		<div>
			<div>Components or props that should be avoided in new code</div>
			<code>tags: ['deprecated']</code>
		</div>
	)
}

export const OutdatedBadge: StoryObj = {
	tags: ['outdated'],
	render: () => (
		<div>
			<div>
				Components with design changes that weren't yet implemented, which can incur extra development costs to your
				users
			</div>
			<code>tags: ['outdated']</code>
		</div>
	)
}

export const DangerousBadge: StoryObj = {
	tags: ['danger'],
	render: () => (
		<div>
			<div>Components that require particular attention when configuring them (e.g. for with security concerns)</div>
			<code>tags: ['danger']</code>
		</div>
	)
}

export const TodoBadge: StoryObj = {
	tags: ['todo'],
	render: () => (
		<div>
			<div>Todo story</div>
			<code>tags: ['todo']</code>
		</div>
	)
}

export const CodeOnlyBadge: StoryObj = {
	tags: ['code-only'],
	render: () => (
		<div>
			<div>Components that only exist in code, and not in design</div>
			<code>tags: ['code-only']</code>
		</div>
	)
}

export const UnitTestBadge: StoryObj = {
	tags: ['unit'],
	render: () => (
		<div>
			<div>Unit test story</div>
			<code>tags: ['unit']</code>
		</div>
	)
}

export const IntegrationTestBadge: StoryObj = {
	tags: ['integration'],
	render: () => (
		<div>
			<div>Integration test story</div>
			<code>tags: ['integration']</code>
		</div>
	)
}

export const VersionBadge: StoryObj = {
	tags: ['version:1.0.0'],
	render: () => (
		<div>
			<div>Version tag is used to indicate when the component/feature/property becomes available.</div>
			<code>tags: ['version:1.0.0']</code>
		</div>
	)
}
