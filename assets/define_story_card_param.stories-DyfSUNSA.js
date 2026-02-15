import{j as r}from"./iframe-ChM6l5-W.js";import{d as e}from"./dedent-BuYMbVyj.js";import{s as b}from"./show_doc_source-Cdn2F25y.js";import{w as s}from"./with_story_card-B4QRm0GZ.js";import{d as t}from"./define_docs_param-lmgaBKCF.js";import"./preload-helper-PPVm8Dsz.js";function a(m){return{storyCard:m}}const N={title:"parameters/defineStoryCard",tags:["func","new","version:2.9"],decorators:[b()],render:()=>r.jsx("p",{children:"This is the story content"})},o={parameters:{...a({title:"Important Notice",status:"info",content:r.jsx("p",{children:"This is a custom message displayed in the card."})}),...t({source:{code:e`defineStoryCard({
                    title: 'Important Notice',
                    status: 'info',
                    content: <p>This is a custom message displayed in the card.</p>
                })`}})},decorators:[s()]},n={parameters:{...t({description:{story:"This description will be automatically shown in the card."}}),...a({title:"Story Information",status:"info"}),...t({source:{code:e`defineStoryCard({
                    title: 'Story Information',
                    status: 'info'
                })`}})},decorators:[s()]},i={parameters:{...a({title:"Error Card",status:"error",content:r.jsx("p",{children:"This card displays an error status with red background styling."})}),...t({source:{code:e`defineStoryCard({
                    title: 'Error Card',
                    status: 'error',
                    content: <p>This card displays an error status with red background styling.</p>
                })`}})},decorators:[s()]},d={parameters:{...a({title:"Warning Card",status:"warn",content:r.jsx("p",{children:"This card displays a warning status with yellow background styling."})}),...t({source:{code:e`defineStoryCard({
                    title: 'Warning Card',
                    status: 'warn',
                    content: <p>This card displays a warning status with yellow background styling.</p>
                })`}})},decorators:[s()]},c={parameters:{...a({title:"Info Card",status:"info",content:r.jsx("p",{children:"This card displays an info status with blue background styling. This is the default status."})}),...t({source:{code:e`defineStoryCard({
                    title: 'Info Card',
                    status: 'info',
                    content: <p>This card displays an info status with blue background styling. This is the default status.</p>
                })`}})},decorators:[s()]},l={parameters:{...a({title:"Custom Styled Card",status:"info",content:r.jsx("p",{children:"This card has custom border styling applied via className."}),className:"rbsb:border-2 rbsb:border-blue-500 rbsb:shadow-lg"}),...t({source:{code:e`defineStoryCard({
                    title: 'Custom Styled Card',
                    status: 'info',
                    content: <p>This card has custom border styling applied via className.</p>,
                    className: 'rbsb:border-2 rbsb:border-blue-500 rbsb:shadow-lg'
                })`}})},decorators:[s()]},p={parameters:{...a({title:"Function-Based Styling",status:"info",content:r.jsx("p",{children:"This card uses a function to compute className based on the card state."}),className:({status:m,defaultClassName:h})=>`${h} rbsb:border-2 ${m==="info"?"rbsb:border-green-500":m==="warn"?"rbsb:border-yellow-500":"rbsb:border-red-500"} rbsb:shadow-lg`}),...t({source:{code:e`defineStoryCard({
                    title: 'Function-Based Styling',
                    status: 'info',
                    content: <p>This card uses a function to compute className based on the card state.</p>,
                    className: ({ status, defaultClassName }) => {
                        const borderColor = status === 'info' ? 'rbsb:border-green-500' : ...
                        return \`\${defaultClassName} rbsb:border-2 \${borderColor} rbsb:shadow-lg\`
                    }
                })`}})},decorators:[s()]},u={parameters:{...a({title:"Parameter Title",status:"info",content:r.jsx("p",{children:"This content will be overridden by the decorator."})}),...t({source:{code:e`// Parameters define default values
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
                })`}})},decorators:[s({title:"Decorator Title",status:"warn",content:r.jsx("p",{children:"This content comes from the decorator and overrides the parameter values."})})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source},description:{story:"Basic example showing how to configure story card parameters with title and content.",...o.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source},description:{story:"Example showing how to use story card with automatic content from story description.",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source},description:{story:"Example showing error status card.",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source},description:{story:"Example showing warn status card.",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source},description:{story:"Example showing info status card (default).",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source},description:{story:"Example showing custom className string.",...l.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:"Example showing className function.",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source},description:{story:"Example showing that decorator props override parameter values.",...u.parameters?.docs?.description}}};const P=["WithTitleAndContent","WithStoryDescription","WithErrorStatus","WithWarnStatus","WithInfoStatus","WithCustomClassName","WithClassNameFunction","DecoratorPropsOverride"];export{u as DecoratorPropsOverride,p as WithClassNameFunction,l as WithCustomClassName,i as WithErrorStatus,c as WithInfoStatus,n as WithStoryDescription,o as WithTitleAndContent,d as WithWarnStatus,P as __namedExportsOrder,N as default};
