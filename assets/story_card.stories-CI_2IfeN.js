import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-6sF1Ejqi.js";import{_ as n,d as r,m as i,t as a}from"./src-BUA0lNvr.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{a(),o=t(),{expect:s}=__STORYBOOK_MODULE_TEST__,c={title:`components/StoryCard`,tags:[`new`,`version:2.8`,`autodocs`],component:n,parameters:r({description:{component:["`StoryCard` is a card component that displays information with optional title and appearance styling.","It supports appearance variants: `error`, `warn`, `info` (default), `source`, and `output`.","The component accepts a `title` prop for the heading and `children` for the card body content."].join(`<br/>`)}}),argTypes:{appearance:{control:{type:`select`},options:[`error`,`warn`,`info`,`source`,`output`]},status:{control:{type:`select`},options:[`error`,`warn`,`info`]},title:{control:{type:`text`}},className:{control:{type:`text`}},"data-testid":{control:{type:`text`}}}},l={args:{children:`This is a basic story card with default info status.`}},u={name:`title: provided`,tags:[`props`],parameters:r({description:{story:`StoryCard with a title heading displayed above the content.`}}),args:{title:`Card Title`,children:`This card has a title displayed as a heading.`}},d={name:`status: error`,tags:[`props`,`deprecated`,`version:2.14`,`!version:2.8`],parameters:r({description:{story:'Deprecated: use `appearance: "error"` instead.'}}),args:{status:`error`,title:`Error Card`,children:`This card displays an error status with red background styling.`},decorators:[i({appearance:`warn`})]},f={name:`status: warn`,tags:[`props`,`deprecated`,`version:2.14`,`!version:2.8`],parameters:r({description:{story:'Deprecated: use `appearance: "warn"` instead.'}}),args:{status:`warn`,title:`Warning Card`,children:`This card displays a warning status with yellow background styling.`},decorators:[i({appearance:`warn`})]},p={name:`status: info`,tags:[`props`,`deprecated`,`version:2.14`,`!version:2.8`],parameters:r({description:{story:'Deprecated: use `appearance: "info"` instead.'}}),args:{status:`info`,title:`Info Card`,children:`This card displays an info status with blue background styling.`},decorators:[i({appearance:`warn`})]},m={name:`appearance: error`,tags:[`props`,`version:2.14`,`!version:2.8`],parameters:r({description:{story:`Use for failure states, validation errors, or critical messages that require immediate attention.`}}),args:{appearance:`error`,title:`Error Card`,children:`Use appearance="error" when the card conveys a failure or critical message.`}},h={name:`appearance: warn`,tags:[`props`,`version:2.14`,`!version:2.8`],parameters:r({description:{story:`Use for cautions, deprecation notices, or non-blocking issues the user should be aware of.`}}),args:{appearance:`warn`,title:`Warning Card`,children:`Use appearance="warn" when the card conveys a caution or deprecation.`}},g={name:`appearance: info`,tags:[`props`,`version:2.14`,`!version:2.8`],parameters:r({description:{story:`Use for general context, tips, or neutral information. Default when neither appearance nor status is set.`}}),args:{appearance:`info`,title:`Info Card`,children:`Use appearance="info" for neutral context or tips (default).`}},_={name:`appearance: source`,tags:[`props`,`version:2.14`,`!version:2.8`],parameters:r({description:{story:`Use when embedding code or source snippets so the card blends with the page (e.g. with showDocSource).`}}),args:{appearance:`source`,title:`Source Card`,children:`Use appearance="source" for code/source blocks that should blend in.`}},v={name:`appearance: output`,tags:[`props`,`version:2.14`,`!version:2.8`],parameters:r({description:{story:`Use when showing results, success feedback, or generated output.`}}),args:{appearance:`output`,title:`Output Card`,children:`Use appearance="output" for results or success feedback.`}},y={name:`children: complex content`,tags:[`props`],parameters:r({description:{story:`StoryCard can contain complex React content, not just plain text.`}}),render:()=>(0,o.jsx)(n,{title:`Complex Content Example`,children:(0,o.jsxs)(`div`,{className:`rbsb:flex rbsb:flex-col rbsb:gap-2`,children:[(0,o.jsx)(`p`,{children:`This card contains multiple elements:`}),(0,o.jsxs)(`ul`,{className:`rbsb:list-disc rbsb:list-inside rbsb:ml-4`,children:[(0,o.jsx)(`li`,{children:`List item one`}),(0,o.jsx)(`li`,{children:`List item two`}),(0,o.jsx)(`li`,{children:`List item three`})]}),(0,o.jsx)(`button`,{type:`button`,className:`rbsb:bg-sky-500 rbsb:text-white rbsb:rounded rbsb:px-4 rbsb:py-2 rbsb:self-start`,children:`Action Button`})]})})},b={name:`className: custom`,tags:[`props`],parameters:r({description:{story:`StoryCard accepts a custom className prop to override or extend default styles.`}}),args:{title:`Custom Styled Card`,className:`rbsb:border-2 rbsb:border-sky-500`,children:`This card has custom border styling applied via className.`}},x={name:`className: function`,tags:[`props`],parameters:r({description:{story:`StoryCard accepts a function for className that receives the card state (including appearance) and default className.`}}),render:()=>(0,o.jsx)(n,{title:`Function-based className`,appearance:`warn`,className:({appearance:e,defaultClassName:t})=>`${t} rbsb:border-2 ${e===`warn`?`rbsb:border-yellow-500`:`rbsb:border-gray-500`} rbsb:shadow-lg`,children:`This card uses a function to compute className based on the card state.`})},S={name:`data-testid`,tags:[`props`,`unit`],parameters:r({description:{story:"StoryCard forwards the `data-testid` prop to the root section for testing and automation."}}),args:{"data-testid":`story-card-example`,title:`Card with data-testid`,children:`This card has data-testid="story-card-example" on the root section for testing.`},play:async({canvas:e})=>{await s(e.getByTestId(`story-card-example`)).toBeInTheDocument()}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'This is a basic story card with default info status.'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'title: provided',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'StoryCard with a title heading displayed above the content.'
    }
  }),
  args: {
    title: 'Card Title',
    children: 'This card has a title displayed as a heading.'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'status: error',
  tags: ['props', 'deprecated', 'version:2.14', '!version:2.8'],
  parameters: defineDocsParam({
    description: {
      story: 'Deprecated: use \`appearance: "error"\` instead.'
    }
  }),
  args: {
    status: 'error',
    title: 'Error Card',
    children: 'This card displays an error status with red background styling.'
  },
  decorators: [withStoryCard({
    appearance: 'warn'
  })]
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'status: warn',
  tags: ['props', 'deprecated', 'version:2.14', '!version:2.8'],
  parameters: defineDocsParam({
    description: {
      story: 'Deprecated: use \`appearance: "warn"\` instead.'
    }
  }),
  args: {
    status: 'warn',
    title: 'Warning Card',
    children: 'This card displays a warning status with yellow background styling.'
  },
  decorators: [withStoryCard({
    appearance: 'warn'
  })]
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'status: info',
  tags: ['props', 'deprecated', 'version:2.14', '!version:2.8'],
  parameters: defineDocsParam({
    description: {
      story: 'Deprecated: use \`appearance: "info"\` instead.'
    }
  }),
  args: {
    status: 'info',
    title: 'Info Card',
    children: 'This card displays an info status with blue background styling.'
  },
  decorators: [withStoryCard({
    appearance: 'warn'
  })]
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'appearance: error',
  tags: ['props', 'version:2.14', '!version:2.8'],
  parameters: defineDocsParam({
    description: {
      story: 'Use for failure states, validation errors, or critical messages that require immediate attention.'
    }
  }),
  args: {
    appearance: 'error',
    title: 'Error Card',
    children: 'Use appearance="error" when the card conveys a failure or critical message.'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'appearance: warn',
  tags: ['props', 'version:2.14', '!version:2.8'],
  parameters: defineDocsParam({
    description: {
      story: 'Use for cautions, deprecation notices, or non-blocking issues the user should be aware of.'
    }
  }),
  args: {
    appearance: 'warn',
    title: 'Warning Card',
    children: 'Use appearance="warn" when the card conveys a caution or deprecation.'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'appearance: info',
  tags: ['props', 'version:2.14', '!version:2.8'],
  parameters: defineDocsParam({
    description: {
      story: 'Use for general context, tips, or neutral information. Default when neither appearance nor status is set.'
    }
  }),
  args: {
    appearance: 'info',
    title: 'Info Card',
    children: 'Use appearance="info" for neutral context or tips (default).'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'appearance: source',
  tags: ['props', 'version:2.14', '!version:2.8'],
  parameters: defineDocsParam({
    description: {
      story: 'Use when embedding code or source snippets so the card blends with the page (e.g. with showDocSource).'
    }
  }),
  args: {
    appearance: 'source',
    title: 'Source Card',
    children: 'Use appearance="source" for code/source blocks that should blend in.'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'appearance: output',
  tags: ['props', 'version:2.14', '!version:2.8'],
  parameters: defineDocsParam({
    description: {
      story: 'Use when showing results, success feedback, or generated output.'
    }
  }),
  args: {
    appearance: 'output',
    title: 'Output Card',
    children: 'Use appearance="output" for results or success feedback.'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'children: complex content',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'StoryCard can contain complex React content, not just plain text.'
    }
  }),
  render: () => <StoryCard title="Complex Content Example">
            <div className="rbsb:flex rbsb:flex-col rbsb:gap-2">
                <p>This card contains multiple elements:</p>
                <ul className="rbsb:list-disc rbsb:list-inside rbsb:ml-4">
                    <li>List item one</li>
                    <li>List item two</li>
                    <li>List item three</li>
                </ul>
                <button type="button" className="rbsb:bg-sky-500 rbsb:text-white rbsb:rounded rbsb:px-4 rbsb:py-2 rbsb:self-start">
                    Action Button
                </button>
            </div>
        </StoryCard>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'className: custom',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'StoryCard accepts a custom className prop to override or extend default styles.'
    }
  }),
  args: {
    title: 'Custom Styled Card',
    className: 'rbsb:border-2 rbsb:border-sky-500',
    children: 'This card has custom border styling applied via className.'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'className: function',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'StoryCard accepts a function for className that receives the card state (including appearance) and default className.'
    }
  }),
  render: () => <StoryCard title="Function-based className" appearance="warn" className={({
    appearance,
    defaultClassName
  }) => {
    const borderColor = appearance === 'warn' ? 'rbsb:border-yellow-500' : 'rbsb:border-gray-500';
    return \`\${defaultClassName} rbsb:border-2 \${borderColor} rbsb:shadow-lg\`;
  }}>
            This card uses a function to compute className based on the card state.
        </StoryCard>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'data-testid',
  tags: ['props', 'unit'],
  parameters: defineDocsParam({
    description: {
      story: 'StoryCard forwards the \`data-testid\` prop to the root section for testing and automation.'
    }
  }),
  args: {
    'data-testid': 'story-card-example',
    title: 'Card with data-testid',
    children: 'This card has data-testid="story-card-example" on the root section for testing.'
  },
  play: async ({
    canvas
  }) => {
    const section = canvas.getByTestId('story-card-example');
    await expect(section).toBeInTheDocument();
  }
}`,...S.parameters?.docs?.source}}},C=[`BasicUsage`,`WithTitle`,`StatusError`,`StatusWarn`,`StatusInfo`,`AppearanceError`,`AppearanceWarn`,`AppearanceInfo`,`AppearanceSource`,`AppearanceOutput`,`WithComplexContent`,`CustomClassName`,`CustomClassNameFunction`,`DataTestId`]}))();export{m as AppearanceError,g as AppearanceInfo,v as AppearanceOutput,_ as AppearanceSource,h as AppearanceWarn,l as BasicUsage,b as CustomClassName,x as CustomClassNameFunction,S as DataTestId,d as StatusError,p as StatusInfo,f as StatusWarn,y as WithComplexContent,u as WithTitle,C as __namedExportsOrder,c as default};