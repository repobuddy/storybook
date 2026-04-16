import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-6sF1Ejqi.js";import{C as n,b as r,d as i,h as a,m as o,t as s,v as c}from"./src-XpyBqwIv.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;e((()=>{c(),s(),l=t(),{expect:u}=__STORYBOOK_MODULE_TEST__,d={title:`decorators/withStoryCard`,tags:[`autodocs`,`version:2.2`],parameters:i({description:{component:"The `withStoryCard` decorator adds a card section to should additional information about the story. It is hidden when the story is shown in docs."}}),render:()=>(0,l.jsx)(`p`,{children:`This is the story content`})},f={tags:[`usecase`,`snapshot`],decorators:[o(),o({content:(0,l.jsxs)(`p`,{children:[`When component description is defined and no `,(0,l.jsx)(`code`,{children:"`content`"}),` are provided, the component description will be shown.`]})})],play:async({canvasElement:e})=>{n()||await u(e.querySelectorAll(`section`)).toHaveLength(2)}},p={tags:[`usecase`,`snapshot`],parameters:i({description:{story:`This is story description`}}),decorators:[o(),o({content:(0,l.jsxs)(`p`,{children:[`When story description is provided and no `,(0,l.jsx)(`code`,{children:"`content`"}),` are provided, story description will be shown instead of component description.`]})})],play:async({canvasElement:e})=>{n()||await u(e.querySelectorAll(`section`)).toHaveLength(2)}},m={name:`content: ReactNode`,tags:[`props`],decorators:[o({content:(0,l.jsx)(`p`,{children:`Custom message.`})})],render:()=>(0,l.jsxs)(`p`,{children:[`When providing a custom `,(0,l.jsx)(`code`,{children:"`content`"}),` value, it will be used over component andy story description.`]}),play:async({canvas:e})=>{n()||await u(e.getByText(`Custom message.`)).toBeInTheDocument()}},h={name:`title: ReactNode`,tags:[`props`],parameters:i({description:{story:`The decorator can be used with a title.`}}),decorators:[o({title:`Story Card Title`})],play:async({canvas:e})=>{n()||await u(e.getByText(`Story Card Title`)).toBeInTheDocument()}},g={name:`data-testid: provided`,tags:[`props`],parameters:i({description:{story:"withStoryCard forwards the `data-testid` prop to the card root for testing and automation."}}),decorators:[o({"data-testid":`with-story-card-example`,title:`Card with data-testid`,content:(0,l.jsx)(`p`,{children:`This card has data-testid on the root section for testing.`})})],play:async({canvas:e})=>{n()||await u(e.getByTestId(`with-story-card-example`)).toBeInTheDocument()}},_={name:`status: info`,tags:[`props`,`deprecated`,`version:2.14`,`!version:2.2`],parameters:i({description:{story:`Info status displays with a blue background.`}}),decorators:[o({title:`Deprecated`,appearance:`warn`,content:(0,l.jsxs)(`p`,{children:[`The `,(0,l.jsx)(`code`,{children:`status`}),` prop is deprecated. Use `,(0,l.jsx)(`code`,{children:`appearance: "info"`}),` instead.`]})}),o({title:`Info Card`,status:`info`})],play:async({canvasElement:e})=>{if(n())return;let t=e.querySelectorAll(`section`);await u(t).toHaveLength(2);let r=t[1];await u(r).toHaveClass(`rbsb:bg-sky-100`,`rbsb:dark:bg-sky-900`)}},v={name:`status: warn`,tags:[`props`,`deprecated`,`version:2.14`,`!version:2.2`],parameters:i({description:{story:`Warn status displays with a yellow background.`}}),decorators:[o({title:`Deprecated`,appearance:`warn`,content:(0,l.jsxs)(`p`,{children:[`The `,(0,l.jsx)(`code`,{children:`status`}),` prop is deprecated. Use `,(0,l.jsx)(`code`,{children:`appearance: "warn"`}),` instead.`]})}),o({title:`Warning Card`,status:`warn`})],play:async({canvasElement:e})=>{if(n())return;let t=e.querySelectorAll(`section`);await u(t).toHaveLength(2);let r=t[1];await u(r).toHaveClass(`rbsb:bg-yellow-100`,`rbsb:dark:bg-yellow-900`)}},y={name:`status: error`,tags:[`props`,`deprecated`,`version:2.14`,`!version:2.2`],parameters:i({description:{story:`Error status displays with a red background.`}}),decorators:[o({title:`Deprecated`,appearance:`warn`,content:(0,l.jsxs)(`p`,{children:[`The `,(0,l.jsx)(`code`,{children:`status`}),` prop is deprecated. Use `,(0,l.jsx)(`code`,{children:`appearance: "error"`}),` instead.`]})}),o({title:`Error Card`,status:`error`})],play:async({canvasElement:e})=>{if(n())return;let t=e.querySelectorAll(`section`);await u(t).toHaveLength(2);let r=t[1];await u(r).toHaveClass(`rbsb:bg-red-100`,`rbsb:dark:bg-red-900`)}},b={name:`appearance: error`,tags:[`props`,`version:2.14`,`!version:2.2`],parameters:i({description:{story:`Use for failure states, validation errors, or critical messages that require immediate attention.`}}),decorators:[o({title:`Error Card`,appearance:`error`,content:(0,l.jsxs)(`p`,{children:[`Use `,(0,l.jsx)(`code`,{children:`appearance="error"`}),` when the card conveys a failure or critical message.`]})})],play:async({canvasElement:e})=>{n()||await u(e.querySelector(`section`)).toHaveClass(`rbsb:bg-red-100`,`rbsb:dark:bg-red-900`,`rbsb:border-red-300`,`rbsb:dark:border-red-700`)}},x={name:`appearance: warn`,tags:[`props`,`version:2.14`,`!version:2.2`],parameters:i({description:{story:`Use for cautions, deprecation notices, or non-blocking issues the user should be aware of.`}}),decorators:[o({title:`Warning Card`,appearance:`warn`,content:(0,l.jsxs)(`p`,{children:[`Use `,(0,l.jsx)(`code`,{children:`appearance="warn"`}),` when the card conveys a caution or deprecation.`]})})],play:async({canvasElement:e})=>{n()||await u(e.querySelector(`section`)).toHaveClass(`rbsb:bg-yellow-100`,`rbsb:dark:bg-yellow-900`,`rbsb:border-yellow-300`,`rbsb:dark:border-yellow-700`)}},S={name:`appearance: info`,tags:[`props`,`version:2.14`,`!version:2.2`],parameters:i({description:{story:`Use for general context, tips, or neutral information. Default when neither appearance nor status is set.`}}),decorators:[o({title:`Info Card`,appearance:`info`,content:(0,l.jsxs)(`p`,{children:[`Use `,(0,l.jsx)(`code`,{children:`appearance="info"`}),` for neutral context or tips (default).`]})})],play:async({canvasElement:e})=>{n()||await u(e.querySelector(`section`)).toHaveClass(`rbsb:bg-sky-100`,`rbsb:dark:bg-sky-900`,`rbsb:border-sky-300`,`rbsb:dark:border-sky-700`)}},C={name:`appearance: source`,tags:[`props`,`version:2.14`,`!version:2.2`],parameters:i({description:{story:`Use when embedding code or source snippets so the card blends with the page (e.g. with showDocSource).`}}),decorators:[o({title:`Source Card`,appearance:`source`,content:(0,l.jsxs)(`p`,{children:[`Use `,(0,l.jsx)(`code`,{children:`appearance="source"`}),` for code/source blocks (e.g. with `,(0,l.jsx)(`code`,{children:`showDocSource`}),`).`]})})],play:async({canvasElement:e})=>{n()||await u(e.querySelector(`section`)).toHaveClass(`rbsb:bg-gray-100`,`rbsb:dark:bg-gray-900`,`rbsb:border-gray-300`,`rbsb:dark:border-gray-700`)}},w={name:`appearance: output`,tags:[`props`,`version:2.14`,`!version:2.2`],parameters:i({description:{story:`Use when showing results, success feedback, or generated output.`}}),decorators:[o({title:`Output Card`,appearance:`output`,content:(0,l.jsxs)(`p`,{children:[`Use `,(0,l.jsx)(`code`,{children:`appearance="output"`}),` for results or success feedback.`]})})],play:async({canvasElement:e})=>{n()||await u(e.querySelector(`section`)).toHaveClass(`rbsb:bg-green-100`,`rbsb:dark:bg-green-900`,`rbsb:border-green-300`,`rbsb:dark:border-green-700`)}},T={name:`className: string`,tags:[`props`],parameters:i({description:{story:`The card can be customized with additional className.`}}),decorators:[o({title:`Custom Styled Card`,status:`info`,className:`rbsb:border-2 rbsb:border-blue-500 rbsb:shadow-lg`})],play:async({canvasElement:e})=>{n()||await u(e.querySelector(`section`)).toHaveClass(`rbsb:border-2 rbsb:border-blue-500 rbsb:shadow-lg`)}},E={name:`className: function`,tags:[`props`,`snapshot`],parameters:i({description:{story:"The card can be customized with a className function that receives the `appearance` and `defaultClassName`. The function should return the final className string."}}),decorators:[o({title:`Function-Based Styling`,appearance:`info`,className:({appearance:e,defaultClassName:t})=>r(t,{info:`rbsb:bg-green-200 rbsb:dark:bg-green-800`,warn:`rbsb:bg-amber-300 rbsb:dark:bg-amber-900`,error:`rbsb:bg-rose-400 rbsb:dark:bg-rose-900`,source:``,output:`rbsb:bg-emerald-200 rbsb:dark:bg-emerald-800`}[e??`info`])}),a({source:`className: ({ appearance, defaultClassName }) => string`})]},D={tags:[`edgecase`],parameters:i({description:{component:``}}),decorators:[o()],render:()=>(0,l.jsx)(`p`,{children:"When there are no component or story description, and the `withStoryCard` call does not provide `title` or `children`, it will not render anything."}),play:async({canvasElement:e})=>{n()||await u(e.querySelector(`section`)).not.toBeInTheDocument()}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'appearance: source',
  tags: ['props', 'version:2.14', '!version:2.2'],
  parameters: defineDocsParam({
    description: {
      story: 'Use when embedding code or source snippets so the card blends with the page (e.g. with showDocSource).'
    }
  }),
  decorators: [withStoryCard({
    title: 'Source Card',
    appearance: 'source',
    content: <p>
                    Use <code>appearance="source"</code> for code/source blocks (e.g. with <code>showDocSource</code>).
                </p>
  })],
  play: async ({
    canvasElement
  }) => {
    if (isRunningInTest()) return;
    const section = canvasElement.querySelector('section');
    await expect(section).toHaveClass('rbsb:bg-gray-100', 'rbsb:dark:bg-gray-900', 'rbsb:border-gray-300', 'rbsb:dark:border-gray-700');
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
  }), showDocSource({
    source: 'className: ({ appearance, defaultClassName }) => string'
  })]
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O=[`ShowsComponentDescription`,`ShowsStoryDescription`,`WithContent`,`WithTitle`,`DataTestId`,`WithInfoStatus`,`WithWarnStatus`,`WithErrorStatus`,`WithAppearanceError`,`WithAppearanceWarn`,`WithAppearanceInfo`,`WithAppearanceSource`,`WithAppearanceOutput`,`WithCustomClassName`,`WithClassNameFunction`,`HiddenWithoutMessage`]}))();export{g as DataTestId,D as HiddenWithoutMessage,f as ShowsComponentDescription,p as ShowsStoryDescription,b as WithAppearanceError,S as WithAppearanceInfo,w as WithAppearanceOutput,C as WithAppearanceSource,x as WithAppearanceWarn,E as WithClassNameFunction,m as WithContent,T as WithCustomClassName,y as WithErrorStatus,_ as WithInfoStatus,h as WithTitle,v as WithWarnStatus,O as __namedExportsOrder,d as default};