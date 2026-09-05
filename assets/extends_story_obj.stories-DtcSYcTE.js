import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-B066xLLY.js";import{n,r}from"./iframe-DjofFbqv.js";import{n as i,t as a}from"./dedent-DQaCLeUO.js";import{n as o,t as s}from"./test_type-tZaYxgYg.js";import{O as c,_ as l,t as u}from"./src-Cjk9gBKT.js";var d,f,p,m;function h(){return(h=e((()=>{i(),s(),u(),n(),d=t(),f=r.meta({title:`types/ExtendStoryObj`,tags:[`type`,`!snapshot`,`version:2.4`],decorators:[c()],render:()=>(0,d.jsx)(d.Fragment,{})}),p=f.story({parameters:l({source:{code:a`
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
                `}}),async play(){o.equal(!0),o.equal(!0)}}),m=[`ExtendsTagLiterals`],p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...p.input.parameters?.docs?.source}}}})))()}h();export{p as ExtendsTagLiterals,m as __namedExportsOrder};