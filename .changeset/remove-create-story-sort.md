---
"@repobuddy/storybook": patch
---

remove `createStorySort` from public exports.

`createStorySort` has been removed. It does not work.

Storybook performs static AST analysis on the `storySort` value and rejects function-call results or variable references — it must be a self-contained inline function literal.

Copy the inline `storySort` implementation directly into your `.storybook/preview.ts` instead.
