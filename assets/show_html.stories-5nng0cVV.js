import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-DC6t-S6Q.js";import{d as n,m as r,t as i,x as a}from"./src-DwHIYPmP.js";var o,s,c,l,u,d,f;e((()=>{i(),o=t(),s={title:`components/ShowHtml`,tags:[`new`,`version:1.0`,`autodocs`],component:a,parameters:n({description:{component:["`ShowHtml` is a component that displays the HTML of a subject.","It uses `htmlfy` internally.",`You can pass additional config to customize the output.`].join(`<br/>`)}}),argTypes:{config:{control:{type:`object`}}}},c={parameters:n({description:{story:'The `selector` prop is default to `[data-testid="subject"]`.'}}),decorators:[r()],render:()=>(0,o.jsxs)(`div`,{className:`rbsb:flex rbsb:flex-col rbsb:gap-4`,children:[(0,o.jsx)(`div`,{"data-testid":`subject`,children:(0,o.jsx)(`button`,{type:`button`,className:`rbsb:bg-sky-500 rbsb:text-white rbsb:rounded rbsb:p-2`,children:`This is a button`})}),(0,o.jsx)(a,{})]})},l={render:()=>(0,o.jsx)(a,{selector:`not-exist`})},u={tags:[`props`],render:()=>(0,o.jsx)(a,{className:`rbsb:bg-sky-500 rbsb:text-white rbsb:rounded rbsb:p-2`})},d={tags:[`props`],render:()=>(0,o.jsx)(a,{style:{backgroundColor:`red`,color:`white`}})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <ShowHtml selector="not-exist" />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['props'],
  render: () => <ShowHtml className="rbsb:bg-sky-500 rbsb:text-white rbsb:rounded rbsb:p-2" />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['props'],
  render: () => <ShowHtml style={{
    backgroundColor: 'red',
    color: 'white'
  }} />
}`,...d.parameters?.docs?.source}}},f=[`DefaultSubject`,`NoSubjectFound`,`CustomizeWithClassName`,`CustomizeWithStyle`]}))();export{u as CustomizeWithClassName,d as CustomizeWithStyle,c as DefaultSubject,l as NoSubjectFound,f as __namedExportsOrder,s as default};