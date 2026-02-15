import type { setupMonaco } from 'storybook-addon-code-editor'
import RepobuddyStorybookTypes from './types/repobuddy_storybook/index.d.mts?raw'
import RepobuddyStorybookTagBadgesTypes from './types/repobuddy_storybook_tag_badges/index.d.mts?raw'

export const onMonacoLoad: NonNullable<Parameters<typeof setupMonaco>[0]['onMonacoLoad']> = (monaco) => {
	monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
		noSemanticValidation: false,
		noSyntaxValidation: false
	})
	monaco.languages.typescript.typescriptDefaults.addExtraLib(
		RepobuddyStorybookTypes,
		'file:///node_modules/@repobuddy/storybook/index.d.ts'
	)
	monaco.languages.typescript.typescriptDefaults.addExtraLib(
		RepobuddyStorybookTagBadgesTypes,
		'file:///node_modules/@repobuddy/storybook/storybook-addon-tag-badges/index.d.ts'
	)
}
