import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{d as t}from"./dedent-DVFkJXTl.js";import{s as P}from"./show_doc_source-CWgnZoeJ.js";import{d as s}from"./define_docs_param-lmgaBKCF.js";import"./index-DsR4G5ps.js";import"./index-D4lIrffr.js";import"./index-DGfY4z2V.js";import"./index-CcVp9PAx.js";import"./index-DsJinFGm.js";import"./iframe-CuJswpXI.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";const F={title:"Parameters/defineDocsParam",tags:["autodocs","new","version:1.0"],parameters:s({description:{component:"`docs.description.component` can be used to describe the component in meta. It has no effect on the stories."}}),decorators:[P()],render:()=>c.jsx(c.Fragment,{})},e={parameters:s({source:{code:t`
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
            })`}})};var n,a,d,i,m;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(d=(a=e.parameters)==null?void 0:a.docs)==null?void 0:d.source},description:{story:"Storybook uses JSDoc to generate documentation for the story.",...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.description}}};var p,u,y;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(y=(u=r.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var S,f,D,h,b;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    source: {
      code: dedent\`defineDocsParam({
                source: {
                    code: 'Source code'
                }
            })\`
    }
  })
}`,...(D=(f=o.parameters)==null?void 0:f.docs)==null?void 0:D.source},description:{story:"`docs.source.code` can be used to define the source code of the story.",...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.description}}};const I=["JSDoc","WithStoryDescription","SourceCode"];export{e as JSDoc,o as SourceCode,r as WithStoryDescription,I as __namedExportsOrder,F as default};
