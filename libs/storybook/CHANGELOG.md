# @repobuddy/storybook

## 2.13.0

### Minor Changes

- [`4b655ca`](https://github.com/repobuddy/storybook/commit/4b655ca0f19c5f2cc0ca4f42daaac80baa6fe24a) Thanks [@unional](https://github.com/unional)! - Add source badge to storybook-addon-tag-badges.

  - Export `sourceBadge` tag badge parameter for the `source` tag (displays `</>` with "Source Code" tooltip, hidden in MDX).

### Patch Changes

- [`4321270`](https://github.com/repobuddy/storybook/commit/43212700cfd082f6566806a78eb8dd13d618b1b7) Thanks [@unional](https://github.com/unional)! - Add missing type for source badge.

## 2.12.0

### Minor Changes

- [`2daf00b`](https://github.com/repobuddy/storybook/commit/2daf00b92ca8a4a23275de762fc60fa4bf7a965c) Thanks [@unional](https://github.com/unional)! - Add `placement` option to `showDocSource` decorator to display source code above or below the story

  - **showDocSource**: New optional `placement?: 'before' | 'after'` (default `'after'`) to control whether the source code card is rendered above or below the story.

### Patch Changes

- [`42dd3ed`](https://github.com/repobuddy/storybook/commit/42dd3edef4a98c19cfd656bd3fa5190342847461) Thanks [@unional](https://github.com/unional)! - Show unit badge in sidebar and reorder tag badges (versionBadge before internal/snapshot).

## 2.11.0

### Minor Changes

- [`85c43e0`](https://github.com/repobuddy/storybook/commit/85c43e00dc11d0ff363d35e39836c7bed32cf3de) Thanks [@unional](https://github.com/unional)! - Add `@repobuddy/storybook/tailwind.css` export and document Tailwind style composition.

  - Export `./tailwind.css` for projects that build their own stylesheet.
  - Update readme with Styling section: how to use `tailwind.css`.

## 2.10.0

### Minor Changes

- [`f9f468d`](https://github.com/repobuddy/storybook/commit/f9f468d4e0659298a5a80160d822ed29306f3fe5) Thanks [@unional](https://github.com/unional)! - Provide tailwind style compsition support.

## 2.9.1

### Patch Changes

- [`78149f4`](https://github.com/repobuddy/storybook/commit/78149f4f9b33688ac298bdc7b9fa93a96a20f8aa) Thanks [@unional](https://github.com/unional)! - fix name of `defineStoryCardParam`

## 2.9.0

### Minor Changes

- [`152a10c`](https://github.com/repobuddy/storybook/commit/152a10c9210b072bd34f0ec6466731aae222ea61) Thanks [@unional](https://github.com/unional)! - Add `defineStoryCard` parameter function to configure story cards via story parameters.

  The `withStoryCard` decorator now supports reading configuration from story parameters using `defineStoryCard`, allowing story card configuration to be defined in the `parameters` object instead of only in decorator props.

## 2.8.0

### Minor Changes

- [`b1b5c5b`](https://github.com/repobuddy/storybook/commit/b1b5c5b6f1bdd4ec16d06005cdae307958c08526) Thanks [@unional](https://github.com/unional)! - Export `StoryCard`.

## 2.7.0

### Minor Changes

- [`6c6435b`](https://github.com/repobuddy/storybook/commit/6c6435b7202b73abb4126f5c61472f51d7c4ea74) Thanks [@unional](https://github.com/unional)! - Add `source` option to `showDocSource` decorator

  When provided, the decorator shows the given source string instead of `docs.source.code` or the story's original source. This allows callers to override the displayed code explicitly.

## 2.6.0

### Minor Changes

- [#378](https://github.com/repobuddy/storybook/pull/378) [`bdad2c4`](https://github.com/repobuddy/storybook/commit/bdad2c40db1bb97c271e033077383591c5a6a9eb) Thanks [@unional](https://github.com/unional)! - Add `FnToArgTypes` type utility to convert a function's parameter types to Storybook Args type.

## 2.5.0

### Minor Changes

- [`afaccdf`](https://github.com/repobuddy/storybook/commit/afaccdfeba5bd7a04d27780f2face6c3be8d5aa2) Thanks [@unional](https://github.com/unional)! - Add Tailwind CSS prefix system and enhance `showDocSource` decorator.

  - Add `rbsb:` prefix to all Tailwind classes to avoid conflicts with user styles
  - Add `className` option to `showDocSource` decorator for custom styling
  - Update `StoryCard` component to use the new prefix system

## 2.4.0

### Minor Changes

- [#360](https://github.com/repobuddy/storybook/pull/360) [`4b3a90d`](https://github.com/repobuddy/storybook/commit/4b3a90dcdb96c116e8094993c54203e672936965) Thanks [@unional](https://github.com/unional)! - Enhance `showDocSource` decorator.
  Add `showOriginalSource` option to `showDocSource` decorator to display original source code in a card.

- [#360](https://github.com/repobuddy/storybook/pull/360) [`f03cfe8`](https://github.com/repobuddy/storybook/commit/f03cfe80f879a797af43b59776dacd6712026211) Thanks [@unional](https://github.com/unional)! - Add `version:next` tag to tag badges configuration

## 2.3.0

### Minor Changes

- [#324](https://github.com/repobuddy/storybook/pull/324) [`a12377d`](https://github.com/repobuddy/storybook/commit/a12377d68a3c66bf2d9058c98ff8fdf568050011) Thanks [@unional](https://github.com/unional)! - Add `ExtendsStoryObj`, deprecate `ExtendStoryObj`.

  `ExtendsStoryObj` simplify type params, and improve extending `tags` if the extending `StoryObj` has predefined tag literals.

- [#324](https://github.com/repobuddy/storybook/pull/324) [`5d3b312`](https://github.com/repobuddy/storybook/commit/5d3b312e3a7f464391f64717216cad7b74002e22) Thanks [@unional](https://github.com/unional)! - Add `ExtendsMeta`, deprecate `ExtendMeta`.

  `ExtendsMeta` simplify type params, and improve extending `tags` if the extending `Meta` has predefined tag literals.

## 2.2.2

### Patch Changes

- [`b9e3883`](https://github.com/repobuddy/storybook/commit/b9e38834977c72b89cfd4003731b96f74c4e523d) Thanks [@unional](https://github.com/unional)! - fix `withStoryCard({ className: ({ status, defaultClassName }) => string })` to treat returning string as the final className string instead of merging with the `defaultClassName`.

  Remove `undefined` from the `status` type in the function. The `status` defaults to `info` so it will never be `undefined`.

## 2.2.1

### Patch Changes

- [`8f74138`](https://github.com/repobuddy/storybook/commit/8f7413890fd367996089ba5aa218a6c9db4d41c0) Thanks [@unional](https://github.com/unional)! - Add fallback for `crypto.randomUUID()`

## 2.2.0

### Minor Changes

- [`d2eff3b`](https://github.com/repobuddy/storybook/commit/d2eff3b2780ea3c3edd1d159f029a0167adf6035) Thanks [@unional](https://github.com/unional)! - Add `withStoryCard`

- [`677d72e`](https://github.com/repobuddy/storybook/commit/677d72e095fb81e653e914a1b6a9d2386c7c230b) Thanks [@unional](https://github.com/unional)! - Add `usecase` tag name literal.
  It does not have an associated badge, as that will make the side bar too busy.

## 2.1.2

### Patch Changes

- [`0de3ad5`](https://github.com/repobuddy/storybook/commit/0de3ad54b787ede457404ad113176c8c814197a4) Thanks [@unional](https://github.com/unional)! - Add `@storybook/addon-docs` as peer deps

## 2.1.1

### Patch Changes

- [`30176cc`](https://github.com/repobuddy/storybook/commit/30176cc3cfb7ed9917c0f9000b58c207d0afa3ec) Thanks [@unional](https://github.com/unional)! - External `react/jsx-runtime`.

## 2.1.0

### Minor Changes

- [#249](https://github.com/repobuddy/storybook/pull/249) [`4ee38b2`](https://github.com/repobuddy/storybook/commit/4ee38b270ca094940b149809b220180f205835a3) Thanks [@unional](https://github.com/unional)! - Convert to use `tsdown` instead of `unbuild`.
  `unbuild` leads to `React not found` error.

## 2.0.1

### Patch Changes

- [#242](https://github.com/repobuddy/storybook/pull/242) [`4453f23`](https://github.com/repobuddy/storybook/commit/4453f23127d2c70b4b482fc688d1f4d1cbc031c3) Thanks [@unional](https://github.com/unional)! - Fix import paths.

## 2.0.0

### Major Changes

- [#232](https://github.com/repobuddy/storybook/pull/232) [`1c20a4a`](https://github.com/repobuddy/storybook/commit/1c20a4a45a36a0611dcd1eed65fe0064575802f7) Thanks [@unional](https://github.com/unional)! - Update to support Storybook 10, `storybook-addon-tag-badges` v3, and `@storybook-community/storybook-dark-mode` v7.

### Minor Changes

- [#174](https://github.com/repobuddy/storybook/pull/174) [`9cbce4e`](https://github.com/repobuddy/storybook/commit/9cbce4e7c90c31b138c7ac3c49d5ec2b93cb7800) Thanks [@unional](https://github.com/unional)! - Replace `storybook-dark-mode2` with its successor `@storybook-community/storybook-dark-mode`.

- [#100](https://github.com/repobuddy/storybook/pull/100) [`d48b633`](https://github.com/repobuddy/storybook/commit/d48b63307b639e34c29587203e05e99d1ad3a1a4) Thanks [@unional](https://github.com/unional)! - Add `ExtendMeta` and `ExtendStoryObj`.

- [`e548eeb`](https://github.com/repobuddy/storybook/commit/e548eebed9d9aae6716b1c22826ba4bc01894822) - Remove `JSX.Element` support from `docs.description.story` and `docs.description.component` properties in `DocsParam` interface.

  Storybook does not support that when the story is rendered in the docs.

## 1.0.1

### Patch Changes

- [`ba1279d`](https://github.com/repobuddy/storybook/commit/ba1279d45c9640a76a42ab5868aba53a986ba7b1) Thanks [@unional](https://github.com/unional)! - Remove class manipulation for dark mode in `withDarkMode()`.
  It interferes with the class manipulation during `beforeEach` in `vitest.setup.ts`.

  Technically style manipulation has the same problem.
  Will address that in `storybook-dark-mode2` or in a future PR.

## 1.0.0

### Major Changes

- [`ccf3f20`](https://github.com/repobuddy/storybook/commit/ccf3f2063c74c71f15c9654d42c9fab5df8f64cc) Thanks [@unional](https://github.com/unional)! - Bump major version for Storybook 9 support.

  This allows `0.x` to continue adding features and with potential breaking changes.

### Minor Changes

- [#84](https://github.com/repobuddy/storybook/pull/84) [`94bb608`](https://github.com/repobuddy/storybook/commit/94bb60805f78b4211bc7ae0d04acdfbd4b041ef6) Thanks [@unional](https://github.com/unional)! - Replace `storybook-dark-mode` with `@storybook-community/storybook-dark-mode` which supports Storybook 9.

- [#84](https://github.com/repobuddy/storybook/pull/84) [`b429dfc`](https://github.com/repobuddy/storybook/commit/b429dfcc6cd97ed06052b8c1b62f8c8c9ad03fb4) Thanks [@unional](https://github.com/unional)! - Add `codePanel` to `defineDocsParam`

### Patch Changes

- [`4d91d37`](https://github.com/repobuddy/storybook/commit/4d91d37d95356f907a80a39756f9edbb149fccbb) Thanks [@unional](https://github.com/unional)! - Add missing augmented `Meta` type.

## 0.16.1

### Patch Changes

- [`df010be`](https://github.com/repobuddy/storybook/commit/df010be29ff132f150b85fb8b7e4b0ec4b3625bd) Thanks [@unional](https://github.com/unional)! - Move `TagNames` out to its own type

## 0.16.0

### Minor Changes

- [#79](https://github.com/repobuddy/storybook/pull/79) [`bb439b6`](https://github.com/repobuddy/storybook/commit/bb439b6a57687861fd86d8c4256938c882fb6a7b) Thanks [@unional](https://github.com/unional)! - Add augmented `StoryObj` withe better `tags` support.

## 0.15.0

### Minor Changes

- [`7f414f9`](https://github.com/repobuddy/storybook/commit/7f414f9cdf3a8b4b4e0597f01e946fdb1f4c79ee) Thanks [@unional](https://github.com/unional)! - Add `keyboardBadge`

## 0.14.0

### Minor Changes

- [#74](https://github.com/repobuddy/storybook/pull/74) [`a807ba3`](https://github.com/repobuddy/storybook/commit/a807ba345a3083933ae19791739e151440fd44df) Thanks [@unional](https://github.com/unional)! - Add `ShowHtml` component.

## 0.13.0

### Minor Changes

- [#69](https://github.com/repobuddy/storybook/pull/69) [`4686b79`](https://github.com/repobuddy/storybook/commit/4686b79085d2fc3f140fdf40529738cbfa3393f7) Thanks [@unional](https://github.com/unional)! - Add `internal` tag to hide stories from the sidebar during production build.

## 0.12.0

### Minor Changes

- [`d4d8127`](https://github.com/repobuddy/storybook/commit/d4d8127352b4d627b3327d6571d6b8957783a1c1) Thanks [@unional](https://github.com/unional)! - Add compose params support for `defineParameters()`.

## 0.11.3

### Patch Changes

- [`92c7ecd`](https://github.com/repobuddy/storybook/commit/92c7ecdf113fcb963d7f403500a5d4c22c613fa3) Thanks [@unional](https://github.com/unional)! - Allow `story` and `component` to be `JSX.Element` in `docs.description`.

## 0.11.2

### Patch Changes

- [`4165d96`](https://github.com/repobuddy/storybook/commit/4165d96095cd295a2f45172de55953c51f670196) Thanks [@unional](https://github.com/unional)! - Support multiple class names in `bodyClass` (i.e.: `bodyClass: 'class1 class2'`).

## 0.11.1

### Patch Changes

- [`2f6dd3c`](https://github.com/repobuddy/storybook/commit/2f6dd3c5b60c953fed60f6f1a2ff6163c19ff705) Thanks [@unional](https://github.com/unional)! - Add `dark` and `light` back to `DarkModeParam`.

## 0.11.0

### Minor Changes

- [`9e79310`](https://github.com/repobuddy/storybook/commit/9e79310daa04df40675d31d5425eace793f8323b) Thanks [@unional](https://github.com/unional)! - Add `propsBadge` to `tagBadges`.
  Rename `withStoryRoot` to `withDarMode`.
  Add `bodyClass` and `bodyStyle` to `withDarkMode`
  Use `darkMode` parameter in `withDarkMode`
  Add `darkStyle` and `lightStyle` to `DarkModeParam`

- [`0603417`](https://github.com/repobuddy/storybook/commit/0603417863f23c8317e62880dc5adefb6322ae82) Thanks [@unional](https://github.com/unional)! - Move `storybook-addon-tag-badges` export into `@repobuddy/storybook/storybook-addon-tag-badges` (breaking).

- [`415df7d`](https://github.com/repobuddy/storybook/commit/415df7df64cab8d95f7bc420b1379373d9ba927a) Thanks [@unional](https://github.com/unional)! - Hide `snapshot`, `unit`, and `integration` badges in the sidebar.

### Patch Changes

- [`b8a2fa6`](https://github.com/repobuddy/storybook/commit/b8a2fa632ce87c14903089c1a3a1c3f993db94e7) Thanks [@unional](https://github.com/unional)! - `createDarkModeDocsContainer` can specify only one theme.

## 0.10.0

### Minor Changes

- [#58](https://github.com/repobuddy/storybook/pull/58) [`3574cf5`](https://github.com/repobuddy/storybook/commit/3574cf57d44d005dd8302796dd9d5582a4d43b8f) Thanks [@unional](https://github.com/unional)! - Update `defineParameters` story to mention it cannot be used in `preview.ts`.
  Fix `storySort` to `options.storySort`.

  Remove `defineStorySort` as it cannot be used in `preview.ts`.

- [#58](https://github.com/repobuddy/storybook/pull/58) [`0c08476`](https://github.com/repobuddy/storybook/commit/0c0847643da6c1c03ce3021fdd4a50bf8af64dc2) Thanks [@unional](https://github.com/unional)! - Add `createDarkModeDocsContainer`, `defineDarkModeParam`.

- [#58](https://github.com/repobuddy/storybook/pull/58) [`3d73eaa`](https://github.com/repobuddy/storybook/commit/3d73eaac2e58d61e384dac845a164573cb9877e8) Thanks [@unional](https://github.com/unional)! - Add `withStoryRoot()`

### Patch Changes

- [#58](https://github.com/repobuddy/storybook/pull/58) [`6e96de2`](https://github.com/repobuddy/storybook/commit/6e96de253ad67e083efad09896cf879c4ea3c18f) Thanks [@unional](https://github.com/unional)! - Add `storybook-addon-tag-badges` as optional peer dependency.

## 0.9.4

### Patch Changes

- [`414b5d6`](https://github.com/repobuddy/storybook/commit/414b5d64857dd0522dbd034db6917629d3fe1ef3) - Adjusts badge priority.

## 0.9.3

### Patch Changes

- [`b046c09`](https://github.com/repobuddy/storybook/commit/b046c09f749d449c13e9a1491af905a48294f8a4) - Further limits the scope of the `editorBadge` to only show in story.
  Also lowers the priority of the `editorBadge`.

## 0.9.2

### Patch Changes

- [`0163a5c`](https://github.com/repobuddy/storybook/commit/0163a5ceb8bcbdbedf700430b60e52374d99e7a3) - Make emoji badges border transparent.

## 0.9.1

### Patch Changes

- [`2e5b345`](https://github.com/repobuddy/storybook/commit/2e5b34566273dec30bb448ee5ce2612949978c95) Thanks [@unional](https://github.com/unional)! - Narrow `snapshot` and `editor` display application.

## 0.9.0

### Minor Changes

- [#42](https://github.com/repobuddy/storybook/pull/42) [`a1fc0e4`](https://github.com/repobuddy/storybook/commit/a1fc0e42a65e5f2fcaed2f3413259812fc17badb) Thanks [@unional](https://github.com/unional)! - Export decorators in `@repobuddy/storybook/react` instead of `@repobuddy/storybook`.

  `@repobuddy/storybook` should not depend on ReactJS.

### Patch Changes

- [#42](https://github.com/repobuddy/storybook/pull/42) [`5433517`](https://github.com/repobuddy/storybook/commit/5433517d6e91e2fe5711dd25a280e15247db04a1) Thanks [@unional](https://github.com/unional)! - Update integration badge.

## 0.8.0

### Minor Changes

- [#38](https://github.com/repobuddy/storybook/pull/38) [`765ef16`](https://github.com/repobuddy/storybook/commit/765ef1692c5c1f7c033ea678ec519d5085eef66b) Thanks [@unional](https://github.com/unional)! - Export individual badges.

## 0.7.0

### Minor Changes

- [`87acf67`](https://github.com/repobuddy/storybook/commit/87acf67af7bd37e839b1d0f72a08fb9b98872bfb) Thanks [@unional](https://github.com/unional)! - Add `snapshot` badge

## 0.6.1

### Patch Changes

- [`5a3eff2`](https://github.com/repobuddy/storybook/commit/5a3eff2e6a7ff87c5aef9b5f2269b2958e7f9e1f) Thanks [@unional](https://github.com/unional)! - Updated docs and limits `editor` tag to story.

## 0.6.0

### Minor Changes

- [`b1ce406`](https://github.com/repobuddy/storybook/commit/b1ce4062c78d6e3da4398f7dc357eeb7e4d63144) Thanks [@unional](https://github.com/unional)! - Add `editor` badge

## 0.5.0

### Minor Changes

- [`9ae11fc`](https://github.com/repobuddy/storybook/commit/9ae11fc35a993f14749e8908e2766c25e098d694) Thanks [@unional](https://github.com/unional)! - Depends on `@repobuddy/test` (instead of `@repobuddy/vitest`) and re-exports it.

## 0.4.0

### Minor Changes

- [#29](https://github.com/repobuddy/storybook/pull/29) [`2f3d9f9`](https://github.com/repobuddy/storybook/commit/2f3d9f98ce16a53cf41d7c088d861efebe8f2cb1) Thanks [@unional](https://github.com/unional)! - Add `whenRunningInTest()`

## 0.3.1

### Patch Changes

- [`956f983`](https://github.com/repobuddy/storybook/commit/956f98379086371c0c6f4982e711299302078bc2) Thanks [@unional](https://github.com/unional)! - Add missing `docs` and `viewport` support to `defineParameters()`.

## 0.3.0

### Minor Changes

- [`d39642c`](https://github.com/repobuddy/storybook/commit/d39642c8ad95be9bf62178b1c71af9c987a23764) Thanks [@unional](https://github.com/unional)! - Add `showDocSource` and `defineBackgroundsParam`
  s

### Patch Changes

- [`ee132b9`](https://github.com/repobuddy/storybook/commit/ee132b9aa6e1c15ccac3680d0348b192147fbc1f) Thanks [@unional](https://github.com/unional)! - Allow free form

## 0.2.0

### Minor Changes

- [`2ab6d48`](https://github.com/repobuddy/storybook/commit/2ab6d4896a547939f3d7eb78d793975bcadc4fec) Thanks [@unional](https://github.com/unional)! - Add `defineDocsParam()`

- [`a01f913`](https://github.com/repobuddy/storybook/commit/a01f913bbd90e4dc485e1f09b5bef31488412d8c) Thanks [@unional](https://github.com/unional)! - Add `defineViewportParam()`

- [`a457c22`](https://github.com/repobuddy/storybook/commit/a457c228fd22627d5433d31e2adf1bc453428c8a) Thanks [@unional](https://github.com/unional)! - Add `brandTitle()`

## 0.1.0

### Minor Changes

- [`c0f4e6d`](https://github.com/repobuddy/storybook/commit/c0f4e6d08fe4ccbe386f09d24afc9090f6c030f5) Thanks [@unional](https://github.com/unional)! - Initial release
