import{j as e}from"./iframe-B7G5b8mu.js";import{d as r}from"./dedent-BuYMbVyj.js";import{s as t}from"./show_doc_source-k9WIzkR5.js";import{d as n}from"./define_docs_param-lmgaBKCF.js";import"./preload-helper-PPVm8Dsz.js";const c={title:"storybook-addon-tag-badges/internalBadge",tags:["var","version:0.13"],render:()=>e.jsx(e.Fragment,{})},o={tags:["internal"],parameters:n({source:{code:r`
            // Use this badge to hide stories from the sidebar during production build
            export const YourStory = {
                tags: ['internal'],
            }

            // To set this up, you need to add the following to your .storybook/main.ts file:
            export default {
                tags: {
                    internal: {
                        excludeFromSidebar: process.env.NODE_ENV === 'production'
                    }
                }
            }

            // And build your storybook with the following command:
            NODE_ENV=production storybook build
            `}}),decorators:[t()],render:()=>e.jsx(e.Fragment,{})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['internal'],
  parameters: defineDocsParam({
    source: {
      code: dedent\`
            // Use this badge to hide stories from the sidebar during production build
            export const YourStory = {
                tags: ['internal'],
            }

            // To set this up, you need to add the following to your .storybook/main.ts file:
            export default {
                tags: {
                    internal: {
                        excludeFromSidebar: process.env.NODE_ENV === 'production'
                    }
                }
            }

            // And build your storybook with the following command:
            NODE_ENV=production storybook build
            \`
    }
  }),
  decorators: [showDocSource()],
  render: () => <></>
}`,...o.parameters?.docs?.source}}};const l=["InternalBadge"];export{o as InternalBadge,l as __namedExportsOrder,c as default};
