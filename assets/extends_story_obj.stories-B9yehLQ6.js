import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./dedent-DQaCLeUO.js";import{n as i,t as a}from"./test_type-tZaYxgYg.js";import{O as o,_ as s,t as c}from"./src-D21r-Siz.js";var l,u,d,f;function p(){return(p=e((()=>{n(),a(),c(),l=t(),u={title:`types/ExtendStoryObj`,tags:[`type`,`!snapshot`,`version:2.4`],decorators:[o()],render:()=>(0,l.jsx)(l.Fragment,{})},d={parameters:s({source:{code:r`
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
                `}}),async play(){i.equal(!0),i.equal(!0)}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f=[`ExtendsTagLiterals`]})))()}p();export{d as ExtendsTagLiterals,f as __namedExportsOrder,u as default};