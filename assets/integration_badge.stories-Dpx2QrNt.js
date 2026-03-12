import"./components-DmejZTLj.js";import"./react-K5peCFg_.js";import"./react-dom-CYc0L8kE.js";import{t as e}from"./jsx-runtime-BUC2lftT.js";import{t}from"./dedent-rZS-CQtP.js";import{f as n,m as r}from"./src-CPfUkyQY.js";var i=e(),a={title:`storybook-addon-tag-badges/integrationBadge`,tags:[`var`,`!snapshot`,`version:0.9`],render:()=>(0,i.jsx)(i.Fragment,{})},o={tags:[`integration`],decorators:[n({content:(0,i.jsxs)(`p`,{children:[`Integration test story. This badge is hidden in the sidebar; it appears as `,(0,i.jsx)(`code`,{children:`🔗`}),` when displayed elsewhere.`]})}),r({source:t`export const YourStory = {
                tags: ['integration'],
                render: () => <YourComponent />
            }`})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['integration'],
  decorators: [withStoryCard({
    content: <p>
                    Integration test story. This badge is hidden in the sidebar; it appears as <code>🔗</code> when displayed
                    elsewhere.
                </p>
  }), showSource({
    source: dedent\`export const YourStory = {
                tags: ['integration'],
                render: () => <YourComponent />
            }\`
  })]
}`,...o.parameters?.docs?.source}}};var s=[`IntegrationTestBadge`];export{o as IntegrationTestBadge,s as __namedExportsOrder,a as default};