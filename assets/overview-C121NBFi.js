import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-B8rYRX2K.js";import{M as a,e as s}from"./index-DRx9QA3r.js";import"./index-D4lIrffr.js";import"./iframe-BHYWIbbO.js";import"./index-DsJinFGm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";const d=`# @repobuddy/storybook

Your repository buddy for Storybook.

## Install

\`\`\`sh
pnpm add -D @repobuddy/storybook
\`\`\`

## Features

### Typed Parameters

Storybook supports some built-in parameters,
but the \`parameters\` props in the \`StoryObj\` type is typed as \`Record<string, any>\`.

[\`@repobuddy/storybook\`][\`@repobuddy/storybook\`] adds these types as well as their corresponding define-functions so that you can use them in your stories.

For example:

\`\`\`ts
import { defineLayoutParam } from '@repobuddy/storybook'

export const MyStory: StoryObj = {
	parameters: defineLayoutParam('fullscreen')
}
\`\`\`

We also have a \`defineParameters\` function that types the built-in parameters from Storybook,
and also allow you to specify additional parameter types.

\`\`\`ts
import { defineParameters, type ActionsParam } from '@repobuddy/storybook'

export const MyStory: StoryObj = {
	parameters: defineParameters<ActionsParam>({
		layout: 'fullscreen',
		// this is typed
		actions: {
			disable: true
		}
	})
}
\`\`\`

### Brand Title

[\`@repobuddy/storybook\`][\`@repobuddy/storybook\`] also provides a \`brandTitle\` parameter that allows you to set the brand title of your Storybook.

\`\`\`ts
import { brandTitle } from '@repobuddy/storybook/manager'

addons.setConfig({
	brandTitle: brandTitle({
		title:'My Brand',
		logo: \`<svg.../>\`
	})
})
\`\`\`

### \`storybook-addon-tag-badges\`

If you use [\`storybook-addon-tag-badges\`][\`storybook-addon-tag-badges\`],
we provide a different set of badges that uses emojis:

- ✏️ \`editor\` - Live Editor Stories (with [\`storybook-addon-code-editor\`][\`storybook-addon-code-editor\`])
- 🆕 \`new\` - New components/features
- 🅱️ \`beta\` - Beta status
- 🪦 \`deprecated\` - Deprecated notices
- ⚠️ \`outdated\` - Outdated warnings
- 🚨 \`danger\` - Dangerous
- 📋 \`todo\` - To-do items
- 📝 \`code-only\` - Code-only stories
- 🔒 \`internal\` - Internal stories (when set up, hidden from the sidebar in public Storybook)
- 📸 \`snapshot\` - Snapshot tests
- 🧪 \`unit\` - Unit tests
- 🔗 \`integration\` - Integration tests
- Version indicators (unchanged)

To use them, add them to your \`.storybook/manager.ts\`:

\`\`\`ts
import { tagBadges } from '@repobuddy/storybook/storybook-addon-tag-badges'
import { addons } from '@storybook/manager-api'

addons.setConfig({ tagBadges })
\`\`\`

You can also import only the one you need:

\`\`\`ts
import { newBadge } from '@repobuddy/storybook/storybook-addon-tag-badges'
import { defaultConfig } from 'storybook-addon-tag-badges'

addons.setConfig({ tagBadges: [newBadge, ...defaultConfig] })
\`\`\`

### \`storybook-dark-mode\`

[\`@repobuddy/storybook\`][\`@repobuddy/storybook\`] provides a few utilities to work with [\`storybook-dark-mode\`][\`storybook-dark-mode\`].

\`\`\`ts
// .storybook/preview.tsx
import {
	createDarkModeDocsContainer,
	defineDarkModeParam,
	withDarkMode
} from '@repobuddy/storybook/storybook-dark-mode'

export const preview: Preview = {
	parameters: {
		docs: {
		container: createDarkModeDocsContainer()
		},
		darkMode: defineDarkModeParam({
			classTarget: 'html',
			darkClass: 'dark',
			stylePreview: true
		})
	},
	decorators: [withDarkMode({
		bodyClass: 'dark:bg-black dark:text-white'
	})]
}
\`\`\`

[\`@repobuddy/storybook\`]: https://github.com/repobuddy/storybook
[\`storybook-addon-tag-badges\`]: https://github.com/Sidnioulz/storybook-addon-tag-badges
[\`storybook-dark-mode\`]: https://github.com/hipstersmoothie/storybook-dark-mode
[\`storybook-addon-code-editor\`]: https://github.com/storybookjs/storybook/tree/main/addons/code/code-editor
`;function e(t){return o.jsxs(o.Fragment,{children:[o.jsx(a,{title:"Overview"}),`
`,o.jsx(s,{children:d})]})}function c(t={}){const{wrapper:n}={...r(),...t.components};return n?o.jsx(n,{...t,children:o.jsx(e,{...t})}):e()}export{c as default};
