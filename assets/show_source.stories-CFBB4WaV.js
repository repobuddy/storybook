import{j as e,t as j}from"./iframe-D7G3ENHL.js";import{d as c}from"./dedent-BuYMbVyj.js";import{s as o,t as N}from"./show_source-BCeifeQI.js";import{w as r}from"./with_story_card-DacTqIsF.js";import{d as s}from"./define_docs_param-lmgaBKCF.js";import"./preload-helper-PPVm8Dsz.js";const{expect:v}=__STORYBOOK_MODULE_TEST__,a=({text:t="Hello World"})=>e.jsx("div",{className:"rbsb:p-4 rbsb:bg-gray-100 rbsb:dark:bg-gray-500 rbsb:rounded",children:t}),O={title:"decorators/showSource",tags:["version:2.22","!snapshot"],render:()=>e.jsx(e.Fragment,{})},n={name:"Show docs.source.code",tags:["use-case"],parameters:{docs:{source:{code:'() => /* from docs.source.code */ <DemoComponent text="Hello World" />'}}},decorators:[r({content:e.jsxs("p",{children:["When ",e.jsx("code",{children:"docs.source.code"})," is provided, the decorator will show it by default."]})}),o({source:c`{
            parameters: defineDocsParam({
                source: {
                    code: '() => /* from docs.source.code */ <DemoComponent text="Hello World" />'
                }
            }),
            decorators: [showSource()]
        }`}),o()]},d={tags:["use-case"],decorators:[r({content:e.jsx("p",{children:"When no `source` is provided, the decorator will use the original source code of the story."})}),o()]},u={name:"With docs.source.language: json",parameters:s({source:{code:'{ "hello": "world" }',language:"json"}}),decorators:[r({content:e.jsxs("p",{children:["Use ",e.jsx("code",{children:"docs.source.language"})," to specify the language of the source code."]})}),o({source:c`{
              parameters: defineDocsParam({
                source: {
                    code: '{ "hello": "world" }',
                    language: 'json'
                }
              }),
              decorators: [showSource()]
            }`}),o()]},i={name:"With docs.source.language: md",parameters:s({source:{code:"This is a `markdown` text",language:"md"}}),decorators:[r({content:e.jsxs("p",{children:["Use ",e.jsx("code",{children:"docs.source.language"})," to specify the language of the source code."]})}),o({source:c`{
                parameters: defineDocsParam({
                    source: {
                        code: 'This is a \`markdown\` text',
                        language: 'md'
                    }
                }),
                decorators: [showSource()]
            }`}),o()]},m={name:"With docs.theme: dark",parameters:s({source:{code:"<div>Hello, World!</div>"},theme:j.dark}),decorators:[r({content:e.jsxs("p",{children:["Use ",e.jsx("code",{children:"docs.theme"})," to specify the theme of the source code."]})}),o({source:c`{
                parameters: defineDocsParam({
                    source: {
                        code: '<div>Hello, World!</div>',
                        theme: themes.dark
                    }
                }),
                decorators: [showSource()]
            }`}),o()]},p={name:"showOriginalSource: true",tags:["props"],parameters:{docs:{source:{code:'() => <DemoComponent text="Hello World" />'}}},decorators:[r({content:e.jsxs("p",{children:["Use ",e.jsx("code",{children:"showOriginalSource: true"})," to show the source code of the story instead of the one in"," ",e.jsx("code",{children:"docs.source.code"}),"."]})}),o({showOriginalSource:!0})]},l={name:"className: string",tags:["props"],parameters:s({source:{code:"<div>Hello, World!</div>"},description:{story:"Demonstrates using className as a string to add custom styling"}}),decorators:[r({content:e.jsxs("p",{children:["Use ",e.jsx("code",{children:"className"})," as a string to add custom styling to the source code card."]})}),o({className:"rbsb:bg-blue-500 rbsb:dark:bg-blue-900"})]},h={name:"className: function",tags:["props"],parameters:s({source:{code:"<div>Hello, World!</div>"},description:{story:"Demonstrates using className as a function to conditionally apply styles based on state"}}),decorators:[r({content:e.jsxs("p",{children:["Use ",e.jsx("code",{children:"className"})," as a function to add custom styling to the source code card."]})}),o({className:({defaultClassName:t})=>`${t} rbsb:border-2 rbsb:border-purple-500 rbsb:dark:border-purple-400 rbsb:rounded-full`})]},S={name:"className: conditional function",tags:["props"],parameters:s({source:{code:"<div>Hello, World!</div>"},description:{story:"Demonstrates using className function to access state and apply conditional styles"}}),decorators:[r({content:e.jsxs("p",{children:["Use ",e.jsx("code",{children:"className"})," as a function to add custom styling to the source code card."]})}),o({className:({defaultClassName:t,appearance:W})=>N(t,W==="source"?"rbsb:border-2 rbsb:border-blue-500 rbsb:ring-2 rbsb:ring-blue-200 rbsb:dark:ring-blue-800":"rbsb:border-2 rbsb:rounded-lg")})]},f={name:"source: string",tags:["use-case","props"],decorators:[r({content:e.jsxs("p",{children:["Pass ",e.jsx("code",{children:"source"})," as a string to the decorator to override the displayed source code."]})}),o({source:"() => 'custom source'"})]},g={name:"source: function",tags:["use-case","props"],parameters:s({source:{code:'() => <DemoComponent text="Hello World" />'},description:{story:"Pass source as a function (originalSource) => string to transform the story source before displaying."}}),decorators:[r({content:e.jsxs("p",{children:["Pass ",e.jsx("code",{children:"source"})," as a function to transform the original source. The function receives the story's source and returns the code to display."]})}),o({source:c`{
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
            }`}),o({source:t=>c`// Wrapped by source function
            ${t??""}
            // End of transformed source`})]},w={name:"placement: before",tags:["props"],decorators:[r({content:e.jsxs("p",{children:["Use ",e.jsx("code",{children:"placement: 'before'"})," (default) to display the source code card above the story output."]})}),o({placement:"before",source:"Source shown before the story"})],render:()=>e.jsx(a,{text:"Story content"})},y={name:"placement: after",tags:["props"],parameters:s({description:{story:"Use `placement: 'after'` to show the source code below the rendered story."}}),decorators:[r({content:e.jsxs("p",{children:["Use ",e.jsx("code",{children:"placement: 'after'"})," to display the source code card below the story output."]})}),o({placement:"after",source:"Source shown after the story"})],render:()=>e.jsx(a,{text:"Story content"})},b={name:"data-testid",tags:["props","unit","!test"],decorators:[r({content:e.jsxs("p",{children:["Use ",e.jsx("code",{children:"data-testid"})," to add a test identifier to the source card."]})}),o({source:"Source card with data-testid","data-testid":"show-source-card"})],render:()=>e.jsx(a,{text:"Story content"}),play:async({canvas:t})=>{const W=t.getByTestId("show-source-card");await v(W).toBeInTheDocument()}},x={name:"two showSource (placement: 'before')",tags:["unit","snapshot"],parameters:s({source:{code:'() => <DemoComponent text="Story content" />'},description:{story:"With two showSource(placement: 'before'), cards are rendered in decorator order: first source card, second source card, then the story."}}),decorators:[o({source:"// First source block before the story"}),o({source:"// Second source block before the story"})],render:()=>e.jsx(a,{text:"Story content"})},C={name:"two showSource (placement: 'after')",tags:["unit","snapshot"],parameters:s({source:{code:'() => <DemoComponent text="Story content" />'},description:{story:"With two showSource({ placement: 'after' }), order is: story first, then first source card, then second source card."}}),decorators:[o({source:"// First source block after the story",placement:"after"}),o({source:"// Second source block after the story",placement:"after"})],render:()=>e.jsx(a,{text:"Story content"})},D={name:"two withStoryCard + two showSource",tags:["unit","snapshot"],parameters:s({source:{code:'() => <DemoComponent text="Story content" />'},description:{story:"Cards render in decorator order: First card (withStoryCard), source before (showSource placement: 'before'), second card (withStoryCard), story, then source after (showSource placement: 'after')."}}),decorators:[r({title:"First card",content:e.jsx("p",{children:"This card should appear first."})}),o({source:"// Source shown before the Second card"}),r({title:"Second card",content:e.jsx("p",{children:"This card should appear after the first source."})}),o({source:"// Source shown after the Second card"})],render:()=>e.jsx(a,{text:"Story content"})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  decorators: [withStoryCard({
    content: <p>When no \`source\` is provided, the decorator will use the original source code of the story.</p>
  }), showSource()]
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'source: string',
  tags: ['use-case', 'props'],
  decorators: [withStoryCard({
    content: <p>
                    Pass <code>source</code> as a string to the decorator to override the displayed source code.
                </p>
  }), showSource({
    source: \`() => 'custom source'\`
  })]
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};const B=["ShowDocsSourceCode","ShowStorySource","WithLanguageJson","WithLanguageMd","WithDocsTheme","ShowOriginalSource","WithClassNameString","WithClassNameFunction","WithClassNameConditional","WithSourceString","WithSourceFunction","PlacementBefore","PlacementAfter","DataTestId","TwoShowSourceBefore","TwoShowSourceAfter","TwoWithStoryCardTwoShowSource"];export{b as DataTestId,y as PlacementAfter,w as PlacementBefore,n as ShowDocsSourceCode,p as ShowOriginalSource,d as ShowStorySource,C as TwoShowSourceAfter,x as TwoShowSourceBefore,D as TwoWithStoryCardTwoShowSource,S as WithClassNameConditional,h as WithClassNameFunction,l as WithClassNameString,m as WithDocsTheme,u as WithLanguageJson,i as WithLanguageMd,g as WithSourceFunction,f as WithSourceString,B as __namedExportsOrder,O as default};
