import{j as r}from"./iframe-BviagkjD.js";import{d as o}from"./dedent-BuYMbVyj.js";import{s as t}from"./show_doc_source-BIuCeZCU.js";import{w as s}from"./with_story_card-cMVAmOE0.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"storybook-addon-tag-badges/varBadge",tags:["var","version:2.16"],render:()=>r.jsx(r.Fragment,{})},e={name:"Variable Badge",tags:["var"],decorators:[s({content:r.jsxs("p",{children:["Story that describes values and variables. In the sidebar it appears as ",r.jsx("code",{children:"var"}),"."]})}),t({source:o`export default {
                tags: ['var'],
                // ...
            } satisfies Meta

            export const YourStory = {
                render: () => <YourComponent />
            }`})]},a={tags:["unit"],render:()=>r.jsx("div",{children:"Dummy story to force badge to show in story and not hoisted up"})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Variable Badge',
  tags: ['var'],
  decorators: [withStoryCard({
    content: <p>
                    Story that describes values and variables. In the sidebar it appears as <code>var</code>.
                </p>
  }), showDocSource({
    source: dedent\`export default {
                tags: ['var'],
                // ...
            } satisfies Meta

            export const YourStory = {
                render: () => <YourComponent />
            }\`
  })]
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['unit'],
  render: () => <div>Dummy story to force badge to show in story and not hoisted up</div>
}`,...a.parameters?.docs?.source}}};const u=["VarBadge","DummyStory"];export{a as DummyStory,e as VarBadge,u as __namedExportsOrder,p as default};
