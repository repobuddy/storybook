import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{a as t}from"./chunk-W22LQPXL-DTPpuFEj.js";import{_ as n,a as r}from"./theming-BnxDG17x.js";import{n as i,r as a}from"./iframe-CR7YptVj.js";import{n as o,t as s}from"./dedent-Dmnlqj-U.js";import{I as c,_ as l,t as u}from"./src-BqrND1-F.js";var d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{o(),r(),u(),i(),d=t(),{expect:f}=__STORYBOOK_MODULE_TEST__,p=a.meta({title:`components/SourceCode`,tags:[`new`,`version:2.34`,`autodocs`],component:c,parameters:l({description:{component:["`SourceCode` displays source code with the Storybook syntax highlighter.","It follows the current dark mode unless a `theme` is provided."].join(`<br/>`)}}),args:{code:s`
            export function hello(name: string) {
                return \`Hello \${name}\`
            }
        `,language:`ts`}}),m=p.story({play:async({canvas:e})=>{await f(await e.findByTestId(`source-content`)).toBeInTheDocument()}}),h=p.story({tags:[`props`],args:{code:JSON.stringify({name:`repobuddy`,tags:[`storybook`]},null,2),language:`json`}}),g=p.story({tags:[`props`],args:{theme:n.dark},decorators:[e=>(0,d.jsx)(`div`,{style:{backgroundColor:n.dark.appContentBg},children:(0,d.jsx)(e,{})})]}),_=p.story({tags:[`props`],args:{"data-testid":`my-code`},play:async({canvas:e})=>{await f(await e.findByTestId(`my-code`)).toBeInTheDocument()}}),v=[`Basic`,`Json`,`DarkTheme`,`CustomTestId`],m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
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