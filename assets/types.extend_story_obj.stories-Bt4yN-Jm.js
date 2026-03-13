import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-6sF1Ejqi.js";import{n,t as r}from"./dedent-C7gAFWmM.js";import{d as i,h as a,t as o}from"./src-xVZ3M_hi.js";var s,c,l,u;e((()=>{n(),o(),s=t(),c={title:`types/ExtendStoryObj`,tags:[`type`,`!snapshot`,`version:1.1`],decorators:[a()],render:()=>(0,s.jsx)(s.Fragment,{})},l={parameters:{...i({source:{code:r`
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