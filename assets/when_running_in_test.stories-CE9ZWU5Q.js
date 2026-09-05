import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-B066xLLY.js";import{n,r}from"./iframe-DFuO2ShR.js";import{O as i,a,i as o,o as s,t as c}from"./src-Cjk9gBKT.js";function l(){return u()||d()||f()?!0:/StorybookTestRunner|jsdom|HappyDOM|HeadlessChrome/.test(window.navigator.userAgent)}function u(){return!globalThis.window}function d(){return!!globalThis.EdgeRuntime}function f(){let e=globalThis;return!!e.__vitest_browser__||!!e.__vitest_worker__}var p,m,h,g,_,v,y;function b(){return(b=e((()=>{c(),n(),s(),p=t(),{expect:m}=__STORYBOOK_MODULE_TEST__,h=r.meta({title:`testing/whenRunningInTest`,tags:[`new`,`version:1.0`],beforeEach:()=>{a.isRunningInTest=()=>!0},decorators:[i()],render:()=>(0,p.jsx)(p.Fragment,{}),afterEach:()=>{a.isRunningInTest=l}}),g=h.story({decorators:[o(e=>(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`div`,{children:`Decorator will be attached when running in test`}),(0,p.jsx)(e,{})]}))]}),_=h.story({loaders:[()=>({state:{counter:0}})],decorators:[o((e,{loaded:{state:t}})=>{t.counter=1})],render:()=>(0,p.jsx)(`div`,{children:`When passing in a handler (which returns nothing), the story will be rendered`}),play:async e=>{let{canvas:t,loaded:{state:n}}=e;await m(n.counter).toBe(1),await m(t.getByText(/When passing in a handler/)).toBeInTheDocument()}}),v=h.story({tags:[`unit`],beforeEach:()=>{a.isRunningInTest=()=>!1},decorators:[o(()=>{throw Error(`should not run`)})],render:()=>(0,p.jsx)(p.Fragment,{children:`should not run decorator when not in test`})}),y=[`BasicUsage`,`AcceptHandler`,`SkipDecorator`],g.input.parameters={...g.input.parameters,docs:{...g.input.parameters?.docs,source:{originalSource:`meta.story({
  decorators: [whenRunningInTest(Story => <div>
                <div>Decorator will be attached when running in test</div>
                <Story />
            </div>)]
})`,...g.input.parameters?.docs?.source}}},_.input.parameters={..._.input.parameters,docs:{..._.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,..._.input.parameters?.docs?.source}}},v.input.parameters={...v.input.parameters,docs:{...v.input.parameters?.docs,source:{originalSource:`meta.story({
  tags: ['unit'],
  beforeEach: () => {
    ctx.isRunningInTest = () => false;
  },
  decorators: [whenRunningInTest(() => {
    throw new Error('should not run');
  })],
  render: () => <>should not run decorator when not in test</>
})`,...v.input.parameters?.docs?.source}}}})))()}b();export{_ as AcceptHandler,g as BasicUsage,v as SkipDecorator,y as __namedExportsOrder};