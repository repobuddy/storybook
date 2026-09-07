---
"@repobuddy/storybook": patch
---

Pin `type-plus` to the exact version `8.0.0-beta.10`.

The package was already on `^8.0.0-beta.10`, so type-plus 8's `typescript >= 5.6.0`
peer already reaches consumers today and tightening the caret does not change what
a fresh install resolves. `^8.0.0-beta.10` resolves to `>=8.0.0-beta.10 <9.0.0-0`,
which admits every later 8.0.0 prerelease plus the eventual `8.0.0` and `8.1.0` —
and 8 is a prerelease line where breaking changes have landed between betas (e.g.
`beta.10` -> `beta.11` changed `Equal`'s signature and removed `isType.f`). Pinning
the exact version makes each future bump a reviewable PR instead of something a
lockfile refresh can do silently.
