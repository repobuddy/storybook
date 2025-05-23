import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{d as c}from"./dedent-DVFkJXTl.js";import{s as g}from"./show_doc_source-CWgnZoeJ.js";import{d as i}from"./define_docs_param-lmgaBKCF.js";const u=l=>({backgrounds:l}),B={title:"Parameters/defineBackgroundsParam",tags:["new","version:1.0"],decorators:[g()],render:()=>r.jsx(r.Fragment,{})},e={parameters:{...u({default:"light"}),...i({source:{code:c`defineBackgroundParam({
                    default: 'light'
                })`}})}},a={parameters:{...u({options:[{name:"light",value:"light"},{name:"dark",value:"dark"}]}),...i({source:{code:c`defineBackgroundsParam({
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
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const P=["SetDefaultBackground","SetBackgroundOptions"];export{a as SetBackgroundOptions,e as SetDefaultBackground,P as __namedExportsOrder,B as default};
