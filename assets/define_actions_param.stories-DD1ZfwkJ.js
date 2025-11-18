import{j as i,s as d,d as r}from"./iframe-CoPqPLz4.js";import{d as o}from"./dedent-C8rexWvS.js";import"./preload-helper-PPVm8Dsz.js";function t(c){return{actions:c}}const{fn:m}=__STORYBOOK_MODULE_TEST__,g={title:"Parameters/defineActionsParam",tags:["new","version:1.0"],decorators:[d()],args:{onClick:m()},render:()=>i.jsx(i.Fragment,{})},e={parameters:{...t({argTypesRegex:"^on[A-Z].*"}),...r({source:{code:o`defineActionsParam({
                    argTypesRegex: '^on[A-Z].*'
                })`}})}},n={parameters:{...t({disable:!0}),...r({source:{code:o`defineActionsParam({
                    disable: true
                })`}})}},s={parameters:{...t({handles:["onClick","onMouseOver","onSubmit"]}),...r({source:{code:o`defineActionsParam({
                    handles: ['onClick', 'onMouseOver', 'onSubmit']
                })`}})}},a={parameters:{...t({argTypesRegex:"^on[A-Z].*",handles:["customEvent","anotherEvent"],disable:!1}),...r({source:{code:o`defineActionsParam({
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
}`,...a.parameters?.docs?.source},description:{story:"Example showing combined configuration options",...a.parameters?.docs?.description}}};const f=["WithArgTypesRegex","DisabledActions","ExplicitHandles","CombinedConfig"];export{a as CombinedConfig,n as DisabledActions,s as ExplicitHandles,e as WithArgTypesRegex,f as __namedExportsOrder,g as default};
