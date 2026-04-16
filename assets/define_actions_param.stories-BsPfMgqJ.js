import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-6sF1Ejqi.js";import{n,t as r}from"./dedent-TIXhxgm8.js";import{d as i,h as a,p as o,t as s}from"./src-XpyBqwIv.js";var c,l,u,d,f,p,m,h;e((()=>{n(),s(),c=t(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Parameters/defineActionsParam`,tags:[`func`,`!snapshot`,`new`,`version:1.0`],decorators:[a()],args:{onClick:l()},render:()=>(0,c.jsx)(c.Fragment,{})},d={parameters:{...o({argTypesRegex:`^on[A-Z].*`}),...i({source:{code:r`defineActionsParam({
                    argTypesRegex: '^on[A-Z].*'
                })`}})}},f={parameters:{...o({disable:!0}),...i({source:{code:r`defineActionsParam({
                    disable: true
                })`}})}},p={parameters:{...o({handles:[`onClick`,`onMouseOver`,`onSubmit`]}),...i({source:{code:r`defineActionsParam({
                    handles: ['onClick', 'onMouseOver', 'onSubmit']
                })`}})}},m={parameters:{...o({argTypesRegex:`^on[A-Z].*`,handles:[`customEvent`,`anotherEvent`],disable:!1}),...i({source:{code:r`defineActionsParam({
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
}`,...m.parameters?.docs?.source},description:{story:`Example showing combined configuration options`,...m.parameters?.docs?.description}}},h=[`WithArgTypesRegex`,`DisabledActions`,`ExplicitHandles`,`CombinedConfig`]}))();export{m as CombinedConfig,f as DisabledActions,p as ExplicitHandles,d as WithArgTypesRegex,h as __namedExportsOrder,u as default};