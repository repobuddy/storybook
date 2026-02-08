import{j as e}from"./iframe-C5M8tZ5r.js";import{d as o}from"./dedent-BuYMbVyj.js";import{s as n}from"./show_doc_source-DCeVTN9-.js";import{d as s}from"./define_docs_param-lmgaBKCF.js";import{t as r}from"./test_type-B2D-ob_P.js";import"./preload-helper-PPVm8Dsz.js";const b={title:"types/ExtendStoryObj",tags:["new","version:2.4"],decorators:[n()],render:()=>e.jsx(e.Fragment,{})},t={parameters:s({source:{code:o`
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
                `}}),async play(){r.equal(!0),r.equal(!0)}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const S=["ExtendsTagLiterals"];export{t as ExtendsTagLiterals,S as __namedExportsOrder,b as default};
