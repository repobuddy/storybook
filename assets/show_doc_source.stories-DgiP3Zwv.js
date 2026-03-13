import{n as e}from"./chunk-BneVvdWh.js";import{b as t,c as n}from"./theming-D7jRU-E2.js";import{t as r}from"./jsx-runtime-6sF1Ejqi.js";import{d as i,h as a,m as o,t as s}from"./src-xVZ3M_hi.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;e((()=>{n(),s(),c=r(),l=({text:e=`Hello World`})=>(0,c.jsx)(`div`,{className:`rbsb:p-4 rbsb:bg-gray-100 rbsb:dark:bg-gray-500 rbsb:rounded`,children:e}),u={title:`decorators/showDocSource`,tags:[`deprecated`,`version:2.22`,`!snapshot`],decorators:[o({appearance:`warn`,content:(0,c.jsxs)(`p`,{children:[`This decorator is deprecated. Use `,(0,c.jsx)(`code`,{children:`showSource`}),` instead.`]})})],render:()=>(0,c.jsx)(c.Fragment,{})},d={parameters:{docs:{source:{code:`() => /* from docs.source.code */ <DemoComponent text="Hello World" />`}}},decorators:[o({content:(0,c.jsxs)(`p`,{children:[`When `,(0,c.jsx)(`code`,{children:`docs.source.code`}),` is provided, the decorator will show it by default.`]})}),a()],render:()=>(0,c.jsx)(l,{text:`Hello World`})},f={decorators:[o({content:(0,c.jsx)(`p`,{children:"When no `source` is provided, the decorator will use the original source code of the story."})}),a()],render:()=>(0,c.jsx)(l,{text:`Hello World`})},p={name:`With docs.source.language: json`,parameters:i({source:{code:`{ "hello": "world" }`,language:`json`}}),decorators:[o({content:(0,c.jsxs)(`p`,{children:[`Use `,(0,c.jsx)(`code`,{children:`docs.source.language`}),` to specify the language of the source code.`]})}),a(),a({showOriginalSource:!0})]},m={name:`With docs.source.language: md`,parameters:i({source:{code:"This is a `markdown` text",language:`md`}}),decorators:[o({content:(0,c.jsxs)(`p`,{children:[`Use `,(0,c.jsx)(`code`,{children:`docs.source.language`}),` to specify the language of the source code.`]})}),a(),a({showOriginalSource:!0})]},h={name:`With docs.theme: dark`,parameters:i({source:{code:`<div>Hello, World!</div>`},theme:t.dark}),decorators:[o({content:(0,c.jsxs)(`p`,{children:[`Use `,(0,c.jsx)(`code`,{children:`docs.theme`}),` to specify the theme of the source code.`]})}),a(),a({showOriginalSource:!0})]},g={name:`showOriginalSource: true`,tags:[`props`],parameters:{docs:{source:{code:`() => <DemoComponent text="Hello World" />`}}},decorators:[o({content:(0,c.jsxs)(`p`,{children:[`Use `,(0,c.jsx)(`code`,{children:`showOriginalSource: true`}),` to show the source code of the story instead of the one in`,` `,(0,c.jsx)(`code`,{children:`docs.source.code`}),`.`]})}),a({showOriginalSource:!0})]},_={name:`className: string`,tags:[`props`],parameters:i({source:{code:`<div>Hello, World!</div>`},description:{story:`Demonstrates using className as a string to add custom styling`}}),decorators:[a({className:`rbsb:bg-blue-500 rbsb:dark:bg-blue-900`})],render:()=>(0,c.jsx)(l,{text:`Custom border and shadow`})},v={name:`className: function`,tags:[`props`],parameters:i({source:{code:`<div>Hello, World!</div>`},description:{story:`Demonstrates using className as a function to conditionally apply styles based on state`}}),decorators:[a({className:({defaultClassName:e})=>`${e} rbsb:border-2 rbsb:border-purple-500 rbsb:rounded-lg`})],render:()=>(0,c.jsx)(l,{text:`Function-based styling`})},y={name:`className: conditional function`,tags:[`props`],parameters:i({source:{code:`<div>Hello, World!</div>`},description:{story:`Demonstrates using className function to access state and apply conditional styles`}}),decorators:[a({className:({defaultClassName:e,status:t})=>`${e} ${t===`info`?`rbsb:border-2 rbsb:border-blue-500 rbsb:ring-2 rbsb:ring-blue-200 rbsb:dark:ring-blue-800`:`rbsb:border-2 rbsb:rounded-lg`}`})],render:()=>(0,c.jsx)(l,{text:`Conditional styling with function`})},b={name:`source: string`,tags:[`props`],decorators:[o({content:(0,c.jsxs)(`p`,{children:[`Pass `,(0,c.jsx)(`code`,{children:`source`}),` as a string to the decorator to override the displayed source code.`]})}),a({source:`() => <DemoComponent text="Hello World" />`})],render:()=>(0,c.jsx)(l,{text:`Hello World`})},x={name:`source: function`,tags:[`props`],parameters:i({source:{code:`() => <DemoComponent text="Hello World" />`},description:{story:`Pass source as a function (originalSource) => string to transform the story source before displaying.`}}),decorators:[o({content:(0,c.jsxs)(`p`,{children:[`Pass `,(0,c.jsx)(`code`,{children:`source`}),` as a function to transform the original source. The function receives the story's source and returns the code to display.`]})}),a({source:e=>`// Wrapped by source function\n${e??``}\n// End of transformed source`})],render:()=>(0,c.jsx)(l,{text:`Hello World`})},S={name:`placement: 'before'`,tags:[`props`],parameters:i({source:{code:`() => <DemoComponent text="Rendered below the source" />`},description:{story:"Use `placement: 'before'` to show the source code above the rendered story instead of below."}}),decorators:[o({content:(0,c.jsxs)(`p`,{children:[`Use `,(0,c.jsx)(`code`,{children:`placement: 'before'`}),` to display the source code card above the story output.`]})}),a({placement:`before`})],render:()=>(0,c.jsx)(l,{text:`Rendered below the source`})},C={name:`two showDocSource (placement: 'before')`,tags:[`unit`,`snapshot`],parameters:i({source:{code:`() => <DemoComponent text="Story content" />`},description:{story:`With two showDocSource(placement: 'before'), cards are rendered in decorator order: first source card, second source card, then the story.`}}),decorators:[a({placement:`before`,source:`// First source block`}),a({placement:`before`,source:`// Second source block`})],render:()=>(0,c.jsx)(l,{text:`Story content`})},w={name:`two showDocSource (placement: 'after' / default)`,tags:[`unit`,`snapshot`],parameters:i({source:{code:`() => <DemoComponent text="Story content" />`},description:{story:`With two showDocSource() (placement defaults to 'after'), order is: story first, then first source card, then second source card.`}}),decorators:[a({source:`// First source block`}),a({source:`// Second source block`})],render:()=>(0,c.jsx)(l,{text:`Story content`})},T={name:`two withStoryCard + two showDocSource`,tags:[`unit`,`snapshot`],parameters:i({source:{code:`() => <DemoComponent text="Story content" />`},description:{story:`Cards render in decorator order: First card (withStoryCard), source before (showDocSource placement: 'before'), second card (withStoryCard), story, then source after (showDocSource).`}}),decorators:[o({title:`First card`,content:(0,c.jsx)(`p`,{children:`This card should appear first.`})}),a({placement:`before`,source:`// Source shown before the story`}),o({title:`Second card`,content:(0,c.jsx)(`p`,{children:`This card should appear after the first source.`})}),a({source:`// Source shown after the story`})],render:()=>(0,c.jsx)(l,{text:`Story content`})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  decorators: [withStoryCard({
    content: <p>When no \`source\` is provided, the decorator will use the original source code of the story.</p>
  }), showDocSource()],
  render: () => <DemoComponent text="Hello World" />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'className: string',
  tags: ['props'],
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'className: function',
  tags: ['props'],
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'className: conditional function',
  tags: ['props'],
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'source: string',
  tags: ['props'],
  decorators: [withStoryCard({
    content: <p>
                    Pass <code>source</code> as a string to the decorator to override the displayed source code.
                </p>
  }), showDocSource({
    source: '() => <DemoComponent text="Hello World" />'
  })],
  render: () => <DemoComponent text="Hello World" />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'source: function',
  tags: ['props'],
  parameters: defineDocsParam({
    source: {
      code: '() => <DemoComponent text="Hello World" />'
    },
    description: {
      story: 'Pass source as a function (originalSource) => string to transform the story source before displaying.'
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    Pass <code>source</code> as a function to transform the original source. The function receives the
                    story&apos;s source and returns the code to display.
                </p>
  }), showDocSource({
    source: original => \`// Wrapped by source function\\n\${original ?? ''}\\n// End of transformed source\`
  })],
  render: () => <DemoComponent text="Hello World" />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "placement: 'before'",
  tags: ['props'],
  parameters: defineDocsParam({
    source: {
      code: '() => <DemoComponent text="Rendered below the source" />'
    },
    description: {
      story: "Use \`placement: 'before'\` to show the source code above the rendered story instead of below."
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    Use <code>placement: 'before'</code> to display the source code card above the story output.
                </p>
  }), showDocSource({
    placement: 'before'
  })],
  render: () => <DemoComponent text="Rendered below the source" />
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "two showDocSource (placement: 'before')",
  tags: ['unit', 'snapshot'],
  parameters: defineDocsParam({
    source: {
      code: '() => <DemoComponent text="Story content" />'
    },
    description: {
      story: "With two showDocSource(placement: 'before'), cards are rendered in decorator order: first source card, second source card, then the story."
    }
  }),
  decorators: [showDocSource({
    placement: 'before',
    source: '// First source block'
  }), showDocSource({
    placement: 'before',
    source: '// Second source block'
  })],
  render: () => <DemoComponent text="Story content" />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "two showDocSource (placement: 'after' / default)",
  tags: ['unit', 'snapshot'],
  parameters: defineDocsParam({
    source: {
      code: '() => <DemoComponent text="Story content" />'
    },
    description: {
      story: "With two showDocSource() (placement defaults to 'after'), order is: story first, then first source card, then second source card."
    }
  }),
  decorators: [showDocSource({
    source: '// First source block'
  }), showDocSource({
    source: '// Second source block'
  })],
  render: () => <DemoComponent text="Story content" />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'two withStoryCard + two showDocSource',
  tags: ['unit', 'snapshot'],
  parameters: defineDocsParam({
    source: {
      code: '() => <DemoComponent text="Story content" />'
    },
    description: {
      story: "Cards render in decorator order: First card (withStoryCard), source before (showDocSource placement: 'before'), second card (withStoryCard), story, then source after (showDocSource)."
    }
  }),
  decorators: [withStoryCard({
    title: 'First card',
    content: <p>This card should appear first.</p>
  }), showDocSource({
    placement: 'before',
    source: '// Source shown before the story'
  }), withStoryCard({
    title: 'Second card',
    content: <p>This card should appear after the first source.</p>
  }), showDocSource({
    source: '// Source shown after the story'
  })],
  render: () => <DemoComponent text="Story content" />
}`,...T.parameters?.docs?.source}}},E=[`ShowDocsSourceCode`,`ShowStorySource`,`WithLanguageJson`,`WithLanguageMd`,`WithDocsTheme`,`ShowDocsSource`,`WithClassNameString`,`WithClassNameFunction`,`WithClassNameConditional`,`WithSourceString`,`WithSourceFunction`,`PlacementBefore`,`TwoShowDocSourceBefore`,`TwoShowDocSourceAfter`,`TwoWithStoryCardTwoShowDocSource`]}))();export{S as PlacementBefore,g as ShowDocsSource,d as ShowDocsSourceCode,f as ShowStorySource,w as TwoShowDocSourceAfter,C as TwoShowDocSourceBefore,T as TwoWithStoryCardTwoShowDocSource,y as WithClassNameConditional,v as WithClassNameFunction,_ as WithClassNameString,h as WithDocsTheme,p as WithLanguageJson,m as WithLanguageMd,x as WithSourceFunction,b as WithSourceString,E as __namedExportsOrder,u as default};