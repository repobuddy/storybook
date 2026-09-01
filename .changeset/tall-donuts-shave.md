---
'@repobuddy/storybook': patch
---

Depend on the stable `type-plus@^7.6.2` instead of the prerelease `type-plus@8.0.0-beta.8`.

`type-plus@latest` is `7.6.2`; the 8.x line is an unfinished major parked in changesets prerelease mode. Pinning an exact beta pushed that prerelease into the tree of every repo that consumes `@repobuddy/storybook`. `@just-web/css` moves to `^0.8.4` for the same reason — `0.8.3` pinned `type-plus@8.0.0-beta.7` transitively.

Two type-level helpers that only exist in the 8.x line are now declared locally rather than imported, so the published types keep their current meaning:

- `IsStringLiteral`, used by `ExtendsMeta` and `ExtendsStoryObj`, has no counterpart in 7.6.2.
- `Properties`, used by `FnToArgTypes`, widens `unknown` to `{}` in 7.6.2; the local copy keeps the `any`/`unknown` passthrough 8.x added.

All emitted JavaScript is byte-identical. The only change to the emitted `.d.ts` files is that those two aliases are now inlined instead of imported from `type-plus` — which also fixes the published types, since they previously imported `IsStringLiteral` from a `type-plus` version that no consumer would have installed.
