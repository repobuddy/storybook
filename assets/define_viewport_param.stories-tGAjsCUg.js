import{j as s}from"./iframe-aCpVKDze.js";import{s as d}from"./with_story_card-1ocT0FRf.js";import{d as o}from"./define_docs_param-lmgaBKCF.js";import{d as n}from"./dedent-BuYMbVyj.js";import"./preload-helper-PPVm8Dsz.js";function i(p){return{viewport:p}}const f={title:"Parameters/defineViewportParam",tags:["new","version:1.0","autodocs"],decorators:[d()],render:()=>s.jsx(s.Fragment,{})},e={parameters:{...i({defaultViewport:"mobile1",viewports:{mobile1:{name:"Mobile",styles:{width:"320px",height:"568px"},type:"mobile"},tablet1:{name:"Tablet",styles:{width:"768px",height:"1024px"},type:"tablet"}}}),...o({source:{code:n`defineViewportParam({
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
                })`}})}},t={parameters:{...i({defaultOrientation:"landscape"}),...o({source:{code:n`defineViewportParam({
                    defaultOrientation: 'landscape'
                })`}})}},r={parameters:{...i({disable:!0}),...o({source:{code:n`defineViewportParam({
                    disable: true
                })`}})}},a={parameters:{...i({defaultViewport:"tablet1"}),...o({source:{code:n`defineViewportParam({
                    defaultViewport: 'tablet1'
                })`}})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source},description:{story:"Basic example showing how to configure viewport parameters with custom viewports",...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source},description:{story:"Example showing how to set a default viewport orientation",...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source},description:{story:"Example showing how to disable the viewport addon for a specific story",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source},description:{story:"Example showing how to set a specific default viewport",...a.parameters?.docs?.description}}};const b=["CustomViewports","DefaultOrientation","DisabledViewport","SpecificViewport"];export{e as CustomViewports,t as DefaultOrientation,r as DisabledViewport,a as SpecificViewport,b as __namedExportsOrder,f as default};
