import{j as o}from"./iframe-DsYrPJFW.js";import{d as e}from"./dedent-BuYMbVyj.js";import{s as t}from"./show_doc_source-FZw31kTD.js";import{w as a}from"./with_story_card-CLGWfURW.js";import"./preload-helper-PPVm8Dsz.js";const i={title:"storybook-addon-tag-badges/rcBadge",tags:["var","version:2.19"],render:()=>o.jsx(o.Fragment,{})},r={tags:["rc"],decorators:[a({content:o.jsxs("p",{children:["Mark that a component or prop is a release candidate. In the sidebar it appears as ",o.jsx("code",{children:"🔵"}),"."]})}),t({source:e`export const YourStory = {
                tags: ['rc'],
                render: () => <YourComponent />
            }`})]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['rc'],
  decorators: [withStoryCard({
    content: <p>
                    Mark that a component or prop is a release candidate. In the sidebar it appears as <code>🔵</code>.
                </p>
  }), showDocSource({
    source: dedent\`export const YourStory = {
                tags: ['rc'],
                render: () => <YourComponent />
            }\`
  })]
}`,...r.parameters?.docs?.source}}};const m=["RcBadge"];export{r as RcBadge,m as __namedExportsOrder,i as default};
