import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{e as u}from"./index-CB-nUy61.js";import{s as I}from"./show_doc_source-CWgnZoeJ.js";function f(){return v()||_()||b()?!0:/StorybookTestRunner|jsdom|HappyDOM|HeadlessChrome/.test(window.navigator.userAgent)}function v(){return!globalThis.window}function _(){return!!globalThis.EdgeRuntime}function b(){return!!globalThis.__vitest_browser__}const a={isRunningInTest:f};function c(e){return function(i,R){return a.isRunningInTest()?e(i,R)??n.jsx(i,{}):n.jsx(i,{})}}const B={title:"testing/whenRunningInTest",tags:["new","version:1.0"],beforeEach:()=>{a.isRunningInTest=()=>!0},decorators:[I()],render:()=>n.jsx(n.Fragment,{}),experimental_afterEach:()=>{a.isRunningInTest=f}},t={decorators:[c(e=>n.jsxs("div",{children:[n.jsx("div",{children:"Decorator will be attached when running in test"}),n.jsx(e,{})]}))]},s={loaders:[()=>({state:{counter:0}})],decorators:[c((e,{loaded:{state:r}})=>{r.counter=1})],render:()=>n.jsx("div",{children:"When passing in a handler (which returns nothing), the story will be rendered"}),play:async({canvas:e,loaded:{state:r}})=>{await u(r.counter).toBe(1),await u(e.getByText(/When passing in a handler/)).toBeInTheDocument()}},o={tags:["unit"],beforeEach:()=>{a.isRunningInTest=()=>!1},decorators:[c(()=>{throw new Error("should not run")})],render:()=>n.jsx(n.Fragment,{children:"should not run decorator when not in test"})};var d,h,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  decorators: [whenRunningInTest(Story => <div>
                <div>Decorator will be attached when running in test</div>
                <Story />
            </div>)]
}`,...(l=(h=t.parameters)==null?void 0:h.docs)==null?void 0:l.source}}};var g,p,w;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(w=(p=s.parameters)==null?void 0:p.docs)==null?void 0:w.source}}};var m,x,T;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ['unit'],
  beforeEach: () => {
    ctx.isRunningInTest = () => false;
  },
  decorators: [whenRunningInTest(() => {
    throw new Error('should not run');
  })],
  render: () => <>should not run decorator when not in test</>
}`,...(T=(x=o.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};const D=["BasicUsage","AcceptHandler","SkipDecorator"];export{s as AcceptHandler,t as BasicUsage,o as SkipDecorator,D as __namedExportsOrder,B as default};
