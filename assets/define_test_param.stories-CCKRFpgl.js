import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{d as o}from"./dedent-DVFkJXTl.js";import{s as g,d as n}from"./define_docs_param-DYEy_vX9.js";function t(M){return{test:M}}const D={title:"Parameters/defineTestParam",tags:["new","version:1.0.0"],parameters:{docs:{description:{component:"Helper function to define test parameters for Storybook stories"}}},decorators:[g()],render:()=>a.jsx(a.Fragment,{})},e={parameters:{...t({clearMocks:!0,mockReset:!0,restoreMocks:!0}),...n({source:{code:o`defineTestParam({
                    clearMocks: true,
                    mockReset: true,
                    restoreMocks: true
                })`}})}},r={parameters:{...t({clearMocks:!0,mockReset:!0,restoreMocks:!0,dangerouslyIgnoreUnhandledErrors:!0}),...n({source:{code:o`defineTestParam({
                    clearMocks: true,
                    mockReset: true,
                    restoreMocks: true,
                    dangerouslyIgnoreUnhandledErrors: true
                })`}})}},s={parameters:{...t({clearMocks:!0}),...n({source:{code:o`defineTestParam({
                    clearMocks: true
                })`}})}};var c,d,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(d=e.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var m,i,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var k,p,f;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(f=(p=s.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const R=["Default","WithDangerouslyIgnoreUnhandledErrors","MinimalConfig"];export{e as Default,s as MinimalConfig,r as WithDangerouslyIgnoreUnhandledErrors,R as __namedExportsOrder,D as default};
