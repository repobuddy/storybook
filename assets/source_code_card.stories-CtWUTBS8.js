import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,r as n}from"./iframe-B5JwIbDj.js";import{n as r,t as i}from"./dedent-Dmnlqj-U.js";import{_ as a,k as o,t as s}from"./src-CITtOmLo.js";var c,l,u,d,f,p,m;function h(){return(h=e((()=>{r(),s(),t(),{expect:c}=__STORYBOOK_MODULE_TEST__,l=n.meta({title:`components/SourceCodeCard`,tags:[`new`,`version:2.34`,`autodocs`],component:o,parameters:a({description:{component:"`SourceCodeCard` displays source code in a `StoryCard` with the `source` appearance."}}),args:{code:i`
            export function hello(name: string) {
                return \`Hello \${name}\`
            }
        `,language:`ts`}}),u=l.story({args:{"data-testid":`card`},play:async({canvas:e})=>{await c(e.getByTestId(`card`)).toContainElement(await e.findByTestId(`source-content`))}}),d=l.story({tags:[`props`],args:{title:`hello.ts`}}),f=l.story({tags:[`props`],args:{appearance:`info`,title:`Info card with code`}}),p=l.story({tags:[`props`],args:{className:`rbsb:border-dashed rbsb:border-2`}}),m=[`Basic`,`WithTitle`,`InfoAppearance`,`CustomClassName`],u.input.parameters={...u.input.parameters,docs:{...u.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    'data-testid': 'card'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('card')).toContainElement(await canvas.findByTestId('source-content'));
  }
})`,...u.input.parameters?.docs?.source}}},d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
  tags: ['props'],
  args: {
    title: 'hello.ts'
  }
})`,...d.input.parameters?.docs?.source}}},f.input.parameters={...f.input.parameters,docs:{...f.input.parameters?.docs,source:{originalSource:`meta.story({
  tags: ['props'],
  args: {
    appearance: 'info',
    title: 'Info card with code'
  }
})`,...f.input.parameters?.docs?.source}}},p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
  tags: ['props'],
  args: {
    className: 'rbsb:border-dashed rbsb:border-2'
  }
})`,...p.input.parameters?.docs?.source}}}})))()}h();export{u as Basic,p as CustomClassName,f as InfoAppearance,d as WithTitle,m as __namedExportsOrder};