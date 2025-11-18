import{j as e,s as n,d as t,t as m}from"./iframe-CoPqPLz4.js";import{d}from"./dedent-C8rexWvS.js";import"./preload-helper-PPVm8Dsz.js";const l=({text:c="Hello World"})=>e.jsx("div",{className:"p-4 bg-gray-100 dark:bg-gray-500 rounded",children:c}),g={title:"decorators/showDocSource",tags:["autodocs"],parameters:{layout:"padded"}},o={parameters:{docs:{source:{code:'() => <DemoComponent text="Hello World" />'}}},decorators:[n()],render:()=>e.jsx(l,{text:"Hello World"})},r={parameters:{docs:{source:{code:'() => <DemoComponent text="Hello World" />'}}},decorators:[n()],render:()=>e.jsx(e.Fragment,{})},s={parameters:t({source:{code:d`
                <div>Hello, World!</div>
                `,language:"html"}}),decorators:[n()],render:()=>e.jsx(e.Fragment,{})},a={parameters:t({source:{code:d`
                <div>Hello, World!</div>
                `,language:"html"},theme:m.dark}),decorators:[n()],render:()=>e.jsx(e.Fragment,{})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`() => <DemoComponent text="Hello World" />\`
      }
    }
  },
  decorators: [showDocSource()],
  render: () => <DemoComponent text="Hello World" />
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`() => <DemoComponent text="Hello World" />\`
      }
    }
  },
  decorators: [showDocSource()],
  render: () => <></>
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    source: {
      code: dedent\`
                <div>Hello, World!</div>
                \`,
      language: 'html'
    }
  }),
  decorators: [showDocSource()],
  render: () => <></>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    source: {
      code: dedent\`
                <div>Hello, World!</div>
                \`,
      language: 'html'
    },
    theme: themes.dark
  }),
  decorators: [showDocSource()],
  render: () => <></>
}`,...a.parameters?.docs?.source}}};const h=["BasicUsage","ShowSourceOnly","WithLanguage","WithDocsTheme"];export{o as BasicUsage,r as ShowSourceOnly,a as WithDocsTheme,s as WithLanguage,h as __namedExportsOrder,g as default};
