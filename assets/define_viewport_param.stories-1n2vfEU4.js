import{j as O}from"./jsx-runtime-D_zvdyIk.js";function o(E){return{viewport:E}}const j={title:"Parameters/defineViewportParam",tags:["new","version:1.0.0","autodocs"],parameters:o({defaultViewport:"mobile1",viewports:{mobile1:{name:"Mobile",styles:{width:"320px",height:"568px"},type:"mobile"},tablet1:{name:"Tablet",styles:{width:"768px",height:"1024px"},type:"tablet"}}}),render:()=>O.jsx("div",{children:"Hello"})},e={parameters:o({defaultViewport:"mobile1",viewports:{mobile1:{name:"Mobile",styles:{width:"320px",height:"568px"},type:"mobile"},tablet1:{name:"Tablet",styles:{width:"768px",height:"1024px"},type:"tablet"}}})},t={parameters:o({defaultOrientation:"landscape"})},r={parameters:o({disable:!0})},a={parameters:o({defaultViewport:"tablet1"})};var s,i,p,n,m;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  parameters: defineViewportParam({
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
  })
}`,...(p=(i=e.parameters)==null?void 0:i.docs)==null?void 0:p.source},description:{story:"Basic example showing how to configure viewport parameters with custom viewports",...(m=(n=e.parameters)==null?void 0:n.docs)==null?void 0:m.description}}};var d,l,c,w,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: defineViewportParam({
    defaultOrientation: 'landscape'
  })
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source},description:{story:"Example showing how to set a default viewport orientation",...(u=(w=t.parameters)==null?void 0:w.docs)==null?void 0:u.description}}};var h,b,f,x,y;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: defineViewportParam({
    disable: true
  })
}`,...(f=(b=r.parameters)==null?void 0:b.docs)==null?void 0:f.source},description:{story:"Example showing how to disable the viewport addon for a specific story",...(y=(x=r.parameters)==null?void 0:x.docs)==null?void 0:y.description}}};var V,g,v,P,S;a.parameters={...a.parameters,docs:{...(V=a.parameters)==null?void 0:V.docs,source:{originalSource:`{
  parameters: defineViewportParam({
    defaultViewport: 'tablet1'
  })
}`,...(v=(g=a.parameters)==null?void 0:g.docs)==null?void 0:v.source},description:{story:"Example showing how to set a specific default viewport",...(S=(P=a.parameters)==null?void 0:P.docs)==null?void 0:S.description}}};const M=["CustomViewports","DefaultOrientation","DisabledViewport","SpecificViewport"];export{e as CustomViewports,t as DefaultOrientation,r as DisabledViewport,a as SpecificViewport,M as __namedExportsOrder,j as default};
