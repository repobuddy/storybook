import { isRunningInTest } from '@repobuddy/vitest'
import { expect } from 'storybook/test'
import { showDocSource, whenRunningInTest } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'
import { ctx } from './when_running_in_text.ctx.js'

export default {
	title: 'testing/whenRunningInTest',
	tags: ['new', 'version:1.0'],
	beforeEach: () => {
		ctx.isRunningInTest = () => true
	},
	decorators: [showDocSource()],
	render: () => <></>,
	afterEach: () => {
		ctx.isRunningInTest = isRunningInTest
	}
} satisfies Meta

export const BasicUsage: StoryObj = {
	decorators: [
		whenRunningInTest((Story) => (
			<div>
				<div>Decorator will be attached when running in test</div>
				<Story />
			</div>
		))
	]
}

export const AcceptHandler: StoryObj = {
	loaders: [() => ({ state: { counter: 0 } })],
	decorators: [
		whenRunningInTest((_, { loaded: { state } }) => {
			state.counter = 1
		})
	],
	render: () => <div>When passing in a handler (which returns nothing), the story will be rendered</div>,
	play: async ({ canvas, loaded: { state } }) => {
		await expect(state.counter).toBe(1)
		await expect(canvas.getByText(/When passing in a handler/)).toBeInTheDocument()
	}
}

export const SkipDecorator: StoryObj = {
	tags: ['unit'],
	beforeEach: () => {
		ctx.isRunningInTest = () => false
	},
	decorators: [
		whenRunningInTest(() => {
			throw new Error('should not run')
		})
	],
	render: () => <>should not run decorator when not in test</>
}
