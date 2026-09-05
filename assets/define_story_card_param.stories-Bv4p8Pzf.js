import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-B066xLLY.js";import{n,r}from"./iframe-DjofFbqv.js";import{n as i,t as a}from"./dedent-DQaCLeUO.js";import{O as o,_ as s,d as c,t as l,w as u}from"./src-Cjk9gBKT.js";var d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{i(),l(),n(),d=t(),f=r.meta({title:`parameters/defineStoryCard`,tags:[`func`,`new`,`version:2.9`],decorators:[o()],render:()=>(0,d.jsx)(`p`,{children:`This is the story content`})}),p=f.story({parameters:{...c({title:`Important Notice`,status:`info`,content:(0,d.jsx)(`p`,{children:`This is a custom message displayed in the card.`})}),...s({source:{code:a`defineStoryCard({
                    title: 'Important Notice',
                    status: 'info',
                    content: <p>This is a custom message displayed in the card.</p>
                })`}})},decorators:[u()]}),m=f.story({parameters:{...s({description:{story:`This description will be automatically shown in the card.`}}),...c({title:`Story Information`,status:`info`}),...s({source:{code:a`defineStoryCard({
                    title: 'Story Information',
                    status: 'info'
                })`}})},decorators:[u()]}),h=f.story({parameters:{...c({title:`Error Card`,status:`error`,content:(0,d.jsx)(`p`,{children:`This card displays an error status with red background styling.`})}),...s({source:{code:a`defineStoryCard({
                    title: 'Error Card',
                    status: 'error',
                    content: <p>This card displays an error status with red background styling.</p>
                })`}})},decorators:[u()]}),g=f.story({parameters:{...c({title:`Warning Card`,status:`warn`,content:(0,d.jsx)(`p`,{children:`This card displays a warning status with yellow background styling.`})}),...s({source:{code:a`defineStoryCard({
                    title: 'Warning Card',
                    status: 'warn',
                    content: <p>This card displays a warning status with yellow background styling.</p>
                })`}})},decorators:[u()]}),_=f.story({parameters:{...c({title:`Info Card`,status:`info`,content:(0,d.jsx)(`p`,{children:`This card displays an info status with blue background styling. This is the default status.`})}),...s({source:{code:a`defineStoryCard({
                    title: 'Info Card',
                    status: 'info',
                    content: <p>This card displays an info status with blue background styling. This is the default status.</p>
                })`}})},decorators:[u()]}),v=f.story({parameters:{...c({title:`Custom Styled Card`,status:`info`,content:(0,d.jsx)(`p`,{children:`This card has custom border styling applied via className.`}),className:`rbsb:border-2 rbsb:border-blue-500 rbsb:shadow-lg`}),...s({source:{code:a`defineStoryCard({
                    title: 'Custom Styled Card',
                    status: 'info',
                    content: <p>This card has custom border styling applied via className.</p>,
                    className: 'rbsb:border-2 rbsb:border-blue-500 rbsb:shadow-lg'
                })`}})},decorators:[u()]}),y=f.story({parameters:{...c({title:`Function-Based Styling`,status:`info`,content:(0,d.jsx)(`p`,{children:`This card uses a function to compute className based on the card state.`}),className:({status:e,defaultClassName:t})=>`${t} rbsb:border-2 ${e===`info`?`rbsb:border-green-500`:e===`warn`?`rbsb:border-yellow-500`:`rbsb:border-red-500`} rbsb:shadow-lg`}),...s({source:{code:a`defineStoryCard({
                    title: 'Function-Based Styling',
                    status: 'info',
                    content: <p>This card uses a function to compute className based on the card state.</p>,
                    className: ({ status, defaultClassName }) => {
                        const borderColor = status === 'info' ? 'rbsb:border-green-500' : ...
                        return \`\${defaultClassName} rbsb:border-2 \${borderColor} rbsb:shadow-lg\`
                    }
                })`}})},decorators:[u()]}),b=f.story({parameters:{...c({title:`Parameter Title`,status:`info`,content:(0,d.jsx)(`p`,{children:`This content will be overridden by the decorator.`})}),...s({source:{code:a`// Parameters define default values
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
                })`}})},decorators:[u({title:`Decorator Title`,status:`warn`,content:(0,d.jsx)(`p`,{children:`This content comes from the decorator and overrides the parameter values.`})})]}),x=[`WithTitleAndContent`,`WithStoryDescription`,`WithErrorStatus`,`WithWarnStatus`,`WithInfoStatus`,`WithCustomClassName`,`WithClassNameFunction`,`DecoratorPropsOverride`],p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...p.input.parameters?.docs?.source},description:{story:`Basic example showing how to configure story card parameters with title and content.`,...p.input.parameters?.docs?.description}}},m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...m.input.parameters?.docs?.source},description:{story:`Example showing how to use story card with automatic content from story description.`,...m.input.parameters?.docs?.description}}},h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...h.input.parameters?.docs?.source},description:{story:`Example showing error status card.`,...h.input.parameters?.docs?.description}}},g.input.parameters={...g.input.parameters,docs:{...g.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...g.input.parameters?.docs?.source},description:{story:`Example showing warn status card.`,...g.input.parameters?.docs?.description}}},_.input.parameters={..._.input.parameters,docs:{..._.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,..._.input.parameters?.docs?.source},description:{story:`Example showing info status card (default).`,..._.input.parameters?.docs?.description}}},v.input.parameters={...v.input.parameters,docs:{...v.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...v.input.parameters?.docs?.source},description:{story:`Example showing custom className string.`,...v.input.parameters?.docs?.description}}},y.input.parameters={...y.input.parameters,docs:{...y.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...y.input.parameters?.docs?.source},description:{story:`Example showing className function.`,...y.input.parameters?.docs?.description}}},b.input.parameters={...b.input.parameters,docs:{...b.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...b.input.parameters?.docs?.source},description:{story:`Example showing that decorator props override parameter values.`,...b.input.parameters?.docs?.description}}}})))()}S();export{b as DecoratorPropsOverride,y as WithClassNameFunction,v as WithCustomClassName,h as WithErrorStatus,_ as WithInfoStatus,m as WithStoryDescription,p as WithTitleAndContent,g as WithWarnStatus,x as __namedExportsOrder};