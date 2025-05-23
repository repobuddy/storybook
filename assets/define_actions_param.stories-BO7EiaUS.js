import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{f as D}from"./index-CB-nUy61.js";import{d as s}from"./dedent-DVFkJXTl.js";import{s as Z}from"./show_doc_source-CWgnZoeJ.js";import{d as a}from"./define_docs_param-lmgaBKCF.js";import"./index-DsR4G5ps.js";import"./index-D4lIrffr.js";import"./index-DGfY4z2V.js";import"./index-CcVp9PAx.js";import"./index-DsJinFGm.js";import"./iframe-CuJswpXI.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function t(S){return{actions:S}}const J={title:"Parameters/defineActionsParam",tags:["new","version:1.0"],decorators:[Z()],args:{onClick:D()},render:()=>i.jsx(i.Fragment,{})},e={parameters:{...t({argTypesRegex:"^on[A-Z].*"}),...a({source:{code:s`defineActionsParam({
                    argTypesRegex: '^on[A-Z].*'
                })`}})}},n={parameters:{...t({disable:!0}),...a({source:{code:s`defineActionsParam({
                    disable: true
                })`}})}},r={parameters:{...t({handles:["onClick","onMouseOver","onSubmit"]}),...a({source:{code:s`defineActionsParam({
                    handles: ['onClick', 'onMouseOver', 'onSubmit']
                })`}})}},o={parameters:{...t({argTypesRegex:"^on[A-Z].*",handles:["customEvent","anotherEvent"],disable:!1}),...a({source:{code:s`defineActionsParam({
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
}`,...(g=(f=n.parameters)==null?void 0:f.docs)==null?void 0:g.source},description:{story:"Example showing how to disable actions for a story",...(A=(h=n.parameters)==null?void 0:h.docs)==null?void 0:A.description}}};var x,P,y,b,E;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(y=(P=r.parameters)==null?void 0:P.docs)==null?void 0:y.source},description:{story:"Example showing how to explicitly specify action handlers",...(E=(b=r.parameters)==null?void 0:b.docs)==null?void 0:E.description}}};var v,R,T,w,C;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(T=(R=o.parameters)==null?void 0:R.docs)==null?void 0:T.source},description:{story:"Example showing combined configuration options",...(C=(w=o.parameters)==null?void 0:w.docs)==null?void 0:C.description}}};const K=["WithArgTypesRegex","DisabledActions","ExplicitHandles","CombinedConfig"];export{o as CombinedConfig,n as DisabledActions,r as ExplicitHandles,e as WithArgTypesRegex,K as __namedExportsOrder,J as default};
