import{j as o}from"./iframe-CKNOMXmu.js";import{d as s}from"./dedent-BuYMbVyj.js";import{s as t}from"./show_doc_source-BDCfRq_X.js";import{w as c}from"./with_story_card-0cUURb6t.js";import{d}from"./define_docs_param-lmgaBKCF.js";import"./preload-helper-PPVm8Dsz.js";const h={title:"storybook-addon-tag-badges/sourceBadge",tags:["var","version:2.13"],render:()=>o.jsx(o.Fragment,{})},e={tags:["source"],parameters:d({source:{code:s`
            // Use this badge to indicate stories that show source code in the docs
            export const YourStory = {
                tags: ['source'],
                decorators: [showDocSource()],
                render: () => <YourComponent />
            }
            `}}),decorators:[c({content:o.jsxs("div",{children:[o.jsx("div",{children:"Story with source code visible in docs"}),o.jsx("code",{children:"tags: ['source']"})]})}),t()]},r={tags:["unit"],render:()=>o.jsx("div",{children:"Dummy story to force badge to show in story and not hoisted up"})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: dedent\`
            // Use this badge to indicate stories that show source code in the docs
            export const YourStory = {
                tags: ['source'],
                decorators: [showDocSource()],
                render: () => <YourComponent />
            }
            \`
    }
  }),
  decorators: [withStoryCard({
    content: <div>
                    <div>Story with source code visible in docs</div>
                    <code>tags: ['source']</code>
                </div>
  }), showDocSource()]
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['unit'],
  render: () => <div>Dummy story to force badge to show in story and not hoisted up</div>
}`,...r.parameters?.docs?.source}}};const g=["SourceBadge","DummyStory"];export{r as DummyStory,e as SourceBadge,g as __namedExportsOrder,h as default};
