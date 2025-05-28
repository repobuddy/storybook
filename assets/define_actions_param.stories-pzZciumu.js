import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{f as D}from"./index-CB-nUy61.js";import{d as o}from"./dedent-DVFkJXTl.js";import"./show_html-C2QZHDjw.js";import{s as Z}from"./show_doc_source-CWgnZoeJ.js";import{d as a}from"./define_docs_param-lmgaBKCF.js";import"./index-D4lIrffr.js";function t(S){return{actions:S}}const B={title:"Parameters/defineActionsParam",tags:["new","version:1.0"],decorators:[Z()],args:{onClick:D()},render:()=>i.jsx(i.Fragment,{})},e={parameters:{...t({argTypesRegex:"^on[A-Z].*"}),...a({source:{code:o`defineActionsParam({
                    argTypesRegex: '^on[A-Z].*'
                })`}})}},n={parameters:{...t({disable:!0}),...a({source:{code:o`defineActionsParam({
                    disable: true
                })`}})}},s={parameters:{...t({handles:["onClick","onMouseOver","onSubmit"]}),...a({source:{code:o`defineActionsParam({
                    handles: ['onClick', 'onMouseOver', 'onSubmit']
                })`}})}},r={parameters:{...t({argTypesRegex:"^on[A-Z].*",handles:["customEvent","anotherEvent"],disable:!1}),...a({source:{code:o`defineActionsParam({
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
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source},description:{story:"Basic example showing how to configure actions parameters with `argTypesRegex`\nto automatically match event handler props.",...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.description}}};var u,f,g,h,A;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(f=n.parameters)==null?void 0:f.docs)==null?void 0:g.source},description:{story:"Example showing how to disable actions for a story",...(A=(h=n.parameters)==null?void 0:h.docs)==null?void 0:A.description}}};var x,P,y,b,E;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(y=(P=s.parameters)==null?void 0:P.docs)==null?void 0:y.source},description:{story:"Example showing how to explicitly specify action handlers",...(E=(b=s.parameters)==null?void 0:b.docs)==null?void 0:E.description}}};var v,R,T,w,C;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(T=(R=r.parameters)==null?void 0:R.docs)==null?void 0:T.source},description:{story:"Example showing combined configuration options",...(C=(w=r.parameters)==null?void 0:w.docs)==null?void 0:C.description}}};const F=["WithArgTypesRegex","DisabledActions","ExplicitHandles","CombinedConfig"];export{r as CombinedConfig,n as DisabledActions,s as ExplicitHandles,e as WithArgTypesRegex,F as __namedExportsOrder,B as default};
