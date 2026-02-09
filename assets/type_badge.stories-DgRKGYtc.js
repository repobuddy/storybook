import{j as e}from"./iframe-DX_7qFCb.js";import{d as r}from"./dedent-BuYMbVyj.js";import"./show_doc_source-DGj7lDml.js";import{w as s}from"./with_story_card-BUg33MR7.js";import{d as a}from"./define_docs_param-lmgaBKCF.js";import"./preload-helper-PPVm8Dsz.js";const y={title:"storybook-addon-tag-badges/typeBadge",tags:["var","version:2.15"],render:()=>e.jsx(e.Fragment,{})},t={tags:["type"],parameters:a({source:{code:r`
            // Use this badge for stories that showcase or document TypeScript types
            export const YourStory = {
                tags: ['type'],
                render: () => <YourComponent />
            }
            `}}),decorators:[s({content:e.jsxs("div",{children:[e.jsx("div",{children:"Story that showcases or documents TypeScript types"}),e.jsx("code",{children:"tags: ['type']"})]})})]},o={tags:["unit"],render:()=>e.jsx("div",{children:"Dummy story to force badge to show in story and not hoisted up"})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['type'],
  parameters: defineDocsParam({
    source: {
      code: dedent\`
            // Use this badge for stories that showcase or document TypeScript types
            export const YourStory = {
                tags: ['type'],
                render: () => <YourComponent />
            }
            \`
    }
  }),
  decorators: [withStoryCard({
    content: <div>
                    <div>Story that showcases or documents TypeScript types</div>
                    <code>tags: ['type']</code>
                </div>
  })]
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['unit'],
  render: () => <div>Dummy story to force badge to show in story and not hoisted up</div>
}`,...o.parameters?.docs?.source}}};const u=["TypeBadge","DummyStory"];export{o as DummyStory,t as TypeBadge,u as __namedExportsOrder,y as default};
