import{j as r}from"./iframe-D-GzYPu4.js";import{d as o}from"./dedent-BuYMbVyj.js";import"./show_source-CKoPz8QT.js";import{s as e}from"./show_doc_source-B03VbQ9h.js";import{w as s}from"./with_story_card-Bb9ZBUlC.js";import"./preload-helper-PPVm8Dsz.js";const m={title:"storybook-addon-tag-badges/unitBadge",tags:["var","!snapshot","version:0.11"],render:()=>r.jsx(r.Fragment,{})},t={tags:["unit"],decorators:[s({content:r.jsxs("p",{children:["Unit test story. In the sidebar it appears as ",r.jsx("code",{children:"🧪"}),"."]})}),e({source:o`export const YourStory = {
                tags: ['unit'],
                render: () => <YourComponent />
            }`})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['unit'],
  decorators: [withStoryCard({
    content: <p>
                    Unit test story. In the sidebar it appears as <code>🧪</code>.
                </p>
  }), showDocSource({
    source: dedent\`export const YourStory = {
                tags: ['unit'],
                render: () => <YourComponent />
            }\`
  })]
}`,...t.parameters?.docs?.source}}};const u=["UnitTestBadge"];export{t as UnitTestBadge,u as __namedExportsOrder,m as default};
