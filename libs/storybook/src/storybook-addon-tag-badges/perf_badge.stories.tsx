import dedent from 'dedent'
import { showSource, withStoryCard } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

export default {
	title: 'storybook-addon-tag-badges/perfBadge',
	tags: ['var', '!snapshot', 'version:2.22'],
	render: () => <></>
} satisfies Meta

export const PerfBadge: StoryObj = {
	tags: ['perf'],
	decorators: [
		withStoryCard({
			content: (
				<>
					<p>
						Story that demonstrates or tests performance. In the sidebar it appears as <code>⚡</code>.
					</p>
				</>
			)
		}),
		showSource({
			placement: 'before',
			source: dedent`export const YourStory = {
				tags: ['perf'],
				render: () => <YourComponent />
			}`
		}),
		withStoryCard({
			content: (
				<>
					<p>To skip perf stories in Vitest:</p>
					<ol>
						<li>
							Tag the story with <code>perf</code> (e.g. <code>tags: ['perf']</code>).
						</li>
						<li>
							In your Vitest browser config, pass <code>{"tags: { exclude: ['perf'] }"}</code> to{' '}
							<code>storybookTest()</code> so those stories are not run and are not counted in results.
						</li>
					</ol>
				</>
			)
		}),
		showSource({
			placement: 'before',
			source: dedent`
			// vitest.config.ts
			import { join } from 'node:path'
			import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
			import { defineConfig } from 'vitest/config'

			export default defineConfig({
				plugins: [
					storybookTest({
						configDir: join(import.meta.dirname, '.storybook'),
						tags: { exclude: ['perf'] }
					})
				]
			})`
		})
	]
}
