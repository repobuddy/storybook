import{j as t}from"./iframe-EXfgSe8t.js";import{d as a}from"./dedent-BuYMbVyj.js";import{s as o}from"./with_story_card-Rxr-9I5r.js";import{d as n}from"./define_docs_param-lmgaBKCF.js";import{t as r}from"./test_type-B2D-ob_P.js";import"./preload-helper-PPVm8Dsz.js";const g={title:"types/ExtendMeta",tags:["new","version:2.4"],decorators:[o()],render:()=>t.jsx(t.Fragment,{})},e={parameters:n({source:{code:a`
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
      tag: 'new' | 'beta' | 'deprecated';
    }>;
    const meta: MyMeta<typeof Component> = {
      title: '',
      tags: ['new', 'beta', 'deprecated']
    };
    testType.equal<ExtractStringLiterals<NonNullable<(typeof meta)['tags']>[0]>, 'new' | 'beta' | 'deprecated'>(true);
    type YourMeta<TCmpOrArgs = Args> = ExtendsMeta<MyMeta<TCmpOrArgs>, {
      tag: 'one-more';
    }>;
    testType.equal<ExtractStringLiterals<NonNullable<YourMeta['tags']>[0]>, 'new' | 'beta' | 'deprecated' | 'one-more'>(true);
  }
}`,...e.parameters?.docs?.source}}};const i=["ExtendsTagLiterals"];export{e as ExtendsTagLiterals,i as __namedExportsOrder,g as default};
