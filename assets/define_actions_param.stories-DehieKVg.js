import{j as i}from"./iframe-BJ-riZOY.js";import{d as a}from"./dedent-BuYMbVyj.js";import"./show_source-DxRl531K.js";import{s as c}from"./show_doc_source-BDlDdvfH.js";import{d as r}from"./define_actions_param-D945LAT3.js";import{d as t}from"./define_docs_param-lmgaBKCF.js";import"./preload-helper-PPVm8Dsz.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,A={title:"Parameters/defineActionsParam",tags:["func","!snapshot","new","version:1.0"],decorators:[c()],args:{onClick:d()},render:()=>i.jsx(i.Fragment,{})},e={parameters:{...r({argTypesRegex:"^on[A-Z].*"}),...t({source:{code:a`defineActionsParam({
                    argTypesRegex: '^on[A-Z].*'
                })`}})}},n={parameters:{...r({disable:!0}),...t({source:{code:a`defineActionsParam({
                    disable: true
                })`}})}},s={parameters:{...r({handles:["onClick","onMouseOver","onSubmit"]}),...t({source:{code:a`defineActionsParam({
                    handles: ['onClick', 'onMouseOver', 'onSubmit']
                })`}})}},o={parameters:{...r({argTypesRegex:"^on[A-Z].*",handles:["customEvent","anotherEvent"],disable:!1}),...t({source:{code:a`defineActionsParam({
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
}`,...s.parameters?.docs?.source},description:{story:"Example showing how to explicitly specify action handlers",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source},description:{story:"Example showing combined configuration options",...o.parameters?.docs?.description}}};const x=["WithArgTypesRegex","DisabledActions","ExplicitHandles","CombinedConfig"];export{o as CombinedConfig,n as DisabledActions,s as ExplicitHandles,e as WithArgTypesRegex,x as __namedExportsOrder,A as default};
