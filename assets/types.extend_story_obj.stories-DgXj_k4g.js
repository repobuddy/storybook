import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-yBdeBQmp.js";import{n,r}from"./iframe-D1vhypr4.js";import{n as i,t as a}from"./dedent-DQaCLeUO.js";import{O as o,_ as s,t as c}from"./src-Dhw3iRbJ.js";var l,u,d,f;function p(){return(p=e((()=>{i(),c(),n(),l=t(),u=r.meta({title:`types/ExtendStoryObj`,tags:[`type`,`!snapshot`,`version:1.1`],decorators:[o()],render:()=>(0,l.jsx)(l.Fragment,{})}),d=u.story({parameters:{...s({source:{code:a`
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
                `}})}}),d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...d.input.parameters?.docs?.source}}},f=[`TypicalUsage`]})))()}p();export{d as TypicalUsage,f as __namedExportsOrder};