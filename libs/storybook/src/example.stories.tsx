import type { Meta, StoryObj } from '@storybook/react-vite'
import { makeLiveEditStory } from 'storybook-addon-code-editor'
import * as TypePlus from 'type-plus'
import source from './example.source.tsx?raw'
import * as RepobuddyStorybook from './index.ts'

const meta = {
	title: 'example'
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {}

makeLiveEditStory(Playground, {
	availableImports: {
		'@repobuddy/storybook': RepobuddyStorybook,
		'type-plus': TypePlus
	},
	code: source,
	modifyEditor: (monaco, editor) => {
		monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
			noSemanticValidation: false
		})
		monaco.editor.setTheme('vs-dark')
		editor.focus()
	}
})
