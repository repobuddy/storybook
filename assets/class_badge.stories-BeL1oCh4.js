import{j as s}from"./iframe-DVz-szdC.js";import{d as e}from"./dedent-D4JfOF0A.js";import{s as t}from"./show_source-DQllF22z.js";import{w as a}from"./with_story_card-Da-R1uIx.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"storybook-addon-tag-badges/classBadge",tags:["var","!snapshot","version:2.27"],render:()=>s.jsx(s.Fragment,{})},o={tags:["class"],decorators:[a({content:s.jsxs("p",{children:["Story that showcases or documents classes. In the sidebar it appears as ",s.jsx("code",{children:"🔷"}),"."]})}),t({source:e`export const YourStory = {
                tags: ['class'],
                render: () => <YourComponent />
            }`})]},r={tags:["unit"],render:()=>s.jsx("div",{children:"Dummy story to force badge to show in story and not hoisted up"})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['class'],
  decorators: [withStoryCard({
    content: <p>
                    Story that showcases or documents classes. In the sidebar it appears as <code>🔷</code>.
                </p>
  }), showSource({
    source: dedent\`export const YourStory = {
                tags: ['class'],
                render: () => <YourComponent />
            }\`
  })]
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['unit'],
  render: () => <div>Dummy story to force badge to show in story and not hoisted up</div>
}`,...r.parameters?.docs?.source}}};const u=["ClassBadge","DummyStory"];export{o as ClassBadge,r as DummyStory,u as __namedExportsOrder,p as default};
