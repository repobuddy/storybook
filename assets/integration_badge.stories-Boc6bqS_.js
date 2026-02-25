import{j as t}from"./iframe-BxdoBf8y.js";import{d as r}from"./dedent-BuYMbVyj.js";import"./show_source-D7OmnDMZ.js";import{s as o}from"./show_doc_source-DM8Hh1hQ.js";import{w as n}from"./with_story_card-Drm3YASV.js";import"./preload-helper-PPVm8Dsz.js";const g={title:"storybook-addon-tag-badges/integrationBadge",tags:["var","!snapshot","version:0.9"],render:()=>t.jsx(t.Fragment,{})},e={tags:["integration"],decorators:[n({content:t.jsxs("p",{children:["Integration test story. This badge is hidden in the sidebar; it appears as ",t.jsx("code",{children:"🔗"})," when displayed elsewhere."]})}),o({source:r`export const YourStory = {
                tags: ['integration'],
                render: () => <YourComponent />
            }`})]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  tags: ['integration'],
  decorators: [withStoryCard({
    content: <p>
                    Integration test story. This badge is hidden in the sidebar; it appears as <code>🔗</code> when displayed
                    elsewhere.
                </p>
  }), showDocSource({
    source: dedent\`export const YourStory = {
                tags: ['integration'],
                render: () => <YourComponent />
            }\`
  })]
}`,...e.parameters?.docs?.source}}};const m=["IntegrationTestBadge"];export{e as IntegrationTestBadge,m as __namedExportsOrder,g as default};
