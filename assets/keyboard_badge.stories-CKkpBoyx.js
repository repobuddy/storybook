import{j as o}from"./iframe-DsYrPJFW.js";import{d as e}from"./dedent-BuYMbVyj.js";import{s as t}from"./show_doc_source-FZw31kTD.js";import{w as a}from"./with_story_card-CLGWfURW.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"storybook-addon-tag-badges/keyboardBadge",tags:["var","version:0.15"],render:()=>o.jsx(o.Fragment,{})},r={tags:["keyboard"],decorators:[a({content:o.jsxs("p",{children:["Story with keyboard interactions. In the sidebar it appears as ",o.jsx("code",{children:"⌨️"}),"."]})}),t({source:e`export const YourStory = {
                tags: ['keyboard'],
                render: () => <YourComponent />
            }`})]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['keyboard'],
  decorators: [withStoryCard({
    content: <p>
                    Story with keyboard interactions. In the sidebar it appears as <code>⌨️</code>.
                </p>
  }), showDocSource({
    source: dedent\`export const YourStory = {
                tags: ['keyboard'],
                render: () => <YourComponent />
            }\`
  })]
}`,...r.parameters?.docs?.source}}};const m=["KeyboardBadge"];export{r as KeyboardBadge,m as __namedExportsOrder,p as default};
