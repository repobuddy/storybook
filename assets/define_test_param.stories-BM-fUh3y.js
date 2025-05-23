import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{d as s}from"./dedent-DVFkJXTl.js";import{s as g}from"./show_doc_source-CWgnZoeJ.js";import{d as t}from"./define_docs_param-lmgaBKCF.js";import"./index-DsR4G5ps.js";import"./index-D4lIrffr.js";import"./index-DGfY4z2V.js";import"./index-CcVp9PAx.js";import"./index-DsJinFGm.js";import"./iframe-CuJswpXI.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function n(M){return{test:M}}const w={title:"Parameters/defineTestParam",tags:["new","version:1.0"],parameters:{docs:{description:{component:"Helper function to define test parameters for Storybook stories"}}},decorators:[g()],render:()=>a.jsx(a.Fragment,{})},e={parameters:{...n({clearMocks:!0,mockReset:!0,restoreMocks:!0}),...t({source:{code:s`defineTestParam({
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
                })`}})}};var c,m,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(m=e.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,i,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var l,k,f;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(f=(k=o.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};const C=["Default","WithDangerouslyIgnoreUnhandledErrors","MinimalConfig"];export{e as Default,o as MinimalConfig,r as WithDangerouslyIgnoreUnhandledErrors,C as __namedExportsOrder,w as default};
