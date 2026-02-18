---
"@repobuddy/storybook": minor
---

Add `update` to story card registry context and stabilize decorator scope props

- Story card registry context now exposes `update(id, card)` for in-place card updates
- Story card scope uses update instead of remove+add when entry props change, reducing re-mount churn
- `showDocSource` and `withStoryCard` memoize scope props for stable references

Skip `withStoryCard` when running in tests
