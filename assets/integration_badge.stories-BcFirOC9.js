import{j as t}from"./iframe-D1XledYu.js";import{d as r}from"./dedent-BuYMbVyj.js";import{s as o}from"./show_doc_source-CLNO4AjV.js";import{w as n}from"./with_story_card-CdEn_QAt.js";import"./preload-helper-PPVm8Dsz.js";const g={title:"storybook-addon-tag-badges/integrationBadge",tags:["var","version:0.9"],render:()=>t.jsx(t.Fragment,{})},e={tags:["integration"],decorators:[n({content:t.jsxs("p",{children:["Integration test story. This badge is hidden in the sidebar; it appears as ",t.jsx("code",{children:"🔗"})," when displayed elsewhere."]})}),o({source:r`export const YourStory = {
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
}`,...e.parameters?.docs?.source}}};const p=["IntegrationTestBadge"];export{e as IntegrationTestBadge,p as __namedExportsOrder,g as default};
