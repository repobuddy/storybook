import{j as t}from"./iframe-BFuxzFTn.js";import{d as r}from"./dedent-BuYMbVyj.js";import"./show_source-Dp2YpilM.js";import{s as e}from"./show_doc_source-CrRgjBUB.js";import{d as s}from"./define_docs_param-lmgaBKCF.js";import"./preload-helper-PPVm8Dsz.js";const c={title:"storybook-addon-tag-badges/types/StoryObj",tags:["type","!snapshot","version:1.0"],decorators:[e()],render:()=>t.jsx(t.Fragment,{})},o={parameters:{...s({source:{code:r`
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
}`,...o.parameters?.docs?.source}}};const i=["TypicalUsage"];export{o as TypicalUsage,i as __namedExportsOrder,c as default};
