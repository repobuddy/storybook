import"./components-DmejZTLj.js";import"./react-K5peCFg_.js";import"./react-dom-CYc0L8kE.js";import{t as e}from"./jsx-runtime-BUC2lftT.js";import{t}from"./dedent-rZS-CQtP.js";import{a as n,l as r,p as i}from"./src-CPfUkyQY.js";var a=e(),o={title:`Parameters/defineTestParam`,tags:[`func`,`!snapshot`,`new`,`version:1.0`],parameters:{docs:{description:{component:`Helper function to define test parameters for Storybook stories`}}},decorators:[i()],render:()=>(0,a.jsx)(a.Fragment,{})},s={parameters:{...n({clearMocks:!0,mockReset:!0,restoreMocks:!0}),...r({source:{code:t`defineTestParam({
                    clearMocks: true,
                    mockReset: true,
                    restoreMocks: true
                })`}})}},c={parameters:{...n({clearMocks:!0,mockReset:!0,restoreMocks:!0,dangerouslyIgnoreUnhandledErrors:!0}),...r({source:{code:t`defineTestParam({
                    clearMocks: true,
                    mockReset: true,
                    restoreMocks: true,
                    dangerouslyIgnoreUnhandledErrors: true
                })`}})}},l={parameters:{...n({clearMocks:!0}),...r({source:{code:t`defineTestParam({
                    clearMocks: true
                })`}})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};var u=[`Default`,`WithDangerouslyIgnoreUnhandledErrors`,`MinimalConfig`];export{s as Default,l as MinimalConfig,c as WithDangerouslyIgnoreUnhandledErrors,u as __namedExportsOrder,o as default};