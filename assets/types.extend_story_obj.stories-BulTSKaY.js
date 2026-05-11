import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-DC6t-S6Q.js";import{i as n,m as r,v as i}from"./iframe-BsHda9nq.js";import{n as a,t as o}from"./dedent-DU6uki2e.js";var s,c,l,u;e((()=>{a(),n(),s=t(),c={title:`types/ExtendStoryObj`,tags:[`type`,`!snapshot`,`version:1.1`],decorators:[i()],render:()=>(0,s.jsx)(s.Fragment,{})},l={parameters:{...r({source:{code:o`
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
                `}})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u=[`TypicalUsage`]}))();export{l as TypicalUsage,u as __namedExportsOrder,c as default};