import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./dedent-DQaCLeUO.js";import{n as i,t as a}from"./test_type-tZaYxgYg.js";import{O as o,_ as s,t as c}from"./src-D21r-Siz.js";var l,u,d,f;function p(){return(p=e((()=>{n(),a(),c(),l=t(),u={title:`types/ExtendMeta`,tags:[`type`,`!snapshot`,`version:2.4`],decorators:[o()],render:()=>(0,l.jsx)(l.Fragment,{})},d={parameters:s({source:{code:r`
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
                `}}),async play(){i.equal(!0),i.equal(!0)}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f=[`ExtendsTagLiterals`]})))()}p();export{d as ExtendsTagLiterals,f as __namedExportsOrder,u as default};