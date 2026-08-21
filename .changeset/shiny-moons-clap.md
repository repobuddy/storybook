---
'@repobuddy/storybook': patch
---

Fix `createDarkModeDocsContainer` rendering the dark theme on first paint regardless of the active mode. It now seeds from the mode `@storybook-community/storybook-dark-mode` persisted, falling back to `prefers-color-scheme`, instead of waiting for the first `DARK_MODE` event.
