import{j as n,d as m}from"./iframe-7Yb0LowJ.js";import{d as i}from"./dedent-DVFkJXTl.js";import{s as g}from"./show_doc_source-Ca9dZB63.js";const u=l=>({backgrounds:l}),h={title:"Parameters/defineBackgroundsParam",tags:["new","version:1.0"],decorators:[g()],render:()=>n.jsx(n.Fragment,{})},e={parameters:{...u({default:"light"}),...m({source:{code:i`defineBackgroundParam({
                    default: 'light'
                })`}})}},a={parameters:{...u({options:[{name:"light",value:"light"},{name:"dark",value:"dark"}]}),...m({source:{code:i`defineBackgroundsParam({
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
