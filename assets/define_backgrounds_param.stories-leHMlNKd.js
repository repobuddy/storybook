import{j as n,s as d,d as r}from"./iframe-BEZL4eC4.js";import{d as o}from"./dedent-C8rexWvS.js";import"./preload-helper-PPVm8Dsz.js";const t=s=>({backgrounds:s}),u={title:"Parameters/defineBackgroundsParam",tags:["new","version:1.0"],decorators:[d()],render:()=>n.jsx(n.Fragment,{})},e={parameters:{...t({default:"light"}),...r({source:{code:o`defineBackgroundParam({
                    default: 'light'
                })`}})}},a={parameters:{...t({options:[{name:"light",value:"light"},{name:"dark",value:"dark"}]}),...r({source:{code:o`defineBackgroundsParam({
                    options: [
                        { name: 'light', value: 'light' },
                        { name: 'dark', value: 'dark' }
                    ]
                })`}})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...defineBackgroundsParam({
      default: 'light'
    }),
    ...defineDocsParam({
      source: {
        code: dedent\`defineBackgroundParam({
                    default: 'light'
                })\`
      }
    })
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...defineBackgroundsParam({
      options: [{
        name: 'light',
        value: 'light'
      }, {
        name: 'dark',
        value: 'dark'
      }]
    }),
    ...defineDocsParam({
      source: {
        code: dedent\`defineBackgroundsParam({
                    options: [
                        { name: 'light', value: 'light' },
                        { name: 'dark', value: 'dark' }
                    ]
                })\`
      }
    })
  }
}`,...a.parameters?.docs?.source}}};const l=["SetDefaultBackground","SetBackgroundOptions"];export{a as SetBackgroundOptions,e as SetDefaultBackground,l as __namedExportsOrder,u as default};
