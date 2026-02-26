import{j as o}from"./iframe-BFuxzFTn.js";import{d as e}from"./dedent-BuYMbVyj.js";import"./show_source-Dp2YpilM.js";import{s as t}from"./show_doc_source-CrRgjBUB.js";import{w as s}from"./with_story_card-B4w4FguD.js";import"./preload-helper-PPVm8Dsz.js";const m={title:"storybook-addon-tag-badges/editorBadge",tags:["var","!snapshot","version:0.6"],render:()=>o.jsx(o.Fragment,{})},r={tags:["editor"],decorators:[s({content:o.jsxs("p",{children:["Story with live editor. In the sidebar it appears as ",o.jsx("code",{children:"✏️"}),"."]})}),t({source:e`export const YourStory = {
                tags: ['editor'],
                render: () => <YourComponent />
            }`})]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['editor'],
  decorators: [withStoryCard({
    content: <p>
                    Story with live editor. In the sidebar it appears as <code>✏️</code>.
                </p>
  }), showDocSource({
    source: dedent\`export const YourStory = {
                tags: ['editor'],
                render: () => <YourComponent />
            }\`
  })]
}`,...r.parameters?.docs?.source}}};const g=["EditorBadge"];export{r as EditorBadge,g as __namedExportsOrder,m as default};
