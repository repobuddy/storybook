import{j as r}from"./iframe-C5M8tZ5r.js";import{d as n}from"./dedent-BuYMbVyj.js";import{s as d}from"./show_doc_source-DCeVTN9-.js";import{d as o}from"./define_docs_param-lmgaBKCF.js";import"./preload-helper-PPVm8Dsz.js";const t=s=>({backgrounds:s}),g={title:"Parameters/defineBackgroundsParam",tags:["new","version:1.0"],decorators:[d()],render:()=>r.jsx(r.Fragment,{})},e={parameters:{...t({default:"light"}),...o({source:{code:n`defineBackgroundParam({
                    default: 'light'
                })`}})}},a={parameters:{...t({options:[{name:"light",value:"light"},{name:"dark",value:"dark"}]}),...o({source:{code:n`defineBackgroundsParam({
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
}`,...a.parameters?.docs?.source}}};const p=["SetDefaultBackground","SetBackgroundOptions"];export{a as SetBackgroundOptions,e as SetDefaultBackground,p as __namedExportsOrder,g as default};
