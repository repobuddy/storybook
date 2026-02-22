import dedent from 'dedent'
import { themes } from 'storybook/theming'
import { twJoin } from 'tailwind-merge'
import { defineDocsParam, showSource, withStoryCard } from '#repobuddy/storybook'
import type { Meta, StoryObj } from '#repobuddy/storybook/storybook-addon-tag-badges'

// Simple demo component for testing the decorator
const DemoComponent = ({ text = 'Hello World' }: { text?: string }) => (
	<div className="rbsb:p-4 rbsb:bg-gray-100 rbsb:dark:bg-gray-500 rbsb:rounded">{text}</div>
)

const meta = {
	title: 'decorators/showSource',
	tags: ['version:next', '!snapshot'],
	render: () => <></>
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const ShowDocsSourceCode: Story = {
	name: 'Show docs.source.code',
	tags: ['use-case'],
	parameters: {
		docs: {
			source: {
				code: `() => /* from docs.source.code */ <DemoComponent text="Hello World" />`
			}
		}
	},
	decorators: [
		withStoryCard({
			content: (
				<p>
					When <code>docs.source.code</code> is provided, the decorator will show it by default.
				</p>
			)
		}),
		showSource({
			source: dedent`{
			parameters: defineDocsParam({
				source: {
					code: '() => /* from docs.source.code */ <DemoComponent text="Hello World" />'
				}
			}),
			decorators: [showSource()]
		}`
		}),
		showSource()
	]
}

export const ShowStorySource: Story = {
	tags: ['use-case'],
	decorators: [
		withStoryCard({
			content: <p>When no `source` is provided, the decorator will use the original source code of the story.</p>
		}),
		showSource()
	]
}

export const WithLanguageJson: Story = {
	name: 'With docs.source.language: json',
	parameters: defineDocsParam({
		source: {
			code: '{ "hello": "world" }',
			language: 'json'
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					Use <code>docs.source.language</code> to specify the language of the source code.
				</p>
			)
		}),
		showSource({
			source: dedent`{
			  parameters: defineDocsParam({
				source: {
					code: '{ "hello": "world" }',
					language: 'json'
				}
			  }),
			  decorators: [showSource()]
			}`
		}),
		showSource()
	]
}

export const WithLanguageMd: Story = {
	name: 'With docs.source.language: md',
	parameters: defineDocsParam({
		source: {
			code: 'This is a `markdown` text',
			language: 'md'
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					Use <code>docs.source.language</code> to specify the language of the source code.
				</p>
			)
		}),
		showSource({
			source: dedent`{
				parameters: defineDocsParam({
					source: {
						code: 'This is a \`markdown\` text',
						language: 'md'
					}
				}),
				decorators: [showSource()]
			}`
		}),
		showSource()
	]
}

export const WithDocsTheme: Story = {
	name: 'With docs.theme: dark',
	parameters: defineDocsParam({
		source: {
			code: '<div>Hello, World!</div>'
		},
		theme: themes.dark
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					Use <code>docs.theme</code> to specify the theme of the source code.
				</p>
			)
		}),
		showSource({
			source: dedent`{
				parameters: defineDocsParam({
					source: {
						code: '<div>Hello, World!</div>',
						theme: themes.dark
					}
				}),
				decorators: [showSource()]
			}`
		}),
		showSource()
	]
}

export const ShowOriginalSource: Story = {
	name: 'showOriginalSource: true',
	tags: ['props'],
	parameters: {
		docs: {
			source: {
				code: `() => <DemoComponent text="Hello World" />`
			}
		}
	},
	decorators: [
		withStoryCard({
			content: (
				<p>
					Use <code>showOriginalSource: true</code> to show the source code of the story instead of the one in{' '}
					<code>docs.source.code</code>.
				</p>
			)
		}),
		showSource({ showOriginalSource: true })
	]
}

export const WithClassNameString: Story = {
	name: 'className: string',
	tags: ['props'],
	parameters: defineDocsParam({
		source: {
			code: '<div>Hello, World!</div>'
		},
		description: {
			story: 'Demonstrates using className as a string to add custom styling'
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					Use <code>className</code> as a string to add custom styling to the source code card.
				</p>
			)
		}),
		showSource({
			className: 'rbsb:bg-blue-500 rbsb:dark:bg-blue-900'
		})
	]
}

export const WithClassNameFunction: Story = {
	name: 'className: function',
	tags: ['props'],
	parameters: defineDocsParam({
		source: {
			code: '<div>Hello, World!</div>'
		},
		description: {
			story: 'Demonstrates using className as a function to conditionally apply styles based on state'
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					Use <code>className</code> as a function to add custom styling to the source code card.
				</p>
			)
		}),
		showSource({
			className: ({ defaultClassName }) => {
				return `${defaultClassName} rbsb:border-2 rbsb:border-purple-500 rbsb:dark:border-purple-400 rbsb:rounded-full`
			}
		})
	]
}

export const WithClassNameConditional: Story = {
	name: 'className: conditional function',
	tags: ['props'],
	parameters: defineDocsParam({
		source: {
			code: '<div>Hello, World!</div>'
		},
		description: {
			story: 'Demonstrates using className function to access state and apply conditional styles'
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					Use <code>className</code> as a function to add custom styling to the source code card.
				</p>
			)
		}),
		showSource({
			className: ({ defaultClassName, appearance }) => {
				return twJoin(
					defaultClassName,
					appearance === 'source'
						? 'rbsb:border-2 rbsb:border-blue-500 rbsb:ring-2 rbsb:ring-blue-200 rbsb:dark:ring-blue-800'
						: 'rbsb:border-2 rbsb:rounded-lg'
				)
			}
		})
	]
}

export const WithSourceString: Story = {
	name: 'source: string',
	tags: ['use-case', 'props'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Pass <code>source</code> as a string to the decorator to override the displayed source code.
				</p>
			)
		}),
		showSource({ source: `() => 'custom source'` })
	]
}

export const WithSourceFunction: Story = {
	name: 'source: function',
	tags: ['use-case', 'props'],
	parameters: defineDocsParam({
		source: {
			code: '() => <DemoComponent text="Hello World" />'
		},
		description: {
			story: 'Pass source as a function (originalSource) => string to transform the story source before displaying.'
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					Pass <code>source</code> as a function to transform the original source. The function receives the
					story&apos;s source and returns the code to display.
				</p>
			)
		}),
		showSource({
			source: dedent`{
				parameters: defineDocsParam({
					source: {
						code: '() => <DemoComponent text="Hello World" />'
					}
				}),
				decorators: [showSource({
					source: (original) => \`
					// Wrapped by source function
					$\{original ?? ''}
					// End of transformed source\`
				})]
			}`
		}),
		showSource({
			source: (original) => dedent`// Wrapped by source function
			${original ?? ''}
			// End of transformed source`
		})
	]
}

export const PlacementBefore: Story = {
	name: 'placement: before',
	tags: ['props'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Use <code>placement: 'before'</code> (default) to display the source code card above the story output.
				</p>
			)
		}),
		showSource({ placement: 'before', source: 'Source shown before the story' })
	],
	render: () => <DemoComponent text="Story content" />
}

export const PlacementAfter: Story = {
	name: 'placement: after',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: "Use `placement: 'after'` to show the source code below the rendered story."
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					Use <code>placement: 'after'</code> to display the source code card below the story output.
				</p>
			)
		}),
		showSource({ placement: 'after', source: 'Source shown after the story' })
	],
	render: () => <DemoComponent text="Story content" />
}

export const TwoShowSourceBefore: Story = {
	name: "two showSource (placement: 'before')",
	tags: ['unit', 'snapshot'],
	parameters: defineDocsParam({
		source: {
			code: '() => <DemoComponent text="Story content" />'
		},
		description: {
			story:
				"With two showSource(placement: 'before'), cards are rendered in decorator order: first source card, second source card, then the story."
		}
	}),
	decorators: [
		showSource({ source: '// First source block before the story' }),
		showSource({ source: '// Second source block before the story' })
	],
	render: () => <DemoComponent text="Story content" />
}

export const TwoShowSourceAfter: Story = {
	name: "two showSource (placement: 'after')",
	tags: ['unit', 'snapshot'],
	parameters: defineDocsParam({
		source: {
			code: '() => <DemoComponent text="Story content" />'
		},
		description: {
			story:
				"With two showSource({ placement: 'after' }), order is: story first, then first source card, then second source card."
		}
	}),
	decorators: [
		showSource({ source: '// First source block after the story', placement: 'after' }),
		showSource({ source: '// Second source block after the story', placement: 'after' })
	],
	render: () => <DemoComponent text="Story content" />
}

export const TwoWithStoryCardTwoShowSource: Story = {
	name: 'two withStoryCard + two showSource',
	tags: ['unit', 'snapshot'],
	parameters: defineDocsParam({
		source: {
			code: '() => <DemoComponent text="Story content" />'
		},
		description: {
			story:
				"Cards render in decorator order: First card (withStoryCard), source before (showSource placement: 'before'), second card (withStoryCard), story, then source after (showSource placement: 'after')."
		}
	}),
	decorators: [
		withStoryCard({ title: 'First card', content: <p>This card should appear first.</p> }),
		showSource({ source: '// Source shown before the Second card' }),
		withStoryCard({ title: 'Second card', content: <p>This card should appear after the first source.</p> }),
		showSource({ source: '// Source shown after the Second card' })
	],
	render: () => <DemoComponent text="Story content" />
}
