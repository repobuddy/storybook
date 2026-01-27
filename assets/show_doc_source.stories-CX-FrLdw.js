import{j as o,t as b}from"./iframe-DZeDBpWG.js";import{s as e,w as g}from"./with_story_card-i8jRKsjD.js";import{d as r}from"./define_docs_param-lmgaBKCF.js";import"./preload-helper-PPVm8Dsz.js";const m=({text:s="Hello World"})=>o.jsx("div",{className:"rbsb:p-4 rbsb:bg-gray-100 rbsb:dark:bg-gray-500 rbsb:rounded",children:s}),W={title:"decorators/showDocSource",tags:["version:2.4"],render:()=>o.jsx(o.Fragment,{})},a={decorators:[e()],render:()=>o.jsx(m,{text:"Hello World"})},n={name:"Show docs.source.code",parameters:{docs:{source:{code:'() => <DemoComponent text="Hello World" />'}}},decorators:[g({content:o.jsxs("p",{children:["Shows the code in ",o.jsx("code",{children:"docs.source.code"})," parameter"]})}),e(),e({showOriginalSource:!0})]},t={name:"With docs.source.language: json",parameters:r({source:{code:'{ "hello": "world" }',language:"json"}}),decorators:[e(),e({showOriginalSource:!0})]},c={name:"With docs.source.language: md",parameters:r({source:{code:"This is a `markdown` text",language:"md"}}),decorators:[e(),e({showOriginalSource:!0})]},d={name:"With docs.theme: dark",parameters:r({source:{code:"<div>Hello, World!</div>"},theme:b.dark}),decorators:[e(),e({showOriginalSource:!0})]},i={name:"className: string",tags:["props","version:next","!version:2.4"],parameters:r({source:{code:"<div>Hello, World!</div>"},description:{story:"Demonstrates using className as a string to add custom styling"}}),decorators:[e({showOriginalSource:!0,className:"rbsb:bg-blue-500 rbsb:dark:bg-blue-900"})],render:()=>o.jsx(m,{text:"Custom border and shadow"})},l={name:"className: function",tags:["props","version:next","!version:2.4"],parameters:r({source:{code:"<div>Hello, World!</div>"},description:{story:"Demonstrates using className as a function to conditionally apply styles based on state"}}),decorators:[e({className:({defaultClassName:s})=>`${s} rbsb:border-2 rbsb:border-purple-500 rbsb:rounded-lg`})],render:()=>o.jsx(m,{text:"Function-based styling"})},u={name:"With className: conditional function",tags:["props","version:next","!version:2.4"],parameters:r({source:{code:"<div>Hello, World!</div>"},description:{story:"Demonstrates using className function to access state and apply conditional styles"}}),decorators:[e({className:({defaultClassName:s,status:p})=>`${s} ${p==="info"?"rbsb:border-2 rbsb:border-blue-500 rbsb:ring-2 rbsb:ring-blue-200 rbsb:dark:ring-blue-800":"rbsb:border-2 rbsb:rounded-lg"}`})],render:()=>o.jsx(m,{text:"Conditional styling with function"})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  decorators: [showDocSource()],
  render: () => <DemoComponent text="Hello World" />
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'className: string',
  tags: ['props', 'version:next', '!version:2.4'],
  parameters: defineDocsParam({
    source: {
      code: '<div>Hello, World!</div>'
    },
    description: {
      story: 'Demonstrates using className as a string to add custom styling'
    }
  }),
  decorators: [showDocSource({
    showOriginalSource: true,
    className: 'rbsb:bg-blue-500 rbsb:dark:bg-blue-900'
  })],
  render: () => <DemoComponent text="Custom border and shadow" />
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'className: function',
  tags: ['props', 'version:next', '!version:2.4'],
  parameters: defineDocsParam({
    source: {
      code: '<div>Hello, World!</div>'
    },
    description: {
      story: 'Demonstrates using className as a function to conditionally apply styles based on state'
    }
  }),
  decorators: [showDocSource({
    className: ({
      defaultClassName
    }) => {
      return \`\${defaultClassName} rbsb:border-2 rbsb:border-purple-500 rbsb:rounded-lg\`;
    }
  })],
  render: () => <DemoComponent text="Function-based styling" />
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'With className: conditional function',
  tags: ['props', 'version:next', '!version:2.4'],
  parameters: defineDocsParam({
    source: {
      code: '<div>Hello, World!</div>'
    },
    description: {
      story: 'Demonstrates using className function to access state and apply conditional styles'
    }
  }),
  decorators: [showDocSource({
    className: ({
      defaultClassName,
      status
    }) => {
      // Status will be 'info' by default since showDocSource doesn't set it
      const additionalStyles = status === 'info' ? 'rbsb:border-2 rbsb:border-blue-500 rbsb:ring-2 rbsb:ring-blue-200 rbsb:dark:ring-blue-800' : 'rbsb:border-2 rbsb:rounded-lg';
      return \`\${defaultClassName} \${additionalStyles}\`;
    }
  })],
  render: () => <DemoComponent text="Conditional styling with function" />
}`,...u.parameters?.docs?.source}}};const v=["ShowStoryCode","ShowDocsSource","WithLanguageJson","WithLanguageMd","WithDocsTheme","WithClassNameString","WithClassNameFunction","WithClassNameConditional"];export{n as ShowDocsSource,a as ShowStoryCode,u as WithClassNameConditional,l as WithClassNameFunction,i as WithClassNameString,d as WithDocsTheme,t as WithLanguageJson,c as WithLanguageMd,v as __namedExportsOrder,W as default};
