import{j as o}from"./iframe-DKaBjCts.js";import{d as e}from"./dedent-BuYMbVyj.js";import"./show_doc_source-MJb-hv5x.js";import{w as s}from"./with_story_card-CIE8IqEd.js";import{d as n}from"./define_docs_param-lmgaBKCF.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"storybook-addon-tag-badges/functionBadge",tags:["var","version:next"],render:()=>o.jsx(o.Fragment,{})},t={parameters:n({source:{code:e`
            // Use this badge for stories that showcase or document functions
            export const YourStory = {
                tags: ['func'],
                render: () => <YourComponent />
            }
            `}}),decorators:[s({content:o.jsxs("div",{children:[o.jsx("div",{children:"Story that showcases or documents functions"}),o.jsx("code",{children:"tags: ['func']"})]})})]},r={tags:["unit"],render:()=>o.jsx("div",{children:"Dummy story to force badge to show in story and not hoisted up"})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    source: {
      code: dedent\`
            // Use this badge for stories that showcase or document functions
            export const YourStory = {
                tags: ['func'],
                render: () => <YourComponent />
            }
            \`
    }
  }),
  decorators: [withStoryCard({
    content: <div>
                    <div>Story that showcases or documents functions</div>
                    <code>tags: ['func']</code>
                </div>
  })]
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['unit'],
  render: () => <div>Dummy story to force badge to show in story and not hoisted up</div>
}`,...r.parameters?.docs?.source}}};const f=["FunctionBadge","DummyStory"];export{r as DummyStory,t as FunctionBadge,f as __namedExportsOrder,p as default};
