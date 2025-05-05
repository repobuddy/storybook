import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{d as m}from"./dedent-DVFkJXTl.js";import{s as g,d as i}from"./define_docs_param-DYEy_vX9.js";const u=l=>({backgrounds:l}),h={title:"Parameters/defineBackgroundsParam",tags:["new","version:1.0.0"],decorators:[g()],render:()=>n.jsx(n.Fragment,{})},e={parameters:{...u({default:"light"}),...i({source:{code:m`defineBackgroundParam({
                    default: 'light'
                })`}})}},a={parameters:{...u({options:[{name:"light",value:"light"},{name:"dark",value:"dark"}]}),...i({source:{code:m`defineBackgroundsParam({
                    options: [
                        { name: 'light', value: 'light' },
                        { name: 'dark', value: 'dark' }
                    ]
                })`}})}};var r,o,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var s,d,c;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const B=["SetDefaultBackground","SetBackgroundOptions"];export{a as SetBackgroundOptions,e as SetDefaultBackground,B as __namedExportsOrder,h as default};
