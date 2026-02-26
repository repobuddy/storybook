import{j as o}from"./iframe-BFuxzFTn.js";import{d as e}from"./dedent-BuYMbVyj.js";import"./show_source-Dp2YpilM.js";import{s}from"./show_doc_source-CrRgjBUB.js";import{w as n}from"./with_story_card-B4w4FguD.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"storybook-addon-tag-badges/functionBadge",tags:["var","!snapshot","version:2.16"],render:()=>o.jsx(o.Fragment,{})},r={tags:["func"],decorators:[n({content:o.jsxs("p",{children:["Story that showcases or documents functions. In the sidebar it appears as ",o.jsx("code",{children:"ƒ(x)"}),"."]})}),s({source:e`export const YourStory = {
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
}`,...t.parameters?.docs?.source}}};const g=["FunctionBadge","DummyStory"];export{t as DummyStory,r as FunctionBadge,g as __namedExportsOrder,p as default};
