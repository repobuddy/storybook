import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-6sF1Ejqi.js";import{n,t as r}from"./esm-U4jNP91U.js";import{n as i,t as a}from"./dedent-r2SG9fgm.js";import{d as o,h as s,t as c}from"./src-B1BCb3C2.js";var l,u,d,f;e((()=>{i(),r(),c(),l=t(),u={title:`types/ExtendMeta`,tags:[`type`,`!snapshot`,`version:2.4`],decorators:[s()],render:()=>(0,l.jsx)(l.Fragment,{})},d={parameters:o({source:{code:a`
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
                `}}),async play(){n.equal(!0),n.equal(!0)}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f=[`ExtendsTagLiterals`]}))();export{d as ExtendsTagLiterals,f as __namedExportsOrder,u as default};