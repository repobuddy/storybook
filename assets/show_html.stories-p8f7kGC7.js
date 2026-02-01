import{j as e}from"./iframe-DpHjNuS4.js";import{S as s,w as c}from"./with_story_card-flwRQf2f.js";import{d as n}from"./define_docs_param-lmgaBKCF.js";import"./preload-helper-PPVm8Dsz.js";const m={title:"components/ShowHtml",tags:["new","version:1.0","autodocs"],component:s,parameters:n({description:{component:["`ShowHtml` is a component that displays the HTML of a subject.","It uses `htmlfy` internally.","You can pass additional config to customize the output."].join("<br/>")}}),argTypes:{config:{control:{type:"object"}}}},t={parameters:n({description:{story:'The `selector` prop is default to `[data-testid="subject"]`.'}}),decorators:[c()],render:()=>e.jsxs("div",{className:"rbsb:flex rbsb:flex-col rbsb:gap-4",children:[e.jsx("div",{"data-testid":"subject",children:e.jsx("button",{type:"button",className:"rbsb:bg-sky-500 rbsb:text-white rbsb:rounded rbsb:p-2",children:"This is a button"})}),e.jsx(s,{})]})},r={render:()=>e.jsx(s,{selector:"not-exist"})},o={tags:["props"],render:()=>e.jsx(s,{className:"rbsb:bg-sky-500 rbsb:text-white rbsb:rounded rbsb:p-2"})},a={tags:["props"],render:()=>e.jsx(s,{style:{backgroundColor:"red",color:"white"}})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <ShowHtml selector="not-exist" />
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['props'],
  render: () => <ShowHtml className="rbsb:bg-sky-500 rbsb:text-white rbsb:rounded rbsb:p-2" />
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['props'],
  render: () => <ShowHtml style={{
    backgroundColor: 'red',
    color: 'white'
  }} />
}`,...a.parameters?.docs?.source}}};const l=["DefaultSubject","NoSubjectFound","CustomizeWithClassName","CustomizeWithStyle"];export{o as CustomizeWithClassName,a as CustomizeWithStyle,t as DefaultSubject,r as NoSubjectFound,l as __namedExportsOrder,m as default};
