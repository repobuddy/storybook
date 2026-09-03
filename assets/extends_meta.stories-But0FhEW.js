import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-yBdeBQmp.js";import{n,r}from"./iframe-LciDwcCM.js";import{n as i,t as a}from"./dedent-DQaCLeUO.js";import{n as o,t as s}from"./test_type-tZaYxgYg.js";import{O as c,_ as l,t as u}from"./src-Dhw3iRbJ.js";var d,f,p,m;function h(){return(h=e((()=>{i(),s(),u(),n(),d=t(),f=r.meta({title:`types/ExtendMeta`,tags:[`type`,`!snapshot`,`version:2.4`],decorators:[c()],render:()=>(0,d.jsx)(d.Fragment,{})}),p=f.story({parameters:l({source:{code:a`
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
                `}}),async play(){o.equal(!0),o.equal(!0)}}),p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...p.input.parameters?.docs?.source}}},m=[`ExtendsTagLiterals`]})))()}h();export{p as ExtendsTagLiterals,m as __namedExportsOrder};