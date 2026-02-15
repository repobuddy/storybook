# @repobuddy/storybook

[![npm version](https://img.shields.io/npm/v/@repobuddy/storybook.svg)](https://www.npmjs.com/package/@repobuddy/storybook)
[![npm downloads](https://img.shields.io/npm/dm/@repobuddy/storybook.svg)](https://www.npmjs.com/package/@repobuddy/storybook)
[![GitHub Actions](https://github.com/repobuddy/storybook/actions/workflows/release.yml/badge.svg)](https://github.com/repobuddy/storybook/actions/workflows/release.yml)

Your repository buddy for Storybook.

> [!NOTE]
>
> For Storybook 10, please use version `2.x`.
>
> For Storybook 9, please use version `1.x`.
>
> For Storybook 8.x, please use version `0.x`.

## Install

```sh
pnpm add -D @repobuddy/storybook
```

If you use the components in the library, import `@repobuddy/storybook/styles.css`.

## Features

### Typed Parameters

Storybook supports some built-in parameters,
but the `parameters` props in the `StoryObj` type is typed as `Record<string, any>`.

[`@repobuddy/storybook`][`@repobuddy/storybook`] adds these types as well as their corresponding define-functions so that you can use them in your stories.

For example:

```ts
import { defineLayoutParam } from '@repobuddy/storybook'

export const MyStory: StoryObj = {
	parameters: defineLayoutParam('fullscreen')
}
```

We also have a `defineParameters` function that types the built-in parameters from Storybook,
and also allow you to specify additional parameter types.

```ts
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
```

### Brand Title

[`@repobuddy/storybook`][`@repobuddy/storybook`] also provides a `brandTitle` parameter that allows you to set the brand title of your Storybook.

```ts
import { brandTitle } from '@repobuddy/storybook/manager'

addons.setConfig({
	brandTitle: brandTitle({
		title:'My Brand',
		logo: `<svg.../>`
	})
})
```

### `storybook-addon-tag-badges`

If you use [`storybook-addon-tag-badges`][`storybook-addon-tag-badges`],
we provide a different set of badges that uses emojis (order: first match wins):

- 🆕 `new` - Recently added stories
- 🌱 `beta` - Features in beta
- 🪦 `deprecated` - Deprecated features
- ⚠️ `outdated` - Stories that need updating
- 🚨 `danger` - Dangerous or cautionary patterns
- 🎯 `use-case` - Specific use case or scenario
- ⌨️ `keyboard` - Keyboard interaction
- `</>` `source` - Source-code-focused stories
- `<T>` `type` - TypeScript types (shown in MDX)
- `ƒ(x)` `func` - Functions (shown in MDX)
- `var` `var` - Variables (shown in MDX)
- 🔧 `props` - Props or configuration
- 📋 `todo` - Todo or incomplete stories
- 🧪 `unit` - Unit tests
- 🔗 `integration` - Integration tests (hidden in sidebar)
- ✏️ `editor` - Live editor stories (with [`storybook-addon-code-editor`][`storybook-addon-code-editor`])
- 📝 `code-only` - Stories without visual examples (hidden in MDX)
- Version indicators (unchanged)
- 🔒 `internal` - Internal or private-use-only stories
- 📸 `snapshot` - Snapshot tests (toolbar only, not sidebar)

To use them, add them to your `.storybook/manager.ts`:

```ts
import { tagBadges } from '@repobuddy/storybook/storybook-addon-tag-badges'
import { addons } from '@storybook/manager-api'

addons.setConfig({ tagBadges })
```

You can also import only the one you need:

```ts
import { newBadge } from '@repobuddy/storybook/storybook-addon-tag-badges'
import { defaultConfig } from 'storybook-addon-tag-badges'

addons.setConfig({ tagBadges: [newBadge, ...defaultConfig] })
```

### `@storybook-community/storybook-dark-mode`

[`@repobuddy/storybook`][`@repobuddy/storybook`] provides a few utilities to work with [`@storybook-community/storybook-dark-mode`][`@storybook-community/storybook-dark-mode`].

```ts
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
		bodyClass: 'text-black bg-white dark:text-white dark:bg-black'
	})]
}
```

## Styling

[`@repobuddy/storybook`][`@repobuddy/storybook`] uses Tailwind CSS 4 with the prefix `rbsb:` and support `dark` variant.

While we provide a pre-built `@repobuddy/storybook/styles.css` for you,
it uses the default `dark` variant which is based on the `(prefers-color-scheme: dark)` media query.

Since how to control the dark variant is different in different projects,
the pre-built `@repobuddy/storybook/styles.css` might not work for you.

Instead, you can use the `@repobuddy/storybook/tailwind.css` to build the stylesheet for your project.

Let's say you are using it in your storybook (obviously),
you need to separate your tailwind config and import them in your storybook.

```tsx
// .storybook/preview.tsx
import '../tailwind.css'
import './tailwind.repobuddy-storybook.css'
```

```css
/* tailwind.css */
/* add `@repobuddy/storybook/tailwind.css` to a separate layer "repobuddy-storybook" to control the layer order */
@layer theme, base, repobuddy-storybook, components,  utilities;
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));
```

```css
/* .storybook/tailwind.repobuddy-storybook.css */
@import "@repobuddy/storybook/tailwind.css" layer(repobuddy-storybook);

@source "../node_modules/@repobuddy/storybook/src/**";

@custom-variant dark (&:where(.dark, .dark *));
```

You may notice that the `@custom-variant dark` is duplicated in both files.
If you want to avoid this, you can extract it to a separate file and import it in both files.

Also note that `@repobuddy/storybook/tailwind` is deprecated in favor of `@repobuddy/storybook/tailwind.css`.
That convention better aligns with the Tailwind CSS 4 convention.

[`@repobuddy/storybook`]: https://github.com/repobuddy/storybook
[`storybook-addon-tag-badges`]: https://github.com/Sidnioulz/storybook-addon-tag-badges
[`@storybook-community/storybook-dark-mode`]: https://github.com/repobuddy/@storybook-community/storybook-dark-mode
[`storybook-addon-code-editor`]: https://github.com/storybookjs/storybook/tree/main/addons/code/code-editor
