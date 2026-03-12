import"./components-DmejZTLj.js";import"./react-K5peCFg_.js";import"./react-dom-CYc0L8kE.js";import{t as e}from"./jsx-runtime-BUC2lftT.js";import{n as t,p as n,r,y as i}from"./src-CPfUkyQY.js";var a=e(),{expect:o}=__STORYBOOK_MODULE_TEST__,s={title:`testing/whenRunningInTest`,tags:[`new`,`version:1.0`],beforeEach:()=>{r.isRunningInTest=()=>!0},decorators:[n()],render:()=>(0,a.jsx)(a.Fragment,{}),afterEach:()=>{r.isRunningInTest=i}},c={decorators:[t(e=>(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`div`,{children:`Decorator will be attached when running in test`}),(0,a.jsx)(e,{})]}))]},l={loaders:[()=>({state:{counter:0}})],decorators:[t((e,{loaded:{state:t}})=>{t.counter=1})],render:()=>(0,a.jsx)(`div`,{children:`When passing in a handler (which returns nothing), the story will be rendered`}),play:async e=>{let{canvas:t,loaded:{state:n}}=e;await o(n.counter).toBe(1),await o(t.getByText(/When passing in a handler/)).toBeInTheDocument()}},u={tags:[`unit`],beforeEach:()=>{r.isRunningInTest=()=>!1},decorators:[t(()=>{throw Error(`should not run`)})],render:()=>(0,a.jsx)(a.Fragment,{children:`should not run decorator when not in test`})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  decorators: [whenRunningInTest(Story => <div>
                <div>Decorator will be attached when running in test</div>
                <Story />
            </div>)]
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['unit'],
  beforeEach: () => {
    ctx.isRunningInTest = () => false;
  },
  decorators: [whenRunningInTest(() => {
    throw new Error('should not run');
  })],
  render: () => <>should not run decorator when not in test</>
}`,...u.parameters?.docs?.source}}};var d=[`BasicUsage`,`AcceptHandler`,`SkipDecorator`];export{l as AcceptHandler,c as BasicUsage,u as SkipDecorator,d as __namedExportsOrder,s as default};