import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-6sF1Ejqi.js";import{n,t as r}from"./dedent-r2SG9fgm.js";import{h as i,l as a,t as o}from"./src-B1BCb3C2.js";var s,c,l,u,d,f,p,m,h,g;e((()=>{n(),o(),s=t(),c={title:`parameters/defineParameters`,tags:[`autodocs`,`!snapshot`,`func`,`new`,`version:1.0`],decorators:[i()],parameters:a({docs:{description:{component:["`defineParameters` is used to define parameters for a story or component.","Note that it does not work in `preview.ts`, which requires the parameters to be inlined.","In that case, use the `satisfies StorybookBuiltInParams` instead."].join(`
`)}}}),render:()=>(0,s.jsx)(s.Fragment,{})},l={parameters:a({layout:`centered`,docs:{source:{code:r`defineParameters({
                layout: 'centered'
            })`}}})},u={parameters:a({backgrounds:{default:`light`},docs:{source:{code:r`defineParameters({
                backgrounds: {
                    default: 'light'
                }
            })`}}})},d={parameters:a({docs:{description:{story:`This is a story`},source:{code:r`defineParameters({
                docs: {
                    description: {
                        story: 'This is a story'
                    }
                }
            })`}}})},f={parameters:a({viewport:{defaultViewport:`tablet1`},docs:{source:{code:r`defineParameters({
                viewport: {
                    defaultViewport: 'tablet1'
                }
            })`}}})},p={parameters:a({something:{blah:`beer`},docs:{source:{code:r`defineParameters({
                something: {
                    blah: 'beer'
                }
            })`}}}),render:()=>(0,s.jsx)(`div`,{children:`You can use this to configure parameters that are not defined in the type`})},m={parameters:a({actions:{argTypesRegex:`^on[A-Z].*`}},{docs:{source:{code:r`defineParameters<ActionsParam>({
                actions: {
                    argTypesRegex: '^on[A-Z].*'
                }
            })`}}})},h={parameters:a({layout:`centered`},{docs:{description:{story:`This is a story`},source:{code:r`defineParameters(
                    { layout: 'centered' },
                    { docs: { description: { story: 'This is a story' } } }
                )`}}})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:"Example showing how to use `defineParameters` to configure actions parameters",...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`WithLayout`,`WithBackgroundsParam`,`WithDocsParam`,`WithViewportParam`,`WithOtherParams`,`WithActionsParam`,`ComposingParameters`]}))();export{h as ComposingParameters,m as WithActionsParam,u as WithBackgroundsParam,d as WithDocsParam,l as WithLayout,p as WithOtherParams,f as WithViewportParam,g as __namedExportsOrder,c as default};