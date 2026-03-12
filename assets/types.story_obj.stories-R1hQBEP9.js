import"./components-DmejZTLj.js";import"./react-K5peCFg_.js";import"./react-dom-CYc0L8kE.js";import{t as e}from"./jsx-runtime-BUC2lftT.js";import{t}from"./dedent-rZS-CQtP.js";import{l as n,m as r}from"./src-CPfUkyQY.js";var i=e(),a={title:`storybook-addon-tag-badges/types/StoryObj`,tags:[`type`,`!snapshot`,`version:1.0`],decorators:[r()],render:()=>(0,i.jsx)(i.Fragment,{})},o={parameters:{...n({source:{code:t`
                // component.stories.tsx
                import type { StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'

                type Story = StoryObj<typeof Component>

                const MyStory: Story = {
                    // ...
                }
                `}})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...defineDocsParam({
      source: {
        code: dedent\`
                // component.stories.tsx
                import type { StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'

                type Story = StoryObj<typeof Component>

                const MyStory: Story = {
                    // ...
                }
                \`
      }
    })
  }
}`,...o.parameters?.docs?.source}}};var s=[`TypicalUsage`];export{o as TypicalUsage,s as __namedExportsOrder,a as default};