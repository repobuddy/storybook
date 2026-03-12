import"./components-DmejZTLj.js";import"./react-K5peCFg_.js";import"./react-dom-CYc0L8kE.js";import{t as e}from"./jsx-runtime-BUC2lftT.js";import{t}from"./dedent-rZS-CQtP.js";import{f as n,m as r}from"./src-CPfUkyQY.js";var i=e(),a={title:`storybook-addon-tag-badges/snapshotBadge`,tags:[`var`,`!test`,`!snapshot`,`version:0.7`],render:()=>(0,i.jsx)(i.Fragment,{})},o={tags:[`snapshot`],decorators:[n({content:(0,i.jsxs)(`p`,{children:[`Story with snapshot test. It appears as `,(0,i.jsx)(`code`,{children:`📸`}),` in the toolbar (not in the sidebar).`]})}),r({source:t`export const YourStory = {
                tags: ['snapshot'],
                render: () => <YourComponent />
            }`})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['snapshot'],
  decorators: [withStoryCard({
    content: <p>
                    Story with snapshot test. It appears as <code>📸</code> in the toolbar (not in the sidebar).
                </p>
  }), showSource({
    source: dedent\`export const YourStory = {
                tags: ['snapshot'],
                render: () => <YourComponent />
            }\`
  })]
}`,...o.parameters?.docs?.source}}};var s=[`SnapshotBadge`];export{o as SnapshotBadge,s as __namedExportsOrder,a as default};