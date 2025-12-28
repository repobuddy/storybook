import{j as e,t as m}from"./iframe-CLNnVhs-.js";import{s as n}from"./with_story_card-DxkGFcDR.js";import{d as t}from"./define_docs_param-lmgaBKCF.js";import{d}from"./dedent-BuYMbVyj.js";import"./preload-helper-PPVm8Dsz.js";const l=({text:c="Hello World"})=>e.jsx("div",{className:"p-4 bg-gray-100 dark:bg-gray-500 rounded",children:c}),D={title:"decorators/showDocSource",tags:["autodocs"],parameters:{layout:"padded"}},o={parameters:{docs:{source:{code:'() => <DemoComponent text="Hello World" />'}}},decorators:[n()],render:()=>e.jsx(l,{text:"Hello World"})},r={parameters:{docs:{source:{code:'() => <DemoComponent text="Hello World" />'}}},decorators:[n()],render:()=>e.jsx(e.Fragment,{})},s={parameters:t({source:{code:d`
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
}`,...a.parameters?.docs?.source}}};const x=["BasicUsage","ShowSourceOnly","WithLanguage","WithDocsTheme"];export{o as BasicUsage,r as ShowSourceOnly,a as WithDocsTheme,s as WithLanguage,x as __namedExportsOrder,D as default};
