import{j as o}from"./iframe-BFuxzFTn.js";import{d as s}from"./dedent-BuYMbVyj.js";import"./show_source-Dp2YpilM.js";import{s as t}from"./show_doc_source-CrRgjBUB.js";import{w as a}from"./with_story_card-B4w4FguD.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"storybook-addon-tag-badges/sourceBadge",tags:["var","!snapshot","version:2.13"],render:()=>o.jsx(o.Fragment,{})},r={tags:["source"],decorators:[a({content:o.jsxs("p",{children:["Story that shows the source code. In the sidebar it appears as ",o.jsx("code",{children:"</>"}),"."]})}),t({source:s`export const YourStory = {
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
}`,...e.parameters?.docs?.source}}};const h=["SourceBadge","DummyStory"];export{e as DummyStory,r as SourceBadge,h as __namedExportsOrder,p as default};
