import{j as e}from"./iframe-DKaBjCts.js";import{d as o}from"./dedent-BuYMbVyj.js";import"./show_doc_source-MJb-hv5x.js";import{w as s}from"./with_story_card-CIE8IqEd.js";import{d as a}from"./define_docs_param-lmgaBKCF.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"storybook-addon-tag-badges/varBadge",tags:["var","version:next"],render:()=>e.jsx(e.Fragment,{})},r={parameters:a({source:{code:o`
            // Use this badge for stories that describe values and variables
            export default {
                tags: ['var'],
                // ...
            } satisfies Meta

            export const YourStory = {
                render: () => <YourComponent />
            }
            `}}),decorators:[s({content:e.jsxs("div",{children:[e.jsx("div",{children:"Story that describes values and variables"}),e.jsx("code",{children:"tags: ['var']"})]})})]},t={tags:["unit"],render:()=>e.jsx("div",{children:"Dummy story to force badge to show in story and not hoisted up"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    source: {
      code: dedent\`
            // Use this badge for stories that describe values and variables
            export default {
                tags: ['var'],
                // ...
            } satisfies Meta

            export const YourStory = {
                render: () => <YourComponent />
            }
            \`
    }
  }),
  decorators: [withStoryCard({
    content: <div>
                    <div>Story that describes values and variables</div>
                    <code>tags: ['var']</code>
                </div>
  })]
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['unit'],
  render: () => <div>Dummy story to force badge to show in story and not hoisted up</div>
}`,...t.parameters?.docs?.source}}};const v=["VarBadge","DummyStory"];export{t as DummyStory,r as VarBadge,v as __namedExportsOrder,p as default};
