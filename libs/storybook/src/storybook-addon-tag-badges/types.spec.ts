import { it } from 'vitest'
import type { ShowHtml } from '../components/show_html'
import type { Meta, StoryObj } from './types'

it('improves StoryObj[tags]', () => {
	const _predefinedTags: StoryObj = {
		tags: [
			'editor',
			'new',
			'beta',
			'props',
			'deprecated',
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
