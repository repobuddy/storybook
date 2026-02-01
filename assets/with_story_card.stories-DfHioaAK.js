import{j as n}from"./iframe-gl-NyKrb.js";import{w as s,t as h}from"./with_story_card-BcmflNrM.js";import{d as a}from"./define_docs_param-lmgaBKCF.js";import"./preload-helper-PPVm8Dsz.js";const{expect:r}=__STORYBOOK_MODULE_TEST__,v={title:"decorators/withStoryCard",tags:["autodocs"],parameters:a({description:{component:"The `withStoryCard` decorator adds a card section to should additional information about the story. It is hidden when the story is shown in docs."}}),render:()=>n.jsx("p",{children:"This is the story content"})},o={tags:["usecase","snapshot"],decorators:[s(),s({content:n.jsxs("p",{children:["When component description is defined and no ",n.jsx("code",{children:"`content`"})," are provided, the component description will be shown."]})})],play:async({canvasElement:e})=>{const t=e.querySelectorAll("section");await r(t).toHaveLength(2)}},c={tags:["usecase","snapshot"],parameters:a({description:{story:"This is story description"}}),decorators:[s(),s({content:n.jsxs("p",{children:["When story description is provided and no ",n.jsx("code",{children:"`content`"})," are provided, story description will be shown instead of component description."]})})],play:async({canvasElement:e})=>{const t=e.querySelectorAll("section");await r(t).toHaveLength(2)}},i={name:"content: ReactNode",tags:["props"],decorators:[s({content:n.jsx("p",{children:"Custom message."})})],render:()=>n.jsxs("p",{children:["When providing a custom ",n.jsx("code",{children:"`content`"})," value, it will be used over component andy story description."]}),play:async({canvas:e})=>{const t=e.getByText("Custom message.");await r(t).toBeInTheDocument()}},d={name:"title: ReactNode",tags:["props"],parameters:a({description:{story:"The decorator can be used with a title."}}),decorators:[s({title:"Story Card Title"})],play:async({canvas:e})=>{const t=e.getByText("Story Card Title");await r(t).toBeInTheDocument()}},l={name:"status: info",tags:["props"],parameters:a({description:{story:"Info status displays with a blue background."}}),decorators:[s({title:"Info Card",status:"info"})],play:async({canvasElement:e})=>{const t=e.querySelector("section");await r(t).toHaveClass("rbsb:bg-sky-100","rbsb:dark:bg-sky-900")}},p={name:"status: warn",tags:["props"],parameters:a({description:{story:"Warn status displays with a yellow background."}}),decorators:[s({title:"Warning Card",status:"warn"})],play:async({canvasElement:e})=>{const t=e.querySelector("section");await r(t).toHaveClass("rbsb:bg-yellow-100","rbsb:dark:bg-yellow-900")}},m={name:"status: error",tags:["props"],parameters:a({description:{story:"Error status displays with a red background."}}),decorators:[s({title:"Error Card",status:"error"})],play:async({canvasElement:e})=>{const t=e.querySelector("section");await r(t).toHaveClass("rbsb:bg-red-100","rbsb:dark:bg-red-900")}},u={name:"className: string",tags:["props"],parameters:a({description:{story:"The card can be customized with additional className."}}),decorators:[s({title:"Custom Styled Card",status:"info",className:"rbsb:border-2 rbsb:border-blue-500 rbsb:shadow-lg"})],play:async({canvasElement:e})=>{const t=e.querySelector("section");await r(t).toHaveClass("rbsb:border-2 rbsb:border-blue-500 rbsb:shadow-lg")}},b={name:"className: function",tags:["props"],parameters:a({description:{story:"The card can be customized with a className function that receives the `status` and `defaultClassName`. The function should return the final className string."}}),decorators:[s({title:"Function-Based Styling",status:"info",className:({status:e,defaultClassName:t})=>h(t,{info:"rbsb:bg-green-200 rbsb:dark:bg-green-800",warn:"rbsb:bg-amber-300 rbsb:dark:bg-amber-900",error:"rbsb:bg-rose-400 rbsb:dark:bg-rose-900"}[e])})],render:()=>n.jsx("pre",{children:"className: ({ status, defaultClassName }) => string"}),play:async({canvasElement:e})=>{const t=e.querySelector("section");await r(t).toHaveClass("rbsb:bg-green-200","rbsb:dark:bg-green-800")}},y={tags:["edgecase"],parameters:a({description:{component:""}}),decorators:[s()],render:()=>n.jsx("p",{children:"When there are no component or story description, and the `withStoryCard` call does not provide `title` or `children`, it will not render anything."}),play:async({canvasElement:e})=>{const t=e.querySelector("section");await r(t).not.toBeInTheDocument()}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    const sections = canvasElement.querySelectorAll('section');
    await expect(sections).toHaveLength(2);
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
    const sections = canvasElement.querySelectorAll('section');
    await expect(sections).toHaveLength(2);
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
    const message = canvas.getByText('Custom message.');
    await expect(message).toBeInTheDocument();
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
    const title = canvas.getByText('Story Card Title');
    await expect(title).toBeInTheDocument();
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'status: info',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'Info status displays with a blue background.'
    }
  }),
  decorators: [withStoryCard({
    title: 'Info Card',
    status: 'info'
  })],
  play: async ({
    canvasElement
  }) => {
    const section = canvasElement.querySelector('section');
    await expect(section).toHaveClass('rbsb:bg-sky-100', 'rbsb:dark:bg-sky-900');
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'status: warn',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'Warn status displays with a yellow background.'
    }
  }),
  decorators: [withStoryCard({
    title: 'Warning Card',
    status: 'warn'
  })],
  play: async ({
    canvasElement
  }) => {
    const section = canvasElement.querySelector('section');
    await expect(section).toHaveClass('rbsb:bg-yellow-100', 'rbsb:dark:bg-yellow-900');
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'status: error',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'Error status displays with a red background.'
    }
  }),
  decorators: [withStoryCard({
    title: 'Error Card',
    status: 'error'
  })],
  play: async ({
    canvasElement
  }) => {
    const section = canvasElement.querySelector('section');
    await expect(section).toHaveClass('rbsb:bg-red-100', 'rbsb:dark:bg-red-900');
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
    const section = canvasElement.querySelector('section');
    await expect(section).toHaveClass('rbsb:border-2 rbsb:border-blue-500 rbsb:shadow-lg');
  }
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'className: function',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'The card can be customized with a className function that receives the \`status\` and \`defaultClassName\`. The function should return the final className string.'
    }
  }),
  decorators: [withStoryCard({
    title: 'Function-Based Styling',
    status: 'info',
    className: ({
      status,
      defaultClassName
    }) => twMerge(defaultClassName, {
      info: 'rbsb:bg-green-200 rbsb:dark:bg-green-800',
      warn: 'rbsb:bg-amber-300 rbsb:dark:bg-amber-900',
      error: 'rbsb:bg-rose-400 rbsb:dark:bg-rose-900'
    }[status!])
  })],
  render: () => <pre>{'className: ({ status, defaultClassName }) => string'}</pre>,
  play: async ({
    canvasElement
  }) => {
    const section = canvasElement.querySelector('section');
    await expect(section).toHaveClass('rbsb:bg-green-200', 'rbsb:dark:bg-green-800');
  }
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
    const section = canvasElement.querySelector('section');
    await expect(section).not.toBeInTheDocument();
  }
}`,...y.parameters?.docs?.source}}};const f=["ShowsComponentDescription","ShowsStoryDescription","WithContent","WithTitle","WithInfoStatus","WithWarnStatus","WithErrorStatus","WithCustomClassName","WithClassNameFunction","HiddenWithoutMessage"];export{y as HiddenWithoutMessage,o as ShowsComponentDescription,c as ShowsStoryDescription,b as WithClassNameFunction,i as WithContent,u as WithCustomClassName,m as WithErrorStatus,l as WithInfoStatus,d as WithTitle,p as WithWarnStatus,f as __namedExportsOrder,v as default};
