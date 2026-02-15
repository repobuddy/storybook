import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/removeBadge',
	tags: ['var', 'version:next'],
	render: () => <></>
} satisfies Meta

export const RemoveInVersion: StoryObj = {
	tags: ['remove:2'],
	render: () => (
		<div>
			<div>Feature or component scheduled for removal in version 2. Badge shows ☠️ v2.</div>
			<code>tags: ['remove:2']</code>
		</div>
	)
}

/** Same badge as RemoveInNext; `remove` and `remove:next` are equivalent. */
export const RemovePlain: StoryObj = {
	tags: ['remove'],
	render: () => (
		<div>
			<div>Feature or component scheduled for removal in the next release.</div>
			<code>tags: ['remove']</code>
		</div>
	)
}

/** Same badge as RemovePlain; `remove` and `remove:next` are equivalent. */
export const RemoveInNext: StoryObj = {
	tags: ['remove:next'],
	render: () => (
		<div>
			<div>Feature or component scheduled for removal in the next release.</div>
			<code>tags: ['remove:next']</code>
		</div>
	)
}
