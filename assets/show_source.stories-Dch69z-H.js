import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-yBdeBQmp.js";import{_ as n,a as r}from"./theming-DtEuN_y4.js";import{n as i,r as a}from"./iframe-pxBOiIH1.js";import{n as o,t as s}from"./dedent-DQaCLeUO.js";import{M as c,O as l,_ as u,j as d,t as f,w as p}from"./src-Dhw3iRbJ.js";var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V;function H(){return(H=e((()=>{o(),r(),d(),f(),i(),m=t(),{expect:h}=__STORYBOOK_MODULE_TEST__,g=({text:e=`Hello World`})=>(0,m.jsx)(`div`,{className:`rbsb:p-4 rbsb:text-black rbsb:dark:text-white rbsb:bg-gray-100 rbsb:dark:bg-gray-500 rbsb:rounded`,children:e}),_=a.meta({title:`decorators/showSource`,tags:[`version:2.22`,`!snapshot`],render:()=>(0,m.jsx)(m.Fragment,{})}),v=_.story({name:`Show docs.source.code`,tags:[`use-case`],parameters:{docs:{source:{code:`() => /* from docs.source.code */ <DemoComponent text="Hello World" />`}}},decorators:[p({content:(0,m.jsxs)(`p`,{children:[`When `,(0,m.jsx)(`code`,{children:`docs.source.code`}),` is provided, the decorator will show it by default.`]})}),l({source:s`{
            parameters: defineDocsParam({
                source: {
                    code: '() => /* from docs.source.code */ <DemoComponent text="Hello World" />'
                }
            }),
            decorators: [showSource()]
        }`}),l()]}),y=_.story({tags:[`use-case`],decorators:[p({content:(0,m.jsx)(`p`,{children:"When no `source` is provided, the decorator will use the original source code of the story."})}),l()]}),b=_.story({name:`With docs.source.language: json`,parameters:u({source:{code:`{ "hello": "world" }`,language:`json`}}),decorators:[p({content:(0,m.jsxs)(`p`,{children:[`Use `,(0,m.jsx)(`code`,{children:`docs.source.language`}),` to specify the language of the source code.`]})}),l({source:s`{
              parameters: defineDocsParam({
                source: {
                    code: '{ "hello": "world" }',
                    language: 'json'
                }
              }),
              decorators: [showSource()]
            }`}),l()]}),x=_.story({name:`With docs.source.language: md`,parameters:u({source:{code:"This is a `markdown` text",language:`md`}}),decorators:[p({content:(0,m.jsxs)(`p`,{children:[`Use `,(0,m.jsx)(`code`,{children:`docs.source.language`}),` to specify the language of the source code.`]})}),l({source:s`{
                parameters: defineDocsParam({
                    source: {
                        code: 'This is a \`markdown\` text',
                        language: 'md'
                    }
                }),
                decorators: [showSource()]
            }`}),l()]}),S=_.story({name:`With docs.theme: dark`,parameters:u({source:{code:`<div>Hello, World!</div>`},theme:n.dark}),decorators:[p({content:(0,m.jsxs)(`p`,{children:[`Use `,(0,m.jsx)(`code`,{children:`docs.theme`}),` to specify the theme of the source code.`]})}),l({source:s`{
                parameters: defineDocsParam({
                    source: {
                        code: '<div>Hello, World!</div>',
                        theme: themes.dark
                    }
                }),
                decorators: [showSource()]
            }`}),l()]}),C=_.story({name:`language: json`,tags:[`props`,`version:2.29`,`!version:2.22`],parameters:u({description:{story:"Use the `language` option on `showSource()` to override the syntax highlighting language, regardless of `docs.source.language`."}}),decorators:[p({content:(0,m.jsxs)(`p`,{children:[`Use `,(0,m.jsx)(`code`,{children:`language`}),` to override the syntax highlighting language for the source code card.`]})}),l({source:`showSource({ language: 'json', source: '{ "hello": "world" }' })`}),l({language:`json`,source:`{ "hello": "world" }`})]}),w=_.story({name:`language: md`,tags:[`props`,`version:2.29`,`!version:2.22`],parameters:u({description:{story:"Use the `language` option on `showSource()` to render source with Markdown syntax highlighting."}}),decorators:[p({content:(0,m.jsxs)(`p`,{children:[`Use `,(0,m.jsx)(`code`,{children:`language: 'md'`}),` to highlight Markdown source.`]})}),l({source:`showSource({ language: 'md', source: '# Hello\\n\\nThis is **markdown**.' })`}),l({language:`md`,source:`# Hello

This is **markdown**.`})]}),T=_.story({name:`language: html`,tags:[`props`,`version:2.29`,`!version:2.22`],parameters:u({description:{story:"Use the `language` option on `showSource()` to render source with HTML syntax highlighting."}}),decorators:[p({content:(0,m.jsxs)(`p`,{children:[`Use `,(0,m.jsx)(`code`,{children:`language: 'html'`}),` to highlight HTML source.`]})}),l({source:`showSource({ language: 'html', source: '<div class="hello">Hello, World!</div>' })`}),l({language:`html`,source:`<div class="hello">Hello, World!</div>`})]}),E=_.story({name:`language: css`,tags:[`props`,`version:2.29`,`!version:2.22`],parameters:u({description:{story:"Use the `language` option on `showSource()` to render source with CSS syntax highlighting."}}),decorators:[p({content:(0,m.jsxs)(`p`,{children:[`Use `,(0,m.jsx)(`code`,{children:`language: 'css'`}),` to highlight CSS source.`]})}),l({source:`showSource({ language: 'css', source: '.hello { color: red; font-size: 1rem; }' })`}),l({language:`css`,source:`.hello { color: red; font-size: 1rem; }`})]}),D=_.story({name:`language: js`,tags:[`props`,`version:2.29`,`!version:2.22`],parameters:u({description:{story:"Use the `language` option on `showSource()` to render source with JavaScript syntax highlighting."}}),decorators:[p({content:(0,m.jsxs)(`p`,{children:[`Use `,(0,m.jsx)(`code`,{children:`language: 'js'`}),` to highlight JavaScript source.`]})}),l({source:`showSource({ language: 'js', source: 'const greet = (name) => "Hello, " + name + "!"' })`}),l({language:`js`,source:`const greet = (name) => "Hello, " + name + "!"`})]}),O=_.story({name:`language: ts`,tags:[`props`,`version:2.29`,`!version:2.22`],parameters:u({description:{story:"Use the `language` option on `showSource()` to render source with TypeScript syntax highlighting."}}),decorators:[p({content:(0,m.jsxs)(`p`,{children:[`Use `,(0,m.jsx)(`code`,{children:`language: 'ts'`}),` to highlight TypeScript source.`]})}),l({source:`showSource({ language: 'ts', source: 'const greet = (name: string): string => "Hello, " + name + "!"' })`}),l({language:`ts`,source:`const greet = (name: string): string => "Hello, " + name + "!"`})]}),k=_.story({name:`showOriginalSource: true`,tags:[`props`],parameters:{docs:{source:{code:`() => <DemoComponent text="Hello World" />`}}},decorators:[p({content:(0,m.jsxs)(`p`,{children:[`Use `,(0,m.jsx)(`code`,{children:`showOriginalSource: true`}),` to show the source code of the story instead of the one in`,` `,(0,m.jsx)(`code`,{children:`docs.source.code`}),`.`]})}),l({showOriginalSource:!0})]}),A=_.story({name:`className: string`,tags:[`props`],parameters:u({source:{code:`<div>Hello, World!</div>`},description:{story:`Demonstrates using className as a string to add custom styling`}}),decorators:[p({content:(0,m.jsxs)(`p`,{children:[`Use `,(0,m.jsx)(`code`,{children:`className`}),` as a string to add custom styling to the source code card.`]})}),l({className:`rbsb:bg-blue-500 rbsb:dark:bg-blue-900`})]}),j=_.story({name:`className: function`,tags:[`props`],parameters:u({source:{code:`<div>Hello, World!</div>`},description:{story:`Demonstrates using className as a function to conditionally apply styles based on state`}}),decorators:[p({content:(0,m.jsxs)(`p`,{children:[`Use `,(0,m.jsx)(`code`,{children:`className`}),` as a function to add custom styling to the source code card.`]})}),l({className:({defaultClassName:e})=>`${e} rbsb:border-2 rbsb:border-purple-500 rbsb:dark:border-purple-400 rbsb:rounded-full`})]}),M=_.story({name:`className: conditional function`,tags:[`props`],parameters:u({source:{code:`<div>Hello, World!</div>`},description:{story:`Demonstrates using className function to access state and apply conditional styles`}}),decorators:[p({content:(0,m.jsxs)(`p`,{children:[`Use `,(0,m.jsx)(`code`,{children:`className`}),` as a function to add custom styling to the source code card.`]})}),l({className:({defaultClassName:e,appearance:t})=>c(e,t===`source`?`rbsb:border-2 rbsb:border-blue-500 rbsb:ring-2 rbsb:ring-blue-200 rbsb:dark:ring-blue-800`:`rbsb:border-2 rbsb:rounded-lg`)})]}),N=_.story({name:`source: string`,tags:[`use-case`,`props`],decorators:[p({content:(0,m.jsxs)(`p`,{children:[`Pass `,(0,m.jsx)(`code`,{children:`source`}),` as a string to the decorator to override the displayed source code.`]})}),l({source:`() => 'custom source'`})]}),P=_.story({name:`source: function`,tags:[`use-case`,`props`],parameters:u({source:{code:`() => <DemoComponent text="Hello World" />`},description:{story:`Pass source as a function (originalSource) => string to transform the story source before displaying.`}}),decorators:[p({content:(0,m.jsxs)(`p`,{children:[`Pass `,(0,m.jsx)(`code`,{children:`source`}),` as a function to transform the original source. The function receives the story's source and returns the code to display.`]})}),l({source:s`{
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
            }`}),l({source:e=>s`// Wrapped by source function
            ${e??``}
            // End of transformed source`})]}),F=_.story({name:`placement: before`,tags:[`props`],decorators:[p({content:(0,m.jsxs)(`p`,{children:[`Use `,(0,m.jsx)(`code`,{children:`placement: 'before'`}),` (default) to display the source code card above the story output.`]})}),l({placement:`before`,source:`Source shown before the story`})],render:()=>(0,m.jsx)(g,{text:`Story content`})}),I=_.story({name:`placement: after`,tags:[`props`],parameters:u({description:{story:"Use `placement: 'after'` to show the source code below the rendered story."}}),decorators:[p({content:(0,m.jsxs)(`p`,{children:[`Use `,(0,m.jsx)(`code`,{children:`placement: 'after'`}),` to display the source code card below the story output.`]})}),l({placement:`after`,source:`Source shown after the story`})],render:()=>(0,m.jsx)(g,{text:`Story content`})}),L=_.story({name:`data-testid`,tags:[`props`,`unit`,`!test`],decorators:[p({content:(0,m.jsxs)(`p`,{children:[`Use `,(0,m.jsx)(`code`,{children:`data-testid`}),` to add a test identifier to the source card.`]})}),l({source:`Source card with data-testid`,"data-testid":`show-source-card`})],render:()=>(0,m.jsx)(g,{text:`Story content`}),play:async({canvas:e})=>{let t=e.getByTestId(`show-source-card`);await h(t).toBeInTheDocument()}}),R=_.story({name:`two showSource (placement: 'before')`,tags:[`unit`,`snapshot`],parameters:u({source:{code:`() => <DemoComponent text="Story content" />`},description:{story:`With two showSource(placement: 'before'), cards are rendered in decorator order: first source card, second source card, then the story.`}}),decorators:[l({source:`// First source block before the story`}),l({source:`// Second source block before the story`})],render:()=>(0,m.jsx)(g,{text:`Story content`})}),z=_.story({name:`two showSource (placement: 'after')`,tags:[`unit`,`snapshot`],parameters:u({source:{code:`() => <DemoComponent text="Story content" />`},description:{story:`With two showSource({ placement: 'after' }), order is: story first, then first source card, then second source card.`}}),decorators:[l({source:`// First source block after the story`,placement:`after`}),l({source:`// Second source block after the story`,placement:`after`})],render:()=>(0,m.jsx)(g,{text:`Story content`})}),B=_.story({name:`two withStoryCard + two showSource`,tags:[`unit`,`snapshot`],parameters:u({source:{code:`() => <DemoComponent text="Story content" />`},description:{story:`Cards render in decorator order: First card (withStoryCard), source before (showSource placement: 'before'), second card (withStoryCard), story, then source after (showSource placement: 'after').`}}),decorators:[p({title:`First card`,content:(0,m.jsx)(`p`,{children:`This card should appear first.`})}),l({source:`// Source shown before the Second card`}),p({title:`Second card`,content:(0,m.jsx)(`p`,{children:`This card should appear after the first source.`})}),l({source:`// Source shown after the Second card`})],render:()=>(0,m.jsx)(g,{text:`Story content`})}),v.input.parameters={...v.input.parameters,docs:{...v.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...v.input.parameters?.docs?.source}}},y.input.parameters={...y.input.parameters,docs:{...y.input.parameters?.docs,source:{originalSource:`meta.story({
  tags: ['use-case'],
  decorators: [withStoryCard({
    content: <p>When no \`source\` is provided, the decorator will use the original source code of the story.</p>
  }), showSource()]
})`,...y.input.parameters?.docs?.source}}},b.input.parameters={...b.input.parameters,docs:{...b.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...b.input.parameters?.docs?.source}}},x.input.parameters={...x.input.parameters,docs:{...x.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...x.input.parameters?.docs?.source}}},S.input.parameters={...S.input.parameters,docs:{...S.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...S.input.parameters?.docs?.source}}},C.input.parameters={...C.input.parameters,docs:{...C.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...C.input.parameters?.docs?.source}}},w.input.parameters={...w.input.parameters,docs:{...w.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...w.input.parameters?.docs?.source}}},T.input.parameters={...T.input.parameters,docs:{...T.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...T.input.parameters?.docs?.source}}},E.input.parameters={...E.input.parameters,docs:{...E.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...E.input.parameters?.docs?.source}}},D.input.parameters={...D.input.parameters,docs:{...D.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...D.input.parameters?.docs?.source}}},O.input.parameters={...O.input.parameters,docs:{...O.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...O.input.parameters?.docs?.source}}},k.input.parameters={...k.input.parameters,docs:{...k.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...k.input.parameters?.docs?.source}}},A.input.parameters={...A.input.parameters,docs:{...A.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...A.input.parameters?.docs?.source}}},j.input.parameters={...j.input.parameters,docs:{...j.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...j.input.parameters?.docs?.source}}},M.input.parameters={...M.input.parameters,docs:{...M.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...M.input.parameters?.docs?.source}}},N.input.parameters={...N.input.parameters,docs:{...N.input.parameters?.docs,source:{originalSource:`meta.story({
  name: 'source: string',
  tags: ['use-case', 'props'],
  decorators: [withStoryCard({
    content: <p>
                    Pass <code>source</code> as a string to the decorator to override the displayed source code.
                </p>
  }), showSource({
    source: \`() => 'custom source'\`
  })]
})`,...N.input.parameters?.docs?.source}}},P.input.parameters={...P.input.parameters,docs:{...P.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...P.input.parameters?.docs?.source}}},F.input.parameters={...F.input.parameters,docs:{...F.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...F.input.parameters?.docs?.source}}},I.input.parameters={...I.input.parameters,docs:{...I.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...I.input.parameters?.docs?.source}}},L.input.parameters={...L.input.parameters,docs:{...L.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...L.input.parameters?.docs?.source}}},R.input.parameters={...R.input.parameters,docs:{...R.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...R.input.parameters?.docs?.source}}},z.input.parameters={...z.input.parameters,docs:{...z.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...z.input.parameters?.docs?.source}}},B.input.parameters={...B.input.parameters,docs:{...B.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...B.input.parameters?.docs?.source}}},V=[`ShowDocsSourceCode`,`ShowStorySource`,`WithLanguageJson`,`WithLanguageMd`,`WithDocsTheme`,`LanguageJson`,`LanguageMd`,`LanguageHtml`,`LanguageCss`,`LanguageJs`,`LanguageTs`,`ShowOriginalSource`,`WithClassNameString`,`WithClassNameFunction`,`WithClassNameConditional`,`WithSourceString`,`WithSourceFunction`,`PlacementBefore`,`PlacementAfter`,`DataTestId`,`TwoShowSourceBefore`,`TwoShowSourceAfter`,`TwoWithStoryCardTwoShowSource`]})))()}H();export{L as DataTestId,E as LanguageCss,T as LanguageHtml,D as LanguageJs,C as LanguageJson,w as LanguageMd,O as LanguageTs,I as PlacementAfter,F as PlacementBefore,v as ShowDocsSourceCode,k as ShowOriginalSource,y as ShowStorySource,z as TwoShowSourceAfter,R as TwoShowSourceBefore,B as TwoWithStoryCardTwoShowSource,M as WithClassNameConditional,j as WithClassNameFunction,A as WithClassNameString,S as WithDocsTheme,b as WithLanguageJson,x as WithLanguageMd,P as WithSourceFunction,N as WithSourceString,V as __namedExportsOrder};