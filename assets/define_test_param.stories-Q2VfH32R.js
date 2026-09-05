import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-B066xLLY.js";import{n,r}from"./iframe-Bv4Jrxeb.js";import{n as i,t as a}from"./dedent-DQaCLeUO.js";import{O as o,_ as s,l as c,t as l}from"./src-Cjk9gBKT.js";var u,d,f,p,m,h;function g(){return(g=e((()=>{i(),l(),n(),u=t(),d=r.meta({title:`Parameters/defineTestParam`,tags:[`func`,`!snapshot`,`new`,`version:1.0`],parameters:{docs:{description:{component:`Helper function to define test parameters for Storybook stories`}}},decorators:[o()],render:()=>(0,u.jsx)(u.Fragment,{})}),f=d.story({parameters:{...c({clearMocks:!0,mockReset:!0,restoreMocks:!0}),...s({source:{code:a`defineTestParam({
                    clearMocks: true,
                    mockReset: true,
                    restoreMocks: true
                })`}})}}),p=d.story({parameters:{...c({clearMocks:!0,mockReset:!0,restoreMocks:!0,dangerouslyIgnoreUnhandledErrors:!0}),...s({source:{code:a`defineTestParam({
                    clearMocks: true,
                    mockReset: true,
                    restoreMocks: true,
                    dangerouslyIgnoreUnhandledErrors: true
                })`}})}}),m=d.story({parameters:{...c({clearMocks:!0}),...s({source:{code:a`defineTestParam({
                    clearMocks: true
                })`}})}}),h=[`Default`,`WithDangerouslyIgnoreUnhandledErrors`,`MinimalConfig`],f.input.parameters={...f.input.parameters,docs:{...f.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...f.input.parameters?.docs?.source}}},p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...p.input.parameters?.docs?.source}}},m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...m.input.parameters?.docs?.source}}}})))()}g();export{f as Default,m as MinimalConfig,p as WithDangerouslyIgnoreUnhandledErrors,h as __namedExportsOrder};