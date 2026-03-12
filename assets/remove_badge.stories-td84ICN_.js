import"./components-DmejZTLj.js";import"./react-K5peCFg_.js";import"./react-dom-CYc0L8kE.js";import{t as e}from"./jsx-runtime-BUC2lftT.js";import{t}from"./dedent-rZS-CQtP.js";import{f as n,m as r}from"./src-CPfUkyQY.js";var i=e(),a={title:`storybook-addon-tag-badges/removeBadge`,tags:[`var`,`!snapshot`,`version:2.19`],render:()=>(0,i.jsx)(i.Fragment,{})},o={tags:[`remove:2`],decorators:[n({content:(0,i.jsxs)(`p`,{children:[`Feature or component scheduled for removal in version 2.0.0. In the sidebar it appears as `,(0,i.jsx)(`code`,{children:`☠️v2`}),`.`]})}),r({source:t`export const YourStory = {
                tags: ['remove:2'],
                render: () => <YourComponent />
            }`})]},s={tags:[`remove`],decorators:[n({content:(0,i.jsxs)(`p`,{children:[`Feature or component scheduled for removal in the next release. In the sidebar it appears as `,(0,i.jsx)(`code`,{children:`☠️`}),`.`]})}),r({source:t`export const YourStory = {
                tags: ['remove'],
                render: () => <YourComponent />
            }`})]},c={tags:[`remove:next`],decorators:[n({content:(0,i.jsxs)(`p`,{children:[`Feature or component scheduled for removal in the next release. In the sidebar it appears as `,(0,i.jsx)(`code`,{children:`☠️`}),`.`]})}),r({source:t`export const YourStory = {
                tags: ['remove:next'],
                render: () => <YourComponent />
            }`})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['remove:2'],
  decorators: [withStoryCard({
    content: <p>
                    Feature or component scheduled for removal in version 2.0.0. In the sidebar it appears as <code>☠️v2</code>.
                </p>
  }), showSource({
    source: dedent\`export const YourStory = {
                tags: ['remove:2'],
                render: () => <YourComponent />
            }\`
  })]
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['remove'],
  decorators: [withStoryCard({
    content: <p>
                    Feature or component scheduled for removal in the next release. In the sidebar it appears as <code>☠️</code>.
                </p>
  }), showSource({
    source: dedent\`export const YourStory = {
                tags: ['remove'],
                render: () => <YourComponent />
            }\`
  })]
}`,...s.parameters?.docs?.source},description:{story:"Same badge as RemoveInNext; `remove` and `remove:next` are equivalent.",...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['remove:next'],
  decorators: [withStoryCard({
    content: <p>
                    Feature or component scheduled for removal in the next release. In the sidebar it appears as <code>☠️</code>.
                </p>
  }), showSource({
    source: dedent\`export const YourStory = {
                tags: ['remove:next'],
                render: () => <YourComponent />
            }\`
  })]
}`,...c.parameters?.docs?.source},description:{story:"Same badge as RemovePlain; `remove` and `remove:next` are equivalent.",...c.parameters?.docs?.description}}};var l=[`RemoveInVersion`,`RemovePlain`,`RemoveInNext`];export{c as RemoveInNext,o as RemoveInVersion,s as RemovePlain,l as __namedExportsOrder,a as default};