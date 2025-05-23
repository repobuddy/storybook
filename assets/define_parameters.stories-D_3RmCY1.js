import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{d as r}from"./dedent-DVFkJXTl.js";import{s as j}from"./show_doc_source-CWgnZoeJ.js";import{d as a}from"./define_docs_param-lmgaBKCF.js";import{d as e}from"./define_parameters-Dh8E5HRZ.js";const O={title:"parameters/defineParameters",tags:["new","version:1.0","autodocs"],decorators:[j()],parameters:e({docs:{description:{component:["`defineParameters` is used to define parameters for a story or component.","Note that it does not work in `preview.ts`, which requires the parameters to be inlined.","In that case, use the `satisfies StorybookBuiltInParams` instead."].join(`
`)}}}),render:()=>c.jsx(c.Fragment,{})},t={parameters:{...e({layout:"centered"}),...a({source:{code:r`defineParameters({
                layout: 'centered'
            })`}})}},s={parameters:{...e({backgrounds:{default:"light"}}),...a({source:{code:r`defineParameters({
                backgrounds: {
                    default: 'light'
                }
            })`}})}},o={parameters:{...e({docs:{description:{story:"This is a story"}}}),...a({source:{code:r`defineParameters({
                docs: {
                    description: {
                        story: 'This is a story'
                    }
                }
            })`}})}},d={parameters:{...e({viewport:{defaultViewport:"tablet1"}}),...a({source:{code:r`defineParameters({
                viewport: {
                    defaultViewport: 'tablet1'
                }
            })`}})}},i={parameters:{...e({layout:"padded",something:{blah:"beer"}}),...a({source:{code:r`defineParameters({
                layout: 'padded',
                something: {
                    blah: 'beer'
                }
            })`}})},render:()=>c.jsx("div",{children:"You can use this to configure parameters that are not defined in the type"})},n={parameters:{...e({actions:{argTypesRegex:"^on[A-Z].*"}}),...a({source:{code:r`defineParameters<ActionsParam>({
                actions: {
                    argTypesRegex: '^on[A-Z].*'
                }
            })`}})}};var m,p,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var f,h,P;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(P=(h=s.parameters)==null?void 0:h.docs)==null?void 0:P.source}}};var l,g,y;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(W=(w=d.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var x,D,v;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(v=(D=i.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};var A,k,S,T,V;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(S=(k=n.parameters)==null?void 0:k.docs)==null?void 0:S.source},description:{story:"Example showing how to use `defineParameters` to configure actions parameters",...(V=(T=n.parameters)==null?void 0:T.docs)==null?void 0:V.description}}};const I=["WithLayout","WithBackgroundsParam","WithDocsParam","WithViewportParam","WithOtherParams","WithActionsParam"];export{n as WithActionsParam,s as WithBackgroundsParam,o as WithDocsParam,t as WithLayout,i as WithOtherParams,d as WithViewportParam,I as __namedExportsOrder,O as default};
