import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-6sF1Ejqi.js";import{n,t as r}from"./dedent-r2SG9fgm.js";import{d as i,h as a,o,t as s}from"./src-BUA0lNvr.js";var c,l,u,d,f,p,m;e((()=>{n(),s(),c=t(),l={title:`Parameters/defineViewportParam`,tags:[`autodocs`,`!snapshot`,`func`,`new`,`version:1.0`],decorators:[a()],render:()=>(0,c.jsx)(c.Fragment,{})},u={parameters:{...o({defaultViewport:`mobile1`,viewports:{mobile1:{name:`Mobile`,styles:{width:`320px`,height:`568px`},type:`mobile`},tablet1:{name:`Tablet`,styles:{width:`768px`,height:`1024px`},type:`tablet`}}}),...i({source:{code:r`defineViewportParam({
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
                })`}})}},d={parameters:{...o({defaultOrientation:`landscape`}),...i({source:{code:r`defineViewportParam({
                    defaultOrientation: 'landscape'
                })`}})}},f={parameters:{...o({disable:!0}),...i({source:{code:r`defineViewportParam({
                    disable: true
                })`}})}},p={parameters:{...o({defaultViewport:`tablet1`}),...i({source:{code:r`defineViewportParam({
                    defaultViewport: 'tablet1'
                })`}})}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source},description:{story:`Basic example showing how to configure viewport parameters with custom viewports`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source},description:{story:`Example showing how to set a default viewport orientation`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source},description:{story:`Example showing how to disable the viewport addon for a specific story`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:`Example showing how to set a specific default viewport`,...p.parameters?.docs?.description}}},m=[`CustomViewports`,`DefaultOrientation`,`DisabledViewport`,`SpecificViewport`]}))();export{u as CustomViewports,d as DefaultOrientation,f as DisabledViewport,p as SpecificViewport,m as __namedExportsOrder,l as default};