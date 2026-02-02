import{j as r}from"./iframe-BqLwFzaK.js";import{s as d}from"./with_story_card-BaHDPBut.js";import{d as n}from"./define_docs_param-lmgaBKCF.js";import{d as o}from"./dedent-BuYMbVyj.js";import"./preload-helper-PPVm8Dsz.js";const t=s=>({backgrounds:s}),g={title:"Parameters/defineBackgroundsParam",tags:["new","version:1.0"],decorators:[d()],render:()=>r.jsx(r.Fragment,{})},e={parameters:{...t({default:"light"}),...n({source:{code:o`defineBackgroundParam({
                    default: 'light'
                })`}})}},a={parameters:{...t({options:[{name:"light",value:"light"},{name:"dark",value:"dark"}]}),...n({source:{code:o`defineBackgroundsParam({
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
