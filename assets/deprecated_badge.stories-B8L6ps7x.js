import{j as r}from"./iframe-CPpg16TU.js";import{d as o}from"./dedent-BuYMbVyj.js";import{s as t}from"./show_source-CRov7rlt.js";import{w as s}from"./with_story_card-Cp4orGqg.js";import"./preload-helper-PPVm8Dsz.js";const i={title:"storybook-addon-tag-badges/deprecatedBadge",tags:["var","!snapshot","version:0.11"],render:()=>r.jsx(r.Fragment,{})},e={tags:["deprecated"],decorators:[s({content:r.jsxs("p",{children:["Components or props that should be avoided in new code. In the sidebar it appears as ",r.jsx("code",{children:"🗑️"}),"."]})}),t({source:o`export const YourStory = {
                tags: ['deprecated'],
                render: () => <YourComponent />
            }`})]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  tags: ['deprecated'],
  decorators: [withStoryCard({
    content: <p>
                    Components or props that should be avoided in new code. In the sidebar it appears as <code>🗑️</code>.
                </p>
  }), showSource({
    source: dedent\`export const YourStory = {
                tags: ['deprecated'],
                render: () => <YourComponent />
            }\`
  })]
}`,...e.parameters?.docs?.source}}};const m=["DeprecatedBadge"];export{e as DeprecatedBadge,m as __namedExportsOrder,i as default};
