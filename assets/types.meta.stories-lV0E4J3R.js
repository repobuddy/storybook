import{j as o}from"./iframe-BzEl4sFM.js";import{d as t}from"./dedent-BuYMbVyj.js";import{s as a}from"./show_doc_source-DsQA72oN.js";import{d as r}from"./define_docs_param-lmgaBKCF.js";import"./preload-helper-PPVm8Dsz.js";const c={title:"storybook-addon-tag-badges/types/Meta",tags:["type","version:1.0"],decorators:[a()],render:()=>o.jsx(o.Fragment,{})},e={name:"TypicalUsage",parameters:{...r({source:{code:t`
                // component.stories.tsx
                import type { Meta } from '@repobuddy/storybook/storybook-addon-tag-badges'

                const meta: Meta<typeof Component> = {
                    // ...
                }

                export default meta
                `}})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'TypicalUsage',
  parameters: {
    ...defineDocsParam({
      source: {
        code: dedent\`
                // component.stories.tsx
                import type { Meta } from '@repobuddy/storybook/storybook-addon-tag-badges'

                const meta: Meta<typeof Component> = {
                    // ...
                }

                export default meta
                \`
      }
    })
  }
}`,...e.parameters?.docs?.source}}};const i=["TypicalUsage"];export{e as TypicalUsage,i as __namedExportsOrder,c as default};
