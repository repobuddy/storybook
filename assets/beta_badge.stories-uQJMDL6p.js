import{j as t}from"./iframe-BviagkjD.js";import{d as o}from"./dedent-BuYMbVyj.js";import{s as r}from"./show_doc_source-BIuCeZCU.js";import{w as a}from"./with_story_card-cMVAmOE0.js";import"./preload-helper-PPVm8Dsz.js";const i={title:"storybook-addon-tag-badges/betaBadge",tags:["var","version:0.11"],render:()=>t.jsx(t.Fragment,{})},e={tags:["beta"],decorators:[a({content:t.jsxs("p",{children:["Warn that a component or prop is not stable yet. In the sidebar it appears as ",t.jsx("code",{children:"🌱"}),"."]})}),r({source:o`export const YourStory = {
                tags: ['beta'],
                render: () => <YourComponent />
            }`})]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  tags: ['beta'],
  decorators: [withStoryCard({
    content: <p>
                    Warn that a component or prop is not stable yet. In the sidebar it appears as <code>🌱</code>.
                </p>
  }), showDocSource({
    source: dedent\`export const YourStory = {
                tags: ['beta'],
                render: () => <YourComponent />
            }\`
  })]
}`,...e.parameters?.docs?.source}}};const m=["BetaBadge"];export{e as BetaBadge,m as __namedExportsOrder,i as default};
