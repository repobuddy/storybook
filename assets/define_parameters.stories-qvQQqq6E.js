import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{d as r}from"./dedent-DVFkJXTl.js";import{s as j}from"./show_doc_source-CWgnZoeJ.js";import{d as a}from"./define_docs_param-lmgaBKCF.js";import{d as e}from"./define_parameters-Dh8E5HRZ.js";import"./index-DsR4G5ps.js";import"./index-D4lIrffr.js";import"./index-DGfY4z2V.js";import"./index-CcVp9PAx.js";import"./index-DsJinFGm.js";import"./iframe-CuJswpXI.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";const C={title:"parameters/defineParameters",tags:["new","version:1.0","autodocs"],decorators:[j()],parameters:e({docs:{description:{component:["`defineParameters` is used to define parameters for a story or component.","Note that it does not work in `preview.ts`, which requires the parameters to be inlined.","In that case, use the `satisfies StorybookBuiltInParams` instead."].join(`
`)}}}),render:()=>c.jsx(c.Fragment,{})},n={parameters:{...e({layout:"centered"}),...a({source:{code:r`defineParameters({
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
            })`}})}},i={parameters:{...e({viewport:{defaultViewport:"tablet1"}}),...a({source:{code:r`defineParameters({
                viewport: {
                    defaultViewport: 'tablet1'
                }
            })`}})}},d={parameters:{...e({layout:"padded",something:{blah:"beer"}}),...a({source:{code:r`defineParameters({
                layout: 'padded',
                something: {
                    blah: 'beer'
                }
            })`}})},render:()=>c.jsx("div",{children:"You can use this to configure parameters that are not defined in the type"})},t={parameters:{...e({actions:{argTypesRegex:"^on[A-Z].*"}}),...a({source:{code:r`defineParameters<ActionsParam>({
                actions: {
                    argTypesRegex: '^on[A-Z].*'
                }
            })`}})}};var m,p,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var f,h,P;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var b,w,W;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(W=(w=i.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var x,D,v;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(v=(D=d.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};var A,k,S,T,V;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(S=(k=t.parameters)==null?void 0:k.docs)==null?void 0:S.source},description:{story:"Example showing how to use `defineParameters` to configure actions parameters",...(V=(T=t.parameters)==null?void 0:T.docs)==null?void 0:V.description}}};const G=["WithLayout","WithBackgroundsParam","WithDocsParam","WithViewportParam","WithOtherParams","WithActionsParam"];export{t as WithActionsParam,s as WithBackgroundsParam,o as WithDocsParam,n as WithLayout,d as WithOtherParams,i as WithViewportParam,G as __namedExportsOrder,C as default};
