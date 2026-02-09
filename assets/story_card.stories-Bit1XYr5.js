import{j as r}from"./iframe-CKNOMXmu.js";import{a as b}from"./show_doc_source-BDCfRq_X.js";import{w as g}from"./with_story_card-0cUURb6t.js";import{d as e}from"./define_docs_param-lmgaBKCF.js";import"./preload-helper-PPVm8Dsz.js";const D={title:"components/StoryCard",tags:["new","version:2.8","autodocs"],component:b,parameters:e({description:{component:["`StoryCard` is a card component that displays information with optional title and appearance styling.","It supports appearance variants: `error`, `warn`, `info` (default), `source`, and `output`.","The component accepts a `title` prop for the heading and `children` for the card body content."].join("<br/>")}}),argTypes:{appearance:{control:{type:"select"},options:["error","warn","info","source","output"]},status:{control:{type:"select"},options:["error","warn","info"]},title:{control:{type:"text"}},className:{control:{type:"text"}}}},a={args:{children:"This is a basic story card with default info status."}},s={name:"title: provided",tags:["props"],parameters:e({description:{story:"StoryCard with a title heading displayed above the content."}}),args:{title:"Card Title",children:"This card has a title displayed as a heading."}},t={name:"status: error",tags:["props","deprecated","version:2.14","!version:2.8"],parameters:e({description:{story:'Deprecated: use `appearance: "error"` instead.'}}),args:{status:"error",title:"Error Card",children:"This card displays an error status with red background styling."},decorators:[g({appearance:"warn"})]},n={name:"status: warn",tags:["props","deprecated","version:2.14","!version:2.8"],parameters:e({description:{story:'Deprecated: use `appearance: "warn"` instead.'}}),args:{status:"warn",title:"Warning Card",children:"This card displays a warning status with yellow background styling."},decorators:[g({appearance:"warn"})]},o={name:"status: info",tags:["props","deprecated","version:2.14","!version:2.8"],parameters:e({description:{story:'Deprecated: use `appearance: "info"` instead.'}}),args:{status:"info",title:"Info Card",children:"This card displays an info status with blue background styling."},decorators:[g({appearance:"warn"})]},c={name:"appearance: error",tags:["props","version:2.14","!version:2.8"],parameters:e({description:{story:"Use for failure states, validation errors, or critical messages that require immediate attention."}}),args:{appearance:"error",title:"Error Card",children:'Use appearance="error" when the card conveys a failure or critical message.'}},i={name:"appearance: warn",tags:["props","version:2.14","!version:2.8"],parameters:e({description:{story:"Use for cautions, deprecation notices, or non-blocking issues the user should be aware of."}}),args:{appearance:"warn",title:"Warning Card",children:'Use appearance="warn" when the card conveys a caution or deprecation.'}},p={name:"appearance: info",tags:["props","version:2.14","!version:2.8"],parameters:e({description:{story:"Use for general context, tips, or neutral information. Default when neither appearance nor status is set."}}),args:{appearance:"info",title:"Info Card",children:'Use appearance="info" for neutral context or tips (default).'}},d={name:"appearance: source",tags:["props","version:2.14","!version:2.8"],parameters:e({description:{story:"Use when embedding code or source snippets so the card blends with the page (e.g. with showDocSource)."}}),args:{appearance:"source",title:"Source Card",children:'Use appearance="source" for code/source blocks that should blend in.'}},l={name:"appearance: output",tags:["props","version:2.14","!version:2.8"],parameters:e({description:{story:"Use when showing results, success feedback, or generated output."}}),args:{appearance:"output",title:"Output Card",children:'Use appearance="output" for results or success feedback.'}},u={name:"children: complex content",tags:["props"],parameters:e({description:{story:"StoryCard can contain complex React content, not just plain text."}}),render:()=>r.jsx(b,{title:"Complex Content Example",children:r.jsxs("div",{className:"rbsb:flex rbsb:flex-col rbsb:gap-2",children:[r.jsx("p",{children:"This card contains multiple elements:"}),r.jsxs("ul",{className:"rbsb:list-disc rbsb:list-inside rbsb:ml-4",children:[r.jsx("li",{children:"List item one"}),r.jsx("li",{children:"List item two"}),r.jsx("li",{children:"List item three"})]}),r.jsx("button",{type:"button",className:"rbsb:bg-sky-500 rbsb:text-white rbsb:rounded rbsb:px-4 rbsb:py-2 rbsb:self-start",children:"Action Button"})]})})},m={name:"className: custom",tags:["props"],parameters:e({description:{story:"StoryCard accepts a custom className prop to override or extend default styles."}}),args:{title:"Custom Styled Card",className:"rbsb:border-2 rbsb:border-sky-500",children:"This card has custom border styling applied via className."}},h={name:"className: function",tags:["props"],parameters:e({description:{story:"StoryCard accepts a function for className that receives the card state (including appearance) and default className."}}),render:()=>r.jsx(b,{title:"Function-based className",appearance:"warn",className:({appearance:f,defaultClassName:y})=>`${y} rbsb:border-2 ${f==="warn"?"rbsb:border-yellow-500":"rbsb:border-gray-500"} rbsb:shadow-lg`,children:"This card uses a function to compute className based on the card state."})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'This is a basic story card with default info status.'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const T=["BasicUsage","WithTitle","StatusError","StatusWarn","StatusInfo","AppearanceError","AppearanceWarn","AppearanceInfo","AppearanceSource","AppearanceOutput","WithComplexContent","CustomClassName","CustomClassNameFunction"];export{c as AppearanceError,p as AppearanceInfo,l as AppearanceOutput,d as AppearanceSource,i as AppearanceWarn,a as BasicUsage,m as CustomClassName,h as CustomClassNameFunction,t as StatusError,o as StatusInfo,n as StatusWarn,u as WithComplexContent,s as WithTitle,T as __namedExportsOrder,D as default};
