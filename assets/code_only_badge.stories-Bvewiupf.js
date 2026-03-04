import{j as e}from"./iframe-DL06NnA6.js";import{d as n}from"./dedent-D4JfOF0A.js";import{s as r}from"./show_source-D9XvUQww.js";import{w as t}from"./with_story_card-BkumSolX.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"storybook-addon-tag-badges/codeOnlyBadge",tags:["var","!snapshot","version:0.11"],render:()=>e.jsx(e.Fragment,{})},o={tags:["code-only"],decorators:[t({content:e.jsxs("p",{children:["Components that only exist in code, and not in design. In the sidebar it appears as ",e.jsx("code",{children:"📝"}),"."]})}),r({source:n`export const YourStory = {
                tags: ['code-only'],
                render: () => <YourComponent />
            }`})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['code-only'],
  decorators: [withStoryCard({
    content: <p>
                    Components that only exist in code, and not in design. In the sidebar it appears as <code>📝</code>.
                </p>
  }), showSource({
    source: dedent\`export const YourStory = {
                tags: ['code-only'],
                render: () => <YourComponent />
            }\`
  })]
}`,...o.parameters?.docs?.source}}};const m=["CodeOnlyBadge"];export{o as CodeOnlyBadge,m as __namedExportsOrder,p as default};
