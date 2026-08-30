import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-yBdeBQmp.js";import{n,r}from"./iframe-pxBOiIH1.js";import{L as i,N as a,O as o,_ as s,j as c,t as l,w as u}from"./src-Dhw3iRbJ.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{c(),l(),n(),d=t(),{expect:f}=__STORYBOOK_MODULE_TEST__,p=r.meta({title:`decorators/withStoryCard`,tags:[`autodocs`,`version:2.2`],parameters:s({description:{component:"The `withStoryCard` decorator adds a card section to should additional information about the story. It is hidden when the story is shown in docs."}}),render:()=>(0,d.jsx)(`p`,{children:`This is the story content`})}),m=p.story({tags:[`usecase`,`snapshot`],decorators:[u(),u({content:(0,d.jsxs)(`p`,{children:[`When component description is defined and no `,(0,d.jsx)(`code`,{children:"`content`"}),` are provided, the component description will be shown.`]})})],play:async({canvasElement:e})=>{if(i())return;let t=e.querySelectorAll(`section`);await f(t).toHaveLength(2)}}),h=p.story({tags:[`usecase`,`snapshot`],parameters:s({description:{story:`This is story description`}}),decorators:[u(),u({content:(0,d.jsxs)(`p`,{children:[`When story description is provided and no `,(0,d.jsx)(`code`,{children:"`content`"}),` are provided, story description will be shown instead of component description.`]})})],play:async({canvasElement:e})=>{if(i())return;let t=e.querySelectorAll(`section`);await f(t).toHaveLength(2)}}),g=p.story({name:`content: ReactNode`,tags:[`props`],decorators:[u({content:(0,d.jsx)(`p`,{children:`Custom message.`})})],render:()=>(0,d.jsxs)(`p`,{children:[`When providing a custom `,(0,d.jsx)(`code`,{children:"`content`"}),` value, it will be used over component andy story description.`]}),play:async({canvas:e})=>{if(i())return;let t=e.getByText(`Custom message.`);await f(t).toBeInTheDocument()}}),_=p.story({name:`title: ReactNode`,tags:[`props`],parameters:s({description:{story:`The decorator can be used with a title.`}}),decorators:[u({title:`Story Card Title`})],play:async({canvas:e})=>{if(i())return;let t=e.getByText(`Story Card Title`);await f(t).toBeInTheDocument()}}),v=p.story({name:`data-testid: provided`,tags:[`props`],parameters:s({description:{story:"withStoryCard forwards the `data-testid` prop to the card root for testing and automation."}}),decorators:[u({"data-testid":`with-story-card-example`,title:`Card with data-testid`,content:(0,d.jsx)(`p`,{children:`This card has data-testid on the root section for testing.`})})],play:async({canvas:e})=>{if(i())return;let t=e.getByTestId(`with-story-card-example`);await f(t).toBeInTheDocument()}}),y=p.story({name:`status: info`,tags:[`props`,`deprecated`,`version:2.14`,`!version:2.2`],parameters:s({description:{story:`Info status displays with a blue background.`}}),decorators:[u({title:`Deprecated`,appearance:`warn`,content:(0,d.jsxs)(`p`,{children:[`The `,(0,d.jsx)(`code`,{children:`status`}),` prop is deprecated. Use `,(0,d.jsx)(`code`,{children:`appearance: "info"`}),` instead.`]})}),u({title:`Info Card`,status:`info`})],play:async({canvasElement:e})=>{if(i())return;let t=e.querySelectorAll(`section`);await f(t).toHaveLength(2);let n=t[1];await f(n).toHaveClass(`rbsb:bg-sky-100`,`rbsb:dark:bg-sky-900`)}}),b=p.story({name:`status: warn`,tags:[`props`,`deprecated`,`version:2.14`,`!version:2.2`],parameters:s({description:{story:`Warn status displays with a yellow background.`}}),decorators:[u({title:`Deprecated`,appearance:`warn`,content:(0,d.jsxs)(`p`,{children:[`The `,(0,d.jsx)(`code`,{children:`status`}),` prop is deprecated. Use `,(0,d.jsx)(`code`,{children:`appearance: "warn"`}),` instead.`]})}),u({title:`Warning Card`,status:`warn`})],play:async({canvasElement:e})=>{if(i())return;let t=e.querySelectorAll(`section`);await f(t).toHaveLength(2);let n=t[1];await f(n).toHaveClass(`rbsb:bg-yellow-100`,`rbsb:dark:bg-yellow-900`)}}),x=p.story({name:`status: error`,tags:[`props`,`deprecated`,`version:2.14`,`!version:2.2`],parameters:s({description:{story:`Error status displays with a red background.`}}),decorators:[u({title:`Deprecated`,appearance:`warn`,content:(0,d.jsxs)(`p`,{children:[`The `,(0,d.jsx)(`code`,{children:`status`}),` prop is deprecated. Use `,(0,d.jsx)(`code`,{children:`appearance: "error"`}),` instead.`]})}),u({title:`Error Card`,status:`error`})],play:async({canvasElement:e})=>{if(i())return;let t=e.querySelectorAll(`section`);await f(t).toHaveLength(2);let n=t[1];await f(n).toHaveClass(`rbsb:bg-red-100`,`rbsb:dark:bg-red-900`)}}),S=p.story({name:`appearance: error`,tags:[`props`,`version:2.14`,`!version:2.2`],parameters:s({description:{story:`Use for failure states, validation errors, or critical messages that require immediate attention.`}}),decorators:[u({title:`Error Card`,appearance:`error`,content:(0,d.jsxs)(`p`,{children:[`Use `,(0,d.jsx)(`code`,{children:`appearance="error"`}),` when the card conveys a failure or critical message.`]})})],play:async({canvasElement:e})=>{if(i())return;let t=e.querySelector(`section`);await f(t).toHaveClass(`rbsb:bg-red-100`,`rbsb:dark:bg-red-900`,`rbsb:border-red-300`,`rbsb:dark:border-red-700`)}}),C=p.story({name:`appearance: warn`,tags:[`props`,`version:2.14`,`!version:2.2`],parameters:s({description:{story:`Use for cautions, deprecation notices, or non-blocking issues the user should be aware of.`}}),decorators:[u({title:`Warning Card`,appearance:`warn`,content:(0,d.jsxs)(`p`,{children:[`Use `,(0,d.jsx)(`code`,{children:`appearance="warn"`}),` when the card conveys a caution or deprecation.`]})})],play:async({canvasElement:e})=>{if(i())return;let t=e.querySelector(`section`);await f(t).toHaveClass(`rbsb:bg-yellow-100`,`rbsb:dark:bg-yellow-900`,`rbsb:border-yellow-300`,`rbsb:dark:border-yellow-700`)}}),w=p.story({name:`appearance: info`,tags:[`props`,`version:2.14`,`!version:2.2`],parameters:s({description:{story:`Use for general context, tips, or neutral information. Default when neither appearance nor status is set.`}}),decorators:[u({title:`Info Card`,appearance:`info`,content:(0,d.jsxs)(`p`,{children:[`Use `,(0,d.jsx)(`code`,{children:`appearance="info"`}),` for neutral context or tips (default).`]})})],play:async({canvasElement:e})=>{if(i())return;let t=e.querySelector(`section`);await f(t).toHaveClass(`rbsb:bg-sky-100`,`rbsb:dark:bg-sky-900`,`rbsb:border-sky-300`,`rbsb:dark:border-sky-700`)}}),T=p.story({name:`appearance: source`,tags:[`props`,`version:2.14`,`!version:2.2`],parameters:s({description:{story:`Use when embedding code or source snippets so the card blends with the page (e.g. with showSource).`}}),decorators:[u({title:`Source Card`,appearance:`source`,content:(0,d.jsxs)(`p`,{children:[`Use `,(0,d.jsx)(`code`,{children:`appearance="source"`}),` for code/source blocks (e.g. with `,(0,d.jsx)(`code`,{children:`showSource`}),`).`]})})],play:async({canvasElement:e})=>{if(i())return;let t=e.querySelector(`section`);await f(t).toHaveClass(`rbsb:bg-gray-100`,`rbsb:dark:bg-gray-900`,`rbsb:border-gray-300`,`rbsb:dark:border-gray-700`)}}),E=p.story({name:`appearance: output`,tags:[`props`,`version:2.14`,`!version:2.2`],parameters:s({description:{story:`Use when showing results, success feedback, or generated output.`}}),decorators:[u({title:`Output Card`,appearance:`output`,content:(0,d.jsxs)(`p`,{children:[`Use `,(0,d.jsx)(`code`,{children:`appearance="output"`}),` for results or success feedback.`]})})],play:async({canvasElement:e})=>{if(i())return;let t=e.querySelector(`section`);await f(t).toHaveClass(`rbsb:bg-green-100`,`rbsb:dark:bg-green-900`,`rbsb:border-green-300`,`rbsb:dark:border-green-700`)}}),D=p.story({name:`className: string`,tags:[`props`],parameters:s({description:{story:`The card can be customized with additional className.`}}),decorators:[u({title:`Custom Styled Card`,status:`info`,className:`rbsb:border-2 rbsb:border-blue-500 rbsb:shadow-lg`})],play:async({canvasElement:e})=>{if(i())return;let t=e.querySelector(`section`);await f(t).toHaveClass(`rbsb:border-2 rbsb:border-blue-500 rbsb:shadow-lg`)}}),O=p.story({name:`className: function`,tags:[`props`,`snapshot`],parameters:s({description:{story:"The card can be customized with a className function that receives the `appearance` and `defaultClassName`. The function should return the final className string."}}),decorators:[u({title:`Function-Based Styling`,appearance:`info`,className:({appearance:e,defaultClassName:t})=>a(t,{info:`rbsb:bg-green-200 rbsb:dark:bg-green-800`,warn:`rbsb:bg-amber-300 rbsb:dark:bg-amber-900`,error:`rbsb:bg-rose-400 rbsb:dark:bg-rose-900`,source:``,output:`rbsb:bg-emerald-200 rbsb:dark:bg-emerald-800`}[e??`info`])}),o({source:`className: ({ appearance, defaultClassName }) => string`})]}),k=p.story({tags:[`edgecase`],parameters:s({description:{component:``}}),decorators:[u()],render:()=>(0,d.jsx)(`p`,{children:"When there are no component or story description, and the `withStoryCard` call does not provide `title` or `children`, it will not render anything."}),play:async({canvasElement:e})=>{if(i())return;let t=e.querySelector(`section`);await f(t).not.toBeInTheDocument()}}),A=p.story({name:`Controls: rerenders on args change`,tags:[`edgecase`],args:{label:`Initial label — change me in the Controls panel`},argTypes:{label:{control:`text`}},parameters:s({description:{story:"Manual test for the memoization fix. Change the `label` control — the paragraph text should update immediately. If it does not, the bug is still present."}}),decorators:[u({title:`Manual test: controls trigger rerender`,content:(0,d.jsxs)(`p`,{children:[`Change the `,(0,d.jsx)(`code`,{children:`label`}),` control below. The paragraph text should update immediately — if it does not, the memoization bug is still present.`]})})],render:e=>(0,d.jsx)(`p`,{"data-testid":`label`,children:String(e.label)})}),m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
  tags: ['usecase', 'snapshot'],
  decorators: [withStoryCard(), withStoryCard({
    content: <p>
                    When component description is defined and no <code>\`content\`</code> are provided, the component description
                    will be shown.
                </p>
  })],
  play: async ({
    canvasElement
  }) => {
    if (isRunningInTest()) return;
    const sections = canvasElement.querySelectorAll('section');
    await expect(sections).toHaveLength(2);
  }
})`,...m.input.parameters?.docs?.source}}},h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{originalSource:`meta.story({
  tags: ['usecase', 'snapshot'],
  parameters: defineDocsParam({
    description: {
      story: 'This is story description'
    }
  }),
  decorators: [withStoryCard(), withStoryCard({
    content: <p>
                    When story description is provided and no <code>\`content\`</code> are provided, story description will be shown
                    instead of component description.
                </p>
  })],
  play: async ({
    canvasElement
  }) => {
    if (isRunningInTest()) return;
    const sections = canvasElement.querySelectorAll('section');
    await expect(sections).toHaveLength(2);
  }
})`,...h.input.parameters?.docs?.source}}},g.input.parameters={...g.input.parameters,docs:{...g.input.parameters?.docs,source:{originalSource:`meta.story({
  name: 'content: ReactNode',
  tags: ['props'],
  decorators: [withStoryCard({
    content: <p>Custom message.</p>
  })],
  render: () => <p>
            When providing a custom <code>\`content\`</code> value, it will be used over component andy story description.
        </p>,
  play: async ({
    canvas
  }) => {
    if (isRunningInTest()) return;
    const message = canvas.getByText('Custom message.');
    await expect(message).toBeInTheDocument();
  }
})`,...g.input.parameters?.docs?.source}}},_.input.parameters={..._.input.parameters,docs:{..._.input.parameters?.docs,source:{originalSource:`meta.story({
  name: 'title: ReactNode',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'The decorator can be used with a title.'
    }
  }),
  decorators: [withStoryCard({
    title: 'Story Card Title'
  })],
  play: async ({
    canvas
  }) => {
    if (isRunningInTest()) return;
    const title = canvas.getByText('Story Card Title');
    await expect(title).toBeInTheDocument();
  }
})`,..._.input.parameters?.docs?.source}}},v.input.parameters={...v.input.parameters,docs:{...v.input.parameters?.docs,source:{originalSource:`meta.story({
  name: 'data-testid: provided',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'withStoryCard forwards the \`data-testid\` prop to the card root for testing and automation.'
    }
  }),
  decorators: [withStoryCard({
    'data-testid': 'with-story-card-example',
    title: 'Card with data-testid',
    content: <p>This card has data-testid on the root section for testing.</p>
  })],
  play: async ({
    canvas
  }) => {
    if (isRunningInTest()) return;
    const section = canvas.getByTestId('with-story-card-example');
    await expect(section).toBeInTheDocument();
  }
})`,...v.input.parameters?.docs?.source}}},y.input.parameters={...y.input.parameters,docs:{...y.input.parameters?.docs,source:{originalSource:`meta.story({
  name: 'status: info',
  tags: ['props', 'deprecated', 'version:2.14', '!version:2.2'],
  parameters: defineDocsParam({
    description: {
      story: 'Info status displays with a blue background.'
    }
  }),
  decorators: [withStoryCard({
    title: 'Deprecated',
    appearance: 'warn',
    content: <p>
                    The <code>status</code> prop is deprecated. Use <code>appearance: &quot;info&quot;</code> instead.
                </p>
  }), withStoryCard({
    title: 'Info Card',
    status: 'info'
  })],
  play: async ({
    canvasElement
  }) => {
    if (isRunningInTest()) return;
    const sections = canvasElement.querySelectorAll('section');
    await expect(sections).toHaveLength(2);
    const statusCard = sections[1];
    await expect(statusCard).toHaveClass('rbsb:bg-sky-100', 'rbsb:dark:bg-sky-900');
  }
})`,...y.input.parameters?.docs?.source}}},b.input.parameters={...b.input.parameters,docs:{...b.input.parameters?.docs,source:{originalSource:`meta.story({
  name: 'status: warn',
  tags: ['props', 'deprecated', 'version:2.14', '!version:2.2'],
  parameters: defineDocsParam({
    description: {
      story: 'Warn status displays with a yellow background.'
    }
  }),
  decorators: [withStoryCard({
    title: 'Deprecated',
    appearance: 'warn',
    content: <p>
                    The <code>status</code> prop is deprecated. Use <code>appearance: &quot;warn&quot;</code> instead.
                </p>
  }), withStoryCard({
    title: 'Warning Card',
    status: 'warn'
  })],
  play: async ({
    canvasElement
  }) => {
    if (isRunningInTest()) return;
    const sections = canvasElement.querySelectorAll('section');
    await expect(sections).toHaveLength(2);
    const statusCard = sections[1];
    await expect(statusCard).toHaveClass('rbsb:bg-yellow-100', 'rbsb:dark:bg-yellow-900');
  }
})`,...b.input.parameters?.docs?.source}}},x.input.parameters={...x.input.parameters,docs:{...x.input.parameters?.docs,source:{originalSource:`meta.story({
  name: 'status: error',
  tags: ['props', 'deprecated', 'version:2.14', '!version:2.2'],
  parameters: defineDocsParam({
    description: {
      story: 'Error status displays with a red background.'
    }
  }),
  decorators: [withStoryCard({
    title: 'Deprecated',
    appearance: 'warn',
    content: <p>
                    The <code>status</code> prop is deprecated. Use <code>appearance: &quot;error&quot;</code> instead.
                </p>
  }), withStoryCard({
    title: 'Error Card',
    status: 'error'
  })],
  play: async ({
    canvasElement
  }) => {
    if (isRunningInTest()) return;
    const sections = canvasElement.querySelectorAll('section');
    await expect(sections).toHaveLength(2);
    const statusCard = sections[1];
    await expect(statusCard).toHaveClass('rbsb:bg-red-100', 'rbsb:dark:bg-red-900');
  }
})`,...x.input.parameters?.docs?.source}}},S.input.parameters={...S.input.parameters,docs:{...S.input.parameters?.docs,source:{originalSource:`meta.story({
  name: 'appearance: error',
  tags: ['props', 'version:2.14', '!version:2.2'],
  parameters: defineDocsParam({
    description: {
      story: 'Use for failure states, validation errors, or critical messages that require immediate attention.'
    }
  }),
  decorators: [withStoryCard({
    title: 'Error Card',
    appearance: 'error',
    content: <p>
                    Use <code>appearance="error"</code> when the card conveys a failure or critical message.
                </p>
  })],
  play: async ({
    canvasElement
  }) => {
    if (isRunningInTest()) return;
    const section = canvasElement.querySelector('section');
    await expect(section).toHaveClass('rbsb:bg-red-100', 'rbsb:dark:bg-red-900', 'rbsb:border-red-300', 'rbsb:dark:border-red-700');
  }
})`,...S.input.parameters?.docs?.source}}},C.input.parameters={...C.input.parameters,docs:{...C.input.parameters?.docs,source:{originalSource:`meta.story({
  name: 'appearance: warn',
  tags: ['props', 'version:2.14', '!version:2.2'],
  parameters: defineDocsParam({
    description: {
      story: 'Use for cautions, deprecation notices, or non-blocking issues the user should be aware of.'
    }
  }),
  decorators: [withStoryCard({
    title: 'Warning Card',
    appearance: 'warn',
    content: <p>
                    Use <code>appearance="warn"</code> when the card conveys a caution or deprecation.
                </p>
  })],
  play: async ({
    canvasElement
  }) => {
    if (isRunningInTest()) return;
    const section = canvasElement.querySelector('section');
    await expect(section).toHaveClass('rbsb:bg-yellow-100', 'rbsb:dark:bg-yellow-900', 'rbsb:border-yellow-300', 'rbsb:dark:border-yellow-700');
  }
})`,...C.input.parameters?.docs?.source}}},w.input.parameters={...w.input.parameters,docs:{...w.input.parameters?.docs,source:{originalSource:`meta.story({
  name: 'appearance: info',
  tags: ['props', 'version:2.14', '!version:2.2'],
  parameters: defineDocsParam({
    description: {
      story: 'Use for general context, tips, or neutral information. Default when neither appearance nor status is set.'
    }
  }),
  decorators: [withStoryCard({
    title: 'Info Card',
    appearance: 'info',
    content: <p>
                    Use <code>appearance="info"</code> for neutral context or tips (default).
                </p>
  })],
  play: async ({
    canvasElement
  }) => {
    if (isRunningInTest()) return;
    const section = canvasElement.querySelector('section');
    await expect(section).toHaveClass('rbsb:bg-sky-100', 'rbsb:dark:bg-sky-900', 'rbsb:border-sky-300', 'rbsb:dark:border-sky-700');
  }
})`,...w.input.parameters?.docs?.source}}},T.input.parameters={...T.input.parameters,docs:{...T.input.parameters?.docs,source:{originalSource:`meta.story({
  name: 'appearance: source',
  tags: ['props', 'version:2.14', '!version:2.2'],
  parameters: defineDocsParam({
    description: {
      story: 'Use when embedding code or source snippets so the card blends with the page (e.g. with showSource).'
    }
  }),
  decorators: [withStoryCard({
    title: 'Source Card',
    appearance: 'source',
    content: <p>
                    Use <code>appearance="source"</code> for code/source blocks (e.g. with <code>showSource</code>).
                </p>
  })],
  play: async ({
    canvasElement
  }) => {
    if (isRunningInTest()) return;
    const section = canvasElement.querySelector('section');
    await expect(section).toHaveClass('rbsb:bg-gray-100', 'rbsb:dark:bg-gray-900', 'rbsb:border-gray-300', 'rbsb:dark:border-gray-700');
  }
})`,...T.input.parameters?.docs?.source}}},E.input.parameters={...E.input.parameters,docs:{...E.input.parameters?.docs,source:{originalSource:`meta.story({
  name: 'appearance: output',
  tags: ['props', 'version:2.14', '!version:2.2'],
  parameters: defineDocsParam({
    description: {
      story: 'Use when showing results, success feedback, or generated output.'
    }
  }),
  decorators: [withStoryCard({
    title: 'Output Card',
    appearance: 'output',
    content: <p>
                    Use <code>appearance="output"</code> for results or success feedback.
                </p>
  })],
  play: async ({
    canvasElement
  }) => {
    if (isRunningInTest()) return;
    const section = canvasElement.querySelector('section');
    await expect(section).toHaveClass('rbsb:bg-green-100', 'rbsb:dark:bg-green-900', 'rbsb:border-green-300', 'rbsb:dark:border-green-700');
  }
})`,...E.input.parameters?.docs?.source}}},D.input.parameters={...D.input.parameters,docs:{...D.input.parameters?.docs,source:{originalSource:`meta.story({
  name: 'className: string',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'The card can be customized with additional className.'
    }
  }),
  decorators: [withStoryCard({
    title: 'Custom Styled Card',
    status: 'info',
    className: 'rbsb:border-2 rbsb:border-blue-500 rbsb:shadow-lg'
  })],
  play: async ({
    canvasElement
  }) => {
    if (isRunningInTest()) return;
    const section = canvasElement.querySelector('section');
    await expect(section).toHaveClass('rbsb:border-2 rbsb:border-blue-500 rbsb:shadow-lg');
  }
})`,...D.input.parameters?.docs?.source}}},O.input.parameters={...O.input.parameters,docs:{...O.input.parameters?.docs,source:{originalSource:`meta.story({
  name: 'className: function',
  tags: ['props', 'snapshot'],
  parameters: defineDocsParam({
    description: {
      story: 'The card can be customized with a className function that receives the \`appearance\` and \`defaultClassName\`. The function should return the final className string.'
    }
  }),
  decorators: [withStoryCard({
    title: 'Function-Based Styling',
    appearance: 'info',
    className: ({
      appearance,
      defaultClassName
    }) => twMerge(defaultClassName, {
      info: 'rbsb:bg-green-200 rbsb:dark:bg-green-800',
      warn: 'rbsb:bg-amber-300 rbsb:dark:bg-amber-900',
      error: 'rbsb:bg-rose-400 rbsb:dark:bg-rose-900',
      source: '',
      output: 'rbsb:bg-emerald-200 rbsb:dark:bg-emerald-800'
    }[appearance ?? 'info'])
  }), showSource({
    source: 'className: ({ appearance, defaultClassName }) => string'
  })]
})`,...O.input.parameters?.docs?.source}}},k.input.parameters={...k.input.parameters,docs:{...k.input.parameters?.docs,source:{originalSource:`meta.story({
  tags: ['edgecase'],
  parameters: defineDocsParam({
    description: {
      component: ''
    }
  }),
  decorators: [withStoryCard()],
  render: () => <p>
            When there are no component or story description, and the \`withStoryCard\` call does not provide \`title\` or
            \`children\`, it will not render anything.
        </p>,
  play: async ({
    canvasElement
  }) => {
    if (isRunningInTest()) return;
    const section = canvasElement.querySelector('section');
    await expect(section).not.toBeInTheDocument();
  }
})`,...k.input.parameters?.docs?.source}}},A.input.parameters={...A.input.parameters,docs:{...A.input.parameters?.docs,source:{originalSource:`meta.story({
  name: 'Controls: rerenders on args change',
  tags: ['edgecase'],
  args: {
    label: 'Initial label — change me in the Controls panel'
  },
  argTypes: {
    label: {
      control: 'text'
    }
  },
  parameters: defineDocsParam({
    description: {
      story: 'Manual test for the memoization fix. Change the \`label\` control — the paragraph text should update immediately. If it does not, the bug is still present.'
    }
  }),
  decorators: [withStoryCard({
    title: 'Manual test: controls trigger rerender',
    content: <p>
                    Change the <code>label</code> control below. The paragraph text should update immediately — if it does not,
                    the memoization bug is still present.
                </p>
  })],
  render: args => <p data-testid="label">{String((args as {
      label: string;
    }).label)}</p>
})`,...A.input.parameters?.docs?.source}}},j=[`ShowsComponentDescription`,`ShowsStoryDescription`,`WithContent`,`WithTitle`,`DataTestId`,`WithInfoStatus`,`WithWarnStatus`,`WithErrorStatus`,`WithAppearanceError`,`WithAppearanceWarn`,`WithAppearanceInfo`,`WithAppearanceSource`,`WithAppearanceOutput`,`WithCustomClassName`,`WithClassNameFunction`,`HiddenWithoutMessage`,`ControlsRedrawnWhenArgsChange`]})))()}M();export{A as ControlsRedrawnWhenArgsChange,v as DataTestId,k as HiddenWithoutMessage,m as ShowsComponentDescription,h as ShowsStoryDescription,S as WithAppearanceError,w as WithAppearanceInfo,E as WithAppearanceOutput,T as WithAppearanceSource,C as WithAppearanceWarn,O as WithClassNameFunction,g as WithContent,D as WithCustomClassName,x as WithErrorStatus,y as WithInfoStatus,_ as WithTitle,b as WithWarnStatus,j as __namedExportsOrder};