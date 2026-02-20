---
"@repobuddy/storybook": patch
---

Optimize story card scope rendering with memoized components

Add `StoryCardList` and `StableScopeChildren` memoized components to prevent cascade re-renders when registry state updates. Fix `StoryCardCollector` to compare all relevant props (not just Story reference) for proper memoization. Remove unnecessary `useMemo` from decorator.
