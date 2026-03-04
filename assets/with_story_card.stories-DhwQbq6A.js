import{j as t}from"./iframe-DL06NnA6.js";import{i as n,b as T}from"./show_source-D9XvUQww.js";import{s as k}from"./show_doc_source-CpLKGHoD.js";import{w as a}from"./with_story_card-BkumSolX.js";import{d as o}from"./define_docs_param-lmgaBKCF.js";import"./preload-helper-PPVm8Dsz.js";const{expect:s}=__STORYBOOK_MODULE_TEST__,H={title:"decorators/withStoryCard",tags:["autodocs","version:2.2"],parameters:o({description:{component:"The `withStoryCard` decorator adds a card section to should additional information about the story. It is hidden when the story is shown in docs."}}),render:()=>t.jsx("p",{children:"This is the story content"})},i={tags:["usecase","snapshot"],decorators:[a(),a({content:t.jsxs("p",{children:["When component description is defined and no ",t.jsx("code",{children:"`content`"})," are provided, the component description will be shown."]})})],play:async({canvasElement:r})=>{if(n())return;const e=r.querySelectorAll("section");await s(e).toHaveLength(2)}},d={tags:["usecase","snapshot"],parameters:o({description:{story:"This is story description"}}),decorators:[a(),a({content:t.jsxs("p",{children:["When story description is provided and no ",t.jsx("code",{children:"`content`"})," are provided, story description will be shown instead of component description."]})})],play:async({canvasElement:r})=>{if(n())return;const e=r.querySelectorAll("section");await s(e).toHaveLength(2)}},p={name:"content: ReactNode",tags:["props"],decorators:[a({content:t.jsx("p",{children:"Custom message."})})],render:()=>t.jsxs("p",{children:["When providing a custom ",t.jsx("code",{children:"`content`"})," value, it will be used over component andy story description."]}),play:async({canvas:r})=>{if(n())return;const e=r.getByText("Custom message.");await s(e).toBeInTheDocument()}},l={name:"title: ReactNode",tags:["props"],parameters:o({description:{story:"The decorator can be used with a title."}}),decorators:[a({title:"Story Card Title"})],play:async({canvas:r})=>{if(n())return;const e=r.getByText("Story Card Title");await s(e).toBeInTheDocument()}},u={name:"data-testid: provided",tags:["props"],parameters:o({description:{story:"withStoryCard forwards the `data-testid` prop to the card root for testing and automation."}}),decorators:[a({"data-testid":"with-story-card-example",title:"Card with data-testid",content:t.jsx("p",{children:"This card has data-testid on the root section for testing."})})],play:async({canvas:r})=>{if(n())return;const e=r.getByTestId("with-story-card-example");await s(e).toBeInTheDocument()}},b={name:"status: info",tags:["props","deprecated","version:2.14","!version:2.2"],parameters:o({description:{story:"Info status displays with a blue background."}}),decorators:[a({title:"Deprecated",appearance:"warn",content:t.jsxs("p",{children:["The ",t.jsx("code",{children:"status"})," prop is deprecated. Use ",t.jsx("code",{children:'appearance: "info"'})," instead."]})}),a({title:"Info Card",status:"info"})],play:async({canvasElement:r})=>{if(n())return;const e=r.querySelectorAll("section");await s(e).toHaveLength(2);const c=e[1];await s(c).toHaveClass("rbsb:bg-sky-100","rbsb:dark:bg-sky-900")}},m={name:"status: warn",tags:["props","deprecated","version:2.14","!version:2.2"],parameters:o({description:{story:"Warn status displays with a yellow background."}}),decorators:[a({title:"Deprecated",appearance:"warn",content:t.jsxs("p",{children:["The ",t.jsx("code",{children:"status"})," prop is deprecated. Use ",t.jsx("code",{children:'appearance: "warn"'})," instead."]})}),a({title:"Warning Card",status:"warn"})],play:async({canvasElement:r})=>{if(n())return;const e=r.querySelectorAll("section");await s(e).toHaveLength(2);const c=e[1];await s(c).toHaveClass("rbsb:bg-yellow-100","rbsb:dark:bg-yellow-900")}},h={name:"status: error",tags:["props","deprecated","version:2.14","!version:2.2"],parameters:o({description:{story:"Error status displays with a red background."}}),decorators:[a({title:"Deprecated",appearance:"warn",content:t.jsxs("p",{children:["The ",t.jsx("code",{children:"status"})," prop is deprecated. Use ",t.jsx("code",{children:'appearance: "error"'})," instead."]})}),a({title:"Error Card",status:"error"})],play:async({canvasElement:r})=>{if(n())return;const e=r.querySelectorAll("section");await s(e).toHaveLength(2);const c=e[1];await s(c).toHaveClass("rbsb:bg-red-100","rbsb:dark:bg-red-900")}},y={name:"appearance: error",tags:["props","version:2.14","!version:2.2"],parameters:o({description:{story:"Use for failure states, validation errors, or critical messages that require immediate attention."}}),decorators:[a({title:"Error Card",appearance:"error",content:t.jsxs("p",{children:["Use ",t.jsx("code",{children:'appearance="error"'})," when the card conveys a failure or critical message."]})})],play:async({canvasElement:r})=>{if(n())return;const e=r.querySelector("section");await s(e).toHaveClass("rbsb:bg-red-100","rbsb:dark:bg-red-900","rbsb:border-red-300","rbsb:dark:border-red-700")}},g={name:"appearance: warn",tags:["props","version:2.14","!version:2.2"],parameters:o({description:{story:"Use for cautions, deprecation notices, or non-blocking issues the user should be aware of."}}),decorators:[a({title:"Warning Card",appearance:"warn",content:t.jsxs("p",{children:["Use ",t.jsx("code",{children:'appearance="warn"'})," when the card conveys a caution or deprecation."]})})],play:async({canvasElement:r})=>{if(n())return;const e=r.querySelector("section");await s(e).toHaveClass("rbsb:bg-yellow-100","rbsb:dark:bg-yellow-900","rbsb:border-yellow-300","rbsb:dark:border-yellow-700")}},w={name:"appearance: info",tags:["props","version:2.14","!version:2.2"],parameters:o({description:{story:"Use for general context, tips, or neutral information. Default when neither appearance nor status is set."}}),decorators:[a({title:"Info Card",appearance:"info",content:t.jsxs("p",{children:["Use ",t.jsx("code",{children:'appearance="info"'})," for neutral context or tips (default)."]})})],play:async({canvasElement:r})=>{if(n())return;const e=r.querySelector("section");await s(e).toHaveClass("rbsb:bg-sky-100","rbsb:dark:bg-sky-900","rbsb:border-sky-300","rbsb:dark:border-sky-700")}},f={name:"appearance: source",tags:["props","version:2.14","!version:2.2"],parameters:o({description:{story:"Use when embedding code or source snippets so the card blends with the page (e.g. with showDocSource)."}}),decorators:[a({title:"Source Card",appearance:"source",content:t.jsxs("p",{children:["Use ",t.jsx("code",{children:'appearance="source"'})," for code/source blocks (e.g. with ",t.jsx("code",{children:"showDocSource"}),")."]})})],play:async({canvasElement:r})=>{if(n())return;const e=r.querySelector("section");await s(e).toHaveClass("rbsb:bg-gray-100","rbsb:dark:bg-gray-900","rbsb:border-gray-300","rbsb:dark:border-gray-700")}},v={name:"appearance: output",tags:["props","version:2.14","!version:2.2"],parameters:o({description:{story:"Use when showing results, success feedback, or generated output."}}),decorators:[a({title:"Output Card",appearance:"output",content:t.jsxs("p",{children:["Use ",t.jsx("code",{children:'appearance="output"'})," for results or success feedback."]})})],play:async({canvasElement:r})=>{if(n())return;const e=r.querySelector("section");await s(e).toHaveClass("rbsb:bg-green-100","rbsb:dark:bg-green-900","rbsb:border-green-300","rbsb:dark:border-green-700")}},C={name:"className: string",tags:["props"],parameters:o({description:{story:"The card can be customized with additional className."}}),decorators:[a({title:"Custom Styled Card",status:"info",className:"rbsb:border-2 rbsb:border-blue-500 rbsb:shadow-lg"})],play:async({canvasElement:r})=>{if(n())return;const e=r.querySelector("section");await s(e).toHaveClass("rbsb:border-2 rbsb:border-blue-500 rbsb:shadow-lg")}},S={name:"className: function",tags:["props","snapshot"],parameters:o({description:{story:"The card can be customized with a className function that receives the `appearance` and `defaultClassName`. The function should return the final className string."}}),decorators:[a({title:"Function-Based Styling",appearance:"info",className:({appearance:r,defaultClassName:e})=>T(e,{info:"rbsb:bg-green-200 rbsb:dark:bg-green-800",warn:"rbsb:bg-amber-300 rbsb:dark:bg-amber-900",error:"rbsb:bg-rose-400 rbsb:dark:bg-rose-900",source:"",output:"rbsb:bg-emerald-200 rbsb:dark:bg-emerald-800"}[r??"info"])}),k({source:"className: ({ appearance, defaultClassName }) => string"})]},x={tags:["edgecase"],parameters:o({description:{component:""}}),decorators:[a()],render:()=>t.jsx("p",{children:"When there are no component or story description, and the `withStoryCard` call does not provide `title` or `children`, it will not render anything."}),play:async({canvasElement:r})=>{if(n())return;const e=r.querySelector("section");await s(e).not.toBeInTheDocument()}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const N=["ShowsComponentDescription","ShowsStoryDescription","WithContent","WithTitle","DataTestId","WithInfoStatus","WithWarnStatus","WithErrorStatus","WithAppearanceError","WithAppearanceWarn","WithAppearanceInfo","WithAppearanceSource","WithAppearanceOutput","WithCustomClassName","WithClassNameFunction","HiddenWithoutMessage"];export{u as DataTestId,x as HiddenWithoutMessage,i as ShowsComponentDescription,d as ShowsStoryDescription,y as WithAppearanceError,w as WithAppearanceInfo,v as WithAppearanceOutput,f as WithAppearanceSource,g as WithAppearanceWarn,S as WithClassNameFunction,p as WithContent,C as WithCustomClassName,h as WithErrorStatus,b as WithInfoStatus,l as WithTitle,m as WithWarnStatus,N as __namedExportsOrder,H as default};
