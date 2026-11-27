import{n as e}from"./rolldown-runtime-Dxh6kD9_.js";import{ht as t,n,r,wt as i,yt as a}from"./iframe-DCXwTUBD.js";import{n as o,t as s}from"./dedent-PcFMyqnX.js";import{I as c,_ as l,t as u}from"./src-DrAjjz3b.js";var d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{o(),a(),u(),n(),d=t(),{expect:f}=__STORYBOOK_MODULE_TEST__,p=r.meta({title:`components/SourceCode`,tags:[`new`,`version:2.34`,`autodocs`],component:c,parameters:l({description:{component:"`SourceCode` displays source code with the Storybook syntax highlighter.<br/>It follows the current dark mode unless a `theme` is provided."}}),args:{code:s`
            export function hello(name: string) {
                return \`Hello \${name}\`
            }
        `,language:`ts`}}),m=p.story({play:async({canvas:e})=>{await f(await e.findByTestId(`source-content`)).toBeInTheDocument()}}),h=p.story({tags:[`props`],args:{code:JSON.stringify({name:`repobuddy`,tags:[`storybook`]},null,2),language:`json`}}),g=p.story({tags:[`props`],args:{theme:i.dark},decorators:[e=>(0,d.jsx)(`div`,{style:{backgroundColor:i.dark.appContentBg},children:(0,d.jsx)(e,{})})]}),_=p.story({tags:[`props`],args:{"data-testid":`my-code`},play:async({canvas:e})=>{await f(await e.findByTestId(`my-code`)).toBeInTheDocument()}}),v=[`Basic`,`Json`,`DarkTheme`,`CustomTestId`],m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
  play: async ({
    canvas
  }) => {
    await expect(await canvas.findByTestId('source-content')).toBeInTheDocument();
  }
})`,...m.input.parameters?.docs?.source}}},h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{originalSource:`meta.story({
  tags: ['props'],
  args: {
    code: JSON.stringify({
      name: 'repobuddy',
      tags: ['storybook']
    }, null, 2),
    language: 'json'
  }
})`,...h.input.parameters?.docs?.source}}},g.input.parameters={...g.input.parameters,docs:{...g.input.parameters?.docs,source:{originalSource:`meta.story({
  tags: ['props'],
  args: {
    theme: themes.dark
  },
  decorators: [Story => <div style={{
    backgroundColor: themes.dark.appContentBg
  }}>
                <Story />
            </div>]
})`,...g.input.parameters?.docs?.source}}},_.input.parameters={..._.input.parameters,docs:{..._.input.parameters?.docs,source:{originalSource:`meta.story({
  tags: ['props'],
  args: {
    'data-testid': 'my-code'
  },
  play: async ({
    canvas
  }) => {
    await expect(await canvas.findByTestId('my-code')).toBeInTheDocument();
  }
})`,..._.input.parameters?.docs?.source}}}})))()}y();export{m as Basic,_ as CustomTestId,g as DarkTheme,h as Json,v as __namedExportsOrder};