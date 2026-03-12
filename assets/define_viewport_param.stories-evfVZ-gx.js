import"./components-DmejZTLj.js";import"./react-K5peCFg_.js";import"./react-dom-CYc0L8kE.js";import{t as e}from"./jsx-runtime-BUC2lftT.js";import{t}from"./dedent-rZS-CQtP.js";import{i as n,l as r,p as i}from"./src-CPfUkyQY.js";var a=e(),o={title:`Parameters/defineViewportParam`,tags:[`autodocs`,`!snapshot`,`func`,`new`,`version:1.0`],decorators:[i()],render:()=>(0,a.jsx)(a.Fragment,{})},s={parameters:{...n({defaultViewport:`mobile1`,viewports:{mobile1:{name:`Mobile`,styles:{width:`320px`,height:`568px`},type:`mobile`},tablet1:{name:`Tablet`,styles:{width:`768px`,height:`1024px`},type:`tablet`}}}),...r({source:{code:t`defineViewportParam({
                    defaultViewport: 'mobile1',
                    viewports: {
                        mobile1: {
                            name: 'Mobile',
                            styles: { width: '320px', height: '568px' },
                            type: 'mobile'
                        },
                        tablet1: {
                            name: 'Tablet',
                            styles: { width: '768px', height: '1024px' },
                            type: 'tablet'
                        }
                    }
                })`}})}},c={parameters:{...n({defaultOrientation:`landscape`}),...r({source:{code:t`defineViewportParam({
                    defaultOrientation: 'landscape'
                })`}})}},l={parameters:{...n({disable:!0}),...r({source:{code:t`defineViewportParam({
                    disable: true
                })`}})}},u={parameters:{...n({defaultViewport:`tablet1`}),...r({source:{code:t`defineViewportParam({
                    defaultViewport: 'tablet1'
                })`}})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...defineViewportParam({
      defaultViewport: 'mobile1',
      viewports: {
        mobile1: {
          name: 'Mobile',
          styles: {
            width: '320px',
            height: '568px'
          },
          type: 'mobile'
        },
        tablet1: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px'
          },
          type: 'tablet'
        }
      }
    }),
    ...defineDocsParam({
      source: {
        code: dedent\`defineViewportParam({
                    defaultViewport: 'mobile1',
                    viewports: {
                        mobile1: {
                            name: 'Mobile',
                            styles: { width: '320px', height: '568px' },
                            type: 'mobile'
                        },
                        tablet1: {
                            name: 'Tablet',
                            styles: { width: '768px', height: '1024px' },
                            type: 'tablet'
                        }
                    }
                })\`
      }
    })
  }
}`,...s.parameters?.docs?.source},description:{story:`Basic example showing how to configure viewport parameters with custom viewports`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...defineViewportParam({
      defaultOrientation: 'landscape'
    }),
    ...defineDocsParam({
      source: {
        code: dedent\`defineViewportParam({
                    defaultOrientation: 'landscape'
                })\`
      }
    })
  }
}`,...c.parameters?.docs?.source},description:{story:`Example showing how to set a default viewport orientation`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...defineViewportParam({
      disable: true
    }),
    ...defineDocsParam({
      source: {
        code: dedent\`defineViewportParam({
                    disable: true
                })\`
      }
    })
  }
}`,...l.parameters?.docs?.source},description:{story:`Example showing how to disable the viewport addon for a specific story`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...defineViewportParam({
      defaultViewport: 'tablet1'
    }),
    ...defineDocsParam({
      source: {
        code: dedent\`defineViewportParam({
                    defaultViewport: 'tablet1'
                })\`
      }
    })
  }
}`,...u.parameters?.docs?.source},description:{story:`Example showing how to set a specific default viewport`,...u.parameters?.docs?.description}}};var d=[`CustomViewports`,`DefaultOrientation`,`DisabledViewport`,`SpecificViewport`];export{s as CustomViewports,c as DefaultOrientation,l as DisabledViewport,u as SpecificViewport,d as __namedExportsOrder,o as default};