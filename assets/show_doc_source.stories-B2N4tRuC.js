import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-B066xLLY.js";import{_ as n,a as r}from"./theming-BPuu_FHA.js";import{n as i,r as a}from"./iframe-Bv4Jrxeb.js";import{E as o,_ as s,t as c,w as l}from"./src-Cjk9gBKT.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{r(),c(),i(),u=t(),d=({text:e=`Hello World`})=>(0,u.jsx)(`div`,{className:`rbsb:p-4 rbsb:text-black rbsb:dark:text-white rbsb:bg-gray-100 rbsb:dark:bg-gray-500 rbsb:rounded`,children:e}),f=a.meta({title:`decorators/showDocSource`,tags:[`deprecated`,`version:2.22`,`!snapshot`],decorators:[l({appearance:`warn`,content:(0,u.jsxs)(`p`,{children:[`This decorator is deprecated. Use `,(0,u.jsx)(`code`,{children:`showSource`}),` instead.`]})})],render:()=>(0,u.jsx)(u.Fragment,{})}),p=f.story({parameters:{docs:{source:{code:`() => /* from docs.source.code */ <DemoComponent text="Hello World" />`}}},decorators:[l({content:(0,u.jsxs)(`p`,{children:[`When `,(0,u.jsx)(`code`,{children:`docs.source.code`}),` is provided, the decorator will show it by default.`]})}),o()],render:()=>(0,u.jsx)(d,{text:`Hello World`})}),m=f.story({decorators:[l({content:(0,u.jsx)(`p`,{children:"When no `source` is provided, the decorator will use the original source code of the story."})}),o()],render:()=>(0,u.jsx)(d,{text:`Hello World`})}),h=f.story({name:`With docs.source.language: json`,parameters:s({source:{code:`{ "hello": "world" }`,language:`json`}}),decorators:[l({content:(0,u.jsxs)(`p`,{children:[`Use `,(0,u.jsx)(`code`,{children:`docs.source.language`}),` to specify the language of the source code.`]})}),o(),o({showOriginalSource:!0})]}),g=f.story({name:`With docs.source.language: md`,parameters:s({source:{code:"This is a `markdown` text",language:`md`}}),decorators:[l({content:(0,u.jsxs)(`p`,{children:[`Use `,(0,u.jsx)(`code`,{children:`docs.source.language`}),` to specify the language of the source code.`]})}),o(),o({showOriginalSource:!0})]}),_=f.story({name:`With docs.theme: dark`,parameters:s({source:{code:`<div>Hello, World!</div>`},theme:n.dark}),decorators:[l({content:(0,u.jsxs)(`p`,{children:[`Use `,(0,u.jsx)(`code`,{children:`docs.theme`}),` to specify the theme of the source code.`]})}),o(),o({showOriginalSource:!0})]}),v=f.story({name:`showOriginalSource: true`,tags:[`props`],parameters:{docs:{source:{code:`() => <DemoComponent text="Hello World" />`}}},decorators:[l({content:(0,u.jsxs)(`p`,{children:[`Use `,(0,u.jsx)(`code`,{children:`showOriginalSource: true`}),` to show the source code of the story instead of the one in`,` `,(0,u.jsx)(`code`,{children:`docs.source.code`}),`.`]})}),o({showOriginalSource:!0})]}),y=f.story({name:`className: string`,tags:[`props`],parameters:s({source:{code:`<div>Hello, World!</div>`},description:{story:`Demonstrates using className as a string to add custom styling`}}),decorators:[o({className:`rbsb:bg-blue-500 rbsb:dark:bg-blue-900`})],render:()=>(0,u.jsx)(d,{text:`Custom border and shadow`})}),b=f.story({name:`className: function`,tags:[`props`],parameters:s({source:{code:`<div>Hello, World!</div>`},description:{story:`Demonstrates using className as a function to conditionally apply styles based on state`}}),decorators:[o({className:({defaultClassName:e})=>`${e} rbsb:border-2 rbsb:border-purple-500 rbsb:rounded-lg`})],render:()=>(0,u.jsx)(d,{text:`Function-based styling`})}),x=f.story({name:`className: conditional function`,tags:[`props`],parameters:s({source:{code:`<div>Hello, World!</div>`},description:{story:`Demonstrates using className function to access state and apply conditional styles`}}),decorators:[o({className:({defaultClassName:e,status:t})=>`${e} ${t===`info`?`rbsb:border-2 rbsb:border-blue-500 rbsb:ring-2 rbsb:ring-blue-200 rbsb:dark:ring-blue-800`:`rbsb:border-2 rbsb:rounded-lg`}`})],render:()=>(0,u.jsx)(d,{text:`Conditional styling with function`})}),S=f.story({name:`source: string`,tags:[`props`],decorators:[l({content:(0,u.jsxs)(`p`,{children:[`Pass `,(0,u.jsx)(`code`,{children:`source`}),` as a string to the decorator to override the displayed source code.`]})}),o({source:`() => <DemoComponent text="Hello World" />`})],render:()=>(0,u.jsx)(d,{text:`Hello World`})}),C=f.story({name:`source: function`,tags:[`props`],parameters:s({source:{code:`() => <DemoComponent text="Hello World" />`},description:{story:`Pass source as a function (originalSource) => string to transform the story source before displaying.`}}),decorators:[l({content:(0,u.jsxs)(`p`,{children:[`Pass `,(0,u.jsx)(`code`,{children:`source`}),` as a function to transform the original source. The function receives the story's source and returns the code to display.`]})}),o({source:e=>`// Wrapped by source function\n${e??``}\n// End of transformed source`})],render:()=>(0,u.jsx)(d,{text:`Hello World`})}),w=f.story({name:`placement: 'before'`,tags:[`props`],parameters:s({source:{code:`() => <DemoComponent text="Rendered below the source" />`},description:{story:"Use `placement: 'before'` to show the source code above the rendered story instead of below."}}),decorators:[l({content:(0,u.jsxs)(`p`,{children:[`Use `,(0,u.jsx)(`code`,{children:`placement: 'before'`}),` to display the source code card above the story output.`]})}),o({placement:`before`})],render:()=>(0,u.jsx)(d,{text:`Rendered below the source`})}),T=f.story({name:`two showDocSource (placement: 'before')`,tags:[`unit`,`snapshot`],parameters:s({source:{code:`() => <DemoComponent text="Story content" />`},description:{story:`With two showDocSource(placement: 'before'), cards are rendered in decorator order: first source card, second source card, then the story.`}}),decorators:[o({placement:`before`,source:`// First source block`}),o({placement:`before`,source:`// Second source block`})],render:()=>(0,u.jsx)(d,{text:`Story content`})}),E=f.story({name:`two showDocSource (placement: 'after' / default)`,tags:[`unit`,`snapshot`],parameters:s({source:{code:`() => <DemoComponent text="Story content" />`},description:{story:`With two showDocSource() (placement defaults to 'after'), order is: story first, then first source card, then second source card.`}}),decorators:[o({source:`// First source block`}),o({source:`// Second source block`})],render:()=>(0,u.jsx)(d,{text:`Story content`})}),D=f.story({name:`two withStoryCard + two showDocSource`,tags:[`unit`,`snapshot`],parameters:s({source:{code:`() => <DemoComponent text="Story content" />`},description:{story:`Cards render in decorator order: First card (withStoryCard), source before (showDocSource placement: 'before'), second card (withStoryCard), story, then source after (showDocSource).`}}),decorators:[l({title:`First card`,content:(0,u.jsx)(`p`,{children:`This card should appear first.`})}),o({placement:`before`,source:`// Source shown before the story`}),l({title:`Second card`,content:(0,u.jsx)(`p`,{children:`This card should appear after the first source.`})}),o({source:`// Source shown after the story`})],render:()=>(0,u.jsx)(d,{text:`Story content`})}),O=[`ShowDocsSourceCode`,`ShowStorySource`,`WithLanguageJson`,`WithLanguageMd`,`WithDocsTheme`,`ShowDocsSource`,`WithClassNameString`,`WithClassNameFunction`,`WithClassNameConditional`,`WithSourceString`,`WithSourceFunction`,`PlacementBefore`,`TwoShowDocSourceBefore`,`TwoShowDocSourceAfter`,`TwoWithStoryCardTwoShowDocSource`],p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...p.input.parameters?.docs?.source}}},m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
  decorators: [withStoryCard({
    content: <p>When no \`source\` is provided, the decorator will use the original source code of the story.</p>
  }), showDocSource()],
  render: () => <DemoComponent text="Hello World" />
})`,...m.input.parameters?.docs?.source}}},h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...h.input.parameters?.docs?.source}}},g.input.parameters={...g.input.parameters,docs:{...g.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...g.input.parameters?.docs?.source}}},_.input.parameters={..._.input.parameters,docs:{..._.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,..._.input.parameters?.docs?.source}}},v.input.parameters={...v.input.parameters,docs:{...v.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...v.input.parameters?.docs?.source}}},y.input.parameters={...y.input.parameters,docs:{...y.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...y.input.parameters?.docs?.source}}},b.input.parameters={...b.input.parameters,docs:{...b.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...b.input.parameters?.docs?.source}}},x.input.parameters={...x.input.parameters,docs:{...x.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...x.input.parameters?.docs?.source}}},S.input.parameters={...S.input.parameters,docs:{...S.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...S.input.parameters?.docs?.source}}},C.input.parameters={...C.input.parameters,docs:{...C.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...C.input.parameters?.docs?.source}}},w.input.parameters={...w.input.parameters,docs:{...w.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...w.input.parameters?.docs?.source}}},T.input.parameters={...T.input.parameters,docs:{...T.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...T.input.parameters?.docs?.source}}},E.input.parameters={...E.input.parameters,docs:{...E.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...E.input.parameters?.docs?.source}}},D.input.parameters={...D.input.parameters,docs:{...D.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...D.input.parameters?.docs?.source}}}})))()}k();export{w as PlacementBefore,v as ShowDocsSource,p as ShowDocsSourceCode,m as ShowStorySource,E as TwoShowDocSourceAfter,T as TwoShowDocSourceBefore,D as TwoWithStoryCardTwoShowDocSource,x as WithClassNameConditional,b as WithClassNameFunction,y as WithClassNameString,_ as WithDocsTheme,h as WithLanguageJson,g as WithLanguageMd,C as WithSourceFunction,S as WithSourceString,O as __namedExportsOrder};