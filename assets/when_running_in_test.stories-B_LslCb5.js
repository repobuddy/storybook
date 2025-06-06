import{j as n}from"./iframe-DaILpW6B.js";import{s as f}from"./show_doc_source-Bjzrey6r.js";function x(){return I()||v()||b()?!0:/StorybookTestRunner|jsdom|HappyDOM|HeadlessChrome/.test(window.navigator.userAgent)}function I(){return!globalThis.window}function v(){return!!globalThis.EdgeRuntime}function b(){return!!globalThis.__vitest_browser__}const a={isRunningInTest:x};function c(e){return function(i,_){return a.isRunningInTest()?e(i,_)??n.jsx(i,{}):n.jsx(i,{})}}const{expect:u}=__STORYBOOK_MODULE_TEST__,y={title:"testing/whenRunningInTest",tags:["new","version:1.0"],beforeEach:()=>{a.isRunningInTest=()=>!0},decorators:[f()],render:()=>n.jsx(n.Fragment,{}),afterEach:()=>{a.isRunningInTest=x}},r={decorators:[c(e=>n.jsxs("div",{children:[n.jsx("div",{children:"Decorator will be attached when running in test"}),n.jsx(e,{})]}))]},s={loaders:[()=>({state:{counter:0}})],decorators:[c((e,{loaded:{state:t}})=>{t.counter=1})],render:()=>n.jsx("div",{children:"When passing in a handler (which returns nothing), the story will be rendered"}),play:async({canvas:e,loaded:{state:t}})=>{await u(t.counter).toBe(1),await u(e.getByText(/When passing in a handler/)).toBeInTheDocument()}},o={tags:["unit"],beforeEach:()=>{a.isRunningInTest=()=>!1},decorators:[c(()=>{throw new Error("should not run")})],render:()=>n.jsx(n.Fragment,{children:"should not run decorator when not in test"})};var d,h,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  decorators: [whenRunningInTest(Story => <div>
                <div>Decorator will be attached when running in test</div>
                <Story />
            </div>)]
}`,...(l=(h=r.parameters)==null?void 0:h.docs)==null?void 0:l.source}}};var g,p,w;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(w=(p=s.parameters)==null?void 0:p.docs)==null?void 0:w.source}}};var m,T,R;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ['unit'],
  beforeEach: () => {
    ctx.isRunningInTest = () => false;
  },
  decorators: [whenRunningInTest(() => {
    throw new Error('should not run');
  })],
  render: () => <>should not run decorator when not in test</>
}`,...(R=(T=o.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};const S=["BasicUsage","AcceptHandler","SkipDecorator"];export{s as AcceptHandler,r as BasicUsage,o as SkipDecorator,S as __namedExportsOrder,y as default};
