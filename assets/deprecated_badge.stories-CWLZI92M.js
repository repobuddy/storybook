import{j as o}from"./iframe-D79YmNx6.js";import{d as r}from"./dedent-BuYMbVyj.js";import{s as t}from"./show_doc_source-WV73PjDX.js";import{w as s}from"./with_story_card-Bz2LSKQ-.js";import"./preload-helper-PPVm8Dsz.js";const i={title:"storybook-addon-tag-badges/deprecatedBadge",tags:["var","!snapshot","version:0.11"],render:()=>o.jsx(o.Fragment,{})},e={tags:["deprecated"],decorators:[s({content:o.jsxs("p",{children:["Components or props that should be avoided in new code. In the sidebar it appears as ",o.jsx("code",{children:"🗑️"}),"."]})}),t({source:r`export const YourStory = {
                tags: ['deprecated'],
                render: () => <YourComponent />
            }`})]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  tags: ['deprecated'],
  decorators: [withStoryCard({
    content: <p>
                    Components or props that should be avoided in new code. In the sidebar it appears as <code>🗑️</code>.
                </p>
  }), showDocSource({
    source: dedent\`export const YourStory = {
                tags: ['deprecated'],
                render: () => <YourComponent />
            }\`
  })]
}`,...e.parameters?.docs?.source}}};const m=["DeprecatedBadge"];export{e as DeprecatedBadge,m as __namedExportsOrder,i as default};
