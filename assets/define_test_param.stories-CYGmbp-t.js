import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-DC6t-S6Q.js";import{i as n,m as r,u as i,v as a}from"./iframe-BsHda9nq.js";import{n as o,t as s}from"./dedent-DU6uki2e.js";var c,l,u,d,f,p;e((()=>{o(),n(),c=t(),l={title:`Parameters/defineTestParam`,tags:[`func`,`!snapshot`,`new`,`version:1.0`],parameters:{docs:{description:{component:`Helper function to define test parameters for Storybook stories`}}},decorators:[a()],render:()=>(0,c.jsx)(c.Fragment,{})},u={parameters:{...i({clearMocks:!0,mockReset:!0,restoreMocks:!0}),...r({source:{code:s`defineTestParam({
                    clearMocks: true,
                    mockReset: true,
                    restoreMocks: true
                })`}})}},d={parameters:{...i({clearMocks:!0,mockReset:!0,restoreMocks:!0,dangerouslyIgnoreUnhandledErrors:!0}),...r({source:{code:s`defineTestParam({
                    clearMocks: true,
                    mockReset: true,
                    restoreMocks: true,
                    dangerouslyIgnoreUnhandledErrors: true
                })`}})}},f={parameters:{...i({clearMocks:!0}),...r({source:{code:s`defineTestParam({
                    clearMocks: true
                })`}})}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p=[`Default`,`WithDangerouslyIgnoreUnhandledErrors`,`MinimalConfig`]}))();export{u as Default,f as MinimalConfig,d as WithDangerouslyIgnoreUnhandledErrors,p as __namedExportsOrder,l as default};