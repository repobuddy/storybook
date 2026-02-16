import{j as i}from"./iframe-CgJZ0YZZ.js";import{d as o}from"./dedent-BuYMbVyj.js";import{s as c}from"./show_doc_source-DUPdG6VB.js";import{d as r}from"./define_actions_param-D945LAT3.js";import{d as t}from"./define_docs_param-lmgaBKCF.js";import"./preload-helper-PPVm8Dsz.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,h={title:"Parameters/defineActionsParam",tags:["func","new","version:1.0"],decorators:[c()],args:{onClick:d()},render:()=>i.jsx(i.Fragment,{})},e={parameters:{...r({argTypesRegex:"^on[A-Z].*"}),...t({source:{code:o`defineActionsParam({
                    argTypesRegex: '^on[A-Z].*'
                })`}})}},n={parameters:{...r({disable:!0}),...t({source:{code:o`defineActionsParam({
                    disable: true
                })`}})}},s={parameters:{...r({handles:["onClick","onMouseOver","onSubmit"]}),...t({source:{code:o`defineActionsParam({
                    handles: ['onClick', 'onMouseOver', 'onSubmit']
                })`}})}},a={parameters:{...r({argTypesRegex:"^on[A-Z].*",handles:["customEvent","anotherEvent"],disable:!1}),...t({source:{code:o`defineActionsParam({
                argTypesRegex: '^on[A-Z].*',
                handles: ['customEvent', 'anotherEvent'],
                disable: false
            })`}})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source},description:{story:"Basic example showing how to configure actions parameters with `argTypesRegex`\nto automatically match event handler props.",...e.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source},description:{story:"Example showing how to disable actions for a story",...n.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source},description:{story:"Example showing how to explicitly specify action handlers",...s.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source},description:{story:"Example showing combined configuration options",...a.parameters?.docs?.description}}};const A=["WithArgTypesRegex","DisabledActions","ExplicitHandles","CombinedConfig"];export{a as CombinedConfig,n as DisabledActions,s as ExplicitHandles,e as WithArgTypesRegex,A as __namedExportsOrder,h as default};
