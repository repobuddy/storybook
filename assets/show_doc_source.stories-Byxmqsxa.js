import{j as e,t as S}from"./iframe-xffYfGTy.js";import{w as r,s as o}from"./with_story_card-B558v32k.js";import{d as s}from"./define_docs_param-lmgaBKCF.js";import"./preload-helper-PPVm8Dsz.js";const t=({text:n="Hello World"})=>e.jsx("div",{className:"rbsb:p-4 rbsb:bg-gray-100 rbsb:dark:bg-gray-500 rbsb:rounded",children:n}),x={title:"decorators/showDocSource",tags:["version:2.4"],render:()=>e.jsx(e.Fragment,{})},a={parameters:{docs:{source:{code:'() => /* from docs.source.code */ <DemoComponent text="Hello World" />'}}},decorators:[r({content:e.jsxs("p",{children:["When ",e.jsx("code",{children:"docs.source.code"})," is provided, the decorator will show it by default."]})}),o()],render:()=>e.jsx(t,{text:"Hello World"})},c={decorators:[r({content:e.jsx("p",{children:"When no `source` is provided, the decorator will use the original source code of the story."})}),o()],render:()=>e.jsx(t,{text:"Hello World"})},d={name:"With docs.source.language: json",parameters:s({source:{code:'{ "hello": "world" }',language:"json"}}),decorators:[r({content:e.jsxs("p",{children:["Use ",e.jsx("code",{children:"docs.source.language"})," to specify the language of the source code."]})}),o(),o({showOriginalSource:!0})]},i={name:"With docs.source.language: md",parameters:s({source:{code:"This is a `markdown` text",language:"md"}}),decorators:[r({content:e.jsxs("p",{children:["Use ",e.jsx("code",{children:"docs.source.language"})," to specify the language of the source code."]})}),o(),o({showOriginalSource:!0})]},l={name:"With docs.theme: dark",parameters:s({source:{code:"<div>Hello, World!</div>"},theme:S.dark}),decorators:[r({content:e.jsxs("p",{children:["Use ",e.jsx("code",{children:"docs.theme"})," to specify the theme of the source code."]})}),o(),o({showOriginalSource:!0})]},u={name:"showOriginalSource: true",tags:["props"],parameters:{docs:{source:{code:'() => <DemoComponent text="Hello World" />'}}},decorators:[r({content:e.jsxs("p",{children:["Use ",e.jsx("code",{children:"showOriginalSource: true"})," to show the source code of the story instead of the one in"," ",e.jsx("code",{children:"docs.source.code"}),"."]})}),o({showOriginalSource:!0})]},m={name:"className: string",tags:["props","version:2.5","!version:2.4"],parameters:s({source:{code:"<div>Hello, World!</div>"},description:{story:"Demonstrates using className as a string to add custom styling"}}),decorators:[o({className:"rbsb:bg-blue-500 rbsb:dark:bg-blue-900"})],render:()=>e.jsx(t,{text:"Custom border and shadow"})},p={name:"className: function",tags:["props","version:2.5","!version:2.4"],parameters:s({source:{code:"<div>Hello, World!</div>"},description:{story:"Demonstrates using className as a function to conditionally apply styles based on state"}}),decorators:[o({className:({defaultClassName:n})=>`${n} rbsb:border-2 rbsb:border-purple-500 rbsb:rounded-lg`})],render:()=>e.jsx(t,{text:"Function-based styling"})},h={name:"className: conditional function",tags:["props","version:2.5","!version:2.4"],parameters:s({source:{code:"<div>Hello, World!</div>"},description:{story:"Demonstrates using className function to access state and apply conditional styles"}}),decorators:[o({className:({defaultClassName:n,status:b})=>`${n} ${b==="info"?"rbsb:border-2 rbsb:border-blue-500 rbsb:ring-2 rbsb:ring-blue-200 rbsb:dark:ring-blue-800":"rbsb:border-2 rbsb:rounded-lg"}`})],render:()=>e.jsx(t,{text:"Conditional styling with function"})},g={name:"source: string",tags:["props","version:2.7"],decorators:[o({source:'() => <DemoComponent text="Hello World" />'})]};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`() => /* from docs.source.code */ <DemoComponent text="Hello World" />\`
      }
    }
  },
  decorators: [withStoryCard({
    content: <p>
                    When <code>docs.source.code</code> is provided, the decorator will show it by default.
                </p>
  }), showDocSource()],
  render: () => <DemoComponent text="Hello World" />
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  decorators: [withStoryCard({
    content: <p>When no \`source\` is provided, the decorator will use the original source code of the story.</p>
  }), showDocSource()],
  render: () => <DemoComponent text="Hello World" />
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'With docs.source.language: json',
  parameters: defineDocsParam({
    source: {
      code: '{ "hello": "world" }',
      language: 'json'
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    Use <code>docs.source.language</code> to specify the language of the source code.
                </p>
  }), showDocSource(), showDocSource({
    showOriginalSource: true
  })]
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'With docs.source.language: md',
  parameters: defineDocsParam({
    source: {
      code: 'This is a \`markdown\` text',
      language: 'md'
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    Use <code>docs.source.language</code> to specify the language of the source code.
                </p>
  }), showDocSource(), showDocSource({
    showOriginalSource: true
  })]
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'With docs.theme: dark',
  parameters: defineDocsParam({
    source: {
      code: '<div>Hello, World!</div>'
    },
    theme: themes.dark
  }),
  decorators: [withStoryCard({
    content: <p>
                    Use <code>docs.theme</code> to specify the theme of the source code.
                </p>
  }), showDocSource(), showDocSource({
    showOriginalSource: true
  })]
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'showOriginalSource: true',
  tags: ['props'],
  parameters: {
    docs: {
      source: {
        code: \`() => <DemoComponent text="Hello World" />\`
      }
    }
  },
  decorators: [withStoryCard({
    content: <p>
                    Use <code>showOriginalSource: true</code> to show the source code of the story instead of the one in{' '}
                    <code>docs.source.code</code>.
                </p>
  }), showDocSource({
    showOriginalSource: true
  })]
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'className: string',
  tags: ['props', 'version:2.5', '!version:2.4'],
  parameters: defineDocsParam({
    source: {
      code: '<div>Hello, World!</div>'
    },
    description: {
      story: 'Demonstrates using className as a string to add custom styling'
    }
  }),
  decorators: [showDocSource({
    className: 'rbsb:bg-blue-500 rbsb:dark:bg-blue-900'
  })],
  render: () => <DemoComponent text="Custom border and shadow" />
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'className: function',
  tags: ['props', 'version:2.5', '!version:2.4'],
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
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'className: conditional function',
  tags: ['props', 'version:2.5', '!version:2.4'],
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
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'source: string',
  tags: ['props', 'version:2.7'],
  decorators: [showDocSource({
    source: '() => <DemoComponent text="Hello World" />'
  })]
}`,...g.parameters?.docs?.source}}};const C=["ShowDocsSourceCode","ShowStorySource","WithLanguageJson","WithLanguageMd","WithDocsTheme","ShowDocsSource","WithClassNameString","WithClassNameFunction","WithClassNameConditional","WithSourceString"];export{u as ShowDocsSource,a as ShowDocsSourceCode,c as ShowStorySource,h as WithClassNameConditional,p as WithClassNameFunction,m as WithClassNameString,l as WithDocsTheme,d as WithLanguageJson,i as WithLanguageMd,g as WithSourceString,C as __namedExportsOrder,x as default};
