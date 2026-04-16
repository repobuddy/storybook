import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-6sF1Ejqi.js";import{C as n,S as r,a as i,h as a,i as o,r as s,t as c}from"./src-XpyBqwIv.js";var l=e((()=>{r()})),u,d,f,p,m,h,g;e((()=>{l(),c(),i(),u=t(),{expect:d}=__STORYBOOK_MODULE_TEST__,f={title:`testing/whenRunningInTest`,tags:[`new`,`version:1.0`],beforeEach:()=>{o.isRunningInTest=()=>!0},decorators:[a()],render:()=>(0,u.jsx)(u.Fragment,{}),afterEach:()=>{o.isRunningInTest=n}},p={decorators:[s(e=>(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`div`,{children:`Decorator will be attached when running in test`}),(0,u.jsx)(e,{})]}))]},m={loaders:[()=>({state:{counter:0}})],decorators:[s((e,{loaded:{state:t}})=>{t.counter=1})],render:()=>(0,u.jsx)(`div`,{children:`When passing in a handler (which returns nothing), the story will be rendered`}),play:async e=>{let{canvas:t,loaded:{state:n}}=e;await d(n.counter).toBe(1),await d(t.getByText(/When passing in a handler/)).toBeInTheDocument()}},h={tags:[`unit`],beforeEach:()=>{o.isRunningInTest=()=>!1},decorators:[s(()=>{throw Error(`should not run`)})],render:()=>(0,u.jsx)(u.Fragment,{children:`should not run decorator when not in test`})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  decorators: [whenRunningInTest(Story => <div>
                <div>Decorator will be attached when running in test</div>
                <Story />
            </div>)]
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['unit'],
  beforeEach: () => {
    ctx.isRunningInTest = () => false;
  },
  decorators: [whenRunningInTest(() => {
    throw new Error('should not run');
  })],
  render: () => <>should not run decorator when not in test</>
}`,...h.parameters?.docs?.source}}},g=[`BasicUsage`,`AcceptHandler`,`SkipDecorator`]}))();export{m as AcceptHandler,p as BasicUsage,h as SkipDecorator,g as __namedExportsOrder,f as default};