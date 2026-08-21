import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./dedent-DQaCLeUO.js";import{O as i,_ as a,t as o,x as s}from"./src-D21r-Siz.js";var c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{n(),o(),c=t(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Parameters/defineActionsParam`,tags:[`func`,`!snapshot`,`new`,`version:1.0`],decorators:[i()],args:{onClick:l()},render:()=>(0,c.jsx)(c.Fragment,{})},d={parameters:{...s({argTypesRegex:`^on[A-Z].*`}),...a({source:{code:r`defineActionsParam({
                    argTypesRegex: '^on[A-Z].*'
                })`}})}},f={parameters:{...s({disable:!0}),...a({source:{code:r`defineActionsParam({
                    disable: true
                })`}})}},p={parameters:{...s({handles:[`onClick`,`onMouseOver`,`onSubmit`]}),...a({source:{code:r`defineActionsParam({
                    handles: ['onClick', 'onMouseOver', 'onSubmit']
                })`}})}},m={parameters:{...s({argTypesRegex:`^on[A-Z].*`,handles:[`customEvent`,`anotherEvent`],disable:!1}),...a({source:{code:r`defineActionsParam({
                argTypesRegex: '^on[A-Z].*',
                handles: ['customEvent', 'anotherEvent'],
                disable: false
            })`}})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source},description:{story:"Basic example showing how to configure actions parameters with `argTypesRegex`\nto automatically match event handler props.",...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source},description:{story:`Example showing how to disable actions for a story`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:`Example showing how to explicitly specify action handlers`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:`Example showing combined configuration options`,...m.parameters?.docs?.description}}},h=[`WithArgTypesRegex`,`DisabledActions`,`ExplicitHandles`,`CombinedConfig`]})))()}g();export{m as CombinedConfig,f as DisabledActions,p as ExplicitHandles,d as WithArgTypesRegex,h as __namedExportsOrder,u as default};