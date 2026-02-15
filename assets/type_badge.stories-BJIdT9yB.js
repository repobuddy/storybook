import{j as e}from"./iframe-ChM6l5-W.js";import{d as t}from"./dedent-BuYMbVyj.js";import{s}from"./show_doc_source-Cdn2F25y.js";import{w as a}from"./with_story_card-B4QRm0GZ.js";import"./preload-helper-PPVm8Dsz.js";const m={title:"storybook-addon-tag-badges/typeBadge",tags:["var","version:2.15"],render:()=>e.jsx(e.Fragment,{})},o={tags:["type"],decorators:[a({content:e.jsxs("p",{children:["Story that showcases or documents TypeScript types. In the sidebar it appears as ",e.jsx("code",{children:"<T>"}),"."]})}),s({source:t`export const YourStory = {
                tags: ['type'],
                render: () => <YourComponent />
            }`})]},r={tags:["unit"],render:()=>e.jsx("div",{children:"Dummy story to force badge to show in story and not hoisted up"})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['type'],
  decorators: [withStoryCard({
    content: <p>
                    Story that showcases or documents TypeScript types. In the sidebar it appears as <code>{'<T>'}</code>.
                </p>
  }), showDocSource({
    source: dedent\`export const YourStory = {
                tags: ['type'],
                render: () => <YourComponent />
            }\`
  })]
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['unit'],
  render: () => <div>Dummy story to force badge to show in story and not hoisted up</div>
}`,...r.parameters?.docs?.source}}};const y=["TypeBadge","DummyStory"];export{r as DummyStory,o as TypeBadge,y as __namedExportsOrder,m as default};
