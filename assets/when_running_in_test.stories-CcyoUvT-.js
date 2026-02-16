import{j as n}from"./iframe-CgJZ0YZZ.js";import{s as d}from"./show_doc_source-DUPdG6VB.js";import{w as i,i as u,c as o}from"./when_running_in_test-CSXLbGSw.js";import"./preload-helper-PPVm8Dsz.js";const{expect:c}=__STORYBOOK_MODULE_TEST__,w={title:"testing/whenRunningInTest",tags:["new","version:1.0"],beforeEach:()=>{o.isRunningInTest=()=>!0},decorators:[d()],render:()=>n.jsx(n.Fragment,{}),afterEach:()=>{o.isRunningInTest=u}},r={decorators:[i(e=>n.jsxs("div",{children:[n.jsx("div",{children:"Decorator will be attached when running in test"}),n.jsx(e,{})]}))]},t={loaders:[()=>({state:{counter:0}})],decorators:[i((e,{loaded:{state:a}})=>{a.counter=1})],render:()=>n.jsx("div",{children:"When passing in a handler (which returns nothing), the story will be rendered"}),play:async({canvas:e,loaded:{state:a}})=>{await c(a.counter).toBe(1),await c(e.getByText(/When passing in a handler/)).toBeInTheDocument()}},s={tags:["unit"],beforeEach:()=>{o.isRunningInTest=()=>!1},decorators:[i(()=>{throw new Error("should not run")})],render:()=>n.jsx(n.Fragment,{children:"should not run decorator when not in test"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  decorators: [whenRunningInTest(Story => <div>
                <div>Decorator will be attached when running in test</div>
                <Story />
            </div>)]
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  loaders: [() => ({
    state: {
      counter: 0
    }
  })],
  decorators: [whenRunningInTest((_, {
    loaded: {
      state
    }
  }) => {
    state.counter = 1;
  })],
  render: () => <div>When passing in a handler (which returns nothing), the story will be rendered</div>,
  play: async ({
    canvas,
    loaded: {
      state
    }
  }) => {
    await expect(state.counter).toBe(1);
    await expect(canvas.getByText(/When passing in a handler/)).toBeInTheDocument();
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['unit'],
  beforeEach: () => {
    ctx.isRunningInTest = () => false;
  },
  decorators: [whenRunningInTest(() => {
    throw new Error('should not run');
  })],
  render: () => <>should not run decorator when not in test</>
}`,...s.parameters?.docs?.source}}};const m=["BasicUsage","AcceptHandler","SkipDecorator"];export{t as AcceptHandler,r as BasicUsage,s as SkipDecorator,m as __namedExportsOrder,w as default};
