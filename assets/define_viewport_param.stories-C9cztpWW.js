import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{d as o}from"./dedent-DVFkJXTl.js";import{s as T,d as n}from"./define_docs_param-DYEy_vX9.js";function i(M){return{viewport:M}}const B={title:"Parameters/defineViewportParam",tags:["new","version:1.0.0","autodocs"],decorators:[T()],render:()=>s.jsx(s.Fragment,{})},e={parameters:{...i({defaultViewport:"mobile1",viewports:{mobile1:{name:"Mobile",styles:{width:"320px",height:"568px"},type:"mobile"},tablet1:{name:"Tablet",styles:{width:"768px",height:"1024px"},type:"tablet"}}}),...n({source:{code:o`defineViewportParam({
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
                })`}})}},t={parameters:{...i({defaultOrientation:"landscape"}),...n({source:{code:o`defineViewportParam({
                    defaultOrientation: 'landscape'
                })`}})}},r={parameters:{...i({disable:!0}),...n({source:{code:o`defineViewportParam({
                    disable: true
                })`}})}},a={parameters:{...i({defaultViewport:"tablet1"}),...n({source:{code:o`defineViewportParam({
                    defaultViewport: 'tablet1'
                })`}})}};var p,d,m,c,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source},description:{story:"Basic example showing how to configure viewport parameters with custom viewports",...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.description}}};var w,u,f,b,h;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(f=(u=t.parameters)==null?void 0:u.docs)==null?void 0:f.source},description:{story:"Example showing how to set a default viewport orientation",...(h=(b=t.parameters)==null?void 0:b.docs)==null?void 0:h.description}}};var V,x,y,P,g;r.parameters={...r.parameters,docs:{...(V=r.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(y=(x=r.parameters)==null?void 0:x.docs)==null?void 0:y.source},description:{story:"Example showing how to disable the viewport addon for a specific story",...(g=(P=r.parameters)==null?void 0:P.docs)==null?void 0:g.description}}};var v,D,O,S,E;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(O=(D=a.parameters)==null?void 0:D.docs)==null?void 0:O.source},description:{story:"Example showing how to set a specific default viewport",...(E=(S=a.parameters)==null?void 0:S.docs)==null?void 0:E.description}}};const F=["CustomViewports","DefaultOrientation","DisabledViewport","SpecificViewport"];export{e as CustomViewports,t as DefaultOrientation,r as DisabledViewport,a as SpecificViewport,F as __namedExportsOrder,B as default};
