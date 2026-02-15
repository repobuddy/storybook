import{j as e}from"./iframe-BviagkjD.js";import{d as o}from"./dedent-BuYMbVyj.js";import{s as t}from"./show_doc_source-BIuCeZCU.js";import{w as n}from"./with_story_card-cMVAmOE0.js";import"./preload-helper-PPVm8Dsz.js";const g={title:"storybook-addon-tag-badges/dangerBadge",tags:["var","version:0.11"],render:()=>e.jsx(e.Fragment,{})},r={tags:["danger"],decorators:[n({content:e.jsxs("p",{children:["Components that require particular attention when configuring them (e.g. for security concerns). In the sidebar it appears as ",e.jsx("code",{children:"🚨"}),"."]})}),t({source:o`export const YourStory = {
                tags: ['danger'],
                render: () => <YourComponent />
            }`})]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['danger'],
  decorators: [withStoryCard({
    content: <p>
                    Components that require particular attention when configuring them (e.g. for security concerns). In the
                    sidebar it appears as <code>🚨</code>.
                </p>
  }), showDocSource({
    source: dedent\`export const YourStory = {
                tags: ['danger'],
                render: () => <YourComponent />
            }\`
  })]
}`,...r.parameters?.docs?.source}}};const p=["DangerousBadge"];export{r as DangerousBadge,p as __namedExportsOrder,g as default};
