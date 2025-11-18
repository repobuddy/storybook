import{j as t,s as e,d as r}from"./iframe-CoPqPLz4.js";import{d as s}from"./dedent-C8rexWvS.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"storybook-addon-tag-badges/types/StoryObj",tags:["new","version:1.0"],decorators:[e()],render:()=>t.jsx(t.Fragment,{})},o={parameters:{...r({source:{code:s`
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
}`,...o.parameters?.docs?.source}}};const y=["TypicalUsage"];export{o as TypicalUsage,y as __namedExportsOrder,p as default};
