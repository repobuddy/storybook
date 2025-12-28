---
"@repobuddy/storybook": patch
---

fix `withStoryCard({ className: ({ status, defaultClassName }) => string })` to treat returning string as the final className string instead of merging with the `defaultClassName`.

Remove `undefined` from the `status` type in the function. The `status` defaults to `info` so it will never be `undefined`.
