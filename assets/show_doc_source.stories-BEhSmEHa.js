import{j as o,t as m}from"./iframe-D9LbATtO.js";import{s as e,w as u}from"./with_story_card-CDummKUI.js";import{d as t}from"./define_docs_param-lmgaBKCF.js";import"./preload-helper-PPVm8Dsz.js";const i=({text:d="Hello World"})=>o.jsx("div",{className:"p-4 bg-gray-100 dark:bg-gray-500 rounded",children:d}),S={title:"decorators/showDocSource",tags:["version:2.4"],render:()=>o.jsx(o.Fragment,{})},r={decorators:[e()],render:()=>o.jsx(i,{text:"Hello World"})},s={name:"Show docs.source.code",parameters:{docs:{source:{code:'() => <DemoComponent text="Hello World" />'}}},decorators:[u({content:o.jsxs("p",{children:["Shows the code in ",o.jsx("code",{children:"docs.source.code"})," parameter"]})}),e(),e({showOriginalSource:!0})]},a={name:"With docs.source.language: json",parameters:t({source:{code:'{ "hello": "world" }',language:"json"}}),decorators:[e(),e({showOriginalSource:!0})]},c={name:"With docs.source.language: md",parameters:t({source:{code:"This is a `markdown` text",language:"md"}}),decorators:[e(),e({showOriginalSource:!0})]},n={name:"With docs.theme: dark",parameters:t({source:{code:"<div>Hello, World!</div>"},theme:m.dark}),decorators:[e(),e({showOriginalSource:!0})]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  decorators: [showDocSource()],
  render: () => <DemoComponent text="Hello World" />
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Show docs.source.code',
  parameters: {
    docs: {
      source: {
        code: \`() => <DemoComponent text="Hello World" />\`
      }
    }
  },
  decorators: [withStoryCard({
    content: <p>
                    Shows the code in <code>docs.source.code</code> parameter
                </p>
  }), showDocSource(), showDocSource({
    showOriginalSource: true
  })]
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'With docs.source.language: json',
  parameters: defineDocsParam({
    source: {
      code: '{ "hello": "world" }',
      language: 'json'
    }
  }),
  decorators: [showDocSource(), showDocSource({
    showOriginalSource: true
  })]
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'With docs.source.language: md',
  parameters: defineDocsParam({
    source: {
      code: 'This is a \`markdown\` text',
      language: 'md'
    }
  }),
  decorators: [showDocSource(), showDocSource({
    showOriginalSource: true
  })]
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'With docs.theme: dark',
  parameters: defineDocsParam({
    source: {
      code: '<div>Hello, World!</div>'
    },
    theme: themes.dark
  }),
  decorators: [showDocSource(), showDocSource({
    showOriginalSource: true
  })]
}`,...n.parameters?.docs?.source}}};const w=["ShowStoryCode","ShowDocsSource","WithLanguageJson","WithLanguageMd","WithDocsTheme"];export{s as ShowDocsSource,r as ShowStoryCode,n as WithDocsTheme,a as WithLanguageJson,c as WithLanguageMd,w as __namedExportsOrder,S as default};
