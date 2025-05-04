import{j as f}from"./jsx-runtime-D_zvdyIk.js";function a(p){return{test:p}}const g={title:"Parameters/defineTestParam",tags:["new","version:1.0.0"],parameters:{docs:{description:{component:"Helper function to define test parameters for Storybook stories"}}},render:()=>f.jsx("div",{children:"Hello"})},e={parameters:a({clearMocks:!0,mockReset:!0,restoreMocks:!0})},r={parameters:a({clearMocks:!0,mockReset:!0,restoreMocks:!0,dangerouslyIgnoreUnhandledErrors:!0})},s={parameters:a({clearMocks:!0})};var t,o,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  parameters: defineTestParam({
    clearMocks: true,
    mockReset: true,
    restoreMocks: true
  })
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var c,m,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: defineTestParam({
    clearMocks: true,
    mockReset: true,
    restoreMocks: true,
    dangerouslyIgnoreUnhandledErrors: true
  })
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var d,i,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: defineTestParam({
    clearMocks: true
  })
}`,...(l=(i=s.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const M=["Default","WithDangerouslyIgnoreUnhandledErrors","MinimalConfig"];export{e as Default,s as MinimalConfig,r as WithDangerouslyIgnoreUnhandledErrors,M as __namedExportsOrder,g as default};
