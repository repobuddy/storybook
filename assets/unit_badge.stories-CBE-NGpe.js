import{j as r}from"./iframe-BxdoBf8y.js";import{d as o}from"./dedent-BuYMbVyj.js";import"./show_source-D7OmnDMZ.js";import{s as e}from"./show_doc_source-DM8Hh1hQ.js";import{w as s}from"./with_story_card-Drm3YASV.js";import"./preload-helper-PPVm8Dsz.js";const m={title:"storybook-addon-tag-badges/unitBadge",tags:["var","!snapshot","version:0.11"],render:()=>r.jsx(r.Fragment,{})},t={tags:["unit"],decorators:[s({content:r.jsxs("p",{children:["Unit test story. In the sidebar it appears as ",r.jsx("code",{children:"🧪"}),"."]})}),e({source:o`export const YourStory = {
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
