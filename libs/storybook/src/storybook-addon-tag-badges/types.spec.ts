import { it } from 'vitest'
import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'
import type { ShowHtml } from '../components/show_html'

it('improves StoryObj[tags]', () => {
	const _predefinedTags: StoryObj = {
		tags: [
			'editor',
			'new',
			'alpha',
			'beta',
			'rc',
			'props',
			'deprecated',
			'remove',
			'remove:next',
			'outdated',
			'danger',
			'todo',
			'code-only',
			'snapshot',
			'unit',
			'integration',
			'keyboard',
			'internal'
		]
	}
	const _freeFormTags: StoryObj = {
		tags: ['custom-tag', 'another-tag', 'yet-another-tag']
	}

	type S = StoryObj<typeof ShowHtml>
	const _withTypeParam: S = {
		tags: ['editor', 'other-tag']
	}
})

it('improves Meta[tags]', () => {
	type M = Meta<typeof ShowHtml>
	const _withTypeParam: M = {
		tags: ['editor', 'other-tag']
	}
})
