import type { setupMonaco } from 'storybook-addon-code-editor'
import RepobuddyStorybookTypes from '../esm/index.d.ts?raw'
import RepobuddyStorybookTagBadgesTypes from '../esm/storybook-addon-tag-badges/index.d.ts?raw'

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
