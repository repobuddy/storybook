import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{d as e}from"./dedent-DVFkJXTl.js";import{d as r}from"./define_docs_param-lmgaBKCF.js";import{d as a}from"./define_parameters-Dh8E5HRZ.js";import{s as R}from"./show_doc_source-CWgnZoeJ.js";const B={title:"parameters/defineParameters",tags:["new","version:1.0.0"],decorators:[R()],render:()=>c.jsx(c.Fragment,{})},s={parameters:{...a({layout:"centered"}),...r({source:{code:e`defineParameters({
                layout: 'centered'
            })`}})}},t={parameters:{...a({backgrounds:{default:"light"}}),...r({source:{code:e`defineParameters({
                backgrounds: {
                    default: 'light'
                }
            })`}})}},o={parameters:{...a({docs:{description:{story:"This is a story"}}}),...r({source:{code:e`defineParameters({
                docs: {
                    description: {
                        story: 'This is a story'
                    }
                }
            })`}})}},d={parameters:{...a({viewport:{defaultViewport:"tablet1"}}),...r({source:{code:e`defineParameters({
                viewport: {
                    defaultViewport: 'tablet1'
                }
            })`}})}},i={parameters:{...a({layout:"padded",something:{blah:"beer"}}),...r({source:{code:e`defineParameters({
                layout: 'padded',
                something: {
                    blah: 'beer'
                }
            })`}})},render:()=>c.jsx("div",{children:"You can use this to configure parameters that are not defined in the type"})},n={parameters:{...a({actions:{argTypesRegex:"^on[A-Z].*"}}),...r({source:{code:e`defineParameters<ActionsParam>({
                actions: {
                    argTypesRegex: '^on[A-Z].*'
                }
            })`}})}};var m,p,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    ...defineParameters({
      layout: 'centered'
    }),
    ...defineDocsParam({
      source: {
        code: dedent\`defineParameters({
                layout: 'centered'
            })\`
      }
    })
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var f,P,h;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    ...defineParameters({
      backgrounds: {
        default: 'light'
      }
    }),
    ...defineDocsParam({
      source: {
        code: dedent\`defineParameters({
                backgrounds: {
                    default: 'light'
                }
            })\`
      }
    })
  }
}`,...(h=(P=t.parameters)==null?void 0:P.docs)==null?void 0:h.source}}};var l,g,y;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  parameters: {
    ...defineParameters({
      docs: {
        description: {
          story: 'This is a story'
        }
      }
    }),
    ...defineDocsParam({
      source: {
        code: dedent\`defineParameters({
                docs: {
                    description: {
                        story: 'This is a story'
                    }
                }
            })\`
      }
    })
  }
}`,...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var b,w,W;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    ...defineParameters({
      viewport: {
        defaultViewport: 'tablet1'
      }
    }),
    ...defineDocsParam({
      source: {
        code: dedent\`defineParameters({
                viewport: {
                    defaultViewport: 'tablet1'
                }
            })\`
      }
    })
  }
}`,...(W=(w=d.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var x,D,A;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: {
    ...defineParameters({
      layout: 'padded',
      something: {
        blah: 'beer'
      }
    }),
    ...defineDocsParam({
      source: {
        code: dedent\`defineParameters({
                layout: 'padded',
                something: {
                    blah: 'beer'
                }
            })\`
      }
    })
  },
  render: () => <div>You can use this to configure parameters that are not defined in the type</div>
}`,...(A=(D=i.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var v,T,S,k,V;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    ...defineParameters<ActionsParam>({
      actions: {
        argTypesRegex: '^on[A-Z].*'
      }
    }),
    ...defineDocsParam({
      source: {
        code: dedent\`defineParameters<ActionsParam>({
                actions: {
                    argTypesRegex: '^on[A-Z].*'
                }
            })\`
      }
    })
  }
}`,...(S=(T=n.parameters)==null?void 0:T.docs)==null?void 0:S.source},description:{story:"Example showing how to use `defineParameters` to configure actions parameters",...(V=(k=n.parameters)==null?void 0:k.docs)==null?void 0:V.description}}};const L=["WithLayout","WithBackgroundsParam","WithDocsParam","WithViewportParam","WithOtherParams","WithActionsParam"];export{n as WithActionsParam,t as WithBackgroundsParam,o as WithDocsParam,s as WithLayout,i as WithOtherParams,d as WithViewportParam,L as __namedExportsOrder,B as default};
