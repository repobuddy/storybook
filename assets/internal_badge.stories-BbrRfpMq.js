import{j as e}from"./iframe-DNWJIN3E.js";import{d as n}from"./dedent-D4JfOF0A.js";import{s as o}from"./show_source-e1Ib1OU7.js";import{w as t}from"./with_story_card-BLup2gG6.js";import"./preload-helper-PPVm8Dsz.js";const c={title:"storybook-addon-tag-badges/internalBadge",tags:["var","!snapshot","version:0.13"],render:()=>e.jsx(e.Fragment,{})},r={tags:["internal"],decorators:[t({content:e.jsxs("p",{children:["Internal or private-use-only stories. Can be hidden from the sidebar in production. In the sidebar it appears as ",e.jsx("code",{children:"🔒"}),"."]})}),o({source:n`export const YourStory = {
                tags: ['internal'],
                render: () => <YourComponent />
            }`})]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['internal'],
  decorators: [withStoryCard({
    content: <p>
                    Internal or private-use-only stories. Can be hidden from the sidebar in production. In the sidebar it appears
                    as <code>🔒</code>.
                </p>
  }), showSource({
    source: dedent\`export const YourStory = {
                tags: ['internal'],
                render: () => <YourComponent />
            }\`
  })]
}`,...r.parameters?.docs?.source}}};const m=["InternalBadge"];export{r as InternalBadge,m as __namedExportsOrder,c as default};
