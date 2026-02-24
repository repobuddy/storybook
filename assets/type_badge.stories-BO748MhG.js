import{j as o}from"./iframe-CTjeFRQZ.js";import{d as t}from"./dedent-BuYMbVyj.js";import"./show_source-DR4gBb21.js";import{s}from"./show_doc_source-D9JsOhvH.js";import{w as a}from"./with_story_card-DxjhZ72i.js";import"./preload-helper-PPVm8Dsz.js";const y={title:"storybook-addon-tag-badges/typeBadge",tags:["var","!snapshot","version:2.15"],render:()=>o.jsx(o.Fragment,{})},e={tags:["type"],decorators:[a({content:o.jsxs("p",{children:["Story that showcases or documents TypeScript types. In the sidebar it appears as ",o.jsx("code",{children:"<T>"}),"."]})}),s({source:t`export const YourStory = {
                tags: ['type'],
                render: () => <YourComponent />
            }`})]},r={tags:["unit"],render:()=>o.jsx("div",{children:"Dummy story to force badge to show in story and not hoisted up"})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['unit'],
  render: () => <div>Dummy story to force badge to show in story and not hoisted up</div>
}`,...r.parameters?.docs?.source}}};const u=["TypeBadge","DummyStory"];export{r as DummyStory,e as TypeBadge,u as __namedExportsOrder,y as default};
