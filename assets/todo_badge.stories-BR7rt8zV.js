import{j as r}from"./iframe-D-GzYPu4.js";import{d as e}from"./dedent-BuYMbVyj.js";import"./show_source-CKoPz8QT.js";import{s as t}from"./show_doc_source-B03VbQ9h.js";import{w as s}from"./with_story_card-Bb9ZBUlC.js";import"./preload-helper-PPVm8Dsz.js";const i={title:"storybook-addon-tag-badges/todoBadge",tags:["var","!snapshot","version:0.11"],render:()=>r.jsx(r.Fragment,{})},o={name:"To-Do Badge",tags:["todo"],decorators:[s({content:r.jsxs("p",{children:["Story marked as todo or incomplete. In the sidebar it appears as ",r.jsx("code",{children:"📋"}),"."]})}),t({source:e`export const YourStory = {
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
}`,...o.parameters?.docs?.source}}};const g=["TodoBadge"];export{o as TodoBadge,g as __namedExportsOrder,i as default};
