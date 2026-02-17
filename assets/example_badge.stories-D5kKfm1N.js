import{j as o}from"./iframe-8Fqjj6Pb.js";import{d as r}from"./dedent-BuYMbVyj.js";import{s as t}from"./show_doc_source-BHZWkkJT.js";import{w as a}from"./with_story_card-B-1QmyvR.js";import"./preload-helper-PPVm8Dsz.js";const c={title:"storybook-addon-tag-badges/exampleBadge",tags:["var","version:2.18"],render:()=>o.jsx(o.Fragment,{})},e={tags:["example"],decorators:[a({content:o.jsxs("p",{children:["Example or demo story. In the sidebar it appears as ",o.jsx("code",{children:"✨"}),"."]})}),t({source:r`export const YourStory = {
                tags: ['example'],
                render: () => <YourComponent />
            }`})]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  tags: ['example'],
  decorators: [withStoryCard({
    content: <p>
                    Example or demo story. In the sidebar it appears as <code>✨</code>.
                </p>
  }), showDocSource({
    source: dedent\`export const YourStory = {
                tags: ['example'],
                render: () => <YourComponent />
            }\`
  })]
}`,...e.parameters?.docs?.source}}};const i=["ExampleBadge"];export{e as ExampleBadge,i as __namedExportsOrder,c as default};
