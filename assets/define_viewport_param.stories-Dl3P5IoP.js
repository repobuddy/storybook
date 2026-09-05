import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-B066xLLY.js";import{n,r}from"./iframe-DFuO2ShR.js";import{n as i,t as a}from"./dedent-DQaCLeUO.js";import{O as o,_ as s,s as c,t as l}from"./src-Cjk9gBKT.js";var u,d,f,p,m,h,g;function _(){return(_=e((()=>{i(),l(),n(),u=t(),d=r.meta({title:`Parameters/defineViewportParam`,tags:[`autodocs`,`!snapshot`,`func`,`new`,`version:1.0`],decorators:[o()],render:()=>(0,u.jsx)(u.Fragment,{})}),f=d.story({parameters:{...c({defaultViewport:`mobile1`,viewports:{mobile1:{name:`Mobile`,styles:{width:`320px`,height:`568px`},type:`mobile`},tablet1:{name:`Tablet`,styles:{width:`768px`,height:`1024px`},type:`tablet`}}}),...s({source:{code:a`defineViewportParam({
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
                })`}})}}),p=d.story({parameters:{...c({defaultOrientation:`landscape`}),...s({source:{code:a`defineViewportParam({
                    defaultOrientation: 'landscape'
                })`}})}}),m=d.story({parameters:{...c({disable:!0}),...s({source:{code:a`defineViewportParam({
                    disable: true
                })`}})}}),h=d.story({parameters:{...c({defaultViewport:`tablet1`}),...s({source:{code:a`defineViewportParam({
                    defaultViewport: 'tablet1'
                })`}})}}),g=[`CustomViewports`,`DefaultOrientation`,`DisabledViewport`,`SpecificViewport`],f.input.parameters={...f.input.parameters,docs:{...f.input.parameters?.docs,source:{originalSource:`meta.story({
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
  } as Parameters
})`,...f.input.parameters?.docs?.source},description:{story:`Basic example showing how to configure viewport parameters with custom viewports`,...f.input.parameters?.docs?.description}}},p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
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
  } as Parameters
})`,...p.input.parameters?.docs?.source},description:{story:`Example showing how to set a default viewport orientation`,...p.input.parameters?.docs?.description}}},m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
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
  } as Parameters
})`,...m.input.parameters?.docs?.source},description:{story:`Example showing how to disable the viewport addon for a specific story`,...m.input.parameters?.docs?.description}}},h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{originalSource:`meta.story({
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
  } as Parameters
})`,...h.input.parameters?.docs?.source},description:{story:`Example showing how to set a specific default viewport`,...h.input.parameters?.docs?.description}}}})))()}_();export{f as CustomViewports,p as DefaultOrientation,m as DisabledViewport,h as SpecificViewport,g as __namedExportsOrder};