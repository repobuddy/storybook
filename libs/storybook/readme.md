# @repobuddy/storybook

Your repository buddy for Storybook.

## Install

```sh
pnpm add -D @repobuddy/storybook
```

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

### Tag Badges

If you use [`storybook-addon-tag-badges`][`storybook-addon-tag-badges`],
we provide a different set of badges that uses emojis:

- 🆕 New components/features
- 🅱️ Beta status
- 🪦 Deprecated notices
- ⚠️ Outdated warnings
- 🚨 Dangerous
- 📋 To-do items
- 📝 Code-only stories
- 🧪 Unit tests
- 🔄 Integration tests
- Version indicators (unchanged)

To use them, add them to your `.storybook/manager.ts`:

```ts
import { tagBadges } from '@repobuddy/storybook/manager'
import { addons } from '@storybook/manager-api'

addons.setConfig({ tagBadges })
```

[`@repobuddy/storybook`]: https://github.com/repobuddy/storybook
[`storybook-addon-tag-badges`]: https://github.com/Sidnioulz/storybook-addon-tag-badges
