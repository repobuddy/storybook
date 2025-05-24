import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{d as r}from"./dedent-DVFkJXTl.js";import{s as B}from"./show_doc_source-CWgnZoeJ.js";import{d as e}from"./define_parameters-BUOuTmGI.js";const I={title:"parameters/defineParameters",tags:["new","version:1.0","autodocs"],decorators:[B()],parameters:e({docs:{description:{component:["`defineParameters` is used to define parameters for a story or component.","Note that it does not work in `preview.ts`, which requires the parameters to be inlined.","In that case, use the `satisfies StorybookBuiltInParams` instead."].join(`
`)}}}),render:()=>i.jsx(i.Fragment,{})},s={parameters:e({layout:"centered",docs:{source:{code:r`defineParameters({
                layout: 'centered'
            })`}}})},t={parameters:e({backgrounds:{default:"light"},docs:{source:{code:r`defineParameters({
                backgrounds: {
                    default: 'light'
                }
            })`}}})},n={parameters:e({docs:{description:{story:"This is a story"},source:{code:r`defineParameters({
                docs: {
                    description: {
                        story: 'This is a story'
                    }
                }
            })`}}})},o={parameters:e({viewport:{defaultViewport:"tablet1"},docs:{source:{code:r`defineParameters({
                viewport: {
                    defaultViewport: 'tablet1'
                }
            })`}}})},d={parameters:e({something:{blah:"beer"},docs:{source:{code:r`defineParameters({
                something: {
                    blah: 'beer'
                }
            })`}}}),render:()=>i.jsx("div",{children:"You can use this to configure parameters that are not defined in the type"})},a={parameters:e({actions:{argTypesRegex:"^on[A-Z].*"}},{docs:{source:{code:r`defineParameters<ActionsParam>({
                actions: {
                    argTypesRegex: '^on[A-Z].*'
                }
            })`}}})},c={parameters:e({layout:"centered"},{docs:{source:{code:r`defineParameters({ layout: 'centered' })`}}})};var m,p,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: defineParameters({
    layout: 'centered',
    docs: {
      source: {
        code: dedent\`defineParameters({
                layout: 'centered'
            })\`
      }
    }
  })
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var f,h,l;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: defineParameters({
    backgrounds: {
      default: 'light'
    },
    docs: {
      source: {
        code: dedent\`defineParameters({
                backgrounds: {
                    default: 'light'
                }
            })\`
      }
    }
  })
}`,...(l=(h=t.parameters)==null?void 0:h.docs)==null?void 0:l.source}}};var P,g,y;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: defineParameters({
    docs: {
      description: {
        story: 'This is a story'
      },
      source: {
        code: dedent\`defineParameters({
                docs: {
                    description: {
                        story: 'This is a story'
                    }
                }
            })\`
      }
    }
  })
}`,...(y=(g=n.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var b,w,W;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: defineParameters({
    viewport: {
      defaultViewport: 'tablet1'
    },
    docs: {
      source: {
        code: dedent\`defineParameters({
                viewport: {
                    defaultViewport: 'tablet1'
                }
            })\`
      }
    }
  })
}`,...(W=(w=o.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var x,v,A;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: defineParameters({
    something: {
      blah: 'beer'
    },
    docs: {
      source: {
        code: dedent\`defineParameters({
                something: {
                    blah: 'beer'
                }
            })\`
      }
    }
  }),
  render: () => <div>You can use this to configure parameters that are not defined in the type</div>
}`,...(A=(v=d.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var S,k,T,V,j;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: defineParameters<ActionsParam>({
    actions: {
      argTypesRegex: '^on[A-Z].*'
    }
  }, {
    docs: {
      source: {
        code: dedent\`defineParameters<ActionsParam>({
                actions: {
                    argTypesRegex: '^on[A-Z].*'
                }
            })\`
      }
    }
  })
}`,...(T=(k=a.parameters)==null?void 0:k.docs)==null?void 0:T.source},description:{story:"Example showing how to use `defineParameters` to configure actions parameters",...(j=(V=a.parameters)==null?void 0:V.docs)==null?void 0:j.description}}};var R,Z,_;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: defineParameters({
    layout: 'centered'
  }, {
    docs: {
      source: {
        code: dedent\`defineParameters({ layout: 'centered' })\`
      }
    }
  })
}`,...(_=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:_.source}}};const L=["WithLayout","WithBackgroundsParam","WithDocsParam","WithViewportParam","WithOtherParams","WithActionsParam","ComposingParameters"];export{c as ComposingParameters,a as WithActionsParam,t as WithBackgroundsParam,n as WithDocsParam,s as WithLayout,d as WithOtherParams,o as WithViewportParam,L as __namedExportsOrder,I as default};
