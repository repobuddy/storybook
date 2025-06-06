---
"@repobuddy/storybook": patch
---

Remove class manipulation for dark mode in `withDarkMode()`.
It interferes with the class manipulation during `beforeEach` in `vitest.setup.ts`.

Technically style manipulation has the same problem.
Will address that in `storybook-dark-mode2` or in a future PR.
