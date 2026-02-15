import{j as o}from"./iframe-DsYrPJFW.js";import{d as e}from"./dedent-BuYMbVyj.js";import{s}from"./show_doc_source-FZw31kTD.js";import{w as n}from"./with_story_card-CLGWfURW.js";import"./preload-helper-PPVm8Dsz.js";const m={title:"storybook-addon-tag-badges/functionBadge",tags:["var","version:2.16"],render:()=>o.jsx(o.Fragment,{})},r={tags:["func"],decorators:[n({content:o.jsxs("p",{children:["Story that showcases or documents functions. In the sidebar it appears as ",o.jsx("code",{children:"ƒ(x)"}),"."]})}),s({source:e`export const YourStory = {
                tags: ['func'],
                render: () => <YourComponent />
            }`})]},t={tags:["unit"],render:()=>o.jsx("div",{children:"Dummy story to force badge to show in story and not hoisted up"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['func'],
  decorators: [withStoryCard({
    content: <p>
                    Story that showcases or documents functions. In the sidebar it appears as <code>ƒ(x)</code>.
                </p>
  }), showDocSource({
    source: dedent\`export const YourStory = {
                tags: ['func'],
                render: () => <YourComponent />
            }\`
  })]
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['unit'],
  render: () => <div>Dummy story to force badge to show in story and not hoisted up</div>
}`,...t.parameters?.docs?.source}}};const p=["FunctionBadge","DummyStory"];export{t as DummyStory,r as FunctionBadge,p as __namedExportsOrder,m as default};
