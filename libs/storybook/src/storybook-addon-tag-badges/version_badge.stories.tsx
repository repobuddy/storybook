import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/versionBadge',
	render: () => <></>
} satisfies Meta

export const VersionBadge: StoryObj = {
	tags: ['version:1.0'],
	render: () => (
		<div>
			<div>Version tag is used to indicate when the component/feature/property becomes available.</div>
			<code>tags: ['version:1.0']</code>
		</div>
	)
}
