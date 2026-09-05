import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-B066xLLY.js";import{n,r}from"./iframe-Bv4Jrxeb.js";import{L as i,O as a,a as o,i as s,o as c,t as l}from"./src-Cjk9gBKT.js";var u,d,f,p,m,h,g;function _(){return(_=e((()=>{l(),n(),c(),u=t(),{expect:d}=__STORYBOOK_MODULE_TEST__,f=r.meta({title:`testing/whenRunningInTest`,tags:[`new`,`version:1.0`],beforeEach:()=>{o.isRunningInTest=()=>!0},decorators:[a()],render:()=>(0,u.jsx)(u.Fragment,{}),afterEach:()=>{o.isRunningInTest=i}}),p=f.story({decorators:[s(e=>(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`div`,{children:`Decorator will be attached when running in test`}),(0,u.jsx)(e,{})]}))]}),m=f.story({loaders:[()=>({state:{counter:0}})],decorators:[s((e,{loaded:{state:t}})=>{t.counter=1})],render:()=>(0,u.jsx)(`div`,{children:`When passing in a handler (which returns nothing), the story will be rendered`}),play:async e=>{let{canvas:t,loaded:{state:n}}=e;await d(n.counter).toBe(1),await d(t.getByText(/When passing in a handler/)).toBeInTheDocument()}}),h=f.story({tags:[`unit`],beforeEach:()=>{o.isRunningInTest=()=>!1},decorators:[s(()=>{throw Error(`should not run`)})],render:()=>(0,u.jsx)(u.Fragment,{children:`should not run decorator when not in test`})}),g=[`BasicUsage`,`AcceptHandler`,`SkipDecorator`],p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
  decorators: [whenRunningInTest(Story => <div>
                <div>Decorator will be attached when running in test</div>
                <Story />
            </div>)]
})`,...p.input.parameters?.docs?.source}}},m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...m.input.parameters?.docs?.source}}},h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{originalSource:`meta.story({
  tags: ['unit'],
  beforeEach: () => {
    ctx.isRunningInTest = () => false;
  },
  decorators: [whenRunningInTest(() => {
    throw new Error('should not run');
  })],
  render: () => <>should not run decorator when not in test</>
})`,...h.input.parameters?.docs?.source}}}})))()}_();export{m as AcceptHandler,p as BasicUsage,h as SkipDecorator,g as __namedExportsOrder};