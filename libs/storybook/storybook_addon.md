# Storybook Addon

When user adds `your-addon` to the `addons` array in `.storybook/main.ts`:

```ts
// .storybook/main.ts

export default {
  addons: [
    'your-addon'
  ]
}
```

Storybook will first look for `your-addon/preset.js` and loads it.
This file can be a CommonJS module or an ESM module,
depending on the `package.json#type` field.

```ts
// @storybook/addon-vitest/preset.js

// this loads `./dist/preset.js` specified in `package.json#exports`
// it is also a CommonJS module
module.exports = require('@storybook/addon-vitest/preset');
```

```ts
// @storybook-community/storybook-dark-mode/preset.js

function managerEntries(entry = []) {
  return [...entry, require.resolve('./esm/preset/manager')]
}

module.exports = { managerEntries }
```

```ts
// storybook-addon-vis/preset.js

// ESM can load CommonJS code
export * from './dist/preset.cjs';
```

If it is not found, it will look for `your-addon/preset.mjs` and loads it.
But currently, it is not working.
Regardless of the `package.json#type` field, it is treated as a CommonJS module.

When both `preset.js` and `preset.mjs` are found,
Storybook will load the file specified in the `main` field in `package.json`.

Note that it will not load the file specified in the `module` field,
not the main entry in the `exports` field,
regardless of the `package.json#type` field.

## Subpath addon

On the other hand,
it is possible to set up the package to include a Storybook addon in a subpath.

To make that work,

Add the `preset.js` file in the subpath:

```ts
// @repobuddy/storybook/variants/preset.js

export function managerEntries(entry = []) {
  return [...entry, require.resolve('./manager')]
}
```

And add a `package.json` file in the subpath.

```json
// @repobuddy/storybook/variants/package.json

{
  "type": "module"
}
```

Reference them in the top-level `package.json` file:

```json
// @repobuddy/storybook/package.json

{
  "exports": {
    "./variants/package.json": "./esm/variants/package.json",
    "./variants/preset": "./esm/variants/preset.js"
  }
}
```

With this setup,
user can use the addon in the `.storybook/main.ts` file:

```ts
// .storybook/main.ts

export default {
  addons: [
    '@repobuddy/storybook/variants'
  ]
}
```
