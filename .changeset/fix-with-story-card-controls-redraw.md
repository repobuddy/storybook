---
"@repobuddy/storybook": patch
---

fix `withStoryCard`: changing Storybook controls now triggers a rerender.

Previously the memoization chain inside `StoryCardScope`/`StoryCardCollector` held stable references across control changes, so `<Story />` was never re-called and the canvas did not update. The decorator now threads the current story `args` object through as a prop; because Storybook creates a new `args` object on every control change, the reference-equality check in `entryPropsEqual` fails and the memoization is correctly invalidated.
