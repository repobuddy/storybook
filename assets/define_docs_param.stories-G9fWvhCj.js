import{j as c}from"./iframe-Sqf8-kFk.js";import{d as t}from"./dedent-BuYMbVyj.js";import{s as n}from"./show_doc_source-xcJozGdz.js";import{d as s}from"./define_docs_param-lmgaBKCF.js";import"./preload-helper-PPVm8Dsz.js";const u={title:"Parameters/defineDocsParam",tags:["autodocs","func","new","version:1.0"],parameters:s({description:{component:"`docs.description.component` can be used to describe the component in meta. It has no effect on the stories."}}),decorators:[n()],render:()=>c.jsx(c.Fragment,{})},e={parameters:s({source:{code:t`
            /**
             * Storybook uses JSDoc to generate documentation for the story.
             */
            export const JSDoc: Story = {}
            `}})},r={parameters:{...s({description:{story:"`docs.description.story` can also be used to describe the story."},source:{code:t`defineDocsParam({
                    description: {
                        story: '\`docs.description.story\` can also be used to describe the story.'
                    }
                })`}})}},o={parameters:s({source:{code:t`defineDocsParam({
                source: {
                    code: 'Source code'
                }
            })`}})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    source: {
      code: dedent\`
            /**
             * Storybook uses JSDoc to generate documentation for the story.
             */
            export const JSDoc: Story = {}
            \`
    }
  })
}`,...e.parameters?.docs?.source},description:{story:"Storybook uses JSDoc to generate documentation for the story.",...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...defineDocsParam({
      description: {
        story: '\`docs.description.story\` can also be used to describe the story.'
      },
      source: {
        code: dedent\`defineDocsParam({
                    description: {
                        story: '\\\`docs.description.story\\\` can also be used to describe the story.'
                    }
                })\`
      }
    })
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    source: {
      code: dedent\`defineDocsParam({
                source: {
                    code: 'Source code'
                }
            })\`
    }
  })
}`,...o.parameters?.docs?.source},description:{story:"`docs.source.code` can be used to define the source code of the story.",...o.parameters?.docs?.description}}};const y=["JSDoc","WithStoryDescription","SourceCode"];export{e as JSDoc,o as SourceCode,r as WithStoryDescription,y as __namedExportsOrder,u as default};
