import"./components-DmejZTLj.js";import"./react-K5peCFg_.js";import"./react-dom-CYc0L8kE.js";import{t as e}from"./jsx-runtime-BUC2lftT.js";import{t}from"./dedent-rZS-CQtP.js";import{p as n,s as r}from"./src-CPfUkyQY.js";var i=e(),a={title:`parameters/defineParameters`,tags:[`autodocs`,`!snapshot`,`func`,`new`,`version:1.0`],decorators:[n()],parameters:r({docs:{description:{component:["`defineParameters` is used to define parameters for a story or component.","Note that it does not work in `preview.ts`, which requires the parameters to be inlined.","In that case, use the `satisfies StorybookBuiltInParams` instead."].join(`
`)}}}),render:()=>(0,i.jsx)(i.Fragment,{})},o={parameters:r({layout:`centered`,docs:{source:{code:t`defineParameters({
                layout: 'centered'
            })`}}})},s={parameters:r({backgrounds:{default:`light`},docs:{source:{code:t`defineParameters({
                backgrounds: {
                    default: 'light'
                }
            })`}}})},c={parameters:r({docs:{description:{story:`This is a story`},source:{code:t`defineParameters({
                docs: {
                    description: {
                        story: 'This is a story'
                    }
                }
            })`}}})},l={parameters:r({viewport:{defaultViewport:`tablet1`},docs:{source:{code:t`defineParameters({
                viewport: {
                    defaultViewport: 'tablet1'
                }
            })`}}})},u={parameters:r({something:{blah:`beer`},docs:{source:{code:t`defineParameters({
                something: {
                    blah: 'beer'
                }
            })`}}}),render:()=>(0,i.jsx)(`div`,{children:`You can use this to configure parameters that are not defined in the type`})},d={parameters:r({actions:{argTypesRegex:`^on[A-Z].*`}},{docs:{source:{code:t`defineParameters<ActionsParam>({
                actions: {
                    argTypesRegex: '^on[A-Z].*'
                }
            })`}}})},f={parameters:r({layout:`centered`},{docs:{description:{story:`This is a story`},source:{code:t`defineParameters(
                    { layout: 'centered' },
                    { docs: { description: { story: 'This is a story' } } }
                )`}}})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source},description:{story:"Example showing how to use `defineParameters` to configure actions parameters",...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};var p=[`WithLayout`,`WithBackgroundsParam`,`WithDocsParam`,`WithViewportParam`,`WithOtherParams`,`WithActionsParam`,`ComposingParameters`];export{f as ComposingParameters,d as WithActionsParam,s as WithBackgroundsParam,c as WithDocsParam,o as WithLayout,u as WithOtherParams,l as WithViewportParam,p as __namedExportsOrder,a as default};