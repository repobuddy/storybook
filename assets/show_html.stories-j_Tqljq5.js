import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as t}from"./show_html-C2QZHDjw.js";import{d as j}from"./define_docs_param-lmgaBKCF.js";import"./index-D4lIrffr.js";const N={title:"components/ShowHtml",tags:["new","version:1.0","autodocs"],component:t,parameters:j({description:{component:["`ShowHtml` is a component that displays the HTML of a subject.","It uses `htmlfy` internally.","You can pass additional config to customize the output."].join("<br/>")}}),argTypes:{config:{control:{type:"object"}}}},s={parameters:j({description:{story:'The `selector` prop is default to `[data-testid="subject"]`.'}}),render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{"data-testid":"subject",children:e.jsx("button",{type:"button",className:"bg-sky-500 text-white rounded p-2",children:"This is a button"})}),e.jsx(t,{})]})},o={render:()=>e.jsx(t,{selector:"not-exist"})},r={tags:["props"],render:()=>e.jsx(t,{className:"bg-sky-500 text-white rounded p-2"})},a={tags:["props"],render:()=>e.jsx(t,{style:{backgroundColor:"red",color:"white"}})};var n,c,i;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(c=s.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var d,p,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <ShowHtml selector="not-exist" />
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var l,u,h;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  tags: ['props'],
  render: () => <ShowHtml className="bg-sky-500 text-white rounded p-2" />
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var b,x,g;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['props'],
  render: () => <ShowHtml style={{
    backgroundColor: 'red',
    color: 'white'
  }} />
}`,...(g=(x=a.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const C=["DefaultSubject","NoSubjectFound","CustomizeWithClassName","CustomizeWithStyle"];export{r as CustomizeWithClassName,a as CustomizeWithStyle,s as DefaultSubject,o as NoSubjectFound,C as __namedExportsOrder,N as default};
