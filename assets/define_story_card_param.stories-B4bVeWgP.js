import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-6sF1Ejqi.js";import{n,t as r}from"./dedent-TIXhxgm8.js";import{c as i,d as a,h as o,m as s,t as c}from"./src-XpyBqwIv.js";var l,u,d,f,p,m,h,g,_,v,y;e((()=>{n(),c(),l=t(),u={title:`parameters/defineStoryCard`,tags:[`func`,`new`,`version:2.9`],decorators:[o()],render:()=>(0,l.jsx)(`p`,{children:`This is the story content`})},d={parameters:{...i({title:`Important Notice`,status:`info`,content:(0,l.jsx)(`p`,{children:`This is a custom message displayed in the card.`})}),...a({source:{code:r`defineStoryCard({
                    title: 'Important Notice',
                    status: 'info',
                    content: <p>This is a custom message displayed in the card.</p>
                })`}})},decorators:[s()]},f={parameters:{...a({description:{story:`This description will be automatically shown in the card.`}}),...i({title:`Story Information`,status:`info`}),...a({source:{code:r`defineStoryCard({
                    title: 'Story Information',
                    status: 'info'
                })`}})},decorators:[s()]},p={parameters:{...i({title:`Error Card`,status:`error`,content:(0,l.jsx)(`p`,{children:`This card displays an error status with red background styling.`})}),...a({source:{code:r`defineStoryCard({
                    title: 'Error Card',
                    status: 'error',
                    content: <p>This card displays an error status with red background styling.</p>
                })`}})},decorators:[s()]},m={parameters:{...i({title:`Warning Card`,status:`warn`,content:(0,l.jsx)(`p`,{children:`This card displays a warning status with yellow background styling.`})}),...a({source:{code:r`defineStoryCard({
                    title: 'Warning Card',
                    status: 'warn',
                    content: <p>This card displays a warning status with yellow background styling.</p>
                })`}})},decorators:[s()]},h={parameters:{...i({title:`Info Card`,status:`info`,content:(0,l.jsx)(`p`,{children:`This card displays an info status with blue background styling. This is the default status.`})}),...a({source:{code:r`defineStoryCard({
                    title: 'Info Card',
                    status: 'info',
                    content: <p>This card displays an info status with blue background styling. This is the default status.</p>
                })`}})},decorators:[s()]},g={parameters:{...i({title:`Custom Styled Card`,status:`info`,content:(0,l.jsx)(`p`,{children:`This card has custom border styling applied via className.`}),className:`rbsb:border-2 rbsb:border-blue-500 rbsb:shadow-lg`}),...a({source:{code:r`defineStoryCard({
                    title: 'Custom Styled Card',
                    status: 'info',
                    content: <p>This card has custom border styling applied via className.</p>,
                    className: 'rbsb:border-2 rbsb:border-blue-500 rbsb:shadow-lg'
                })`}})},decorators:[s()]},_={parameters:{...i({title:`Function-Based Styling`,status:`info`,content:(0,l.jsx)(`p`,{children:`This card uses a function to compute className based on the card state.`}),className:({status:e,defaultClassName:t})=>`${t} rbsb:border-2 ${e===`info`?`rbsb:border-green-500`:e===`warn`?`rbsb:border-yellow-500`:`rbsb:border-red-500`} rbsb:shadow-lg`}),...a({source:{code:r`defineStoryCard({
                    title: 'Function-Based Styling',
                    status: 'info',
                    content: <p>This card uses a function to compute className based on the card state.</p>,
                    className: ({ status, defaultClassName }) => {
                        const borderColor = status === 'info' ? 'rbsb:border-green-500' : ...
                        return \`\${defaultClassName} rbsb:border-2 \${borderColor} rbsb:shadow-lg\`
                    }
                })`}})},decorators:[s()]},v={parameters:{...i({title:`Parameter Title`,status:`info`,content:(0,l.jsx)(`p`,{children:`This content will be overridden by the decorator.`})}),...a({source:{code:r`// Parameters define default values
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
                })`}})},decorators:[s({title:`Decorator Title`,status:`warn`,content:(0,l.jsx)(`p`,{children:`This content comes from the decorator and overrides the parameter values.`})})]},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source},description:{story:`Basic example showing how to configure story card parameters with title and content.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source},description:{story:`Example showing how to use story card with automatic content from story description.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:`Example showing error status card.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:`Example showing warn status card.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:`Example showing info status card (default).`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:`Example showing custom className string.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:`Example showing className function.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:`Example showing that decorator props override parameter values.`,...v.parameters?.docs?.description}}},y=[`WithTitleAndContent`,`WithStoryDescription`,`WithErrorStatus`,`WithWarnStatus`,`WithInfoStatus`,`WithCustomClassName`,`WithClassNameFunction`,`DecoratorPropsOverride`]}))();export{v as DecoratorPropsOverride,_ as WithClassNameFunction,g as WithCustomClassName,p as WithErrorStatus,h as WithInfoStatus,f as WithStoryDescription,d as WithTitleAndContent,m as WithWarnStatus,y as __namedExportsOrder,u as default};