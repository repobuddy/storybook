import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-B066xLLY.js";import{n,r}from"./iframe-CiruSIaA.js";import{n as i,t as a}from"./dedent-DQaCLeUO.js";import{O as o,p as s,t as c}from"./src-Cjk9gBKT.js";var l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{i(),c(),n(),l=t(),u=r.meta({title:`parameters/defineParameters`,tags:[`autodocs`,`!snapshot`,`func`,`new`,`version:1.0`],decorators:[o()],parameters:s({docs:{description:{component:["`defineParameters` is used to define parameters for a story or component.","Note that it does not work in `preview.ts`, which requires the parameters to be inlined.","In that case, use the `satisfies StorybookBuiltInParams` instead."].join(`
`)}}}),render:()=>(0,l.jsx)(l.Fragment,{})}),d=u.story({parameters:s({layout:`centered`,docs:{source:{code:a`defineParameters({
                layout: 'centered'
            })`}}})}),f=u.story({parameters:s({backgrounds:{default:`light`},docs:{source:{code:a`defineParameters({
                backgrounds: {
                    default: 'light'
                }
            })`}}})}),p=u.story({parameters:s({docs:{description:{story:`This is a story`},source:{code:a`defineParameters({
                docs: {
                    description: {
                        story: 'This is a story'
                    }
                }
            })`}}})}),m=u.story({parameters:s({viewport:{defaultViewport:`tablet1`},docs:{source:{code:a`defineParameters({
                viewport: {
                    defaultViewport: 'tablet1'
                }
            })`}}})}),h=u.story({parameters:s({something:{blah:`beer`},docs:{source:{code:a`defineParameters({
                something: {
                    blah: 'beer'
                }
            })`}}}),render:()=>(0,l.jsx)(`div`,{children:`You can use this to configure parameters that are not defined in the type`})}),g=u.story({parameters:s({actions:{argTypesRegex:`^on[A-Z].*`}},{docs:{source:{code:a`defineParameters<ActionsParam>({
                actions: {
                    argTypesRegex: '^on[A-Z].*'
                }
            })`}}})}),_=u.story({parameters:s({layout:`centered`},{docs:{description:{story:`This is a story`},source:{code:a`defineParameters(
                    { layout: 'centered' },
                    { docs: { description: { story: 'This is a story' } } }
                )`}}})}),v=[`WithLayout`,`WithBackgroundsParam`,`WithDocsParam`,`WithViewportParam`,`WithOtherParams`,`WithActionsParam`,`ComposingParameters`],d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
  parameters: defineParameters({
    layout: 'centered',
    docs: {
      source: {
        code: dedent\`defineParameters({
                layout: 'centered'
            })\`
      }
    }
  }) as Parameters
})`,...d.input.parameters?.docs?.source}}},f.input.parameters={...f.input.parameters,docs:{...f.input.parameters?.docs,source:{originalSource:`meta.story({
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
  }) as Parameters
})`,...f.input.parameters?.docs?.source}}},p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
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
  }) as Parameters
})`,...p.input.parameters?.docs?.source}}},m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
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
  }) as Parameters
})`,...m.input.parameters?.docs?.source}}},h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{originalSource:`meta.story({
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
  }) as Parameters,
  render: () => <div>You can use this to configure parameters that are not defined in the type</div>
})`,...h.input.parameters?.docs?.source}}},g.input.parameters={...g.input.parameters,docs:{...g.input.parameters?.docs,source:{originalSource:`meta.story({
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
  }) as Parameters
})`,...g.input.parameters?.docs?.source},description:{story:"Example showing how to use `defineParameters` to configure actions parameters",...g.input.parameters?.docs?.description}}},_.input.parameters={..._.input.parameters,docs:{..._.input.parameters?.docs,source:{originalSource:`meta.story({
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
  }) as Parameters
})`,..._.input.parameters?.docs?.source}}}})))()}y();export{_ as ComposingParameters,g as WithActionsParam,f as WithBackgroundsParam,p as WithDocsParam,d as WithLayout,h as WithOtherParams,m as WithViewportParam,v as __namedExportsOrder};