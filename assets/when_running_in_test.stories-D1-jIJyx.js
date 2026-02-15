import{j as n}from"./iframe-B9TY5VBC.js";import{s as l}from"./show_doc_source-CynC5FnC.js";import"./preload-helper-PPVm8Dsz.js";function d(){return g()||p()||w()?!0:/StorybookTestRunner|jsdom|HappyDOM|HeadlessChrome/.test(window.navigator.userAgent)}function g(){return!globalThis.window}function p(){return!!globalThis.EdgeRuntime}function w(){return!!globalThis.__vitest_browser__}const a={isRunningInTest:d};function c(e){return function(i,h){return a.isRunningInTest()?e(i,h)??n.jsx(i,{}):n.jsx(i,{})}}const{expect:u}=__STORYBOOK_MODULE_TEST__,x={title:"testing/whenRunningInTest",tags:["new","version:1.0"],beforeEach:()=>{a.isRunningInTest=()=>!0},decorators:[l()],render:()=>n.jsx(n.Fragment,{}),afterEach:()=>{a.isRunningInTest=d}},r={decorators:[c(e=>n.jsxs("div",{children:[n.jsx("div",{children:"Decorator will be attached when running in test"}),n.jsx(e,{})]}))]},s={loaders:[()=>({state:{counter:0}})],decorators:[c((e,{loaded:{state:t}})=>{t.counter=1})],render:()=>n.jsx("div",{children:"When passing in a handler (which returns nothing), the story will be rendered"}),play:async({canvas:e,loaded:{state:t}})=>{await u(t.counter).toBe(1),await u(e.getByText(/When passing in a handler/)).toBeInTheDocument()}},o={tags:["unit"],beforeEach:()=>{a.isRunningInTest=()=>!1},decorators:[c(()=>{throw new Error("should not run")})],render:()=>n.jsx(n.Fragment,{children:"should not run decorator when not in test"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  decorators: [whenRunningInTest(Story => <div>
                <div>Decorator will be attached when running in test</div>
                <Story />
            </div>)]
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['unit'],
  beforeEach: () => {
    ctx.isRunningInTest = () => false;
  },
  decorators: [whenRunningInTest(() => {
    throw new Error('should not run');
  })],
  render: () => <>should not run decorator when not in test</>
}`,...o.parameters?.docs?.source}}};const _=["BasicUsage","AcceptHandler","SkipDecorator"];export{s as AcceptHandler,r as BasicUsage,o as SkipDecorator,_ as __namedExportsOrder,x as default};
