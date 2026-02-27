import{j as t}from"./iframe-B4Fl_E7C.js";import{d as o}from"./dedent-BuYMbVyj.js";import"./show_source-D_hPi-DF.js";import{s as a}from"./show_doc_source-DTxl7w14.js";import{d as s}from"./define_docs_param-lmgaBKCF.js";import{t as r}from"./test_type-B2D-ob_P.js";import"./preload-helper-PPVm8Dsz.js";const u={title:"types/ExtendMeta",tags:["type","!snapshot","version:2.4"],decorators:[a()],render:()=>t.jsx(t.Fragment,{})},e={parameters:s({source:{code:o`
                // types.ts
                import type { ExtendMeta } from '@repobuddy/storybook'
                import type { Args, Meta as M } from '@storybook/your-framework'

                // create a generic Meta type for your project
                export type Meta<TCmpOrArgs = Args> = ExtendMeta<
                    M<TCmpOrArgs>,
                    { tag: 'new' | 'beta' | 'deprecated' }
                >

                // component.stories.tsx
                import type { Meta } from './types'

                const meta: Meta<typeof Component> = {
                    tags: ['new'], // <--- gets auto-completion there
                    // ...
                }

                export default meta
                `}}),async play(){r.equal(!0),r.equal(!0)}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    source: {
      code: dedent\`
                // types.ts
                import type { ExtendMeta } from '@repobuddy/storybook'
                import type { Args, Meta as M } from '@storybook/your-framework'

                // create a generic Meta type for your project
                export type Meta<TCmpOrArgs = Args> = ExtendMeta<
                    M<TCmpOrArgs>,
                    { tag: 'new' | 'beta' | 'deprecated' }
                >

                // component.stories.tsx
                import type { Meta } from './types'

                const meta: Meta<typeof Component> = {
                    tags: ['new'], // <--- gets auto-completion there
                    // ...
                }

                export default meta
                \`
    }
  }),
  async play() {
    type MyMeta<TCmpOrArgs = Args> = ExtendsMeta<Meta<TCmpOrArgs>, {
      tag: 'custom';
    }>;
    const meta: MyMeta<typeof Component> = {
      title: '',
      tags: ['custom']
    };
    testType.equal<ExtractStringLiterals<NonNullable<(typeof meta)['tags']>[0]>, TagNames | 'custom'>(true);
    type YourMeta<TCmpOrArgs = Args> = ExtendsMeta<MyMeta<TCmpOrArgs>, {
      tag: 'one-more';
    }>;
    testType.equal<ExtractStringLiterals<NonNullable<YourMeta['tags']>[0]>, TagNames | 'custom' | 'one-more'>(true);
  }
}`,...e.parameters?.docs?.source}}};const i=["ExtendsTagLiterals"];export{e as ExtendsTagLiterals,i as __namedExportsOrder,u as default};
