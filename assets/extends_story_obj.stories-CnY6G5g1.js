import{i as e}from"./preload-helper-Cs4UwXAW.js";import{n as t,t as n}from"./esm-kPNa59Jb.js";import{lt as r}from"./iframe-cIlh6n6x.js";import{n as i,t as a}from"./dedent-DwYWIg5g.js";import{d as o,g as s,t as c}from"./src-BqlPNXF8.js";var l,u,d,f;e((()=>{i(),n(),c(),l=r(),u={title:`types/ExtendStoryObj`,tags:[`type`,`!snapshot`,`version:2.4`],decorators:[s()],render:()=>(0,l.jsx)(l.Fragment,{})},d={parameters:o({source:{code:a`
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
                `}}),async play(){t.equal(!0),t.equal(!0)}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f=[`ExtendsTagLiterals`]}))();export{d as ExtendsTagLiterals,f as __namedExportsOrder,u as default};