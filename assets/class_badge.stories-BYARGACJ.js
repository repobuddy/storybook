import"./components-DmejZTLj.js";import"./react-K5peCFg_.js";import"./react-dom-CYc0L8kE.js";import{t as e}from"./jsx-runtime-BUC2lftT.js";import{t}from"./dedent-rZS-CQtP.js";import{f as n,m as r}from"./src-CPfUkyQY.js";var i=e(),a={title:`storybook-addon-tag-badges/classBadge`,tags:[`var`,`!snapshot`,`version:2.27`],render:()=>(0,i.jsx)(i.Fragment,{})},o={tags:[`class`],decorators:[n({content:(0,i.jsxs)(`p`,{children:[`Story that showcases or documents classes. In the sidebar it appears as `,(0,i.jsx)(`code`,{children:`🔷`}),`.`]})}),r({source:t`export const YourStory = {
                tags: ['class'],
                render: () => <YourComponent />
            }`})]},s={tags:[`unit`],render:()=>(0,i.jsx)(`div`,{children:`Dummy story to force badge to show in story and not hoisted up`})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['class'],
  decorators: [withStoryCard({
    content: <p>
                    Story that showcases or documents classes. In the sidebar it appears as <code>🔷</code>.
                </p>
  }), showSource({
    source: dedent\`export const YourStory = {
                tags: ['class'],
                render: () => <YourComponent />
            }\`
  })]
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['unit'],
  render: () => <div>Dummy story to force badge to show in story and not hoisted up</div>
}`,...s.parameters?.docs?.source}}};var c=[`ClassBadge`,`DummyStory`];export{o as ClassBadge,s as DummyStory,c as __namedExportsOrder,a as default};