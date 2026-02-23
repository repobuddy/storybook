import{j as o}from"./iframe-YuPB_Tle.js";import{d as e}from"./dedent-BuYMbVyj.js";import"./show_source-C1ULL-zP.js";import{s as r}from"./show_doc_source-C952wXi_.js";import{w as a}from"./with_story_card-BFcUoUsC.js";import"./preload-helper-PPVm8Dsz.js";const m={title:"storybook-addon-tag-badges/betaBadge",tags:["var","!snapshot","version:2.19"],render:()=>o.jsx(o.Fragment,{})},t={tags:["beta"],decorators:[a({content:o.jsxs("p",{children:["Warn that a component or prop is not stable yet. In the sidebar it appears as ",o.jsx("code",{children:"🟡"}),"."]})}),r({source:e`export const YourStory = {
                tags: ['beta'],
                render: () => <YourComponent />
            }`})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['beta'],
  decorators: [withStoryCard({
    content: <p>
                    Warn that a component or prop is not stable yet. In the sidebar it appears as <code>🟡</code>.
                </p>
  }), showDocSource({
    source: dedent\`export const YourStory = {
                tags: ['beta'],
                render: () => <YourComponent />
            }\`
  })]
}`,...t.parameters?.docs?.source}}};const b=["BetaBadge"];export{t as BetaBadge,b as __namedExportsOrder,m as default};
