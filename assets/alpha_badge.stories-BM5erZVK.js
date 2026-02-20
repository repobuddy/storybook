import{j as o}from"./iframe-CsWqEnuu.js";import{d as a}from"./dedent-BuYMbVyj.js";import{s as e}from"./show_doc_source-rRH5Hhvc.js";import{w as t}from"./with_story_card-Bd0QLeY6.js";import"./preload-helper-PPVm8Dsz.js";const i={title:"storybook-addon-tag-badges/alphaBadge",tags:["var","!snapshot","version:2.19"],render:()=>o.jsx(o.Fragment,{})},r={tags:["alpha"],decorators:[t({content:o.jsxs("p",{children:["Mark that a component or prop is in alpha (experimental). In the sidebar it appears as ",o.jsx("code",{children:"🔴"}),"."]})}),e({source:a`export const YourStory = {
                tags: ['alpha'],
                render: () => <YourComponent />
            }`})]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['alpha'],
  decorators: [withStoryCard({
    content: <p>
                    Mark that a component or prop is in alpha (experimental). In the sidebar it appears as <code>🔴</code>.
                </p>
  }), showDocSource({
    source: dedent\`export const YourStory = {
                tags: ['alpha'],
                render: () => <YourComponent />
            }\`
  })]
}`,...r.parameters?.docs?.source}}};const m=["AlphaBadge"];export{r as AlphaBadge,m as __namedExportsOrder,i as default};
