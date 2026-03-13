import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-6sF1Ejqi.js";import{n,t as r}from"./dedent-C7gAFWmM.js";import{d as i,h as a,t as o}from"./src-xVZ3M_hi.js";var s,c,l,u,d,f;e((()=>{n(),o(),s=t(),c={title:`Parameters/defineDocsParam`,tags:[`autodocs`,`func`,`!snapshot`,`new`,`version:1.0`],parameters:i({description:{component:"`docs.description.component` can be used to describe the component in meta. It has no effect on the stories."}}),decorators:[a()],render:()=>(0,s.jsx)(s.Fragment,{})},l={parameters:i({source:{code:r`
            /**
             * Storybook uses JSDoc to generate documentation for the story.
             */
            export const JSDoc: Story = {}
            `}})},u={parameters:{...i({description:{story:"`docs.description.story` can also be used to describe the story."},source:{code:r`defineDocsParam({
                    description: {
                        story: '\`docs.description.story\` can also be used to describe the story.'
                    }
                })`}})}},d={parameters:i({source:{code:r`defineDocsParam({
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