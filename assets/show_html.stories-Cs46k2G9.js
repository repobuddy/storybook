import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-B066xLLY.js";import{n,r}from"./iframe-Bv4Jrxeb.js";import{P as i,_ as a,t as o,w as s}from"./src-Cjk9gBKT.js";var c,l,u,d,f,p,m;function h(){return(h=e((()=>{o(),n(),c=t(),l=r.meta({title:`components/ShowHtml`,tags:[`new`,`version:1.0`,`autodocs`],component:i,parameters:a({description:{component:["`ShowHtml` is a component that displays the HTML of a subject.","It uses `htmlfy` internally.",`You can pass additional config to customize the output.`].join(`<br/>`)}}),argTypes:{config:{control:{type:`object`}}}}),u=l.story({parameters:a({description:{story:'The `selector` prop is default to `[data-testid="subject"]`.'}}),decorators:[s()],render:()=>(0,c.jsxs)(`div`,{className:`rbsb:flex rbsb:flex-col rbsb:gap-4`,children:[(0,c.jsx)(`div`,{"data-testid":`subject`,children:(0,c.jsx)(`button`,{type:`button`,className:`rbsb:bg-sky-700 rbsb:text-white rbsb:rounded rbsb:p-2`,children:`This is a button`})}),(0,c.jsx)(i,{})]})}),d=l.story({render:()=>(0,c.jsx)(i,{selector:`not-exist`})}),f=l.story({tags:[`props`],render:()=>(0,c.jsx)(i,{className:`rbsb:bg-sky-700 rbsb:text-white rbsb:rounded rbsb:p-2`})}),p=l.story({tags:[`props`],render:()=>(0,c.jsx)(i,{style:{backgroundColor:`darkred`,color:`white`}})}),m=[`DefaultSubject`,`NoSubjectFound`,`CustomizeWithClassName`,`CustomizeWithStyle`],u.input.parameters={...u.input.parameters,docs:{...u.input.parameters?.docs,source:{originalSource:`meta.story({
  parameters: defineDocsParam({
    description: {
      story: 'The \`selector\` prop is default to \`[data-testid="subject"]\`.'
    }
  }),
  decorators: [withStoryCard()],
  render: () => <div className="rbsb:flex rbsb:flex-col rbsb:gap-4">
            <div data-testid="subject">
                <button type="button" className="rbsb:bg-sky-700 rbsb:text-white rbsb:rounded rbsb:p-2">
                    This is a button
                </button>
            </div>
            <ShowHtml />
        </div>
})`,...u.input.parameters?.docs?.source}}},d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
  render: () => <ShowHtml selector="not-exist" />
})`,...d.input.parameters?.docs?.source}}},f.input.parameters={...f.input.parameters,docs:{...f.input.parameters?.docs,source:{originalSource:`meta.story({
  tags: ['props'],
  render: () => <ShowHtml className="rbsb:bg-sky-700 rbsb:text-white rbsb:rounded rbsb:p-2" />
})`,...f.input.parameters?.docs?.source}}},p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
  tags: ['props'],
  render: () => <ShowHtml style={{
    backgroundColor: 'darkred',
    color: 'white'
  }} />
})`,...p.input.parameters?.docs?.source}}}})))()}h();export{f as CustomizeWithClassName,p as CustomizeWithStyle,u as DefaultSubject,d as NoSubjectFound,m as __namedExportsOrder};