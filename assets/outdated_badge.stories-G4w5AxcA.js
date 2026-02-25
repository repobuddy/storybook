import{j as t}from"./iframe-BxdoBf8y.js";import{d as o}from"./dedent-BuYMbVyj.js";import"./show_source-D7OmnDMZ.js";import{s as r}from"./show_doc_source-DM8Hh1hQ.js";import{w as s}from"./with_story_card-Drm3YASV.js";import"./preload-helper-PPVm8Dsz.js";const m={title:"storybook-addon-tag-badges/outdatedBadge",tags:["var","!snapshot","version:0.11"],render:()=>t.jsx(t.Fragment,{})},e={tags:["outdated"],decorators:[s({content:t.jsxs("p",{children:["Components with design changes that weren't yet implemented, which can incur extra development costs to your users. In the sidebar it appears as ",t.jsx("code",{children:"⚠️"}),"."]})}),r({source:o`export const YourStory = {
                tags: ['outdated'],
                render: () => <YourComponent />
            }`})]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  tags: ['outdated'],
  decorators: [withStoryCard({
    content: <p>
                    Components with design changes that weren't yet implemented, which can incur extra development costs to your
                    users. In the sidebar it appears as <code>⚠️</code>.
                </p>
  }), showDocSource({
    source: dedent\`export const YourStory = {
                tags: ['outdated'],
                render: () => <YourComponent />
            }\`
  })]
}`,...e.parameters?.docs?.source}}};const u=["OutdatedBadge"];export{e as OutdatedBadge,u as __namedExportsOrder,m as default};
