import"./components-DmejZTLj.js";import"./react-K5peCFg_.js";import"./react-dom-CYc0L8kE.js";import{t as e}from"./jsx-runtime-BUC2lftT.js";import{t}from"./dedent-rZS-CQtP.js";import{f as n,m as r}from"./src-CPfUkyQY.js";var i=e(),a={title:`storybook-addon-tag-badges/todoBadge`,tags:[`var`,`!snapshot`,`version:0.11`],render:()=>(0,i.jsx)(i.Fragment,{})},o={name:`To-Do Badge`,tags:[`todo`],decorators:[n({content:(0,i.jsxs)(`p`,{children:[`Story marked as todo or incomplete. In the sidebar it appears as `,(0,i.jsx)(`code`,{children:`📋`}),`.`]})}),r({source:t`export const YourStory = {
                tags: ['todo'],
                render: () => <YourComponent />
            }`})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'To-Do Badge',
  tags: ['todo'],
  decorators: [withStoryCard({
    content: <p>
                    Story marked as todo or incomplete. In the sidebar it appears as <code>📋</code>.
                </p>
  }), showSource({
    source: dedent\`export const YourStory = {
                tags: ['todo'],
                render: () => <YourComponent />
            }\`
  })]
}`,...o.parameters?.docs?.source}}};var s=[`TodoBadge`];export{o as TodoBadge,s as __namedExportsOrder,a as default};