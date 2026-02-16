import{j as r}from"./iframe-CgJZ0YZZ.js";import{d as e}from"./dedent-BuYMbVyj.js";import{s as t}from"./show_doc_source-DUPdG6VB.js";import{w as s}from"./with_story_card-BnfzPkHd.js";import"./preload-helper-PPVm8Dsz.js";const m={title:"storybook-addon-tag-badges/todoBadge",tags:["var","version:0.11"],render:()=>r.jsx(r.Fragment,{})},o={name:"To-Do Badge",tags:["todo"],decorators:[s({content:r.jsxs("p",{children:["Story marked as todo or incomplete. In the sidebar it appears as ",r.jsx("code",{children:"📋"}),"."]})}),t({source:e`export const YourStory = {
                tags: ['todo'],
                render: () => <YourComponent />
            }`})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'To-Do Badge',
  tags: ['todo'],
  decorators: [withStoryCard({
    content: <p>
                    Story marked as todo or incomplete. In the sidebar it appears as <code>📋</code>.
                </p>
  }), showDocSource({
    source: dedent\`export const YourStory = {
                tags: ['todo'],
                render: () => <YourComponent />
            }\`
  })]
}`,...o.parameters?.docs?.source}}};const i=["TodoBadge"];export{o as TodoBadge,i as __namedExportsOrder,m as default};
