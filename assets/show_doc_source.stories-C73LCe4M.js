import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{s as m}from"./show_doc_source-CWgnZoeJ.js";const p=({text:l="Hello World"})=>r.jsx("div",{className:"p-4 bg-gray-100 dark:bg-gray-500 rounded",children:l}),g={title:"decorators/showDocSource",component:p,tags:["autodocs"],parameters:{layout:"padded"}},o={parameters:{docs:{source:{code:'<DemoComponent text="Hello World" />'}}},args:{text:"Hello World"},decorators:[m()]},e={name:"Without Source Code",decorators:[m()],parameters:{docs:{source:{code:'<DemoComponent text="Hello World" />'}}},render:()=>r.jsx(r.Fragment,{})};var s,t,a;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<DemoComponent text="Hello World" />\`
      }
    }
  },
  args: {
    text: 'Hello World'
  },
  decorators: [showDocSource()]
}`,...(a=(t=o.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};var c,n,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Without Source Code',
  decorators: [showDocSource()],
  parameters: {
    docs: {
      source: {
        code: \`<DemoComponent text="Hello World" />\`
      }
    }
  },
  render: () => <></>
}`,...(d=(n=e.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};const x=["BasicUsage","ShowDocSourceOnly"];export{o as BasicUsage,e as ShowDocSourceOnly,x as __namedExportsOrder,g as default};
