import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{d as s}from"./dedent-DVFkJXTl.js";import"./show_html-C2QZHDjw.js";import{s as g}from"./show_doc_source-CWgnZoeJ.js";import{d as t}from"./define_docs_param-lmgaBKCF.js";import"./index-D4lIrffr.js";function n(M){return{test:M}}const y={title:"Parameters/defineTestParam",tags:["new","version:1.0"],parameters:{docs:{description:{component:"Helper function to define test parameters for Storybook stories"}}},decorators:[g()],render:()=>a.jsx(a.Fragment,{})},e={parameters:{...n({clearMocks:!0,mockReset:!0,restoreMocks:!0}),...t({source:{code:s`defineTestParam({
                    clearMocks: true,
                    mockReset: true,
                    restoreMocks: true
                })`}})}},r={parameters:{...n({clearMocks:!0,mockReset:!0,restoreMocks:!0,dangerouslyIgnoreUnhandledErrors:!0}),...t({source:{code:s`defineTestParam({
                    clearMocks: true,
                    mockReset: true,
                    restoreMocks: true,
                    dangerouslyIgnoreUnhandledErrors: true
                })`}})}},o={parameters:{...n({clearMocks:!0}),...t({source:{code:s`defineTestParam({
                    clearMocks: true
                })`}})}};var c,d,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    ...defineTestParam({
      clearMocks: true,
      mockReset: true,
      restoreMocks: true
    }),
    ...defineDocsParam({
      source: {
        code: dedent\`defineTestParam({
                    clearMocks: true,
                    mockReset: true,
                    restoreMocks: true
                })\`
      }
    })
  }
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,i,l;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    ...defineTestParam({
      clearMocks: true,
      mockReset: true,
      restoreMocks: true,
      dangerouslyIgnoreUnhandledErrors: true
    }),
    ...defineDocsParam({
      source: {
        code: dedent\`defineTestParam({
                    clearMocks: true,
                    mockReset: true,
                    restoreMocks: true,
                    dangerouslyIgnoreUnhandledErrors: true
                })\`
      }
    })
  }
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var p,k,f;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    ...defineTestParam({
      clearMocks: true
    }),
    ...defineDocsParam({
      source: {
        code: dedent\`defineTestParam({
                    clearMocks: true
                })\`
      }
    })
  }
}`,...(f=(k=o.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};const I=["Default","WithDangerouslyIgnoreUnhandledErrors","MinimalConfig"];export{e as Default,o as MinimalConfig,r as WithDangerouslyIgnoreUnhandledErrors,I as __namedExportsOrder,y as default};
