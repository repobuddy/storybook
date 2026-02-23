import{j as e}from"./iframe-D-GzYPu4.js";import{d as n}from"./dedent-BuYMbVyj.js";import"./show_source-CKoPz8QT.js";import{s as r}from"./show_doc_source-B03VbQ9h.js";import{w as t}from"./with_story_card-Bb9ZBUlC.js";import"./preload-helper-PPVm8Dsz.js";const m={title:"storybook-addon-tag-badges/codeOnlyBadge",tags:["var","!snapshot","version:0.11"],render:()=>e.jsx(e.Fragment,{})},o={tags:["code-only"],decorators:[t({content:e.jsxs("p",{children:["Components that only exist in code, and not in design. In the sidebar it appears as ",e.jsx("code",{children:"📝"}),"."]})}),r({source:n`export const YourStory = {
                tags: ['code-only'],
                render: () => <YourComponent />
            }`})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['code-only'],
  decorators: [withStoryCard({
    content: <p>
                    Components that only exist in code, and not in design. In the sidebar it appears as <code>📝</code>.
                </p>
  }), showDocSource({
    source: dedent\`export const YourStory = {
                tags: ['code-only'],
                render: () => <YourComponent />
            }\`
  })]
}`,...o.parameters?.docs?.source}}};const g=["CodeOnlyBadge"];export{o as CodeOnlyBadge,g as __namedExportsOrder,m as default};
