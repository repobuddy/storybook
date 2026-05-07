import{n as e}from"./chunk-DnJy8xQt.js";import{a as t,h as n}from"./theming-DQuV8tsd.js";import{t as r}from"./jsx-runtime-DC6t-S6Q.js";import{n as i,t as a}from"./dedent-DU6uki2e.js";import{d as o,g as s,m as c,t as l,v as u,y as d}from"./src-DwHIYPmP.js";var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z;e((()=>{i(),t(),u(),l(),f=r(),{expect:p}=__STORYBOOK_MODULE_TEST__,m=({text:e=`Hello World`})=>(0,f.jsx)(`div`,{className:`rbsb:p-4 rbsb:bg-gray-100 rbsb:dark:bg-gray-500 rbsb:rounded`,children:e}),h={title:`decorators/showSource`,tags:[`version:2.22`,`!snapshot`],render:()=>(0,f.jsx)(f.Fragment,{})},g={name:`Show docs.source.code`,tags:[`use-case`],parameters:{docs:{source:{code:`() => /* from docs.source.code */ <DemoComponent text="Hello World" />`}}},decorators:[c({content:(0,f.jsxs)(`p`,{children:[`When `,(0,f.jsx)(`code`,{children:`docs.source.code`}),` is provided, the decorator will show it by default.`]})}),s({source:a`{
            parameters: defineDocsParam({
                source: {
                    code: '() => /* from docs.source.code */ <DemoComponent text="Hello World" />'
                }
            }),
            decorators: [showSource()]
        }`}),s()]},_={tags:[`use-case`],decorators:[c({content:(0,f.jsx)(`p`,{children:"When no `source` is provided, the decorator will use the original source code of the story."})}),s()]},v={name:`With docs.source.language: json`,parameters:o({source:{code:`{ "hello": "world" }`,language:`json`}}),decorators:[c({content:(0,f.jsxs)(`p`,{children:[`Use `,(0,f.jsx)(`code`,{children:`docs.source.language`}),` to specify the language of the source code.`]})}),s({source:a`{
              parameters: defineDocsParam({
                source: {
                    code: '{ "hello": "world" }',
                    language: 'json'
                }
              }),
              decorators: [showSource()]
            }`}),s()]},y={name:`With docs.source.language: md`,parameters:o({source:{code:"This is a `markdown` text",language:`md`}}),decorators:[c({content:(0,f.jsxs)(`p`,{children:[`Use `,(0,f.jsx)(`code`,{children:`docs.source.language`}),` to specify the language of the source code.`]})}),s({source:a`{
                parameters: defineDocsParam({
                    source: {
                        code: 'This is a \`markdown\` text',
                        language: 'md'
                    }
                }),
                decorators: [showSource()]
            }`}),s()]},b={name:`With docs.theme: dark`,parameters:o({source:{code:`<div>Hello, World!</div>`},theme:n.dark}),decorators:[c({content:(0,f.jsxs)(`p`,{children:[`Use `,(0,f.jsx)(`code`,{children:`docs.theme`}),` to specify the theme of the source code.`]})}),s({source:a`{
                parameters: defineDocsParam({
                    source: {
                        code: '<div>Hello, World!</div>',
                        theme: themes.dark
                    }
                }),
                decorators: [showSource()]
            }`}),s()]},x={name:`language: json`,tags:[`props`,`version:2.29`,`!version:2.22`],parameters:o({description:{story:"Use the `language` option on `showSource()` to override the syntax highlighting language, regardless of `docs.source.language`."}}),decorators:[c({content:(0,f.jsxs)(`p`,{children:[`Use `,(0,f.jsx)(`code`,{children:`language`}),` to override the syntax highlighting language for the source code card.`]})}),s({source:`showSource({ language: 'json', source: '{ "hello": "world" }' })`}),s({language:`json`,source:`{ "hello": "world" }`})]},S={name:`language: md`,tags:[`props`,`version:2.29`,`!version:2.22`],parameters:o({description:{story:"Use the `language` option on `showSource()` to render source with Markdown syntax highlighting."}}),decorators:[c({content:(0,f.jsxs)(`p`,{children:[`Use `,(0,f.jsx)(`code`,{children:`language: 'md'`}),` to highlight Markdown source.`]})}),s({source:`showSource({ language: 'md', source: '# Hello\\n\\nThis is **markdown**.' })`}),s({language:`md`,source:`# Hello

This is **markdown**.`})]},C={name:`language: html`,tags:[`props`,`version:2.29`,`!version:2.22`],parameters:o({description:{story:"Use the `language` option on `showSource()` to render source with HTML syntax highlighting."}}),decorators:[c({content:(0,f.jsxs)(`p`,{children:[`Use `,(0,f.jsx)(`code`,{children:`language: 'html'`}),` to highlight HTML source.`]})}),s({source:`showSource({ language: 'html', source: '<div class="hello">Hello, World!</div>' })`}),s({language:`html`,source:`<div class="hello">Hello, World!</div>`})]},w={name:`language: css`,tags:[`props`,`version:2.29`,`!version:2.22`],parameters:o({description:{story:"Use the `language` option on `showSource()` to render source with CSS syntax highlighting."}}),decorators:[c({content:(0,f.jsxs)(`p`,{children:[`Use `,(0,f.jsx)(`code`,{children:`language: 'css'`}),` to highlight CSS source.`]})}),s({source:`showSource({ language: 'css', source: '.hello { color: red; font-size: 1rem; }' })`}),s({language:`css`,source:`.hello { color: red; font-size: 1rem; }`})]},T={name:`language: js`,tags:[`props`,`version:2.29`,`!version:2.22`],parameters:o({description:{story:"Use the `language` option on `showSource()` to render source with JavaScript syntax highlighting."}}),decorators:[c({content:(0,f.jsxs)(`p`,{children:[`Use `,(0,f.jsx)(`code`,{children:`language: 'js'`}),` to highlight JavaScript source.`]})}),s({source:`showSource({ language: 'js', source: 'const greet = (name) => "Hello, " + name + "!"' })`}),s({language:`js`,source:`const greet = (name) => "Hello, " + name + "!"`})]},E={name:`language: ts`,tags:[`props`,`version:2.29`,`!version:2.22`],parameters:o({description:{story:"Use the `language` option on `showSource()` to render source with TypeScript syntax highlighting."}}),decorators:[c({content:(0,f.jsxs)(`p`,{children:[`Use `,(0,f.jsx)(`code`,{children:`language: 'ts'`}),` to highlight TypeScript source.`]})}),s({source:`showSource({ language: 'ts', source: 'const greet = (name: string): string => "Hello, " + name + "!"' })`}),s({language:`ts`,source:`const greet = (name: string): string => "Hello, " + name + "!"`})]},D={name:`showOriginalSource: true`,tags:[`props`],parameters:{docs:{source:{code:`() => <DemoComponent text="Hello World" />`}}},decorators:[c({content:(0,f.jsxs)(`p`,{children:[`Use `,(0,f.jsx)(`code`,{children:`showOriginalSource: true`}),` to show the source code of the story instead of the one in`,` `,(0,f.jsx)(`code`,{children:`docs.source.code`}),`.`]})}),s({showOriginalSource:!0})]},O={name:`className: string`,tags:[`props`],parameters:o({source:{code:`<div>Hello, World!</div>`},description:{story:`Demonstrates using className as a string to add custom styling`}}),decorators:[c({content:(0,f.jsxs)(`p`,{children:[`Use `,(0,f.jsx)(`code`,{children:`className`}),` as a string to add custom styling to the source code card.`]})}),s({className:`rbsb:bg-blue-500 rbsb:dark:bg-blue-900`})]},k={name:`className: function`,tags:[`props`],parameters:o({source:{code:`<div>Hello, World!</div>`},description:{story:`Demonstrates using className as a function to conditionally apply styles based on state`}}),decorators:[c({content:(0,f.jsxs)(`p`,{children:[`Use `,(0,f.jsx)(`code`,{children:`className`}),` as a function to add custom styling to the source code card.`]})}),s({className:({defaultClassName:e})=>`${e} rbsb:border-2 rbsb:border-purple-500 rbsb:dark:border-purple-400 rbsb:rounded-full`})]},A={name:`className: conditional function`,tags:[`props`],parameters:o({source:{code:`<div>Hello, World!</div>`},description:{story:`Demonstrates using className function to access state and apply conditional styles`}}),decorators:[c({content:(0,f.jsxs)(`p`,{children:[`Use `,(0,f.jsx)(`code`,{children:`className`}),` as a function to add custom styling to the source code card.`]})}),s({className:({defaultClassName:e,appearance:t})=>d(e,t===`source`?`rbsb:border-2 rbsb:border-blue-500 rbsb:ring-2 rbsb:ring-blue-200 rbsb:dark:ring-blue-800`:`rbsb:border-2 rbsb:rounded-lg`)})]},j={name:`source: string`,tags:[`use-case`,`props`],decorators:[c({content:(0,f.jsxs)(`p`,{children:[`Pass `,(0,f.jsx)(`code`,{children:`source`}),` as a string to the decorator to override the displayed source code.`]})}),s({source:`() => 'custom source'`})]},M={name:`source: function`,tags:[`use-case`,`props`],parameters:o({source:{code:`() => <DemoComponent text="Hello World" />`},description:{story:`Pass source as a function (originalSource) => string to transform the story source before displaying.`}}),decorators:[c({content:(0,f.jsxs)(`p`,{children:[`Pass `,(0,f.jsx)(`code`,{children:`source`}),` as a function to transform the original source. The function receives the story's source and returns the code to display.`]})}),s({source:a`{
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
            }`}),s({source:e=>a`// Wrapped by source function
            ${e??``}
            // End of transformed source`})]},N={name:`placement: before`,tags:[`props`],decorators:[c({content:(0,f.jsxs)(`p`,{children:[`Use `,(0,f.jsx)(`code`,{children:`placement: 'before'`}),` (default) to display the source code card above the story output.`]})}),s({placement:`before`,source:`Source shown before the story`})],render:()=>(0,f.jsx)(m,{text:`Story content`})},P={name:`placement: after`,tags:[`props`],parameters:o({description:{story:"Use `placement: 'after'` to show the source code below the rendered story."}}),decorators:[c({content:(0,f.jsxs)(`p`,{children:[`Use `,(0,f.jsx)(`code`,{children:`placement: 'after'`}),` to display the source code card below the story output.`]})}),s({placement:`after`,source:`Source shown after the story`})],render:()=>(0,f.jsx)(m,{text:`Story content`})},F={name:`data-testid`,tags:[`props`,`unit`,`!test`],decorators:[c({content:(0,f.jsxs)(`p`,{children:[`Use `,(0,f.jsx)(`code`,{children:`data-testid`}),` to add a test identifier to the source card.`]})}),s({source:`Source card with data-testid`,"data-testid":`show-source-card`})],render:()=>(0,f.jsx)(m,{text:`Story content`}),play:async({canvas:e})=>{await p(e.getByTestId(`show-source-card`)).toBeInTheDocument()}},I={name:`two showSource (placement: 'before')`,tags:[`unit`,`snapshot`],parameters:o({source:{code:`() => <DemoComponent text="Story content" />`},description:{story:`With two showSource(placement: 'before'), cards are rendered in decorator order: first source card, second source card, then the story.`}}),decorators:[s({source:`// First source block before the story`}),s({source:`// Second source block before the story`})],render:()=>(0,f.jsx)(m,{text:`Story content`})},L={name:`two showSource (placement: 'after')`,tags:[`unit`,`snapshot`],parameters:o({source:{code:`() => <DemoComponent text="Story content" />`},description:{story:`With two showSource({ placement: 'after' }), order is: story first, then first source card, then second source card.`}}),decorators:[s({source:`// First source block after the story`,placement:`after`}),s({source:`// Second source block after the story`,placement:`after`})],render:()=>(0,f.jsx)(m,{text:`Story content`})},R={name:`two withStoryCard + two showSource`,tags:[`unit`,`snapshot`],parameters:o({source:{code:`() => <DemoComponent text="Story content" />`},description:{story:`Cards render in decorator order: First card (withStoryCard), source before (showSource placement: 'before'), second card (withStoryCard), story, then source after (showSource placement: 'after').`}}),decorators:[c({title:`First card`,content:(0,f.jsx)(`p`,{children:`This card should appear first.`})}),s({source:`// Source shown before the Second card`}),c({title:`Second card`,content:(0,f.jsx)(`p`,{children:`This card should appear after the first source.`})}),s({source:`// Source shown after the Second card`})],render:()=>(0,f.jsx)(m,{text:`Story content`})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  decorators: [withStoryCard({
    content: <p>When no \`source\` is provided, the decorator will use the original source code of the story.</p>
  }), showSource()]
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'language: json',
  tags: ['props', 'version:2.29', '!version:2.22'],
  parameters: defineDocsParam({
    description: {
      story: 'Use the \`language\` option on \`showSource()\` to override the syntax highlighting language, regardless of \`docs.source.language\`.'
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    Use <code>language</code> to override the syntax highlighting language for the source code card.
                </p>
  }), showSource({
    source: \`showSource({ language: 'json', source: '{ "hello": "world" }' })\`
  }), showSource({
    language: 'json',
    source: '{ "hello": "world" }'
  })]
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'language: md',
  tags: ['props', 'version:2.29', '!version:2.22'],
  parameters: defineDocsParam({
    description: {
      story: 'Use the \`language\` option on \`showSource()\` to render source with Markdown syntax highlighting.'
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    Use <code>language: 'md'</code> to highlight Markdown source.
                </p>
  }), showSource({
    source: \`showSource({ language: 'md', source: '# Hello\\\\n\\\\nThis is **markdown**.' })\`
  }), showSource({
    language: 'md',
    source: '# Hello\\n\\nThis is **markdown**.'
  })]
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'language: html',
  tags: ['props', 'version:2.29', '!version:2.22'],
  parameters: defineDocsParam({
    description: {
      story: 'Use the \`language\` option on \`showSource()\` to render source with HTML syntax highlighting.'
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    Use <code>language: 'html'</code> to highlight HTML source.
                </p>
  }), showSource({
    source: \`showSource({ language: 'html', source: '<div class="hello">Hello, World!</div>' })\`
  }), showSource({
    language: 'html',
    source: '<div class="hello">Hello, World!</div>'
  })]
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'language: css',
  tags: ['props', 'version:2.29', '!version:2.22'],
  parameters: defineDocsParam({
    description: {
      story: 'Use the \`language\` option on \`showSource()\` to render source with CSS syntax highlighting.'
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    Use <code>language: 'css'</code> to highlight CSS source.
                </p>
  }), showSource({
    source: \`showSource({ language: 'css', source: '.hello { color: red; font-size: 1rem; }' })\`
  }), showSource({
    language: 'css',
    source: '.hello { color: red; font-size: 1rem; }'
  })]
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'language: js',
  tags: ['props', 'version:2.29', '!version:2.22'],
  parameters: defineDocsParam({
    description: {
      story: 'Use the \`language\` option on \`showSource()\` to render source with JavaScript syntax highlighting.'
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    Use <code>language: 'js'</code> to highlight JavaScript source.
                </p>
  }), showSource({
    source: \`showSource({ language: 'js', source: 'const greet = (name) => "Hello, " + name + "!"' })\`
  }), showSource({
    language: 'js',
    source: 'const greet = (name) => "Hello, " + name + "!"'
  })]
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'language: ts',
  tags: ['props', 'version:2.29', '!version:2.22'],
  parameters: defineDocsParam({
    description: {
      story: 'Use the \`language\` option on \`showSource()\` to render source with TypeScript syntax highlighting.'
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    Use <code>language: 'ts'</code> to highlight TypeScript source.
                </p>
  }), showSource({
    source: \`showSource({ language: 'ts', source: 'const greet = (name: string): string => "Hello, " + name + "!"' })\`
  }), showSource({
    language: 'ts',
    source: 'const greet = (name: string): string => "Hello, " + name + "!"'
  })]
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'source: string',
  tags: ['use-case', 'props'],
  decorators: [withStoryCard({
    content: <p>
                    Pass <code>source</code> as a string to the decorator to override the displayed source code.
                </p>
  }), showSource({
    source: \`() => 'custom source'\`
  })]
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z=[`ShowDocsSourceCode`,`ShowStorySource`,`WithLanguageJson`,`WithLanguageMd`,`WithDocsTheme`,`LanguageJson`,`LanguageMd`,`LanguageHtml`,`LanguageCss`,`LanguageJs`,`LanguageTs`,`ShowOriginalSource`,`WithClassNameString`,`WithClassNameFunction`,`WithClassNameConditional`,`WithSourceString`,`WithSourceFunction`,`PlacementBefore`,`PlacementAfter`,`DataTestId`,`TwoShowSourceBefore`,`TwoShowSourceAfter`,`TwoWithStoryCardTwoShowSource`]}))();export{F as DataTestId,w as LanguageCss,C as LanguageHtml,T as LanguageJs,x as LanguageJson,S as LanguageMd,E as LanguageTs,P as PlacementAfter,N as PlacementBefore,g as ShowDocsSourceCode,D as ShowOriginalSource,_ as ShowStorySource,L as TwoShowSourceAfter,I as TwoShowSourceBefore,R as TwoWithStoryCardTwoShowSource,A as WithClassNameConditional,k as WithClassNameFunction,O as WithClassNameString,b as WithDocsTheme,v as WithLanguageJson,y as WithLanguageMd,M as WithSourceFunction,j as WithSourceString,z as __namedExportsOrder,h as default};