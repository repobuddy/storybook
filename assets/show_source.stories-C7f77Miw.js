import"./components-DmejZTLj.js";import"./react-K5peCFg_.js";import{v as e}from"./theming-WcYNKmPB.js";import"./react-dom-CYc0L8kE.js";import{t}from"./jsx-runtime-BUC2lftT.js";import{t as n}from"./dedent-rZS-CQtP.js";import{f as r,g as i,l as a,m as o}from"./src-CPfUkyQY.js";var s=t(),{expect:c}=__STORYBOOK_MODULE_TEST__,l=({text:e=`Hello World`})=>(0,s.jsx)(`div`,{className:`rbsb:p-4 rbsb:bg-gray-100 rbsb:dark:bg-gray-500 rbsb:rounded`,children:e}),u={title:`decorators/showSource`,tags:[`version:2.22`,`!snapshot`],render:()=>(0,s.jsx)(s.Fragment,{})},d={name:`Show docs.source.code`,tags:[`use-case`],parameters:{docs:{source:{code:`() => /* from docs.source.code */ <DemoComponent text="Hello World" />`}}},decorators:[r({content:(0,s.jsxs)(`p`,{children:[`When `,(0,s.jsx)(`code`,{children:`docs.source.code`}),` is provided, the decorator will show it by default.`]})}),o({source:n`{
            parameters: defineDocsParam({
                source: {
                    code: '() => /* from docs.source.code */ <DemoComponent text="Hello World" />'
                }
            }),
            decorators: [showSource()]
        }`}),o()]},f={tags:[`use-case`],decorators:[r({content:(0,s.jsx)(`p`,{children:"When no `source` is provided, the decorator will use the original source code of the story."})}),o()]},p={name:`With docs.source.language: json`,parameters:a({source:{code:`{ "hello": "world" }`,language:`json`}}),decorators:[r({content:(0,s.jsxs)(`p`,{children:[`Use `,(0,s.jsx)(`code`,{children:`docs.source.language`}),` to specify the language of the source code.`]})}),o({source:n`{
              parameters: defineDocsParam({
                source: {
                    code: '{ "hello": "world" }',
                    language: 'json'
                }
              }),
              decorators: [showSource()]
            }`}),o()]},m={name:`With docs.source.language: md`,parameters:a({source:{code:"This is a `markdown` text",language:`md`}}),decorators:[r({content:(0,s.jsxs)(`p`,{children:[`Use `,(0,s.jsx)(`code`,{children:`docs.source.language`}),` to specify the language of the source code.`]})}),o({source:n`{
                parameters: defineDocsParam({
                    source: {
                        code: 'This is a \`markdown\` text',
                        language: 'md'
                    }
                }),
                decorators: [showSource()]
            }`}),o()]},h={name:`With docs.theme: dark`,parameters:a({source:{code:`<div>Hello, World!</div>`},theme:e.dark}),decorators:[r({content:(0,s.jsxs)(`p`,{children:[`Use `,(0,s.jsx)(`code`,{children:`docs.theme`}),` to specify the theme of the source code.`]})}),o({source:n`{
                parameters: defineDocsParam({
                    source: {
                        code: '<div>Hello, World!</div>',
                        theme: themes.dark
                    }
                }),
                decorators: [showSource()]
            }`}),o()]},g={name:`showOriginalSource: true`,tags:[`props`],parameters:{docs:{source:{code:`() => <DemoComponent text="Hello World" />`}}},decorators:[r({content:(0,s.jsxs)(`p`,{children:[`Use `,(0,s.jsx)(`code`,{children:`showOriginalSource: true`}),` to show the source code of the story instead of the one in`,` `,(0,s.jsx)(`code`,{children:`docs.source.code`}),`.`]})}),o({showOriginalSource:!0})]},_={name:`className: string`,tags:[`props`],parameters:a({source:{code:`<div>Hello, World!</div>`},description:{story:`Demonstrates using className as a string to add custom styling`}}),decorators:[r({content:(0,s.jsxs)(`p`,{children:[`Use `,(0,s.jsx)(`code`,{children:`className`}),` as a string to add custom styling to the source code card.`]})}),o({className:`rbsb:bg-blue-500 rbsb:dark:bg-blue-900`})]},v={name:`className: function`,tags:[`props`],parameters:a({source:{code:`<div>Hello, World!</div>`},description:{story:`Demonstrates using className as a function to conditionally apply styles based on state`}}),decorators:[r({content:(0,s.jsxs)(`p`,{children:[`Use `,(0,s.jsx)(`code`,{children:`className`}),` as a function to add custom styling to the source code card.`]})}),o({className:({defaultClassName:e})=>`${e} rbsb:border-2 rbsb:border-purple-500 rbsb:dark:border-purple-400 rbsb:rounded-full`})]},y={name:`className: conditional function`,tags:[`props`],parameters:a({source:{code:`<div>Hello, World!</div>`},description:{story:`Demonstrates using className function to access state and apply conditional styles`}}),decorators:[r({content:(0,s.jsxs)(`p`,{children:[`Use `,(0,s.jsx)(`code`,{children:`className`}),` as a function to add custom styling to the source code card.`]})}),o({className:({defaultClassName:e,appearance:t})=>i(e,t===`source`?`rbsb:border-2 rbsb:border-blue-500 rbsb:ring-2 rbsb:ring-blue-200 rbsb:dark:ring-blue-800`:`rbsb:border-2 rbsb:rounded-lg`)})]},b={name:`source: string`,tags:[`use-case`,`props`],decorators:[r({content:(0,s.jsxs)(`p`,{children:[`Pass `,(0,s.jsx)(`code`,{children:`source`}),` as a string to the decorator to override the displayed source code.`]})}),o({source:`() => 'custom source'`})]},x={name:`source: function`,tags:[`use-case`,`props`],parameters:a({source:{code:`() => <DemoComponent text="Hello World" />`},description:{story:`Pass source as a function (originalSource) => string to transform the story source before displaying.`}}),decorators:[r({content:(0,s.jsxs)(`p`,{children:[`Pass `,(0,s.jsx)(`code`,{children:`source`}),` as a function to transform the original source. The function receives the story's source and returns the code to display.`]})}),o({source:n`{
                parameters: defineDocsParam({
                    source: {
                        code: '() => <DemoComponent text="Hello World" />'
                    }
                }),
                decorators: [showSource({
                    source: (original) => \`
                    // Wrapped by source function
                    $\{original ?? ''}
                    // End of transformed source\`
                })]
            }`}),o({source:e=>n`// Wrapped by source function
            ${e??``}
            // End of transformed source`})]},S={name:`placement: before`,tags:[`props`],decorators:[r({content:(0,s.jsxs)(`p`,{children:[`Use `,(0,s.jsx)(`code`,{children:`placement: 'before'`}),` (default) to display the source code card above the story output.`]})}),o({placement:`before`,source:`Source shown before the story`})],render:()=>(0,s.jsx)(l,{text:`Story content`})},C={name:`placement: after`,tags:[`props`],parameters:a({description:{story:"Use `placement: 'after'` to show the source code below the rendered story."}}),decorators:[r({content:(0,s.jsxs)(`p`,{children:[`Use `,(0,s.jsx)(`code`,{children:`placement: 'after'`}),` to display the source code card below the story output.`]})}),o({placement:`after`,source:`Source shown after the story`})],render:()=>(0,s.jsx)(l,{text:`Story content`})},w={name:`data-testid`,tags:[`props`,`unit`,`!test`],decorators:[r({content:(0,s.jsxs)(`p`,{children:[`Use `,(0,s.jsx)(`code`,{children:`data-testid`}),` to add a test identifier to the source card.`]})}),o({source:`Source card with data-testid`,"data-testid":`show-source-card`})],render:()=>(0,s.jsx)(l,{text:`Story content`}),play:async({canvas:e})=>{await c(e.getByTestId(`show-source-card`)).toBeInTheDocument()}},T={name:`two showSource (placement: 'before')`,tags:[`unit`,`snapshot`],parameters:a({source:{code:`() => <DemoComponent text="Story content" />`},description:{story:`With two showSource(placement: 'before'), cards are rendered in decorator order: first source card, second source card, then the story.`}}),decorators:[o({source:`// First source block before the story`}),o({source:`// Second source block before the story`})],render:()=>(0,s.jsx)(l,{text:`Story content`})},E={name:`two showSource (placement: 'after')`,tags:[`unit`,`snapshot`],parameters:a({source:{code:`() => <DemoComponent text="Story content" />`},description:{story:`With two showSource({ placement: 'after' }), order is: story first, then first source card, then second source card.`}}),decorators:[o({source:`// First source block after the story`,placement:`after`}),o({source:`// Second source block after the story`,placement:`after`})],render:()=>(0,s.jsx)(l,{text:`Story content`})},D={name:`two withStoryCard + two showSource`,tags:[`unit`,`snapshot`],parameters:a({source:{code:`() => <DemoComponent text="Story content" />`},description:{story:`Cards render in decorator order: First card (withStoryCard), source before (showSource placement: 'before'), second card (withStoryCard), story, then source after (showSource placement: 'after').`}}),decorators:[r({title:`First card`,content:(0,s.jsx)(`p`,{children:`This card should appear first.`})}),o({source:`// Source shown before the Second card`}),r({title:`Second card`,content:(0,s.jsx)(`p`,{children:`This card should appear after the first source.`})}),o({source:`// Source shown after the Second card`})],render:()=>(0,s.jsx)(l,{text:`Story content`})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Show docs.source.code',
  tags: ['use-case'],
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
  }), showSource({
    source: dedent\`{
            parameters: defineDocsParam({
                source: {
                    code: '() => /* from docs.source.code */ <DemoComponent text="Hello World" />'
                }
            }),
            decorators: [showSource()]
        }\`
  }), showSource()]
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  decorators: [withStoryCard({
    content: <p>When no \`source\` is provided, the decorator will use the original source code of the story.</p>
  }), showSource()]
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
  }), showSource({
    source: dedent\`{
              parameters: defineDocsParam({
                source: {
                    code: '{ "hello": "world" }',
                    language: 'json'
                }
              }),
              decorators: [showSource()]
            }\`
  }), showSource()]
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
  }), showSource({
    source: dedent\`{
                parameters: defineDocsParam({
                    source: {
                        code: 'This is a \\\`markdown\\\` text',
                        language: 'md'
                    }
                }),
                decorators: [showSource()]
            }\`
  }), showSource()]
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
  }), showSource({
    source: dedent\`{
                parameters: defineDocsParam({
                    source: {
                        code: '<div>Hello, World!</div>',
                        theme: themes.dark
                    }
                }),
                decorators: [showSource()]
            }\`
  }), showSource()]
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
  }), showSource({
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
  decorators: [withStoryCard({
    content: <p>
                    Use <code>className</code> as a string to add custom styling to the source code card.
                </p>
  }), showSource({
    className: 'rbsb:bg-blue-500 rbsb:dark:bg-blue-900'
  })]
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
  decorators: [withStoryCard({
    content: <p>
                    Use <code>className</code> as a function to add custom styling to the source code card.
                </p>
  }), showSource({
    className: ({
      defaultClassName
    }) => {
      return \`\${defaultClassName} rbsb:border-2 rbsb:border-purple-500 rbsb:dark:border-purple-400 rbsb:rounded-full\`;
    }
  })]
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
  decorators: [withStoryCard({
    content: <p>
                    Use <code>className</code> as a function to add custom styling to the source code card.
                </p>
  }), showSource({
    className: ({
      defaultClassName,
      appearance
    }) => {
      return twJoin(defaultClassName, appearance === 'source' ? 'rbsb:border-2 rbsb:border-blue-500 rbsb:ring-2 rbsb:ring-blue-200 rbsb:dark:ring-blue-800' : 'rbsb:border-2 rbsb:rounded-lg');
    }
  })]
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'source: string',
  tags: ['use-case', 'props'],
  decorators: [withStoryCard({
    content: <p>
                    Pass <code>source</code> as a string to the decorator to override the displayed source code.
                </p>
  }), showSource({
    source: \`() => 'custom source'\`
  })]
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'source: function',
  tags: ['use-case', 'props'],
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
  }), showSource({
    source: dedent\`{
                parameters: defineDocsParam({
                    source: {
                        code: '() => <DemoComponent text="Hello World" />'
                    }
                }),
                decorators: [showSource({
                    source: (original) => \\\`
                    // Wrapped by source function
                    $\\{original ?? ''}
                    // End of transformed source\\\`
                })]
            }\`
  }), showSource({
    source: original => dedent\`// Wrapped by source function
            \${original ?? ''}
            // End of transformed source\`
  })]
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'placement: before',
  tags: ['props'],
  decorators: [withStoryCard({
    content: <p>
                    Use <code>placement: 'before'</code> (default) to display the source code card above the story output.
                </p>
  }), showSource({
    placement: 'before',
    source: 'Source shown before the story'
  })],
  render: () => <DemoComponent text="Story content" />
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'placement: after',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: "Use \`placement: 'after'\` to show the source code below the rendered story."
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    Use <code>placement: 'after'</code> to display the source code card below the story output.
                </p>
  }), showSource({
    placement: 'after',
    source: 'Source shown after the story'
  })],
  render: () => <DemoComponent text="Story content" />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'data-testid',
  tags: ['props', 'unit', '!test'],
  decorators: [withStoryCard({
    content: <p>
                    Use <code>data-testid</code> to add a test identifier to the source card.
                </p>
  }), showSource({
    source: 'Source card with data-testid',
    'data-testid': 'show-source-card'
  })],
  render: () => <DemoComponent text="Story content" />,
  play: async ({
    canvas
  }) => {
    const section = canvas.getByTestId('show-source-card');
    await expect(section).toBeInTheDocument();
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "two showSource (placement: 'before')",
  tags: ['unit', 'snapshot'],
  parameters: defineDocsParam({
    source: {
      code: '() => <DemoComponent text="Story content" />'
    },
    description: {
      story: "With two showSource(placement: 'before'), cards are rendered in decorator order: first source card, second source card, then the story."
    }
  }),
  decorators: [showSource({
    source: '// First source block before the story'
  }), showSource({
    source: '// Second source block before the story'
  })],
  render: () => <DemoComponent text="Story content" />
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "two showSource (placement: 'after')",
  tags: ['unit', 'snapshot'],
  parameters: defineDocsParam({
    source: {
      code: '() => <DemoComponent text="Story content" />'
    },
    description: {
      story: "With two showSource({ placement: 'after' }), order is: story first, then first source card, then second source card."
    }
  }),
  decorators: [showSource({
    source: '// First source block after the story',
    placement: 'after'
  }), showSource({
    source: '// Second source block after the story',
    placement: 'after'
  })],
  render: () => <DemoComponent text="Story content" />
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'two withStoryCard + two showSource',
  tags: ['unit', 'snapshot'],
  parameters: defineDocsParam({
    source: {
      code: '() => <DemoComponent text="Story content" />'
    },
    description: {
      story: "Cards render in decorator order: First card (withStoryCard), source before (showSource placement: 'before'), second card (withStoryCard), story, then source after (showSource placement: 'after')."
    }
  }),
  decorators: [withStoryCard({
    title: 'First card',
    content: <p>This card should appear first.</p>
  }), showSource({
    source: '// Source shown before the Second card'
  }), withStoryCard({
    title: 'Second card',
    content: <p>This card should appear after the first source.</p>
  }), showSource({
    source: '// Source shown after the Second card'
  })],
  render: () => <DemoComponent text="Story content" />
}`,...D.parameters?.docs?.source}}};var O=[`ShowDocsSourceCode`,`ShowStorySource`,`WithLanguageJson`,`WithLanguageMd`,`WithDocsTheme`,`ShowOriginalSource`,`WithClassNameString`,`WithClassNameFunction`,`WithClassNameConditional`,`WithSourceString`,`WithSourceFunction`,`PlacementBefore`,`PlacementAfter`,`DataTestId`,`TwoShowSourceBefore`,`TwoShowSourceAfter`,`TwoWithStoryCardTwoShowSource`];export{w as DataTestId,C as PlacementAfter,S as PlacementBefore,d as ShowDocsSourceCode,g as ShowOriginalSource,f as ShowStorySource,E as TwoShowSourceAfter,T as TwoShowSourceBefore,D as TwoWithStoryCardTwoShowSource,y as WithClassNameConditional,v as WithClassNameFunction,_ as WithClassNameString,h as WithDocsTheme,p as WithLanguageJson,m as WithLanguageMd,x as WithSourceFunction,b as WithSourceString,O as __namedExportsOrder,u as default};