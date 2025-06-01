import{j as i,d as r}from"./iframe-7Yb0LowJ.js";import{d as o}from"./dedent-DVFkJXTl.js";import{s as D}from"./show_doc_source-Ca9dZB63.js";function t(C){return{actions:C}}const{fn:O}=__STORYBOOK_MODULE_TEST__,M={title:"Parameters/defineActionsParam",tags:["new","version:1.0"],decorators:[D()],args:{onClick:O()},render:()=>i.jsx(i.Fragment,{})},e={parameters:{...t({argTypesRegex:"^on[A-Z].*"}),...r({source:{code:o`defineActionsParam({
                    argTypesRegex: '^on[A-Z].*'
                })`}})}},n={parameters:{...t({disable:!0}),...r({source:{code:o`defineActionsParam({
                    disable: true
                })`}})}},s={parameters:{...t({handles:["onClick","onMouseOver","onSubmit"]}),...r({source:{code:o`defineActionsParam({
                    handles: ['onClick', 'onMouseOver', 'onSubmit']
                })`}})}},a={parameters:{...t({argTypesRegex:"^on[A-Z].*",handles:["customEvent","anotherEvent"],disable:!1}),...r({source:{code:o`defineActionsParam({
                argTypesRegex: '^on[A-Z].*',
                handles: ['customEvent', 'anotherEvent'],
                disable: false
            })`}})}};var c,d,m,p,l;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source},description:{story:"Basic example showing how to configure actions parameters with `argTypesRegex`\nto automatically match event handler props.",...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.description}}};var u,g,f,h,A;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source},description:{story:"Example showing how to disable actions for a story",...(A=(h=n.parameters)==null?void 0:h.docs)==null?void 0:A.description}}};var x,P,y,b,E;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(y=(P=s.parameters)==null?void 0:P.docs)==null?void 0:y.source},description:{story:"Example showing how to explicitly specify action handlers",...(E=(b=s.parameters)==null?void 0:b.docs)==null?void 0:E.description}}};var v,T,R,S,w;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(R=(T=a.parameters)==null?void 0:T.docs)==null?void 0:R.source},description:{story:"Example showing combined configuration options",...(w=(S=a.parameters)==null?void 0:S.docs)==null?void 0:w.description}}};const j=["WithArgTypesRegex","DisabledActions","ExplicitHandles","CombinedConfig"];export{a as CombinedConfig,n as DisabledActions,s as ExplicitHandles,e as WithArgTypesRegex,j as __namedExportsOrder,M as default};
