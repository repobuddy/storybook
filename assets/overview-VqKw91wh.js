import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-B8rYRX2K.js";import{M as s,c as a}from"./index-DsR4G5ps.js";import"./index-D4lIrffr.js";import"./index-CcVp9PAx.js";import"./index-DsJinFGm.js";import"./iframe-CuJswpXI.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";const d=`# @repobuddy/storybook

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

### Tag Badges

If you use [\`storybook-addon-tag-badges\`][\`storybook-addon-tag-badges\`],
we provide a different set of badges that uses emojis:

- ✏️ Editor - Stories with live editor
- 🆕 New components/features
- 🅱️ Beta status
- 🪦 Deprecated notices
- ⚠️ Outdated warnings
- 🚨 Dangerous
- 📋 To-do items
- 📝 Code-only stories
- 📸 Snapshot tests
- 🧪 Unit tests
- 🔗 Integration tests
- Version indicators (unchanged)

To use them, add them to your \`.storybook/manager.ts\`:

\`\`\`ts
import { tagBadges } from '@repobuddy/storybook/manager'
import { addons } from '@storybook/manager-api'

addons.setConfig({ tagBadges })
\`\`\`

[\`@repobuddy/storybook\`]: https://github.com/repobuddy/storybook
[\`storybook-addon-tag-badges\`]: https://github.com/Sidnioulz/storybook-addon-tag-badges
`;function e(t){return o.jsxs(o.Fragment,{children:[o.jsx(s,{title:"Overview"}),`
`,o.jsx(a,{children:d})]})}function c(t={}){const{wrapper:n}={...r(),...t.components};return n?o.jsx(n,{...t,children:o.jsx(e,{...t})}):e()}export{c as default};
