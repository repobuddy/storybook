import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{L as n,O as r,a as i,i as a,o,t as s}from"./src-yOJfan-s.js";var c,l,u,d,f,p,m;function h(){return(h=e((()=>{s(),o(),c=t(),{expect:l}=__STORYBOOK_MODULE_TEST__,u={title:`testing/whenRunningInTest`,tags:[`new`,`version:1.0`],beforeEach:()=>{i.isRunningInTest=()=>!0},decorators:[r()],render:()=>(0,c.jsx)(c.Fragment,{}),afterEach:()=>{i.isRunningInTest=n}},d={decorators:[a(e=>(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`div`,{children:`Decorator will be attached when running in test`}),(0,c.jsx)(e,{})]}))]},f={loaders:[()=>({state:{counter:0}})],decorators:[a((e,{loaded:{state:t}})=>{t.counter=1})],render:()=>(0,c.jsx)(`div`,{children:`When passing in a handler (which returns nothing), the story will be rendered`}),play:async e=>{let{canvas:t,loaded:{state:n}}=e;await l(n.counter).toBe(1),await l(t.getByText(/When passing in a handler/)).toBeInTheDocument()}},p={tags:[`unit`],beforeEach:()=>{i.isRunningInTest=()=>!1},decorators:[a(()=>{throw Error(`should not run`)})],render:()=>(0,c.jsx)(c.Fragment,{children:`should not run decorator when not in test`})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  decorators: [whenRunningInTest(Story => <div>
                <div>Decorator will be attached when running in test</div>
                <Story />
            </div>)]
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['unit'],
  beforeEach: () => {
    ctx.isRunningInTest = () => false;
  },
  decorators: [whenRunningInTest(() => {
    throw new Error('should not run');
  })],
  render: () => <>should not run decorator when not in test</>
}`,...p.parameters?.docs?.source}}},m=[`BasicUsage`,`AcceptHandler`,`SkipDecorator`]})))()}h();export{f as AcceptHandler,d as BasicUsage,p as SkipDecorator,m as __namedExportsOrder,u as default};