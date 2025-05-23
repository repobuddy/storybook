import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{d as i}from"./dedent-DVFkJXTl.js";import{s as l}from"./show_doc_source-CWgnZoeJ.js";import{d as c}from"./define_docs_param-lmgaBKCF.js";import"./index-DsR4G5ps.js";import"./index-D4lIrffr.js";import"./index-DGfY4z2V.js";import"./index-CcVp9PAx.js";import"./index-DsJinFGm.js";import"./iframe-CuJswpXI.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";const u=p=>({backgrounds:p}),w={title:"Parameters/defineBackgroundsParam",tags:["new","version:1.0"],decorators:[l()],render:()=>r.jsx(r.Fragment,{})},e={parameters:{...u({default:"light"}),...c({source:{code:i`defineBackgroundParam({
                    default: 'light'
                })`}})}},a={parameters:{...u({options:[{name:"light",value:"light"},{name:"dark",value:"dark"}]}),...c({source:{code:i`defineBackgroundsParam({
                    options: [
                        { name: 'light', value: 'light' },
                        { name: 'dark', value: 'dark' }
                    ]
                })`}})}};var n,o,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var s,d,m;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const E=["SetDefaultBackground","SetBackgroundOptions"];export{a as SetBackgroundOptions,e as SetDefaultBackground,E as __namedExportsOrder,w as default};
