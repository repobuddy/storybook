import{j as e}from"./iframe-D1XledYu.js";import{d as o}from"./dedent-BuYMbVyj.js";import{s as n}from"./show_doc_source-CLNO4AjV.js";import{w as t}from"./with_story_card-CdEn_QAt.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"storybook-addon-tag-badges/internalBadge",tags:["var","version:0.13"],render:()=>e.jsx(e.Fragment,{})},r={tags:["internal"],decorators:[t({content:e.jsxs("p",{children:["Internal or private-use-only stories. Can be hidden from the sidebar in production. In the sidebar it appears as ",e.jsx("code",{children:"🔒"}),"."]})}),n({source:o`export const YourStory = {
                tags: ['internal'],
                render: () => <YourComponent />
            }`})]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['internal'],
  decorators: [withStoryCard({
    content: <p>
                    Internal or private-use-only stories. Can be hidden from the sidebar in production. In the sidebar it appears
                    as <code>🔒</code>.
                </p>
  }), showDocSource({
    source: dedent\`export const YourStory = {
                tags: ['internal'],
                render: () => <YourComponent />
            }\`
  })]
}`,...r.parameters?.docs?.source}}};const m=["InternalBadge"];export{r as InternalBadge,m as __namedExportsOrder,p as default};
