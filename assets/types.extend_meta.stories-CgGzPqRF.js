import{j as t,s as r,d as o}from"./iframe-BAM9uuYf.js";import{d as a}from"./dedent-C8rexWvS.js";import"./preload-helper-PPVm8Dsz.js";const m={title:"types/ExtendMeta",tags:["new","version:1.1"],decorators:[r()],render:()=>t.jsx(t.Fragment,{})},e={name:"TypicalUsage",parameters:{...o({source:{code:a`
                // types.ts
                import type { ExtendMeta } from '@repobuddy/storybook'
                import type { Args, Meta as M } from '@storybook/your-framework'

                // create a generic Meta type for your project
                export type Meta<TCmpOrArgs = Args> = ExtendMeta<
                    TCmpOrArgs,
                    M<TCmpOrArgs>,
                    { tag: 'new' | 'beta' | 'deprecated' }
                >

                // component.stories.tsx
                import type { Meta } from './types'

                const meta: Meta<typeof Component> = {
                    tags: ['new'], // <--- gets auto-completion there
                    // ...
                }

                export default meta
                `}})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'TypicalUsage',
  parameters: {
    ...defineDocsParam({
      source: {
        code: dedent\`
                // types.ts
                import type { ExtendMeta } from '@repobuddy/storybook'
                import type { Args, Meta as M } from '@storybook/your-framework'

                // create a generic Meta type for your project
                export type Meta<TCmpOrArgs = Args> = ExtendMeta<
                    TCmpOrArgs,
                    M<TCmpOrArgs>,
                    { tag: 'new' | 'beta' | 'deprecated' }
                >

                // component.stories.tsx
                import type { Meta } from './types'

                const meta: Meta<typeof Component> = {
                    tags: ['new'], // <--- gets auto-completion there
                    // ...
                }

                export default meta
                \`
      }
    })
  }
}`,...e.parameters?.docs?.source}}};const c=["TypicalUsage"];export{e as TypicalUsage,c as __namedExportsOrder,m as default};
