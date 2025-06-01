import{j as t}from"./iframe-7Yb0LowJ.js";const d=y=>({layout:y}),v={title:"parameters/defineLayoutParam",tags:["new","version:1.0"]},e={parameters:d("padded"),render:()=>t.jsx("div",{children:"Story with padded layout"})},r={parameters:d("fullscreen"),render:()=>t.jsx("div",{children:"Story with fullscreen layout"})},a={parameters:d("centered"),render:()=>t.jsx("div",{children:"Story with centered layout"})};var s,o,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  parameters: defineLayoutParam('padded'),
  render: () => <div>Story with padded layout</div>
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var c,i,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: defineLayoutParam('fullscreen'),
  render: () => <div>Story with fullscreen layout</div>
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var u,p,l;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: defineLayoutParam('centered'),
  render: () => <div>Story with centered layout</div>
}`,...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const h=["Padded","Fullscreen","Centered"];export{a as Centered,r as Fullscreen,e as Padded,h as __namedExportsOrder,v as default};
