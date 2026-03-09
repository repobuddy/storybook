import{j as a}from"./iframe-8ZncV6Yl.js";import{d as o}from"./dedent-D4JfOF0A.js";import{s as e}from"./show_source-CJG67if-.js";import{w as t}from"./with_story_card-BkIHzpZR.js";import"./preload-helper-PPVm8Dsz.js";const i={title:"storybook-addon-tag-badges/alphaBadge",tags:["var","!snapshot","version:2.19"],render:()=>a.jsx(a.Fragment,{})},r={tags:["alpha"],decorators:[t({content:a.jsxs("p",{children:["Mark that a component or prop is in alpha (experimental). In the sidebar it appears as ",a.jsx("code",{children:"🔴"}),"."]})}),e({source:o`export const YourStory = {
                tags: ['alpha'],
                render: () => <YourComponent />
            }`})]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['alpha'],
  decorators: [withStoryCard({
    content: <p>
                    Mark that a component or prop is in alpha (experimental). In the sidebar it appears as <code>🔴</code>.
                </p>
  }), showSource({
    source: dedent\`export const YourStory = {
                tags: ['alpha'],
                render: () => <YourComponent />
            }\`
  })]
}`,...r.parameters?.docs?.source}}};const m=["AlphaBadge"];export{r as AlphaBadge,m as __namedExportsOrder,i as default};
