---
"@repobuddy/storybook": patch
---

Declare `@storybook/react-vite` as an optional peer dependency.

The published type declarations import from `@storybook/react-vite`, so pnpm now links the consumer's copy instead of letting TypeScript resolve another installed copy (fixes TS2322 and TS2883 in consumers).
