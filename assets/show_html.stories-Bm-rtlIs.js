import{d as j,S as t,j as e}from"./iframe-7Yb0LowJ.js";const y={title:"components/ShowHtml",tags:["new","version:1.0","autodocs"],component:t,parameters:j({description:{component:["`ShowHtml` is a component that displays the HTML of a subject.","It uses `htmlfy` internally.","You can pass additional config to customize the output."].join("<br/>")}}),argTypes:{config:{control:{type:"object"}}}},s={parameters:j({description:{story:'The `selector` prop is default to `[data-testid="subject"]`.'}}),render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{"data-testid":"subject",children:e.jsx("button",{type:"button",className:"bg-sky-500 text-white rounded p-2",children:"This is a button"})}),e.jsx(t,{})]})},o={render:()=>e.jsx(t,{selector:"not-exist"})},r={tags:["props"],render:()=>e.jsx(t,{className:"bg-sky-500 text-white rounded p-2"})},a={tags:["props"],render:()=>e.jsx(t,{style:{backgroundColor:"red",color:"white"}})};var n,c,d;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'The \`selector\` prop is default to \`[data-testid="subject"]\`.'
    }
  }),
  render: () => <div className="flex flex-col gap-4">
            <div data-testid="subject">
                <button type="button" className="bg-sky-500 text-white rounded p-2">
                    This is a button
                </button>
            </div>
            <ShowHtml />
        </div>
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var i,p,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <ShowHtml selector="not-exist" />
}`,...(l=(p=o.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var u,m,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['props'],
  render: () => <ShowHtml className="bg-sky-500 text-white rounded p-2" />
}`,...(h=(m=r.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var b,x,g;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['props'],
  render: () => <ShowHtml style={{
    backgroundColor: 'red',
    color: 'white'
  }} />
}`,...(g=(x=a.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const f=["DefaultSubject","NoSubjectFound","CustomizeWithClassName","CustomizeWithStyle"];export{r as CustomizeWithClassName,a as CustomizeWithStyle,s as DefaultSubject,o as NoSubjectFound,f as __namedExportsOrder,y as default};
