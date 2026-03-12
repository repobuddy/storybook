import"./components-DmejZTLj.js";import"./react-K5peCFg_.js";import"./react-dom-CYc0L8kE.js";import{t as e}from"./jsx-runtime-BUC2lftT.js";import{t}from"./dedent-rZS-CQtP.js";import{f as n,l as r,o as i,p as a}from"./src-CPfUkyQY.js";var o=e(),s={title:`parameters/defineStoryCard`,tags:[`func`,`new`,`version:2.9`],decorators:[a()],render:()=>(0,o.jsx)(`p`,{children:`This is the story content`})},c={parameters:{...i({title:`Important Notice`,status:`info`,content:(0,o.jsx)(`p`,{children:`This is a custom message displayed in the card.`})}),...r({source:{code:t`defineStoryCard({
                    title: 'Important Notice',
                    status: 'info',
                    content: <p>This is a custom message displayed in the card.</p>
                })`}})},decorators:[n()]},l={parameters:{...r({description:{story:`This description will be automatically shown in the card.`}}),...i({title:`Story Information`,status:`info`}),...r({source:{code:t`defineStoryCard({
                    title: 'Story Information',
                    status: 'info'
                })`}})},decorators:[n()]},u={parameters:{...i({title:`Error Card`,status:`error`,content:(0,o.jsx)(`p`,{children:`This card displays an error status with red background styling.`})}),...r({source:{code:t`defineStoryCard({
                    title: 'Error Card',
                    status: 'error',
                    content: <p>This card displays an error status with red background styling.</p>
                })`}})},decorators:[n()]},d={parameters:{...i({title:`Warning Card`,status:`warn`,content:(0,o.jsx)(`p`,{children:`This card displays a warning status with yellow background styling.`})}),...r({source:{code:t`defineStoryCard({
                    title: 'Warning Card',
                    status: 'warn',
                    content: <p>This card displays a warning status with yellow background styling.</p>
                })`}})},decorators:[n()]},f={parameters:{...i({title:`Info Card`,status:`info`,content:(0,o.jsx)(`p`,{children:`This card displays an info status with blue background styling. This is the default status.`})}),...r({source:{code:t`defineStoryCard({
                    title: 'Info Card',
                    status: 'info',
                    content: <p>This card displays an info status with blue background styling. This is the default status.</p>
                })`}})},decorators:[n()]},p={parameters:{...i({title:`Custom Styled Card`,status:`info`,content:(0,o.jsx)(`p`,{children:`This card has custom border styling applied via className.`}),className:`rbsb:border-2 rbsb:border-blue-500 rbsb:shadow-lg`}),...r({source:{code:t`defineStoryCard({
                    title: 'Custom Styled Card',
                    status: 'info',
                    content: <p>This card has custom border styling applied via className.</p>,
                    className: 'rbsb:border-2 rbsb:border-blue-500 rbsb:shadow-lg'
                })`}})},decorators:[n()]},m={parameters:{...i({title:`Function-Based Styling`,status:`info`,content:(0,o.jsx)(`p`,{children:`This card uses a function to compute className based on the card state.`}),className:({status:e,defaultClassName:t})=>`${t} rbsb:border-2 ${e===`info`?`rbsb:border-green-500`:e===`warn`?`rbsb:border-yellow-500`:`rbsb:border-red-500`} rbsb:shadow-lg`}),...r({source:{code:t`defineStoryCard({
                    title: 'Function-Based Styling',
                    status: 'info',
                    content: <p>This card uses a function to compute className based on the card state.</p>,
                    className: ({ status, defaultClassName }) => {
                        const borderColor = status === 'info' ? 'rbsb:border-green-500' : ...
                        return \`\${defaultClassName} rbsb:border-2 \${borderColor} rbsb:shadow-lg\`
                    }
                })`}})},decorators:[n()]},h={parameters:{...i({title:`Parameter Title`,status:`info`,content:(0,o.jsx)(`p`,{children:`This content will be overridden by the decorator.`})}),...r({source:{code:t`// Parameters define default values
                defineStoryCard({
                    title: 'Parameter Title',
                    status: 'info',
                    content: <p>This content will be overridden by the decorator.</p>
                })

                // Decorator props override parameters
                withStoryCard({
                    title: 'Decorator Title',
                    status: 'warn',
                    content: <p>This content comes from the decorator.</p>
                })`}})},decorators:[n({title:`Decorator Title`,status:`warn`,content:(0,o.jsx)(`p`,{children:`This content comes from the decorator and overrides the parameter values.`})})]};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...defineStoryCardParam({
      title: 'Important Notice',
      status: 'info',
      content: <p>This is a custom message displayed in the card.</p>
    }),
    ...defineDocsParam({
      source: {
        code: dedent\`defineStoryCard({
                    title: 'Important Notice',
                    status: 'info',
                    content: <p>This is a custom message displayed in the card.</p>
                })\`
      }
    })
  },
  decorators: [withStoryCard()]
}`,...c.parameters?.docs?.source},description:{story:`Basic example showing how to configure story card parameters with title and content.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...defineDocsParam({
      description: {
        story: 'This description will be automatically shown in the card.'
      }
    }),
    ...defineStoryCardParam({
      title: 'Story Information',
      status: 'info'
    }),
    ...defineDocsParam({
      source: {
        code: dedent\`defineStoryCard({
                    title: 'Story Information',
                    status: 'info'
                })\`
      }
    })
  },
  decorators: [withStoryCard()]
}`,...l.parameters?.docs?.source},description:{story:`Example showing how to use story card with automatic content from story description.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...defineStoryCardParam({
      title: 'Error Card',
      status: 'error',
      content: <p>This card displays an error status with red background styling.</p>
    }),
    ...defineDocsParam({
      source: {
        code: dedent\`defineStoryCard({
                    title: 'Error Card',
                    status: 'error',
                    content: <p>This card displays an error status with red background styling.</p>
                })\`
      }
    })
  },
  decorators: [withStoryCard()]
}`,...u.parameters?.docs?.source},description:{story:`Example showing error status card.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...defineStoryCardParam({
      title: 'Warning Card',
      status: 'warn',
      content: <p>This card displays a warning status with yellow background styling.</p>
    }),
    ...defineDocsParam({
      source: {
        code: dedent\`defineStoryCard({
                    title: 'Warning Card',
                    status: 'warn',
                    content: <p>This card displays a warning status with yellow background styling.</p>
                })\`
      }
    })
  },
  decorators: [withStoryCard()]
}`,...d.parameters?.docs?.source},description:{story:`Example showing warn status card.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...defineStoryCardParam({
      title: 'Info Card',
      status: 'info',
      content: <p>This card displays an info status with blue background styling. This is the default status.</p>
    }),
    ...defineDocsParam({
      source: {
        code: dedent\`defineStoryCard({
                    title: 'Info Card',
                    status: 'info',
                    content: <p>This card displays an info status with blue background styling. This is the default status.</p>
                })\`
      }
    })
  },
  decorators: [withStoryCard()]
}`,...f.parameters?.docs?.source},description:{story:`Example showing info status card (default).`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...defineStoryCardParam({
      title: 'Custom Styled Card',
      status: 'info',
      content: <p>This card has custom border styling applied via className.</p>,
      className: 'rbsb:border-2 rbsb:border-blue-500 rbsb:shadow-lg'
    }),
    ...defineDocsParam({
      source: {
        code: dedent\`defineStoryCard({
                    title: 'Custom Styled Card',
                    status: 'info',
                    content: <p>This card has custom border styling applied via className.</p>,
                    className: 'rbsb:border-2 rbsb:border-blue-500 rbsb:shadow-lg'
                })\`
      }
    })
  },
  decorators: [withStoryCard()]
}`,...p.parameters?.docs?.source},description:{story:`Example showing custom className string.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...defineStoryCardParam({
      title: 'Function-Based Styling',
      status: 'info',
      content: <p>This card uses a function to compute className based on the card state.</p>,
      className: ({
        status,
        defaultClassName
      }) => {
        const borderColor = status === 'info' ? 'rbsb:border-green-500' : status === 'warn' ? 'rbsb:border-yellow-500' : 'rbsb:border-red-500';
        return \`\${defaultClassName} rbsb:border-2 \${borderColor} rbsb:shadow-lg\`;
      }
    }),
    ...defineDocsParam({
      source: {
        code: dedent\`defineStoryCard({
                    title: 'Function-Based Styling',
                    status: 'info',
                    content: <p>This card uses a function to compute className based on the card state.</p>,
                    className: ({ status, defaultClassName }) => {
                        const borderColor = status === 'info' ? 'rbsb:border-green-500' : ...
                        return \\\`\\\${defaultClassName} rbsb:border-2 \\\${borderColor} rbsb:shadow-lg\\\`
                    }
                })\`
      }
    })
  },
  decorators: [withStoryCard()]
}`,...m.parameters?.docs?.source},description:{story:`Example showing className function.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...defineStoryCardParam({
      title: 'Parameter Title',
      status: 'info',
      content: <p>This content will be overridden by the decorator.</p>
    }),
    ...defineDocsParam({
      source: {
        code: dedent\`// Parameters define default values
                defineStoryCard({
                    title: 'Parameter Title',
                    status: 'info',
                    content: <p>This content will be overridden by the decorator.</p>
                })

                // Decorator props override parameters
                withStoryCard({
                    title: 'Decorator Title',
                    status: 'warn',
                    content: <p>This content comes from the decorator.</p>
                })\`
      }
    })
  },
  decorators: [withStoryCard({
    title: 'Decorator Title',
    status: 'warn',
    content: <p>This content comes from the decorator and overrides the parameter values.</p>
  })]
}`,...h.parameters?.docs?.source},description:{story:`Example showing that decorator props override parameter values.`,...h.parameters?.docs?.description}}};var g=[`WithTitleAndContent`,`WithStoryDescription`,`WithErrorStatus`,`WithWarnStatus`,`WithInfoStatus`,`WithCustomClassName`,`WithClassNameFunction`,`DecoratorPropsOverride`];export{h as DecoratorPropsOverride,m as WithClassNameFunction,p as WithCustomClassName,u as WithErrorStatus,f as WithInfoStatus,l as WithStoryDescription,c as WithTitleAndContent,d as WithWarnStatus,g as __namedExportsOrder,s as default};