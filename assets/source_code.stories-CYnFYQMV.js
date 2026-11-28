import{n as e}from"./rolldown-runtime-Dxh6kD9_.js";import{Et as t,bt as n,en as r,gt as i,n as a,r as o,tn as s}from"./iframe-CQ9MsOev.js";import{n as c,t as l}from"./dedent-PcFMyqnX.js";import{I as u,_ as d,t as f}from"./src-vim89Lt8.js";var p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{r(),c(),n(),f(),a(),p=i(),s(),{expect:m}=__STORYBOOK_MODULE_TEST__,h=o.meta({title:`components/SourceCode`,tags:[`new`,`version:2.34`,`autodocs`],component:u,parameters:d({description:{component:"`SourceCode` displays source code with the Storybook syntax highlighter.<br/>It follows the current dark mode unless a `theme` is provided."}}),args:{code:l`
			export function hello(name: string) {
				return \`Hello \${name}\`
			}
		`,language:`ts`}}),g=h.story({play:async({canvas:e})=>{await m(await e.findByTestId(`source-content`)).toBeInTheDocument()}}),_=h.story({tags:[`props`],args:{code:JSON.stringify({name:`repobuddy`,tags:[`storybook`]},null,2),language:`json`}}),v=h.story({tags:[`props`],args:{theme:t.dark},decorators:[e=>(0,p.jsx)(`div`,{style:{backgroundColor:t.dark.appContentBg},children:(0,p.jsx)(e,{})})]}),y=h.story({tags:[`props`],args:{"data-testid":`my-code`},play:async({canvas:e})=>{await m(await e.findByTestId(`my-code`)).toBeInTheDocument()}}),b=[`Basic`,`Json`,`DarkTheme`,`CustomTestId`],g.input.parameters={...g.input.parameters,docs:{...g.input.parameters?.docs,source:{originalSource:`meta.story({
	play: async ({ canvas }) => {
		await expect(await canvas.findByTestId('source-content')).toBeInTheDocument()
	}
})`,...g.input.parameters?.docs?.source}}},_.input.parameters={..._.input.parameters,docs:{..._.input.parameters?.docs,source:{originalSource:`meta.story({
	tags: ['props'],
	args: {
		code: JSON.stringify({ name: 'repobuddy', tags: ['storybook'] }, null, 2),
		language: 'json'
	}
})`,..._.input.parameters?.docs?.source}}},v.input.parameters={...v.input.parameters,docs:{...v.input.parameters?.docs,source:{originalSource:`meta.story({
	tags: ['props'],
	args: { theme: themes.dark },
	decorators: [
		(Story) => (
			<div style={{ backgroundColor: themes.dark.appContentBg }}>
				<Story />
			</div>
		)
	]
})`,...v.input.parameters?.docs?.source}}},y.input.parameters={...y.input.parameters,docs:{...y.input.parameters?.docs,source:{originalSource:`meta.story({
	tags: ['props'],
	args: { 'data-testid': 'my-code' },
	play: async ({ canvas }) => {
		await expect(await canvas.findByTestId('my-code')).toBeInTheDocument()
	}
})`,...y.input.parameters?.docs?.source}}}})))()}x();export{g as Basic,y as CustomTestId,v as DarkTheme,_ as Json,b as __namedExportsOrder};