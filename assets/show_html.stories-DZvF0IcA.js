import"./components-DmejZTLj.js";import"./react-K5peCFg_.js";import"./react-dom-CYc0L8kE.js";import{t as e}from"./jsx-runtime-BUC2lftT.js";import{f as t,l as n,v as r}from"./src-CPfUkyQY.js";var i=e(),a={title:`components/ShowHtml`,tags:[`new`,`version:1.0`,`autodocs`],component:r,parameters:n({description:{component:["`ShowHtml` is a component that displays the HTML of a subject.","It uses `htmlfy` internally.",`You can pass additional config to customize the output.`].join(`<br/>`)}}),argTypes:{config:{control:{type:`object`}}}},o={parameters:n({description:{story:'The `selector` prop is default to `[data-testid="subject"]`.'}}),decorators:[t()],render:()=>(0,i.jsxs)(`div`,{className:`rbsb:flex rbsb:flex-col rbsb:gap-4`,children:[(0,i.jsx)(`div`,{"data-testid":`subject`,children:(0,i.jsx)(`button`,{type:`button`,className:`rbsb:bg-sky-500 rbsb:text-white rbsb:rounded rbsb:p-2`,children:`This is a button`})}),(0,i.jsx)(r,{})]})},s={render:()=>(0,i.jsx)(r,{selector:`not-exist`})},c={tags:[`props`],render:()=>(0,i.jsx)(r,{className:`rbsb:bg-sky-500 rbsb:text-white rbsb:rounded rbsb:p-2`})},l={tags:[`props`],render:()=>(0,i.jsx)(r,{style:{backgroundColor:`red`,color:`white`}})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'The \`selector\` prop is default to \`[data-testid="subject"]\`.'
    }
  }),
  decorators: [withStoryCard()],
  render: () => <div className="rbsb:flex rbsb:flex-col rbsb:gap-4">
            <div data-testid="subject">
                <button type="button" className="rbsb:bg-sky-500 rbsb:text-white rbsb:rounded rbsb:p-2">
                    This is a button
                </button>
            </div>
            <ShowHtml />
        </div>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <ShowHtml selector="not-exist" />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['props'],
  render: () => <ShowHtml className="rbsb:bg-sky-500 rbsb:text-white rbsb:rounded rbsb:p-2" />
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['props'],
  render: () => <ShowHtml style={{
    backgroundColor: 'red',
    color: 'white'
  }} />
}`,...l.parameters?.docs?.source}}};var u=[`DefaultSubject`,`NoSubjectFound`,`CustomizeWithClassName`,`CustomizeWithStyle`];export{c as CustomizeWithClassName,l as CustomizeWithStyle,o as DefaultSubject,s as NoSubjectFound,u as __namedExportsOrder,a as default};