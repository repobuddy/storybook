import{j as e}from"./iframe-DpHjNuS4.js";import{s,w as o}from"./with_story_card-flwRQf2f.js";import{d as a}from"./define_docs_param-lmgaBKCF.js";import{d as n}from"./dedent-BuYMbVyj.js";import{t}from"./test_type-B2D-ob_P.js";import"./preload-helper-PPVm8Dsz.js";const i={title:"arg-types/ParamsToArgTypes",tags:["version:next"],decorators:[s()],render:()=>e.jsx(e.Fragment,{})},r={parameters:a({source:{code:n`
                // test-subject.ts
                export function testSubject(a: number, b: string) { ... }

                // test-subject.stories.tsx
                import type { Meta } from '@repobuddy/storybook/storybook-addon-tag-badges'
                import type { ParamsToArgTypes } from '@repobuddy/storybook'
                import { testSubject } from './test-subject.ts'

                const meta: Meta<ParamsToArgTypes<typeof testSubject, ['a', 'b']>> = { ... }
                export default meta
                `}}),decorators:[o({title:"ParamsToArgTypes",content:e.jsxs("p",{children:[e.jsx("code",{children:"ParamsToArgTypes<F, Names>"})," converts a function's parameter types to ",e.jsx("code",{children:"Args"})," type for Storybook."]})})],async play(){t.equal(!0),t.equal(!0),t.equal(!0),t.equal(!0)}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    source: {
      code: dedent\`
                // test-subject.ts
                export function testSubject(a: number, b: string) { ... }

                // test-subject.stories.tsx
                import type { Meta } from '@repobuddy/storybook/storybook-addon-tag-badges'
                import type { ParamsToArgTypes } from '@repobuddy/storybook'
                import { testSubject } from './test-subject.ts'

                const meta: Meta<ParamsToArgTypes<typeof testSubject, ['a', 'b']>> = { ... }
                export default meta
                \`
    }
  }),
  decorators: [withStoryCard({
    title: 'ParamsToArgTypes',
    content: <p>
                    <code>ParamsToArgTypes&lt;F, Names&gt;</code> converts a function's parameter types to <code>Args</code> type
                    for Storybook.
                </p>
  })],
  async play() {
    testType.equal<ParamsToArgTypes<(a: number) => void, ['x']>, {
      x: number;
    }>(true);
    testType.equal<ParamsToArgTypes<(a: number, b: string) => void, ['x', 'y']>, {
      x: number;
      y: string;
    }>(true);
    testType.equal<ParamsToArgTypes<(a: number, b?: string) => void, ['x', 'y']>, {
      x: number;
      y: string | undefined;
    }>(true);
    testType.equal<ParamsToArgTypes<(a: number, b: string, c: boolean) => void, ['x', 'y', 'z']>, {
      x: number;
      y: string;
      z: boolean;
    }>(true);
  }
}`,...r.parameters?.docs?.source}}};const b=["BasicUsage"];export{r as BasicUsage,b as __namedExportsOrder,i as default};
