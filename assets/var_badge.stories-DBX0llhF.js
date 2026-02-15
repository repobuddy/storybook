import{j as r}from"./iframe-Sqf8-kFk.js";import{d as o}from"./dedent-BuYMbVyj.js";import"./show_doc_source-xcJozGdz.js";import{w as s}from"./with_story_card-BdgcRqt2.js";import{d as a}from"./define_docs_param-lmgaBKCF.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"storybook-addon-tag-badges/varBadge",tags:["var","version:2.16"],render:()=>r.jsx(r.Fragment,{})},e={parameters:a({source:{code:o`
            // Use this badge for stories that describe values and variables
            export default {
                tags: ['var'],
                // ...
            } satisfies Meta

            export const YourStory = {
                render: () => <YourComponent />
            }
            `}}),decorators:[s({content:r.jsxs("div",{children:[r.jsx("div",{children:"Story that describes values and variables"}),r.jsx("code",{children:"tags: ['var']"})]})})]},t={tags:["unit"],render:()=>r.jsx("div",{children:"Dummy story to force badge to show in story and not hoisted up"})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['unit'],
  render: () => <div>Dummy story to force badge to show in story and not hoisted up</div>
}`,...t.parameters?.docs?.source}}};const v=["VarBadge","DummyStory"];export{t as DummyStory,e as VarBadge,v as __namedExportsOrder,p as default};
