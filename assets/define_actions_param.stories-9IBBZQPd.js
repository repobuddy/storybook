import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-yBdeBQmp.js";import{n,r}from"./iframe-D1vhypr4.js";import{n as i,t as a}from"./dedent-DQaCLeUO.js";import{O as o,_ as s,t as c,x as l}from"./src-Dhw3iRbJ.js";var u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{i(),c(),n(),u=t(),{fn:d}=__STORYBOOK_MODULE_TEST__,f=r.meta({title:`Parameters/defineActionsParam`,tags:[`func`,`!snapshot`,`new`,`version:1.0`],decorators:[o()],args:{onClick:d()},render:()=>(0,u.jsx)(u.Fragment,{})}),p=f.story({parameters:{...l({argTypesRegex:`^on[A-Z].*`}),...s({source:{code:a`defineActionsParam({
                    argTypesRegex: '^on[A-Z].*'
                })`}})}}),m=f.story({parameters:{...l({disable:!0}),...s({source:{code:a`defineActionsParam({
                    disable: true
                })`}})}}),h=f.story({parameters:{...l({handles:[`onClick`,`onMouseOver`,`onSubmit`]}),...s({source:{code:a`defineActionsParam({
                    handles: ['onClick', 'onMouseOver', 'onSubmit']
                })`}})}}),g=f.story({parameters:{...l({argTypesRegex:`^on[A-Z].*`,handles:[`customEvent`,`anotherEvent`],disable:!1}),...s({source:{code:a`defineActionsParam({
                argTypesRegex: '^on[A-Z].*',
                handles: ['customEvent', 'anotherEvent'],
                disable: false
            })`}})}}),p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
  parameters: {
    ...defineActionsParam({
      argTypesRegex: '^on[A-Z].*'
    }),
    ...defineDocsParam({
      source: {
        code: dedent\`defineActionsParam({
                    argTypesRegex: '^on[A-Z].*'
                })\`
      }
    })
  }
})`,...p.input.parameters?.docs?.source},description:{story:"Basic example showing how to configure actions parameters with `argTypesRegex`\nto automatically match event handler props.",...p.input.parameters?.docs?.description}}},m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
  parameters: {
    ...defineActionsParam({
      disable: true
    }),
    ...defineDocsParam({
      source: {
        code: dedent\`defineActionsParam({
                    disable: true
                })\`
      }
    })
  }
})`,...m.input.parameters?.docs?.source},description:{story:`Example showing how to disable actions for a story`,...m.input.parameters?.docs?.description}}},h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{originalSource:`meta.story({
  parameters: {
    ...defineActionsParam({
      handles: ['onClick', 'onMouseOver', 'onSubmit']
    }),
    ...defineDocsParam({
      source: {
        code: dedent\`defineActionsParam({
                    handles: ['onClick', 'onMouseOver', 'onSubmit']
                })\`
      }
    })
  }
})`,...h.input.parameters?.docs?.source},description:{story:`Example showing how to explicitly specify action handlers`,...h.input.parameters?.docs?.description}}},g.input.parameters={...g.input.parameters,docs:{...g.input.parameters?.docs,source:{originalSource:`meta.story({
  parameters: {
    ...defineActionsParam({
      argTypesRegex: '^on[A-Z].*',
      handles: ['customEvent', 'anotherEvent'],
      disable: false
    }),
    ...defineDocsParam({
      source: {
        code: dedent\`defineActionsParam({
                argTypesRegex: '^on[A-Z].*',
                handles: ['customEvent', 'anotherEvent'],
                disable: false
            })\`
      }
    })
  }
})`,...g.input.parameters?.docs?.source},description:{story:`Example showing combined configuration options`,...g.input.parameters?.docs?.description}}},_=[`WithArgTypesRegex`,`DisabledActions`,`ExplicitHandles`,`CombinedConfig`]})))()}v();export{g as CombinedConfig,m as DisabledActions,h as ExplicitHandles,p as WithArgTypesRegex,_ as __namedExportsOrder};