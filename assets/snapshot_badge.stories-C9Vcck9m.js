import{j as t}from"./iframe-NmEv73ok.js";import{d as s}from"./dedent-BuYMbVyj.js";import"./show_source-Cs3P0N2b.js";import{s as r}from"./show_doc_source-B_AA5dwY.js";import{w as e}from"./with_story_card-cLpGQmSs.js";import"./preload-helper-PPVm8Dsz.js";const h={title:"storybook-addon-tag-badges/snapshotBadge",tags:["var","!test","!snapshot","version:0.7"],render:()=>t.jsx(t.Fragment,{})},o={tags:["snapshot"],decorators:[e({content:t.jsxs("p",{children:["Story with snapshot test. It appears as ",t.jsx("code",{children:"📸"})," in the toolbar (not in the sidebar)."]})}),r({source:s`export const YourStory = {
                tags: ['snapshot'],
                render: () => <YourComponent />
            }`})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['snapshot'],
  decorators: [withStoryCard({
    content: <p>
                    Story with snapshot test. It appears as <code>📸</code> in the toolbar (not in the sidebar).
                </p>
  }), showDocSource({
    source: dedent\`export const YourStory = {
                tags: ['snapshot'],
                render: () => <YourComponent />
            }\`
  })]
}`,...o.parameters?.docs?.source}}};const m=["SnapshotBadge"];export{o as SnapshotBadge,m as __namedExportsOrder,h as default};
