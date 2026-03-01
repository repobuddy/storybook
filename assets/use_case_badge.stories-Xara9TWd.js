import{j as s}from"./iframe-BJchrtiz.js";import{d as r}from"./dedent-D4JfOF0A.js";import{s as o}from"./show_source-NtLBjQ65.js";import{w as a}from"./with_story_card-Cef5k-cI.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"storybook-addon-tag-badges/useCaseBadge",tags:["var","!snapshot","version:2.18"],render:()=>s.jsx(s.Fragment,{})},e={tags:["use-case"],decorators:[a({content:s.jsxs("p",{children:["Story demonstrating a specific use case or scenario. In the sidebar it appears as ",s.jsx("code",{children:"🎯"}),"."]})}),o({source:r`export const YourStory = {
                tags: ['use-case'],
                render: () => <YourComponent />
            }`})]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  decorators: [withStoryCard({
    content: <p>
                    Story demonstrating a specific use case or scenario. In the sidebar it appears as <code>🎯</code>.
                </p>
  }), showSource({
    source: dedent\`export const YourStory = {
                tags: ['use-case'],
                render: () => <YourComponent />
            }\`
  })]
}`,...e.parameters?.docs?.source}}};const u=["UseCaseBadge"];export{e as UseCaseBadge,u as __namedExportsOrder,p as default};
