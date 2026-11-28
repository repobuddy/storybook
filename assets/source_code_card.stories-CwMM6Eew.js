import{n as e}from"./rolldown-runtime-Dxh6kD9_.js";import{en as t,n,r,tn as i}from"./iframe-CQ9MsOev.js";import{n as a,t as o}from"./dedent-PcFMyqnX.js";import{_ as s,k as c,t as l}from"./src-vim89Lt8.js";var u,d,f,p,m,h,g;function _(){return(_=e((()=>{t(),a(),l(),n(),i(),{expect:u}=__STORYBOOK_MODULE_TEST__,d=r.meta({title:`components/SourceCodeCard`,tags:[`new`,`version:2.34`,`autodocs`],component:c,parameters:s({description:{component:"`SourceCodeCard` displays source code in a `StoryCard` with the `source` appearance."}}),args:{code:o`
			export function hello(name: string) {
				return \`Hello \${name}\`
			}
		`,language:`ts`}}),f=d.story({args:{"data-testid":`card`},play:async({canvas:e})=>{await u(e.getByTestId(`card`)).toContainElement(await e.findByTestId(`source-content`))}}),p=d.story({tags:[`props`],args:{title:`hello.ts`}}),m=d.story({tags:[`props`],args:{appearance:`info`,title:`Info card with code`}}),h=d.story({tags:[`props`],args:{className:`rbsb:border-dashed rbsb:border-2`}}),g=[`Basic`,`WithTitle`,`InfoAppearance`,`CustomClassName`],f.input.parameters={...f.input.parameters,docs:{...f.input.parameters?.docs,source:{originalSource:`meta.story({
	args: { 'data-testid': 'card' },
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('card')).toContainElement(await canvas.findByTestId('source-content'))
	}
})`,...f.input.parameters?.docs?.source}}},p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
	tags: ['props'],
	args: { title: 'hello.ts' }
})`,...p.input.parameters?.docs?.source}}},m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
	tags: ['props'],
	args: { appearance: 'info', title: 'Info card with code' }
})`,...m.input.parameters?.docs?.source}}},h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{originalSource:`meta.story({
	tags: ['props'],
	args: { className: 'rbsb:border-dashed rbsb:border-2' }
})`,...h.input.parameters?.docs?.source}}}})))()}_();export{f as Basic,h as CustomClassName,m as InfoAppearance,p as WithTitle,g as __namedExportsOrder};