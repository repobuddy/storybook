import{j as s}from"./iframe-DNG69xx-.js";import{a as l}from"./with_story_card-CeNaROhO.js";import{d as r}from"./define_docs_param-lmgaBKCF.js";import"./preload-helper-PPVm8Dsz.js";const f={title:"components/StoryCard",tags:["new","version:2.8","autodocs"],component:l,parameters:r({description:{component:["`StoryCard` is a card component that displays information with optional title and status styling.","It supports three status variants: `error`, `warn`, and `info` (default).","The component accepts a `title` prop for the heading and `children` for the card body content."].join("<br/>")}}),argTypes:{status:{control:{type:"select"},options:["error","warn","info"]},title:{control:{type:"text"}},className:{control:{type:"text"}}}},t={args:{children:"This is a basic story card with default info status."}},a={name:"title: provided",parameters:r({description:{story:"StoryCard with a title heading displayed above the content."}}),args:{title:"Card Title",children:"This card has a title displayed as a heading."}},e={name:"status: error",parameters:r({description:{story:"StoryCard with error status displays a red background."}}),args:{status:"error",title:"Error Card",children:"This card displays an error status with red background styling."}},n={name:"status: warn",parameters:r({description:{story:"StoryCard with warn status displays a yellow background."}}),args:{status:"warn",title:"Warning Card",children:"This card displays a warning status with yellow background styling."}},o={name:"status: info",parameters:r({description:{story:"StoryCard with info status displays a blue background. This is the default status."}}),args:{status:"info",title:"Info Card",children:"This card displays an info status with blue background styling."}},i={name:"children: complex content",parameters:r({description:{story:"StoryCard can contain complex React content, not just plain text."}}),render:()=>s.jsx(l,{title:"Complex Content Example",children:s.jsxs("div",{className:"rbsb:flex rbsb:flex-col rbsb:gap-2",children:[s.jsx("p",{children:"This card contains multiple elements:"}),s.jsxs("ul",{className:"rbsb:list-disc rbsb:list-inside rbsb:ml-4",children:[s.jsx("li",{children:"List item one"}),s.jsx("li",{children:"List item two"}),s.jsx("li",{children:"List item three"})]}),s.jsx("button",{type:"button",className:"rbsb:bg-sky-500 rbsb:text-white rbsb:rounded rbsb:px-4 rbsb:py-2 rbsb:self-start",children:"Action Button"})]})})},c={name:"className: custom",tags:["props"],parameters:r({description:{story:"StoryCard accepts a custom className prop to override or extend default styles."}}),args:{title:"Custom Styled Card",className:"rbsb:border-2 rbsb:border-sky-500",children:"This card has custom border styling applied via className."}},d={name:"className: function",tags:["props"],parameters:r({description:{story:"StoryCard accepts a function for className that receives the card state and default className."}}),render:()=>s.jsx(l,{title:"Function-based className",status:"warn",className:({status:m,defaultClassName:p})=>`${p} rbsb:border-2 ${m==="warn"?"rbsb:border-yellow-500":"rbsb:border-gray-500"} rbsb:shadow-lg`,children:"This card uses a function to compute className based on the card state."})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'This is a basic story card with default info status.'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'title: provided',
  parameters: defineDocsParam({
    description: {
      story: 'StoryCard with a title heading displayed above the content.'
    }
  }),
  args: {
    title: 'Card Title',
    children: 'This card has a title displayed as a heading.'
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'status: error',
  parameters: defineDocsParam({
    description: {
      story: 'StoryCard with error status displays a red background.'
    }
  }),
  args: {
    status: 'error',
    title: 'Error Card',
    children: 'This card displays an error status with red background styling.'
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'status: warn',
  parameters: defineDocsParam({
    description: {
      story: 'StoryCard with warn status displays a yellow background.'
    }
  }),
  args: {
    status: 'warn',
    title: 'Warning Card',
    children: 'This card displays a warning status with yellow background styling.'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'status: info',
  parameters: defineDocsParam({
    description: {
      story: 'StoryCard with info status displays a blue background. This is the default status.'
    }
  }),
  args: {
    status: 'info',
    title: 'Info Card',
    children: 'This card displays an info status with blue background styling.'
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'children: complex content',
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
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'className: function',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'StoryCard accepts a function for className that receives the card state and default className.'
    }
  }),
  render: () => <StoryCard title="Function-based className" status="warn" className={({
    status,
    defaultClassName
  }) => {
    const borderColor = status === 'warn' ? 'rbsb:border-yellow-500' : 'rbsb:border-gray-500';
    return \`\${defaultClassName} rbsb:border-2 \${borderColor} rbsb:shadow-lg\`;
  }}>
            This card uses a function to compute className based on the card state.
        </StoryCard>
}`,...d.parameters?.docs?.source}}};const C=["BasicUsage","WithTitle","StatusError","StatusWarn","StatusInfo","WithComplexContent","CustomClassName","CustomClassNameFunction"];export{t as BasicUsage,c as CustomClassName,d as CustomClassNameFunction,e as StatusError,o as StatusInfo,n as StatusWarn,i as WithComplexContent,a as WithTitle,C as __namedExportsOrder,f as default};
