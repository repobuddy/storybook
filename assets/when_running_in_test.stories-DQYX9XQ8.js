import{n as e}from"./rolldown-runtime-Dxh6kD9_.js";import{en as t,gt as n,n as r,r as i,tn as a}from"./iframe-CQ9MsOev.js";import{O as o,V as s,a as c,i as l,o as u,t as d}from"./src-vim89Lt8.js";var f,p,m,h,g,_,v;function y(){return(y=e((()=>{t(),d(),r(),u(),f=n(),a(),{expect:p}=__STORYBOOK_MODULE_TEST__,m=i.meta({title:`testing/whenRunningInTest`,tags:[`new`,`version:1.0`],beforeEach:()=>{c.isRunningInTest=()=>!0},decorators:[o()],render:()=>(0,f.jsx)(f.Fragment,{}),afterEach:()=>{c.isRunningInTest=s}}),h=m.story({decorators:[l(e=>(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{children:`Decorator will be attached when running in test`}),(0,f.jsx)(e,{})]}))]}),g=m.story({loaders:[()=>({state:{counter:0}})],decorators:[l((e,{loaded:{state:t}})=>{t.counter=1})],render:()=>(0,f.jsx)(`div`,{children:`When passing in a handler (which returns nothing), the story will be rendered`}),play:async e=>{let{canvas:t,loaded:{state:n}}=e;await p(n.counter).toBe(1),await p(t.getByText(/When passing in a handler/)).toBeInTheDocument()}}),_=m.story({tags:[`unit`],beforeEach:()=>{c.isRunningInTest=()=>!1},decorators:[l(()=>{throw Error(`should not run`)})],render:()=>(0,f.jsx)(f.Fragment,{children:`should not run decorator when not in test`})}),v=[`BasicUsage`,`AcceptHandler`,`SkipDecorator`],h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{originalSource:`meta.story({
	decorators: [
		whenRunningInTest((Story) => (
			<div>
				<div>Decorator will be attached when running in test</div>
				<Story />
			</div>
		))
	]
})`,...h.input.parameters?.docs?.source}}},g.input.parameters={...g.input.parameters,docs:{...g.input.parameters?.docs,source:{originalSource:`meta.story({
	loaders: [() => ({ state: { counter: 0 } })],
	decorators: [
		whenRunningInTest((_, { loaded: { state } }) => {
			state.counter = 1
		})
	],
	render: () => <div>When passing in a handler (which returns nothing), the story will be rendered</div>,
	play: async (ctx) => {
		const {
			canvas,
			loaded: { state }
		} = ctx
		await expect(state.counter).toBe(1)
		await expect(canvas.getByText(/When passing in a handler/)).toBeInTheDocument()
	}
})`,...g.input.parameters?.docs?.source}}},_.input.parameters={..._.input.parameters,docs:{..._.input.parameters?.docs,source:{originalSource:`meta.story({
	tags: ['unit'],
	beforeEach: () => {
		ctx.isRunningInTest = () => false
	},
	decorators: [
		whenRunningInTest(() => {
			throw new Error('should not run')
		})
	],
	render: () => <>should not run decorator when not in test</>
})`,..._.input.parameters?.docs?.source}}}})))()}y();export{g as AcceptHandler,h as BasicUsage,_ as SkipDecorator,v as __namedExportsOrder};