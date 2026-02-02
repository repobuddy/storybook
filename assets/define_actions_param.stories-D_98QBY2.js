import{j as i}from"./iframe-BqLwFzaK.js";import{s as d}from"./with_story_card-BaHDPBut.js";import{d as a}from"./define_docs_param-lmgaBKCF.js";import{d as o}from"./dedent-BuYMbVyj.js";import"./preload-helper-PPVm8Dsz.js";function t(c){return{actions:c}}const{fn:m}=__STORYBOOK_MODULE_TEST__,h={title:"Parameters/defineActionsParam",tags:["new","version:1.0"],decorators:[d()],args:{onClick:m()},render:()=>i.jsx(i.Fragment,{})},e={parameters:{...t({argTypesRegex:"^on[A-Z].*"}),...a({source:{code:o`defineActionsParam({
                    argTypesRegex: '^on[A-Z].*'
                })`}})}},n={parameters:{...t({disable:!0}),...a({source:{code:o`defineActionsParam({
                    disable: true
                })`}})}},s={parameters:{...t({handles:["onClick","onMouseOver","onSubmit"]}),...a({source:{code:o`defineActionsParam({
                    handles: ['onClick', 'onMouseOver', 'onSubmit']
                })`}})}},r={parameters:{...t({argTypesRegex:"^on[A-Z].*",handles:["customEvent","anotherEvent"],disable:!1}),...a({source:{code:o`defineActionsParam({
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
}`,...s.parameters?.docs?.source},description:{story:"Example showing how to explicitly specify action handlers",...s.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source},description:{story:"Example showing combined configuration options",...r.parameters?.docs?.description}}};const A=["WithArgTypesRegex","DisabledActions","ExplicitHandles","CombinedConfig"];export{r as CombinedConfig,n as DisabledActions,s as ExplicitHandles,e as WithArgTypesRegex,A as __namedExportsOrder,h as default};
