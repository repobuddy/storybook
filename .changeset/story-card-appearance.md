---
"@repobuddy/storybook": minor
---

Add `appearance` prop to StoryCard and story card APIs; deprecate `status`.

- **StoryCard**: New `appearance` prop with variants `error`, `warn`, `info`, `source`, and `output`. The `status` prop is deprecated in favor of `appearance` but remains supported.
- **withStoryCard** and **StoryCardParam**: Support `appearance`; `status` is deprecated.
- **className** function state: Now receives `appearance` (and `status` for backward compatibility). Prefer `appearance` in new code.
