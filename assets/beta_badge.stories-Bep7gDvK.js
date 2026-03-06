import{j as e}from"./iframe-DNWJIN3E.js";import{d as o}from"./dedent-D4JfOF0A.js";import{s as r}from"./show_source-e1Ib1OU7.js";import{w as a}from"./with_story_card-BLup2gG6.js";import"./preload-helper-PPVm8Dsz.js";const i={title:"storybook-addon-tag-badges/betaBadge",tags:["var","!snapshot","version:2.19"],render:()=>e.jsx(e.Fragment,{})},t={tags:["beta"],decorators:[a({content:e.jsxs("p",{children:["Warn that a component or prop is not stable yet. In the sidebar it appears as ",e.jsx("code",{children:"🟡"}),"."]})}),r({source:o`export const YourStory = {
                tags: ['beta'],
                render: () => <YourComponent />
            }`})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['beta'],
  decorators: [withStoryCard({
    content: <p>
                    Warn that a component or prop is not stable yet. In the sidebar it appears as <code>🟡</code>.
                </p>
  }), showSource({
    source: dedent\`export const YourStory = {
                tags: ['beta'],
                render: () => <YourComponent />
            }\`
  })]
}`,...t.parameters?.docs?.source}}};const m=["BetaBadge"];export{t as BetaBadge,m as __namedExportsOrder,i as default};
