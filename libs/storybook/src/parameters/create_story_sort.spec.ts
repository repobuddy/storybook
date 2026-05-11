import { describe, expect, it } from 'vitest'
import { createStorySort } from './create_story_sort.js'

function makeStory(overrides: { title: string; name: string; tags?: string[] }) {
	return {
		id: `${overrides.title}--${overrides.name}`.toLowerCase().replace(/[/ ]/g, '-'),
		importPath: './test.stories.tsx',
		...overrides
	}
}

describe('createStorySort', () => {
	describe('no options (default)', () => {
		it('sorts alphabetically by title then name', () => {
			const sort = createStorySort()
			const a = makeStory({ title: 'Components/Button', name: 'Primary' })
			const b = makeStory({ title: 'Components/Input', name: 'Default' })
			expect(sort(a, b)).toBeLessThan(0)
			expect(sort(b, a)).toBeGreaterThan(0)
		})

		it('sorts alphabetically by name when titles are the same', () => {
			const sort = createStorySort()
			const a = makeStory({ title: 'Components/Button', name: 'Alpha' })
			const b = makeStory({ title: 'Components/Button', name: 'Beta' })
			expect(sort(a, b)).toBeLessThan(0)
			expect(sort(b, a)).toBeGreaterThan(0)
		})

		it('returns 0 for identical entries', () => {
			const sort = createStorySort()
			const a = makeStory({ title: 'Components/Button', name: 'Primary' })
			expect(sort(a, a)).toBe(0)
		})
	})

	describe('order (flat)', () => {
		it('sorts by explicit order position', () => {
			const sort = createStorySort({ order: ['Overview', 'Components', 'Hooks'] })
			const a = makeStory({ title: 'Components/Button', name: 'Primary' })
			const b = makeStory({ title: 'Overview/Intro', name: 'Default' })
			expect(sort(a, b)).toBeGreaterThan(0)
			expect(sort(b, a)).toBeLessThan(0)
		})

		it('unlisted items sort after listed ones', () => {
			const sort = createStorySort({ order: ['Overview', 'Components'] })
			const a = makeStory({ title: 'Zzz/Unknown', name: 'Test' })
			const b = makeStory({ title: 'Components/Button', name: 'Primary' })
			expect(sort(a, b)).toBeGreaterThan(0)
		})

		it('unlisted items sort alphabetically among themselves', () => {
			const sort = createStorySort({ order: ['Overview'] })
			const a = makeStory({ title: 'Banana/Foo', name: 'Test' })
			const b = makeStory({ title: 'Apple/Bar', name: 'Test' })
			expect(sort(a, b)).toBeGreaterThan(0)
			expect(sort(b, a)).toBeLessThan(0)
		})
	})

	describe('order (wildcard)', () => {
		it('* places unlisted items at the wildcard position', () => {
			const sort = createStorySort({ order: ['First', '*', 'Last'] })
			const first = makeStory({ title: 'First/A', name: 'Story' })
			const middle = makeStory({ title: 'Middle/B', name: 'Story' })
			const last = makeStory({ title: 'Last/C', name: 'Story' })

			expect(sort(first, middle)).toBeLessThan(0)
			expect(sort(middle, last)).toBeLessThan(0)
			expect(sort(first, last)).toBeLessThan(0)
		})

		it('multiple unlisted items at wildcard position sort alphabetically', () => {
			const sort = createStorySort({ order: ['First', '*', 'Last'] })
			const alpha = makeStory({ title: 'Alpha/A', name: 'Story' })
			const beta = makeStory({ title: 'Beta/B', name: 'Story' })
			expect(sort(alpha, beta)).toBeLessThan(0)
			expect(sort(beta, alpha)).toBeGreaterThan(0)
		})
	})

	describe('order (nested)', () => {
		it('sorts second-level segments using nested order', () => {
			const sort = createStorySort({
				order: [['Components', ['Button', 'Input', 'Select']]]
			})
			const button = makeStory({ title: 'Components/Button', name: 'Primary' })
			const select = makeStory({ title: 'Components/Select', name: 'Default' })
			const input = makeStory({ title: 'Components/Input', name: 'Default' })

			expect(sort(button, input)).toBeLessThan(0)
			expect(sort(input, select)).toBeLessThan(0)
			expect(sort(button, select)).toBeLessThan(0)
		})

		it('nested wildcard positions unlisted children', () => {
			const sort = createStorySort({
				order: [['Pages', ['Home', '*', 'Admin']]]
			})
			const home = makeStory({ title: 'Pages/Home', name: 'Default' })
			const other = makeStory({ title: 'Pages/Other', name: 'Default' })
			const admin = makeStory({ title: 'Pages/Admin', name: 'Default' })

			expect(sort(home, other)).toBeLessThan(0)
			expect(sort(other, admin)).toBeLessThan(0)
			expect(sort(home, admin)).toBeLessThan(0)
		})

		it('deeply nested ordering works', () => {
			const sort = createStorySort({
				order: [['Components', [['Buttons', ['IconButton', 'Button']]]]]
			})
			const icon = makeStory({ title: 'Components/Buttons/IconButton', name: 'Default' })
			const button = makeStory({ title: 'Components/Buttons/Button', name: 'Default' })
			expect(sort(icon, button)).toBeLessThan(0)
			expect(sort(button, icon)).toBeGreaterThan(0)
		})
	})

	describe('tag (basic)', () => {
		it('sorts stories with same title by tag priority', () => {
			const sort = createStorySort({
				tag: ['playground', 'use-case', 'spec', 'props', 'unit']
			})
			const playground = makeStory({ title: 'Button', name: 'Playground', tags: ['playground'] })
			const spec = makeStory({ title: 'Button', name: 'All Sizes', tags: ['spec'] })
			const unit = makeStory({ title: 'Button', name: 'Click Test', tags: ['unit'] })

			expect(sort(playground, spec)).toBeLessThan(0)
			expect(sort(spec, unit)).toBeLessThan(0)
			expect(sort(playground, unit)).toBeLessThan(0)
		})

		it('stories without tags sort after tagged stories', () => {
			const sort = createStorySort({
				tag: ['playground', 'spec']
			})
			const tagged = makeStory({ title: 'Button', name: 'Playground', tags: ['playground'] })
			const untagged = makeStory({ title: 'Button', name: 'Other' })

			expect(sort(tagged, untagged)).toBeLessThan(0)
			expect(sort(untagged, tagged)).toBeGreaterThan(0)
		})

		it('stories with no matching tags sort after matched ones', () => {
			const sort = createStorySort({
				tag: ['playground', 'spec']
			})
			const matched = makeStory({ title: 'Button', name: 'Sizes', tags: ['spec'] })
			const unmatched = makeStory({ title: 'Button', name: 'Other', tags: ['context', 'review'] })

			expect(sort(matched, unmatched)).toBeLessThan(0)
		})

		it('uses highest-priority tag when story has multiple matching tags', () => {
			const sort = createStorySort({
				tag: ['playground', 'use-case', 'spec', 'props']
			})
			const multiTag = makeStory({ title: 'Button', name: 'Combined', tags: ['props', 'spec'] })
			const useCase = makeStory({ title: 'Button', name: 'InToolbar', tags: ['use-case'] })

			expect(sort(useCase, multiTag)).toBeLessThan(0)
			expect(sort(multiTag, useCase)).toBeGreaterThan(0)
		})
	})

	describe('tag (wildcard)', () => {
		it('* positions unlisted tags at the wildcard slot', () => {
			const sort = createStorySort({
				tag: ['playground', 'spec', '*', 'unit', 'integration']
			})
			const spec = makeStory({ title: 'Button', name: 'Sizes', tags: ['spec'] })
			const unknown = makeStory({ title: 'Button', name: 'Custom', tags: ['custom-tag'] })
			const unit = makeStory({ title: 'Button', name: 'Click', tags: ['unit'] })

			expect(sort(spec, unknown)).toBeLessThan(0)
			expect(sort(unknown, unit)).toBeLessThan(0)
		})

		it('stories without tags sort to wildcard position', () => {
			const sort = createStorySort({
				tag: ['playground', '*', 'unit']
			})
			const playground = makeStory({ title: 'Button', name: 'Playground', tags: ['playground'] })
			const noTags = makeStory({ title: 'Button', name: 'Other' })
			const unit = makeStory({ title: 'Button', name: 'Test', tags: ['unit'] })

			expect(sort(playground, noTags)).toBeLessThan(0)
			expect(sort(noTags, unit)).toBeLessThan(0)
		})
	})

	describe('order + tag combined', () => {
		it('order takes precedence over tag for different titles', () => {
			const sort = createStorySort({
				order: ['Overview', 'Components'],
				tag: ['playground', 'spec']
			})
			const overviewSpec = makeStory({ title: 'Overview/Intro', name: 'Intro', tags: ['spec'] })
			const componentsPlayground = makeStory({
				title: 'Components/Button',
				name: 'Playground',
				tags: ['playground']
			})

			expect(sort(overviewSpec, componentsPlayground)).toBeLessThan(0)
		})

		it('tag applies within same title after order resolves', () => {
			const sort = createStorySort({
				order: ['Components'],
				tag: ['playground', 'use-case', 'spec', 'props']
			})
			const playground = makeStory({
				title: 'Components/Button',
				name: 'Playground',
				tags: ['playground']
			})
			const props = makeStory({ title: 'Components/Button', name: 'Appearance', tags: ['props'] })

			expect(sort(playground, props)).toBeLessThan(0)
			expect(sort(props, playground)).toBeGreaterThan(0)
		})
	})

	describe('numeric sorting', () => {
		it('sorts numerically in titles', () => {
			const sort = createStorySort()
			const a = makeStory({ title: 'Step 2', name: 'Default' })
			const b = makeStory({ title: 'Step 10', name: 'Default' })
			expect(sort(a, b)).toBeLessThan(0)
		})

		it('sorts numerically in names', () => {
			const sort = createStorySort()
			const a = makeStory({ title: 'Button', name: 'Size 2' })
			const b = makeStory({ title: 'Button', name: 'Size 10' })
			expect(sort(a, b)).toBeLessThan(0)
		})
	})
})
