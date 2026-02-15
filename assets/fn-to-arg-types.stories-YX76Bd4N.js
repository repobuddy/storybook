import{j as t}from"./iframe-Sqf8-kFk.js";import{d as o}from"./dedent-BuYMbVyj.js";import{s as r}from"./show_doc_source-xcJozGdz.js";import{w as s}from"./with_story_card-BdgcRqt2.js";import{d as a}from"./define_docs_param-lmgaBKCF.js";import{t as e}from"./test_type-B2D-ob_P.js";import"./preload-helper-PPVm8Dsz.js";const b={title:"arg-types/FnToArgTypes",tags:["type","version:2.6"],decorators:[r()],render:()=>t.jsx(t.Fragment,{})},n={parameters:a({source:{code:o`
                // test-subject.ts
                export function testSubject(a: number, b: string) { ... }

                // test-subject.stories.tsx
                import type { Meta } from '@repobuddy/storybook/storybook-addon-tag-badges'
                import type { FnToArgTypes } from '@repobuddy/storybook'
                import { testSubject } from './test-subject.ts'

                const meta: Meta<FnToArgTypes<typeof testSubject, ['a', 'b']>> = { ... }
                export default meta
                `}}),decorators:[s({title:"FnToArgTypes",content:t.jsxs("p",{children:[t.jsx("code",{children:"FnToArgTypes<F, Names>"})," converts a function's parameter types to ",t.jsx("code",{children:"Args"})," type for Storybook."]})})],async play(){e.equal(!0),e.equal(!0),e.equal(!0),e.equal(!0),e.equal(!0),e.equal(!0)}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    source: {
      code: dedent\`
                // test-subject.ts
                export function testSubject(a: number, b: string) { ... }

                // test-subject.stories.tsx
                import type { Meta } from '@repobuddy/storybook/storybook-addon-tag-badges'
                import type { FnToArgTypes } from '@repobuddy/storybook'
                import { testSubject } from './test-subject.ts'

                const meta: Meta<FnToArgTypes<typeof testSubject, ['a', 'b']>> = { ... }
                export default meta
                \`
    }
  }),
  decorators: [withStoryCard({
    title: 'FnToArgTypes',
    content: <p>
                    <code>FnToArgTypes&lt;F, Names&gt;</code> converts a function's parameter types to <code>Args</code> type for
                    Storybook.
                </p>
  })],
  async play() {
    testType.equal<FnToArgTypes<() => void>, unknown>(true);
    testType.equal<keyof FnToArgTypes<() => void>, never>(true);
    const _m0: Meta<FnToArgTypes<() => void, []>> = {
      argTypes: {}
    };
    const _m0X: Meta<FnToArgTypes<() => void>> = {
      argTypes: {
        x: {
          control: 'text'
        }
      }
    };
    testType.equal<FnToArgTypes<(a: number) => void, ['x']>, {
      x: number;
    }>(true);
    const _m1: Meta<FnToArgTypes<(a: number) => void>> = {
      argTypes: {
        x: {
          control: 'number'
        }
      }
    };
    const _m1X: Meta<FnToArgTypes<(a: number) => void, ['x']>> = {
      argTypes: {
        x: {
          control: 'number'
        },
        // @ts-expect-error
        y: {
          control: 'text'
        }
      }
    };
    testType.equal<FnToArgTypes<(a: number, b: string) => void, ['x', 'y']>, {
      x: number;
      y: string;
    }>(true);
    testType.equal<FnToArgTypes<(a: number, b?: string) => void, ['x', 'y']>, {
      x: number;
      y: string | undefined;
    }>(true);
    testType.equal<FnToArgTypes<(a: number, b: string, c: boolean) => void, ['x', 'y', 'z']>, {
      x: number;
      y: string;
      z: boolean;
    }>(true);
    const _m2: Meta<FnToArgTypes<(a: number, b: string, c: boolean) => void, ['x', 'y', 'z']>> = {
      argTypes: {
        x: {
          control: 'number'
        },
        y: {
          control: 'text'
        },
        z: {
          control: 'boolean'
        },
        // @ts-expect-error
        p: {
          control: 'text'
        }
      }
    };
  }
}`,...n.parameters?.docs?.source}}};const T=["BasicUsage"];export{n as BasicUsage,T as __namedExportsOrder,b as default};
