---
'@repobuddy/storybook': patch
---

Stop forcing a transparent card background in the `showSource` decorator when displaying the original source.
It causes a11y issues due to insufficient contrast depending on the background color used by the user.