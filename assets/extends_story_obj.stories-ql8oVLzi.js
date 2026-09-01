import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-yBdeBQmp.js";import{n,t as r}from"./test_type-tZaYxgYg.js";import{n as i,r as a}from"./iframe-D1vhypr4.js";import{n as o,t as s}from"./dedent-DQaCLeUO.js";import{O as c,_ as l,t as u}from"./src-Dhw3iRbJ.js";var d,f,p,m;function h(){return(h=e((()=>{o(),r(),u(),i(),d=t(),f=a.meta({title:`types/ExtendStoryObj`,tags:[`type`,`!snapshot`,`version:2.4`],decorators:[c()],render:()=>(0,d.jsx)(d.Fragment,{})}),p=f.story({parameters:l({source:{code:s`
                // types.ts
                import type { ExtendsStoryObj } from '@repobuddy/storybook'
                import type { Args, StoryObj as S } from '@storybook/your-framework'

                // create a generic StoryObj type for your project
                export type StoryObj<TMetaOrCmpOrArgs = Args> = ExtendsStoryObj<
                    S<TMetaOrCmpOrArgs>,
                    { tag: 'new' | 'beta' | 'deprecated' }
                >

                // component.stories.tsx
                import type { StoryObj } from './types'

                type Story = StoryObj<typeof Component>

                const MyStory: Story = {
                    tags: ['new'], // <--- gets auto-completion there
                    // ...
                }
                `}}),async play(){n.equal(!0),n.equal(!0)}}),p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
  parameters: defineDocsParam({
    source: {
      code: dedent\`
                // types.ts
                import type { ExtendsStoryObj } from '@repobuddy/storybook'
                import type { Args, StoryObj as S } from '@storybook/your-framework'

                // create a generic StoryObj type for your project
                export type StoryObj<TMetaOrCmpOrArgs = Args> = ExtendsStoryObj<
                    S<TMetaOrCmpOrArgs>,
                    { tag: 'new' | 'beta' | 'deprecated' }
                >

                // component.stories.tsx
                import type { StoryObj } from './types'

                type Story = StoryObj<typeof Component>

                const MyStory: Story = {
                    tags: ['new'], // <--- gets auto-completion there
                    // ...
                }
                \`
    }
  }),
  async play() {
    type MyStoryObj<TCmpOrArgs = Args> = ExtendsStoryObj<StoryObj<TCmpOrArgs>, {
      tag: 'new' | 'beta' | 'deprecated';
    }>;
    const story: MyStoryObj<typeof Component> = {
      tags: ['new', 'beta', 'deprecated']
    };
    testType.equal<ExtractStringLiterals<NonNullable<(typeof story)['tags']>[0]>, 'new' | 'beta' | 'deprecated'>(true);
    type YourStoryObj<TCmpOrArgs = Args> = ExtendsStoryObj<MyStoryObj<TCmpOrArgs>, {
      tag: 'one-more';
    }>;
    testType.equal<ExtractStringLiterals<NonNullable<YourStoryObj['tags']>[0]>, 'new' | 'beta' | 'deprecated' | 'one-more'>(true);
  }
})`,...p.input.parameters?.docs?.source}}},m=[`ExtendsTagLiterals`]})))()}h();export{p as ExtendsTagLiterals,m as __namedExportsOrder};