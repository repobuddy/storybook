import{j as o}from"./iframe-DVz-szdC.js";import{d as s}from"./dedent-D4JfOF0A.js";import{s as r}from"./show_source-DQllF22z.js";import{w as e}from"./with_story_card-Da-R1uIx.js";import"./preload-helper-PPVm8Dsz.js";const h={title:"storybook-addon-tag-badges/snapshotBadge",tags:["var","!test","!snapshot","version:0.7"],render:()=>o.jsx(o.Fragment,{})},t={tags:["snapshot"],decorators:[e({content:o.jsxs("p",{children:["Story with snapshot test. It appears as ",o.jsx("code",{children:"📸"})," in the toolbar (not in the sidebar)."]})}),r({source:s`export const YourStory = {
                tags: ['snapshot'],
                render: () => <YourComponent />
            }`})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['snapshot'],
  decorators: [withStoryCard({
    content: <p>
                    Story with snapshot test. It appears as <code>📸</code> in the toolbar (not in the sidebar).
                </p>
  }), showSource({
    source: dedent\`export const YourStory = {
                tags: ['snapshot'],
                render: () => <YourComponent />
            }\`
  })]
}`,...t.parameters?.docs?.source}}};const i=["SnapshotBadge"];export{t as SnapshotBadge,i as __namedExportsOrder,h as default};
