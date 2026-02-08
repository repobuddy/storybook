import{j as e,t as D}from"./iframe-D07mGodj.js";import{s as o}from"./show_doc_source-BM54YOos.js";import{w as r}from"./with_story_card-BGlXAhZH.js";import{d as s}from"./define_docs_param-lmgaBKCF.js";import"./preload-helper-PPVm8Dsz.js";const t=({text:c="Hello World"})=>e.jsx("div",{className:"rbsb:p-4 rbsb:bg-gray-100 rbsb:dark:bg-gray-500 rbsb:rounded",children:c}),H={title:"decorators/showDocSource",tags:["version:2.4"],render:()=>e.jsx(e.Fragment,{})},n={parameters:{docs:{source:{code:'() => /* from docs.source.code */ <DemoComponent text="Hello World" />'}}},decorators:[r({content:e.jsxs("p",{children:["When ",e.jsx("code",{children:"docs.source.code"})," is provided, the decorator will show it by default."]})}),o()],render:()=>e.jsx(t,{text:"Hello World"})},a={decorators:[r({content:e.jsx("p",{children:"When no `source` is provided, the decorator will use the original source code of the story."})}),o()],render:()=>e.jsx(t,{text:"Hello World"})},d={name:"With docs.source.language: json",parameters:s({source:{code:'{ "hello": "world" }',language:"json"}}),decorators:[r({content:e.jsxs("p",{children:["Use ",e.jsx("code",{children:"docs.source.language"})," to specify the language of the source code."]})}),o(),o({showOriginalSource:!0})]},i={name:"With docs.source.language: md",parameters:s({source:{code:"This is a `markdown` text",language:"md"}}),decorators:[r({content:e.jsxs("p",{children:["Use ",e.jsx("code",{children:"docs.source.language"})," to specify the language of the source code."]})}),o(),o({showOriginalSource:!0})]},u={name:"With docs.theme: dark",parameters:s({source:{code:"<div>Hello, World!</div>"},theme:D.dark}),decorators:[r({content:e.jsxs("p",{children:["Use ",e.jsx("code",{children:"docs.theme"})," to specify the theme of the source code."]})}),o(),o({showOriginalSource:!0})]},l={name:"showOriginalSource: true",tags:["props"],parameters:{docs:{source:{code:'() => <DemoComponent text="Hello World" />'}}},decorators:[r({content:e.jsxs("p",{children:["Use ",e.jsx("code",{children:"showOriginalSource: true"})," to show the source code of the story instead of the one in"," ",e.jsx("code",{children:"docs.source.code"}),"."]})}),o({showOriginalSource:!0})]},m={name:"className: string",tags:["props","version:2.5","!version:2.4"],parameters:s({source:{code:"<div>Hello, World!</div>"},description:{story:"Demonstrates using className as a string to add custom styling"}}),decorators:[o({className:"rbsb:bg-blue-500 rbsb:dark:bg-blue-900"})],render:()=>e.jsx(t,{text:"Custom border and shadow"})},h={name:"className: function",tags:["props","version:2.5","!version:2.4"],parameters:s({source:{code:"<div>Hello, World!</div>"},description:{story:"Demonstrates using className as a function to conditionally apply styles based on state"}}),decorators:[o({className:({defaultClassName:c})=>`${c} rbsb:border-2 rbsb:border-purple-500 rbsb:rounded-lg`})],render:()=>e.jsx(t,{text:"Function-based styling"})},p={name:"className: conditional function",tags:["props","version:2.5","!version:2.4"],parameters:s({source:{code:"<div>Hello, World!</div>"},description:{story:"Demonstrates using className function to access state and apply conditional styles"}}),decorators:[o({className:({defaultClassName:c,status:y})=>`${c} ${y==="info"?"rbsb:border-2 rbsb:border-blue-500 rbsb:ring-2 rbsb:ring-blue-200 rbsb:dark:ring-blue-800":"rbsb:border-2 rbsb:rounded-lg"}`})],render:()=>e.jsx(t,{text:"Conditional styling with function"})},S={name:"source: string",tags:["props","version:2.7"],decorators:[r({content:e.jsxs("p",{children:["Pass ",e.jsx("code",{children:"source"})," as a string to the decorator to override the displayed source code."]})}),o({source:'() => <DemoComponent text="Hello World" />'})],render:()=>e.jsx(t,{text:"Hello World"})},b={name:"before: true",tags:["props","version:next","!version:2.4"],parameters:s({source:{code:'() => <DemoComponent text="Rendered below the source" />'},description:{story:"Use `before: true` to show the source code above the rendered story instead of below."}}),decorators:[r({content:e.jsxs("p",{children:["Use ",e.jsx("code",{children:"before: true"})," to display the source code card above the story output."]})}),o({before:!0})],render:()=>e.jsx(t,{text:"Rendered below the source"})},g={name:"two showDocSource (before: true)",tags:["unit","!version:2.4","snapshot"],parameters:s({source:{code:'() => <DemoComponent text="Story content" />'},description:{story:"With two showDocSource(before: true), cards are rendered in decorator order: first source card, second source card, then the story."}}),decorators:[o({before:!0,source:"// First source block"}),o({before:!0,source:"// Second source block"})],render:()=>e.jsx(t,{text:"Story content"})},w={name:"two showDocSource (default after)",tags:["unit","!version:2.4","snapshot"],parameters:s({source:{code:'() => <DemoComponent text="Story content" />'},description:{story:"With two showDocSource() (after), order is: story first, then first source card, then second source card."}}),decorators:[o({source:"// First source block"}),o({source:"// Second source block"})],render:()=>e.jsx(t,{text:"Story content"})},f={name:"two withStoryCard + two showDocSource",tags:["unit","!version:2.4","snapshot"],parameters:s({source:{code:'() => <DemoComponent text="Story content" />'},description:{story:"Cards render in decorator order: First card (withStoryCard), source before (showDocSource before: true), second card (withStoryCard), story, then source after (showDocSource)."}}),decorators:[r({title:"First card",content:e.jsx("p",{children:"This card should appear first."})}),o({before:!0,source:"// Source shown before the story"}),r({title:"Second card",content:e.jsx("p",{children:"This card should appear after the first source."})}),o({source:"// Source shown after the story"})],render:()=>e.jsx(t,{text:"Story content"})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  decorators: [withStoryCard({
    content: <p>When no \`source\` is provided, the decorator will use the original source code of the story.</p>
  }), showDocSource()],
  render: () => <DemoComponent text="Hello World" />
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'source: string',
  tags: ['props', 'version:2.7'],
  decorators: [withStoryCard({
    content: <p>
                    Pass <code>source</code> as a string to the decorator to override the displayed source code.
                </p>
  }), showDocSource({
    source: '() => <DemoComponent text="Hello World" />'
  })],
  render: () => <DemoComponent text="Hello World" />
}`,...S.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'before: true',
  tags: ['props', 'version:next', '!version:2.4'],
  parameters: defineDocsParam({
    source: {
      code: '() => <DemoComponent text="Rendered below the source" />'
    },
    description: {
      story: 'Use \`before: true\` to show the source code above the rendered story instead of below.'
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    Use <code>before: true</code> to display the source code card above the story output.
                </p>
  }), showDocSource({
    before: true
  })],
  render: () => <DemoComponent text="Rendered below the source" />
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'two showDocSource (before: true)',
  tags: ['unit', '!version:2.4', 'snapshot'],
  parameters: defineDocsParam({
    source: {
      code: '() => <DemoComponent text="Story content" />'
    },
    description: {
      story: 'With two showDocSource(before: true), cards are rendered in decorator order: first source card, second source card, then the story.'
    }
  }),
  decorators: [showDocSource({
    before: true,
    source: '// First source block'
  }), showDocSource({
    before: true,
    source: '// Second source block'
  })],
  render: () => <DemoComponent text="Story content" />
}`,...g.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'two showDocSource (default after)',
  tags: ['unit', '!version:2.4', 'snapshot'],
  parameters: defineDocsParam({
    source: {
      code: '() => <DemoComponent text="Story content" />'
    },
    description: {
      story: 'With two showDocSource() (after), order is: story first, then first source card, then second source card.'
    }
  }),
  decorators: [showDocSource({
    source: '// First source block'
  }), showDocSource({
    source: '// Second source block'
  })],
  render: () => <DemoComponent text="Story content" />
}`,...w.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'two withStoryCard + two showDocSource',
  tags: ['unit', '!version:2.4', 'snapshot'],
  parameters: defineDocsParam({
    source: {
      code: '() => <DemoComponent text="Story content" />'
    },
    description: {
      story: 'Cards render in decorator order: First card (withStoryCard), source before (showDocSource before: true), second card (withStoryCard), story, then source after (showDocSource).'
    }
  }),
  decorators: [withStoryCard({
    title: 'First card',
    content: <p>This card should appear first.</p>
  }), showDocSource({
    before: true,
    source: '// Source shown before the story'
  }), withStoryCard({
    title: 'Second card',
    content: <p>This card should appear after the first source.</p>
  }), showDocSource({
    source: '// Source shown after the story'
  })],
  render: () => <DemoComponent text="Story content" />
}`,...f.parameters?.docs?.source}}};const k=["ShowDocsSourceCode","ShowStorySource","WithLanguageJson","WithLanguageMd","WithDocsTheme","ShowDocsSource","WithClassNameString","WithClassNameFunction","WithClassNameConditional","WithSourceString","BeforeTrue","TwoShowDocSourceBefore","TwoShowDocSourceAfter","TwoWithStoryCardTwoShowDocSource"];export{b as BeforeTrue,l as ShowDocsSource,n as ShowDocsSourceCode,a as ShowStorySource,w as TwoShowDocSourceAfter,g as TwoShowDocSourceBefore,f as TwoWithStoryCardTwoShowDocSource,p as WithClassNameConditional,h as WithClassNameFunction,m as WithClassNameString,u as WithDocsTheme,d as WithLanguageJson,i as WithLanguageMd,S as WithSourceString,k as __namedExportsOrder,H as default};
