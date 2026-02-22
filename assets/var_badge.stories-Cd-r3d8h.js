import{j as r}from"./iframe-a3TVrJ1o.js";import{d as a}from"./dedent-BuYMbVyj.js";import"./show_source-CJlLHvr0.js";import{s as t}from"./show_doc_source-DMZvdjPT.js";import{w as s}from"./with_story_card-CBg2XZe9.js";import"./preload-helper-PPVm8Dsz.js";const u={title:"storybook-addon-tag-badges/varBadge",tags:["var","!snapshot","version:2.16"],render:()=>r.jsx(r.Fragment,{})},e={name:"Variable Badge",tags:["var"],decorators:[s({content:r.jsxs("p",{children:["Story that describes values and variables. In the sidebar it appears as ",r.jsx("code",{children:"var"}),"."]})}),t({source:a`export default {
                tags: ['var'],
                // ...
            } satisfies Meta

            export const YourStory = {
                render: () => <YourComponent />
            }`})]},o={tags:["unit"],render:()=>r.jsx("div",{children:"Dummy story to force badge to show in story and not hoisted up"})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['unit'],
  render: () => <div>Dummy story to force badge to show in story and not hoisted up</div>
}`,...o.parameters?.docs?.source}}};const g=["VarBadge","DummyStory"];export{o as DummyStory,e as VarBadge,g as __namedExportsOrder,u as default};
