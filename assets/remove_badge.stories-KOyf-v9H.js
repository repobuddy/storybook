import{j as e}from"./iframe-CgJZ0YZZ.js";import{d as n}from"./dedent-BuYMbVyj.js";import{s}from"./show_doc_source-DUPdG6VB.js";import{w as a}from"./with_story_card-BnfzPkHd.js";import"./preload-helper-PPVm8Dsz.js";const u={title:"storybook-addon-tag-badges/removeBadge",tags:["var","version:2.19"],render:()=>e.jsx(e.Fragment,{})},t={tags:["remove:2"],decorators:[a({content:e.jsxs("p",{children:["Feature or component scheduled for removal in version 2.0.0. In the sidebar it appears as ",e.jsx("code",{children:"☠️v2"}),"."]})}),s({source:n`export const YourStory = {
                tags: ['remove:2'],
                render: () => <YourComponent />
            }`})]},o={tags:["remove"],decorators:[a({content:e.jsxs("p",{children:["Feature or component scheduled for removal in the next release. In the sidebar it appears as ",e.jsx("code",{children:"☠️"}),"."]})}),s({source:n`export const YourStory = {
                tags: ['remove'],
                render: () => <YourComponent />
            }`})]},r={tags:["remove:next"],decorators:[a({content:e.jsxs("p",{children:["Feature or component scheduled for removal in the next release. In the sidebar it appears as ",e.jsx("code",{children:"☠️"}),"."]})}),s({source:n`export const YourStory = {
                tags: ['remove:next'],
                render: () => <YourComponent />
            }`})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['remove:2'],
  decorators: [withStoryCard({
    content: <p>
                    Feature or component scheduled for removal in version 2.0.0. In the sidebar it appears as <code>☠️v2</code>.
                </p>
  }), showDocSource({
    source: dedent\`export const YourStory = {
                tags: ['remove:2'],
                render: () => <YourComponent />
            }\`
  })]
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['remove'],
  decorators: [withStoryCard({
    content: <p>
                    Feature or component scheduled for removal in the next release. In the sidebar it appears as <code>☠️</code>.
                </p>
  }), showDocSource({
    source: dedent\`export const YourStory = {
                tags: ['remove'],
                render: () => <YourComponent />
            }\`
  })]
}`,...o.parameters?.docs?.source},description:{story:"Same badge as RemoveInNext; `remove` and `remove:next` are equivalent.",...o.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['remove:next'],
  decorators: [withStoryCard({
    content: <p>
                    Feature or component scheduled for removal in the next release. In the sidebar it appears as <code>☠️</code>.
                </p>
  }), showDocSource({
    source: dedent\`export const YourStory = {
                tags: ['remove:next'],
                render: () => <YourComponent />
            }\`
  })]
}`,...r.parameters?.docs?.source},description:{story:"Same badge as RemovePlain; `remove` and `remove:next` are equivalent.",...r.parameters?.docs?.description}}};const v=["RemoveInVersion","RemovePlain","RemoveInNext"];export{r as RemoveInNext,t as RemoveInVersion,o as RemovePlain,v as __namedExportsOrder,u as default};
