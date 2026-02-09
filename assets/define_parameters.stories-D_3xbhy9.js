import{j as c}from"./iframe-DX_7qFCb.js";import{d as r}from"./dedent-BuYMbVyj.js";import{s as m}from"./show_doc_source-DGj7lDml.js";import{d as e}from"./define_parameters-BUOuTmGI.js";import"./preload-helper-PPVm8Dsz.js";const P={title:"parameters/defineParameters",tags:["autodocs","func","new","version:1.0"],decorators:[m()],parameters:e({docs:{description:{component:["`defineParameters` is used to define parameters for a story or component.","Note that it does not work in `preview.ts`, which requires the parameters to be inlined.","In that case, use the `satisfies StorybookBuiltInParams` instead."].join(`
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
                )`}}})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source},description:{story:"Example showing how to use `defineParameters` to configure actions parameters",...s.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const g=["WithLayout","WithBackgroundsParam","WithDocsParam","WithViewportParam","WithOtherParams","WithActionsParam","ComposingParameters"];export{d as ComposingParameters,s as WithActionsParam,t as WithBackgroundsParam,n as WithDocsParam,a as WithLayout,i as WithOtherParams,o as WithViewportParam,g as __namedExportsOrder,P as default};
