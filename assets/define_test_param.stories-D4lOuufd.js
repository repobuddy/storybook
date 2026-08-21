import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./dedent-DQaCLeUO.js";import{O as i,_ as a,l as o,t as s}from"./src-D21r-Siz.js";var c,l,u,d,f,p;function m(){return(m=e((()=>{n(),s(),c=t(),l={title:`Parameters/defineTestParam`,tags:[`func`,`!snapshot`,`new`,`version:1.0`],parameters:{docs:{description:{component:`Helper function to define test parameters for Storybook stories`}}},decorators:[i()],render:()=>(0,c.jsx)(c.Fragment,{})},u={parameters:{...o({clearMocks:!0,mockReset:!0,restoreMocks:!0}),...a({source:{code:r`defineTestParam({
                    clearMocks: true,
                    mockReset: true,
                    restoreMocks: true
                })`}})}},d={parameters:{...o({clearMocks:!0,mockReset:!0,restoreMocks:!0,dangerouslyIgnoreUnhandledErrors:!0}),...a({source:{code:r`defineTestParam({
                    clearMocks: true,
                    mockReset: true,
                    restoreMocks: true,
                    dangerouslyIgnoreUnhandledErrors: true
                })`}})}},f={parameters:{...o({clearMocks:!0}),...a({source:{code:r`defineTestParam({
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
}`,...f.parameters?.docs?.source}}},p=[`Default`,`WithDangerouslyIgnoreUnhandledErrors`,`MinimalConfig`]})))()}m();export{u as Default,f as MinimalConfig,d as WithDangerouslyIgnoreUnhandledErrors,p as __namedExportsOrder,l as default};