import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-yBdeBQmp.js";import{n,r}from"./iframe-BpweSj9K.js";import{n as i,t as a}from"./dedent-DQaCLeUO.js";import{O as o,_ as s,t as c}from"./src-Dhw3iRbJ.js";var l,u,d,f,p,m;function h(){return(h=e((()=>{i(),c(),n(),l=t(),u=r.meta({title:`Parameters/defineDocsParam`,tags:[`autodocs`,`func`,`!snapshot`,`new`,`version:1.0`],parameters:s({description:{component:"`docs.description.component` can be used to describe the component in meta. It has no effect on the stories."}}),decorators:[o()],render:()=>(0,l.jsx)(l.Fragment,{})}),d=u.story({parameters:s({source:{code:a`
            /**
             * Storybook uses JSDoc to generate documentation for the story.
             */
            export const JSDoc: Story = {}
            `}})}),f=u.story({parameters:{...s({description:{story:"`docs.description.story` can also be used to describe the story."},source:{code:a`defineDocsParam({
                    description: {
                        story: '\`docs.description.story\` can also be used to describe the story.'
                    }
                })`}})}}),p=u.story({parameters:s({source:{code:a`defineDocsParam({
                source: {
                    code: 'Source code'
                }
            })`}})}),d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...d.input.parameters?.docs?.source},description:{story:`Storybook uses JSDoc to generate documentation for the story.`,...d.input.parameters?.docs?.description}}},f.input.parameters={...f.input.parameters,docs:{...f.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...f.input.parameters?.docs?.source}}},p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
  parameters: defineDocsParam({
    source: {
      code: dedent\`defineDocsParam({
                source: {
                    code: 'Source code'
                }
            })\`
    }
  })
})`,...p.input.parameters?.docs?.source},description:{story:"`docs.source.code` can be used to define the source code of the story.",...p.input.parameters?.docs?.description}}},m=[`JSDoc`,`WithStoryDescription`,`SourceCode`]})))()}h();export{d as JSDoc,p as SourceCode,f as WithStoryDescription,m as __namedExportsOrder};