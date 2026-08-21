import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./dedent-DQaCLeUO.js";import{O as i,_ as a,t as o}from"./src-D21r-Siz.js";var s,c,l,u,d,f;function p(){return(p=e((()=>{n(),o(),s=t(),c={title:`Parameters/defineDocsParam`,tags:[`autodocs`,`func`,`!snapshot`,`new`,`version:1.0`],parameters:a({description:{component:"`docs.description.component` can be used to describe the component in meta. It has no effect on the stories."}}),decorators:[i()],render:()=>(0,s.jsx)(s.Fragment,{})},l={parameters:a({source:{code:r`
            /**
             * Storybook uses JSDoc to generate documentation for the story.
             */
            export const JSDoc: Story = {}
            `}})},u={parameters:{...a({description:{story:"`docs.description.story` can also be used to describe the story."},source:{code:r`defineDocsParam({
                    description: {
                        story: '\`docs.description.story\` can also be used to describe the story.'
                    }
                })`}})}},d={parameters:a({source:{code:r`defineDocsParam({
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
}`,...d.parameters?.docs?.source},description:{story:"`docs.source.code` can be used to define the source code of the story.",...d.parameters?.docs?.description}}},f=[`JSDoc`,`WithStoryDescription`,`SourceCode`]})))()}p();export{l as JSDoc,d as SourceCode,u as WithStoryDescription,f as __namedExportsOrder,c as default};