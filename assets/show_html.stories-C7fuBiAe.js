import{j as e}from"./iframe-CKjSMc0F.js";import{S as t}from"./with_story_card-CnEAkYrX.js";import{d as n}from"./define_docs_param-lmgaBKCF.js";import"./preload-helper-PPVm8Dsz.js";const m={title:"components/ShowHtml",tags:["new","version:1.0","autodocs"],component:t,parameters:n({description:{component:["`ShowHtml` is a component that displays the HTML of a subject.","It uses `htmlfy` internally.","You can pass additional config to customize the output."].join("<br/>")}}),argTypes:{config:{control:{type:"object"}}}},s={parameters:n({description:{story:'The `selector` prop is default to `[data-testid="subject"]`.'}}),render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{"data-testid":"subject",children:e.jsx("button",{type:"button",className:"bg-sky-500 text-white rounded p-2",children:"This is a button"})}),e.jsx(t,{})]})},o={render:()=>e.jsx(t,{selector:"not-exist"})},r={tags:["props"],render:()=>e.jsx(t,{className:"bg-sky-500 text-white rounded p-2"})},a={tags:["props"],render:()=>e.jsx(t,{style:{backgroundColor:"red",color:"white"}})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <ShowHtml selector="not-exist" />
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['props'],
  render: () => <ShowHtml className="bg-sky-500 text-white rounded p-2" />
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['props'],
  render: () => <ShowHtml style={{
    backgroundColor: 'red',
    color: 'white'
  }} />
}`,...a.parameters?.docs?.source}}};const l=["DefaultSubject","NoSubjectFound","CustomizeWithClassName","CustomizeWithStyle"];export{r as CustomizeWithClassName,a as CustomizeWithStyle,s as DefaultSubject,o as NoSubjectFound,l as __namedExportsOrder,m as default};
