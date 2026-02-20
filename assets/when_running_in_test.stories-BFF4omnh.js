import{j as n}from"./iframe-oVSfpA7f.js";import{s as u,i as h}from"./show_doc_source-CsrnILCa.js";import{w as c,c as o}from"./when_running_in_test-RYaPb5aa.js";import"./preload-helper-PPVm8Dsz.js";const{expect:i}=__STORYBOOK_MODULE_TEST__,m={title:"testing/whenRunningInTest",tags:["new","version:1.0"],beforeEach:()=>{o.isRunningInTest=()=>!0},decorators:[u()],render:()=>n.jsx(n.Fragment,{}),afterEach:()=>{o.isRunningInTest=h}},t={decorators:[c(e=>n.jsxs("div",{children:[n.jsx("div",{children:"Decorator will be attached when running in test"}),n.jsx(e,{})]}))]},r={loaders:[()=>({state:{counter:0}})],decorators:[c((e,{loaded:{state:a}})=>{a.counter=1})],render:()=>n.jsx("div",{children:"When passing in a handler (which returns nothing), the story will be rendered"}),play:async e=>{const{canvas:a,loaded:{state:d}}=e;await i(d.counter).toBe(1),await i(a.getByText(/When passing in a handler/)).toBeInTheDocument()}},s={tags:["unit"],beforeEach:()=>{o.isRunningInTest=()=>!1},decorators:[c(()=>{throw new Error("should not run")})],render:()=>n.jsx(n.Fragment,{children:"should not run decorator when not in test"})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  decorators: [whenRunningInTest(Story => <div>
                <div>Decorator will be attached when running in test</div>
                <Story />
            </div>)]
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
  play: async ctx => {
    const {
      canvas,
      loaded: {
        state
      }
    } = ctx;
    await expect(state.counter).toBe(1);
    await expect(canvas.getByText(/When passing in a handler/)).toBeInTheDocument();
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['unit'],
  beforeEach: () => {
    ctx.isRunningInTest = () => false;
  },
  decorators: [whenRunningInTest(() => {
    throw new Error('should not run');
  })],
  render: () => <>should not run decorator when not in test</>
}`,...s.parameters?.docs?.source}}};const x=["BasicUsage","AcceptHandler","SkipDecorator"];export{r as AcceptHandler,t as BasicUsage,s as SkipDecorator,x as __namedExportsOrder,m as default};
