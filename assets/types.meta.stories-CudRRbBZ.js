import{j as o,s as t,d as a}from"./iframe-BAM9uuYf.js";import{d as s}from"./dedent-C8rexWvS.js";import"./preload-helper-PPVm8Dsz.js";const m={title:"storybook-addon-tag-badges/types/Meta",tags:["new","version:1.0"],decorators:[t()],render:()=>o.jsx(o.Fragment,{})},e={name:"TypicalUsage",parameters:{...a({source:{code:s`
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
}`,...e.parameters?.docs?.source}}};const p=["TypicalUsage"];export{e as TypicalUsage,p as __namedExportsOrder,m as default};
