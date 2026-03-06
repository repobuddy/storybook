import{j as r}from"./iframe-DNWJIN3E.js";import{d as e}from"./dedent-D4JfOF0A.js";import{s as o}from"./show_source-e1Ib1OU7.js";import{w as s}from"./with_story_card-BLup2gG6.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"storybook-addon-tag-badges/unitBadge",tags:["var","!snapshot","version:0.11"],render:()=>r.jsx(r.Fragment,{})},t={tags:["unit"],decorators:[s({content:r.jsxs("p",{children:["Unit test story. In the sidebar it appears as ",r.jsx("code",{children:"🧪"}),"."]})}),o({source:e`export const YourStory = {
                tags: ['unit'],
                render: () => <YourComponent />
            }`})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['unit'],
  decorators: [withStoryCard({
    content: <p>
                    Unit test story. In the sidebar it appears as <code>🧪</code>.
                </p>
  }), showSource({
    source: dedent\`export const YourStory = {
                tags: ['unit'],
                render: () => <YourComponent />
            }\`
  })]
}`,...t.parameters?.docs?.source}}};const u=["UnitTestBadge"];export{t as UnitTestBadge,u as __namedExportsOrder,p as default};
