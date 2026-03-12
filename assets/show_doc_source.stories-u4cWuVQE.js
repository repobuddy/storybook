import"./components-DmejZTLj.js";import"./react-K5peCFg_.js";import{v as e}from"./theming-WcYNKmPB.js";import"./react-dom-CYc0L8kE.js";import{t}from"./jsx-runtime-BUC2lftT.js";import{f as n,l as r,p as i}from"./src-CPfUkyQY.js";var a=t(),o=({text:e=`Hello World`})=>(0,a.jsx)(`div`,{className:`rbsb:p-4 rbsb:bg-gray-100 rbsb:dark:bg-gray-500 rbsb:rounded`,children:e}),s={title:`decorators/showDocSource`,tags:[`deprecated`,`version:2.22`,`!snapshot`],decorators:[n({appearance:`warn`,content:(0,a.jsxs)(`p`,{children:[`This decorator is deprecated. Use `,(0,a.jsx)(`code`,{children:`showSource`}),` instead.`]})})],render:()=>(0,a.jsx)(a.Fragment,{})},c={parameters:{docs:{source:{code:`() => /* from docs.source.code */ <DemoComponent text="Hello World" />`}}},decorators:[n({content:(0,a.jsxs)(`p`,{children:[`When `,(0,a.jsx)(`code`,{children:`docs.source.code`}),` is provided, the decorator will show it by default.`]})}),i()],render:()=>(0,a.jsx)(o,{text:`Hello World`})},l={decorators:[n({content:(0,a.jsx)(`p`,{children:"When no `source` is provided, the decorator will use the original source code of the story."})}),i()],render:()=>(0,a.jsx)(o,{text:`Hello World`})},u={name:`With docs.source.language: json`,parameters:r({source:{code:`{ "hello": "world" }`,language:`json`}}),decorators:[n({content:(0,a.jsxs)(`p`,{children:[`Use `,(0,a.jsx)(`code`,{children:`docs.source.language`}),` to specify the language of the source code.`]})}),i(),i({showOriginalSource:!0})]},d={name:`With docs.source.language: md`,parameters:r({source:{code:"This is a `markdown` text",language:`md`}}),decorators:[n({content:(0,a.jsxs)(`p`,{children:[`Use `,(0,a.jsx)(`code`,{children:`docs.source.language`}),` to specify the language of the source code.`]})}),i(),i({showOriginalSource:!0})]},f={name:`With docs.theme: dark`,parameters:r({source:{code:`<div>Hello, World!</div>`},theme:e.dark}),decorators:[n({content:(0,a.jsxs)(`p`,{children:[`Use `,(0,a.jsx)(`code`,{children:`docs.theme`}),` to specify the theme of the source code.`]})}),i(),i({showOriginalSource:!0})]},p={name:`showOriginalSource: true`,tags:[`props`],parameters:{docs:{source:{code:`() => <DemoComponent text="Hello World" />`}}},decorators:[n({content:(0,a.jsxs)(`p`,{children:[`Use `,(0,a.jsx)(`code`,{children:`showOriginalSource: true`}),` to show the source code of the story instead of the one in`,` `,(0,a.jsx)(`code`,{children:`docs.source.code`}),`.`]})}),i({showOriginalSource:!0})]},m={name:`className: string`,tags:[`props`],parameters:r({source:{code:`<div>Hello, World!</div>`},description:{story:`Demonstrates using className as a string to add custom styling`}}),decorators:[i({className:`rbsb:bg-blue-500 rbsb:dark:bg-blue-900`})],render:()=>(0,a.jsx)(o,{text:`Custom border and shadow`})},h={name:`className: function`,tags:[`props`],parameters:r({source:{code:`<div>Hello, World!</div>`},description:{story:`Demonstrates using className as a function to conditionally apply styles based on state`}}),decorators:[i({className:({defaultClassName:e})=>`${e} rbsb:border-2 rbsb:border-purple-500 rbsb:rounded-lg`})],render:()=>(0,a.jsx)(o,{text:`Function-based styling`})},g={name:`className: conditional function`,tags:[`props`],parameters:r({source:{code:`<div>Hello, World!</div>`},description:{story:`Demonstrates using className function to access state and apply conditional styles`}}),decorators:[i({className:({defaultClassName:e,status:t})=>`${e} ${t===`info`?`rbsb:border-2 rbsb:border-blue-500 rbsb:ring-2 rbsb:ring-blue-200 rbsb:dark:ring-blue-800`:`rbsb:border-2 rbsb:rounded-lg`}`})],render:()=>(0,a.jsx)(o,{text:`Conditional styling with function`})},_={name:`source: string`,tags:[`props`],decorators:[n({content:(0,a.jsxs)(`p`,{children:[`Pass `,(0,a.jsx)(`code`,{children:`source`}),` as a string to the decorator to override the displayed source code.`]})}),i({source:`() => <DemoComponent text="Hello World" />`})],render:()=>(0,a.jsx)(o,{text:`Hello World`})},v={name:`source: function`,tags:[`props`],parameters:r({source:{code:`() => <DemoComponent text="Hello World" />`},description:{story:`Pass source as a function (originalSource) => string to transform the story source before displaying.`}}),decorators:[n({content:(0,a.jsxs)(`p`,{children:[`Pass `,(0,a.jsx)(`code`,{children:`source`}),` as a function to transform the original source. The function receives the story's source and returns the code to display.`]})}),i({source:e=>`// Wrapped by source function\n${e??``}\n// End of transformed source`})],render:()=>(0,a.jsx)(o,{text:`Hello World`})},y={name:`placement: 'before'`,tags:[`props`],parameters:r({source:{code:`() => <DemoComponent text="Rendered below the source" />`},description:{story:"Use `placement: 'before'` to show the source code above the rendered story instead of below."}}),decorators:[n({content:(0,a.jsxs)(`p`,{children:[`Use `,(0,a.jsx)(`code`,{children:`placement: 'before'`}),` to display the source code card above the story output.`]})}),i({placement:`before`})],render:()=>(0,a.jsx)(o,{text:`Rendered below the source`})},b={name:`two showDocSource (placement: 'before')`,tags:[`unit`,`snapshot`],parameters:r({source:{code:`() => <DemoComponent text="Story content" />`},description:{story:`With two showDocSource(placement: 'before'), cards are rendered in decorator order: first source card, second source card, then the story.`}}),decorators:[i({placement:`before`,source:`// First source block`}),i({placement:`before`,source:`// Second source block`})],render:()=>(0,a.jsx)(o,{text:`Story content`})},x={name:`two showDocSource (placement: 'after' / default)`,tags:[`unit`,`snapshot`],parameters:r({source:{code:`() => <DemoComponent text="Story content" />`},description:{story:`With two showDocSource() (placement defaults to 'after'), order is: story first, then first source card, then second source card.`}}),decorators:[i({source:`// First source block`}),i({source:`// Second source block`})],render:()=>(0,a.jsx)(o,{text:`Story content`})},S={name:`two withStoryCard + two showDocSource`,tags:[`unit`,`snapshot`],parameters:r({source:{code:`() => <DemoComponent text="Story content" />`},description:{story:`Cards render in decorator order: First card (withStoryCard), source before (showDocSource placement: 'before'), second card (withStoryCard), story, then source after (showDocSource).`}}),decorators:[n({title:`First card`,content:(0,a.jsx)(`p`,{children:`This card should appear first.`})}),i({placement:`before`,source:`// Source shown before the story`}),n({title:`Second card`,content:(0,a.jsx)(`p`,{children:`This card should appear after the first source.`})}),i({source:`// Source shown after the story`})],render:()=>(0,a.jsx)(o,{text:`Story content`})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  decorators: [withStoryCard({
    content: <p>When no \`source\` is provided, the decorator will use the original source code of the story.</p>
  }), showDocSource()],
  render: () => <DemoComponent text="Hello World" />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};var C=[`ShowDocsSourceCode`,`ShowStorySource`,`WithLanguageJson`,`WithLanguageMd`,`WithDocsTheme`,`ShowDocsSource`,`WithClassNameString`,`WithClassNameFunction`,`WithClassNameConditional`,`WithSourceString`,`WithSourceFunction`,`PlacementBefore`,`TwoShowDocSourceBefore`,`TwoShowDocSourceAfter`,`TwoWithStoryCardTwoShowDocSource`];export{y as PlacementBefore,p as ShowDocsSource,c as ShowDocsSourceCode,l as ShowStorySource,x as TwoShowDocSourceAfter,b as TwoShowDocSourceBefore,S as TwoWithStoryCardTwoShowDocSource,g as WithClassNameConditional,h as WithClassNameFunction,m as WithClassNameString,f as WithDocsTheme,u as WithLanguageJson,d as WithLanguageMd,v as WithSourceFunction,_ as WithSourceString,C as __namedExportsOrder,s as default};