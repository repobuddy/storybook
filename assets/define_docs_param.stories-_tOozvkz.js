import"./components-DmejZTLj.js";import"./react-K5peCFg_.js";import"./react-dom-CYc0L8kE.js";import{t as e}from"./jsx-runtime-BUC2lftT.js";import{t}from"./dedent-rZS-CQtP.js";import{l as n,p as r}from"./src-CPfUkyQY.js";var i=e(),a={title:`Parameters/defineDocsParam`,tags:[`autodocs`,`func`,`!snapshot`,`new`,`version:1.0`],parameters:n({description:{component:"`docs.description.component` can be used to describe the component in meta. It has no effect on the stories."}}),decorators:[r()],render:()=>(0,i.jsx)(i.Fragment,{})},o={parameters:n({source:{code:t`
            /**
             * Storybook uses JSDoc to generate documentation for the story.
             */
            export const JSDoc: Story = {}
            `}})},s={parameters:{...n({description:{story:"`docs.description.story` can also be used to describe the story."},source:{code:t`defineDocsParam({
                    description: {
                        story: '\`docs.description.story\` can also be used to describe the story.'
                    }
                })`}})}},c={parameters:n({source:{code:t`defineDocsParam({
                source: {
                    code: 'Source code'
                }
            })`}})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source},description:{story:`Storybook uses JSDoc to generate documentation for the story.`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    source: {
      code: dedent\`defineDocsParam({
                source: {
                    code: 'Source code'
                }
            })\`
    }
  })
}`,...c.parameters?.docs?.source},description:{story:"`docs.source.code` can be used to define the source code of the story.",...c.parameters?.docs?.description}}};var l=[`JSDoc`,`WithStoryDescription`,`SourceCode`];export{o as JSDoc,c as SourceCode,s as WithStoryDescription,l as __namedExportsOrder,a as default};