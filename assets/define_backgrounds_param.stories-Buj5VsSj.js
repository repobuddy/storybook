import"./components-DmejZTLj.js";import"./react-K5peCFg_.js";import"./react-dom-CYc0L8kE.js";import{t as e}from"./jsx-runtime-BUC2lftT.js";import{t}from"./dedent-rZS-CQtP.js";import{l as n,p as r,u as i}from"./src-CPfUkyQY.js";var a=e(),o={title:`Parameters/defineBackgroundsParam`,tags:[`func`,`!snapshot`,`new`,`version:1.0`],decorators:[r()],render:()=>(0,a.jsx)(a.Fragment,{})},s={parameters:{...i({default:`light`}),...n({source:{code:t`defineBackgroundParam({
                    default: 'light'
                })`}})}},c={parameters:{...i({options:[{name:`light`,value:`light`},{name:`dark`,value:`dark`}]}),...n({source:{code:t`defineBackgroundsParam({
                    options: [
                        { name: 'light', value: 'light' },
                        { name: 'dark', value: 'dark' }
                    ]
                })`}})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};var l=[`SetDefaultBackground`,`SetBackgroundOptions`];export{c as SetBackgroundOptions,s as SetDefaultBackground,l as __namedExportsOrder,o as default};