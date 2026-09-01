import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-yBdeBQmp.js";import{n,r}from"./iframe-D1vhypr4.js";import{_ as i,k as a,t as o,w as s}from"./src-Dhw3iRbJ.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{o(),n(),c=t(),{expect:l}=__STORYBOOK_MODULE_TEST__,u=r.meta({title:`components/StoryCard`,tags:[`new`,`version:2.8`,`autodocs`],component:a,parameters:i({description:{component:["`StoryCard` is a card component that displays information with optional title and appearance styling.","It supports appearance variants: `error`, `warn`, `info` (default), `source`, and `output`.","The component accepts a `title` prop for the heading and `children` for the card body content."].join(`<br/>`)}}),argTypes:{appearance:{control:{type:`select`},options:[`error`,`warn`,`info`,`source`,`output`]},status:{control:{type:`select`},options:[`error`,`warn`,`info`]},title:{control:{type:`text`}},className:{control:{type:`text`}},"data-testid":{control:{type:`text`}}}}),d=u.story({args:{children:`This is a basic story card with default info status.`}}),f=u.story({name:`title: provided`,tags:[`props`],parameters:i({description:{story:`StoryCard with a title heading displayed above the content.`}}),args:{title:`Card Title`,children:`This card has a title displayed as a heading.`}}),p=u.story({name:`status: error`,tags:[`props`,`deprecated`,`version:2.14`,`!version:2.8`],parameters:i({description:{story:'Deprecated: use `appearance: "error"` instead.'}}),args:{status:`error`,title:`Error Card`,children:`This card displays an error status with red background styling.`},decorators:[s({appearance:`warn`})]}),m=u.story({name:`status: warn`,tags:[`props`,`deprecated`,`version:2.14`,`!version:2.8`],parameters:i({description:{story:'Deprecated: use `appearance: "warn"` instead.'}}),args:{status:`warn`,title:`Warning Card`,children:`This card displays a warning status with yellow background styling.`},decorators:[s({appearance:`warn`})]}),h=u.story({name:`status: info`,tags:[`props`,`deprecated`,`version:2.14`,`!version:2.8`],parameters:i({description:{story:'Deprecated: use `appearance: "info"` instead.'}}),args:{status:`info`,title:`Info Card`,children:`This card displays an info status with blue background styling.`},decorators:[s({appearance:`warn`})]}),g=u.story({name:`appearance: error`,tags:[`props`,`version:2.14`,`!version:2.8`],parameters:i({description:{story:`Use for failure states, validation errors, or critical messages that require immediate attention.`}}),args:{appearance:`error`,title:`Error Card`,children:`Use appearance="error" when the card conveys a failure or critical message.`}}),_=u.story({name:`appearance: warn`,tags:[`props`,`version:2.14`,`!version:2.8`],parameters:i({description:{story:`Use for cautions, deprecation notices, or non-blocking issues the user should be aware of.`}}),args:{appearance:`warn`,title:`Warning Card`,children:`Use appearance="warn" when the card conveys a caution or deprecation.`}}),v=u.story({name:`appearance: info`,tags:[`props`,`version:2.14`,`!version:2.8`],parameters:i({description:{story:`Use for general context, tips, or neutral information. Default when neither appearance nor status is set.`}}),args:{appearance:`info`,title:`Info Card`,children:`Use appearance="info" for neutral context or tips (default).`}}),y=u.story({name:`appearance: source`,tags:[`props`,`version:2.14`,`!version:2.8`],parameters:i({description:{story:`Use when embedding code or source snippets so the card blends with the page (e.g. with showSource).`}}),args:{appearance:`source`,title:`Source Card`,children:`Use appearance="source" for code/source blocks that should blend in.`}}),b=u.story({name:`appearance: output`,tags:[`props`,`version:2.14`,`!version:2.8`],parameters:i({description:{story:`Use when showing results, success feedback, or generated output.`}}),args:{appearance:`output`,title:`Output Card`,children:`Use appearance="output" for results or success feedback.`}}),x=u.story({name:`children: complex content`,tags:[`props`],parameters:i({description:{story:`StoryCard can contain complex React content, not just plain text.`}}),render:()=>(0,c.jsx)(a,{title:`Complex Content Example`,children:(0,c.jsxs)(`div`,{className:`rbsb:flex rbsb:flex-col rbsb:gap-2`,children:[(0,c.jsx)(`p`,{children:`This card contains multiple elements:`}),(0,c.jsxs)(`ul`,{className:`rbsb:list-disc rbsb:list-inside rbsb:ml-4`,children:[(0,c.jsx)(`li`,{children:`List item one`}),(0,c.jsx)(`li`,{children:`List item two`}),(0,c.jsx)(`li`,{children:`List item three`})]}),(0,c.jsx)(`button`,{type:`button`,className:`rbsb:bg-sky-700 rbsb:text-white rbsb:rounded rbsb:px-4 rbsb:py-2 rbsb:self-start`,children:`Action Button`})]})})}),S=u.story({name:`className: custom`,tags:[`props`],parameters:i({description:{story:`StoryCard accepts a custom className prop to override or extend default styles.`}}),args:{title:`Custom Styled Card`,className:`rbsb:border-2 rbsb:border-sky-500`,children:`This card has custom border styling applied via className.`}}),C=u.story({name:`className: function`,tags:[`props`],parameters:i({description:{story:`StoryCard accepts a function for className that receives the card state (including appearance) and default className.`}}),render:()=>(0,c.jsx)(a,{title:`Function-based className`,appearance:`warn`,className:({appearance:e,defaultClassName:t})=>`${t} rbsb:border-2 ${e===`warn`?`rbsb:border-yellow-500`:`rbsb:border-gray-500`} rbsb:shadow-lg`,children:`This card uses a function to compute className based on the card state.`})}),w=u.story({name:`data-testid`,tags:[`props`,`unit`],parameters:i({description:{story:"StoryCard forwards the `data-testid` prop to the root section for testing and automation."}}),args:{"data-testid":`story-card-example`,title:`Card with data-testid`,children:`This card has data-testid="story-card-example" on the root section for testing.`},play:async({canvas:e})=>{let t=e.getByTestId(`story-card-example`);await l(t).toBeInTheDocument()}}),d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    children: 'This is a basic story card with default info status.'
  }
})`,...d.input.parameters?.docs?.source}}},f.input.parameters={...f.input.parameters,docs:{...f.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...f.input.parameters?.docs?.source}}},p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...p.input.parameters?.docs?.source}}},m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...m.input.parameters?.docs?.source}}},h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...h.input.parameters?.docs?.source}}},g.input.parameters={...g.input.parameters,docs:{...g.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...g.input.parameters?.docs?.source}}},_.input.parameters={..._.input.parameters,docs:{..._.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,..._.input.parameters?.docs?.source}}},v.input.parameters={...v.input.parameters,docs:{...v.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...v.input.parameters?.docs?.source}}},y.input.parameters={...y.input.parameters,docs:{...y.input.parameters?.docs,source:{originalSource:`meta.story({
  name: 'appearance: source',
  tags: ['props', 'version:2.14', '!version:2.8'],
  parameters: defineDocsParam({
    description: {
      story: 'Use when embedding code or source snippets so the card blends with the page (e.g. with showSource).'
    }
  }),
  args: {
    appearance: 'source',
    title: 'Source Card',
    children: 'Use appearance="source" for code/source blocks that should blend in.'
  }
})`,...y.input.parameters?.docs?.source}}},b.input.parameters={...b.input.parameters,docs:{...b.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...b.input.parameters?.docs?.source}}},x.input.parameters={...x.input.parameters,docs:{...x.input.parameters?.docs,source:{originalSource:`meta.story({
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
                <button type="button" className="rbsb:bg-sky-700 rbsb:text-white rbsb:rounded rbsb:px-4 rbsb:py-2 rbsb:self-start">
                    Action Button
                </button>
            </div>
        </StoryCard>
})`,...x.input.parameters?.docs?.source}}},S.input.parameters={...S.input.parameters,docs:{...S.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...S.input.parameters?.docs?.source}}},C.input.parameters={...C.input.parameters,docs:{...C.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...C.input.parameters?.docs?.source}}},w.input.parameters={...w.input.parameters,docs:{...w.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...w.input.parameters?.docs?.source}}},T=[`BasicUsage`,`WithTitle`,`StatusError`,`StatusWarn`,`StatusInfo`,`AppearanceError`,`AppearanceWarn`,`AppearanceInfo`,`AppearanceSource`,`AppearanceOutput`,`WithComplexContent`,`CustomClassName`,`CustomClassNameFunction`,`DataTestId`]})))()}E();export{g as AppearanceError,v as AppearanceInfo,b as AppearanceOutput,y as AppearanceSource,_ as AppearanceWarn,d as BasicUsage,S as CustomClassName,C as CustomClassNameFunction,w as DataTestId,p as StatusError,h as StatusInfo,m as StatusWarn,x as WithComplexContent,f as WithTitle,T as __namedExportsOrder};