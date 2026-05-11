import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-DC6t-S6Q.js";import{i as n,m as r,v as i}from"./iframe-BsHda9nq.js";import{n as a,t as o}from"./dedent-DU6uki2e.js";var s,c,l,u,d,f;e((()=>{a(),n(),s=t(),c={title:`Parameters/defineDocsParam`,tags:[`autodocs`,`func`,`!snapshot`,`new`,`version:1.0`],parameters:r({description:{component:"`docs.description.component` can be used to describe the component in meta. It has no effect on the stories."}}),decorators:[i()],render:()=>(0,s.jsx)(s.Fragment,{})},l={parameters:r({source:{code:o`
            /**
             * Storybook uses JSDoc to generate documentation for the story.
             */
            export const JSDoc: Story = {}
            `}})},u={parameters:{...r({description:{story:"`docs.description.story` can also be used to describe the story."},source:{code:o`defineDocsParam({
                    description: {
                        story: '\`docs.description.story\` can also be used to describe the story.'
                    }
                })`}})}},d={parameters:r({source:{code:o`defineDocsParam({
                source: {
                    code: 'Source code'
                }
            })`}})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source},description:{story:`Storybook uses JSDoc to generate documentation for the story.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    source: {
      code: dedent\`defineDocsParam({
                source: {
                    code: 'Source code'
                }
            })\`
    }
  })
}`,...d.parameters?.docs?.source},description:{story:"`docs.source.code` can be used to define the source code of the story.",...d.parameters?.docs?.description}}},f=[`JSDoc`,`WithStoryDescription`,`SourceCode`]}))();export{l as JSDoc,d as SourceCode,u as WithStoryDescription,f as __namedExportsOrder,c as default};