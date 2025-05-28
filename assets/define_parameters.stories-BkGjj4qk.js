import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{d as r}from"./dedent-DVFkJXTl.js";import"./show_html-C2QZHDjw.js";import{s as B}from"./show_doc_source-CWgnZoeJ.js";import{d as e}from"./define_parameters-BUOuTmGI.js";import"./index-D4lIrffr.js";const Y={title:"parameters/defineParameters",tags:["new","version:1.0","autodocs"],decorators:[B()],parameters:e({docs:{description:{component:["`defineParameters` is used to define parameters for a story or component.","Note that it does not work in `preview.ts`, which requires the parameters to be inlined.","In that case, use the `satisfies StorybookBuiltInParams` instead."].join(`
`)}}}),render:()=>c.jsx(c.Fragment,{})},a={parameters:e({layout:"centered",docs:{source:{code:r`defineParameters({
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
            })`}}})},i={parameters:e({something:{blah:"beer"},docs:{source:{code:r`defineParameters({
                something: {
                    blah: 'beer'
                }
            })`}}}),render:()=>c.jsx("div",{children:"You can use this to configure parameters that are not defined in the type"})},s={parameters:e({actions:{argTypesRegex:"^on[A-Z].*"}},{docs:{source:{code:r`defineParameters<ActionsParam>({
                actions: {
                    argTypesRegex: '^on[A-Z].*'
                }
            })`}}})},d={parameters:e({layout:"centered"},{docs:{description:{story:"This is a story"},source:{code:r`defineParameters(
                    { layout: 'centered' },
                    { docs: { description: { story: 'This is a story' } } }
                )`}}})};var m,p,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,f,l;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(l=(f=t.parameters)==null?void 0:f.docs)==null?void 0:l.source}}};var P,g,y;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(y=(g=n.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var b,w,T;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(T=(w=o.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var W,x,v;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(v=(x=i.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var A,S,k,V,j;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(k=(S=s.parameters)==null?void 0:S.docs)==null?void 0:k.source},description:{story:"Example showing how to use `defineParameters` to configure actions parameters",...(j=(V=s.parameters)==null?void 0:V.docs)==null?void 0:j.description}}};var R,Z,_;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: defineParameters({
    layout: 'centered'
  }, {
    docs: {
      description: {
        story: 'This is a story'
      },
      source: {
        code: dedent\`defineParameters(
                    { layout: 'centered' },
                    { docs: { description: { story: 'This is a story' } } }
                )\`
      }
    }
  })
}`,...(_=(Z=d.parameters)==null?void 0:Z.docs)==null?void 0:_.source}}};const q=["WithLayout","WithBackgroundsParam","WithDocsParam","WithViewportParam","WithOtherParams","WithActionsParam","ComposingParameters"];export{d as ComposingParameters,s as WithActionsParam,t as WithBackgroundsParam,n as WithDocsParam,a as WithLayout,i as WithOtherParams,o as WithViewportParam,q as __namedExportsOrder,Y as default};
