---
'@repobuddy/storybook': minor
---

Support Storybook 11. The `storybook`, `@storybook/addon-docs`, and `@storybook/react-vite` peer dependency ranges are now `^10.5.10 || ^11.0.0-alpha.1`, so Storybook 10 stays supported. The optional `storybook-addon-tag-badges` peer range is now `^3.0.2 || ^4.0.0`: use v3 with Storybook 10 and v4 with Storybook 11. No API changed: the package uses no API that Storybook 11 removed.
