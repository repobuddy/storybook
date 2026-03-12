import"./components-DmejZTLj.js";import"./react-K5peCFg_.js";import"./react-dom-CYc0L8kE.js";import{t as e}from"./jsx-runtime-BUC2lftT.js";import{t}from"./dedent-rZS-CQtP.js";import{d as n,l as r,p as i}from"./src-CPfUkyQY.js";var a=e(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Parameters/defineActionsParam`,tags:[`func`,`!snapshot`,`new`,`version:1.0`],decorators:[i()],args:{onClick:o()},render:()=>(0,a.jsx)(a.Fragment,{})},c={parameters:{...n({argTypesRegex:`^on[A-Z].*`}),...r({source:{code:t`defineActionsParam({
                    argTypesRegex: '^on[A-Z].*'
                })`}})}},l={parameters:{...n({disable:!0}),...r({source:{code:t`defineActionsParam({
                    disable: true
                })`}})}},u={parameters:{...n({handles:[`onClick`,`onMouseOver`,`onSubmit`]}),...r({source:{code:t`defineActionsParam({
                    handles: ['onClick', 'onMouseOver', 'onSubmit']
                })`}})}},d={parameters:{...n({argTypesRegex:`^on[A-Z].*`,handles:[`customEvent`,`anotherEvent`],disable:!1}),...r({source:{code:t`defineActionsParam({
                argTypesRegex: '^on[A-Z].*',
                handles: ['customEvent', 'anotherEvent'],
                disable: false
            })`}})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source},description:{story:"Basic example showing how to configure actions parameters with `argTypesRegex`\nto automatically match event handler props.",...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source},description:{story:`Example showing how to disable actions for a story`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source},description:{story:`Example showing how to explicitly specify action handlers`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source},description:{story:`Example showing combined configuration options`,...d.parameters?.docs?.description}}};var f=[`WithArgTypesRegex`,`DisabledActions`,`ExplicitHandles`,`CombinedConfig`];export{d as CombinedConfig,l as DisabledActions,u as ExplicitHandles,c as WithArgTypesRegex,f as __namedExportsOrder,s as default};