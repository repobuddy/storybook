import{j as o}from"./iframe-DsYrPJFW.js";import{d as s}from"./dedent-BuYMbVyj.js";import{s as t}from"./show_doc_source-FZw31kTD.js";import{w as a}from"./with_story_card-CLGWfURW.js";import"./preload-helper-PPVm8Dsz.js";const m={title:"storybook-addon-tag-badges/sourceBadge",tags:["var","version:2.13"],render:()=>o.jsx(o.Fragment,{})},r={tags:["source"],decorators:[a({content:o.jsxs("p",{children:["Story that shows the source code. In the sidebar it appears as ",o.jsx("code",{children:"</>"}),"."]})}),t({source:s`export const YourStory = {
                tags: ['source'],
                decorators: [showDocSource()],
                render: () => <YourComponent />
            }`})]},e={tags:["unit"],render:()=>o.jsx("div",{children:"Dummy story to force badge to show in story and not hoisted up"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  decorators: [withStoryCard({
    content: <p>
                    Story that shows the source code. In the sidebar it appears as <code>{'</>'}</code>.
                </p>
  }), showDocSource({
    source: dedent\`export const YourStory = {
                tags: ['source'],
                decorators: [showDocSource()],
                render: () => <YourComponent />
            }\`
  })]
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  tags: ['unit'],
  render: () => <div>Dummy story to force badge to show in story and not hoisted up</div>
}`,...e.parameters?.docs?.source}}};const p=["SourceBadge","DummyStory"];export{e as DummyStory,r as SourceBadge,p as __namedExportsOrder,m as default};
