import{j as t,s as e,d as o}from"./iframe-BEZL4eC4.js";import{d as s}from"./dedent-C8rexWvS.js";import"./preload-helper-PPVm8Dsz.js";const y={title:"types/ExtendStoryObj",tags:["new","version:1.1"],decorators:[e()],render:()=>t.jsx(t.Fragment,{})},r={parameters:{...o({source:{code:s`
                // types.ts
                import type { ExtendStoryObj } from '@repobuddy/storybook'
                import type { StoryObj as S } from '@storybook/your-framework'

                // create a generic StoryObj type for your project
                export type StoryObj<TMetaOrCmpOrArgs = Args> = ExtendStoryObj<
                    TMetaOrCmpOrArgs,
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
                `}})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...defineDocsParam({
      source: {
        code: dedent\`
                // types.ts
                import type { ExtendStoryObj } from '@repobuddy/storybook'
                import type { StoryObj as S } from '@storybook/your-framework'

                // create a generic StoryObj type for your project
                export type StoryObj<TMetaOrCmpOrArgs = Args> = ExtendStoryObj<
                    TMetaOrCmpOrArgs,
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
    })
  }
}`,...r.parameters?.docs?.source}}};const m=["TypicalUsage"];export{r as TypicalUsage,m as __namedExportsOrder,y as default};
