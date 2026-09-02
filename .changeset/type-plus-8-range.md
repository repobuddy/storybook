---
'@repobuddy/storybook': patch
---

Depend on `type-plus` as a range on the 8.x line, `^8.0.0-beta.10`, instead of the stable `^7.6.2`.

This package belongs on the type-plus 8.x line. The real defect in the earlier manifest was not the line but the *exact* pin `8.0.0-beta.8`, which could never resolve forward — and `8.0.0-beta.8` ships `"type": "module"` with a `cjs/` build that lacks a `{"type":"commonjs"}` marker, so `require()` of it failed with `ReferenceError: exports is not defined in ES module scope`. Upstream fixed that in `8.0.0-beta.10`.

`^8.0.0-beta.10` resolves to `>=8.0.0-beta.10 <9.0.0-0`, so the CJS fix and every later 8.x release — betas and the eventual stable — flow in without another manifest change.

The two local type aliases stay as they are: `Properties` (used by `FnToArgTypes`) and `IsStringLiteral` (used by `ExtendsMeta` and `ExtendsStoryObj`) remain declared in this package rather than re-exported from `type-plus`, so the published type surface is unchanged by this release.
