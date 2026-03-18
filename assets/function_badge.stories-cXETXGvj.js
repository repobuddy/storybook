import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-6sF1Ejqi.js";import{n,t as r}from"./dedent-r2SG9fgm.js";import{g as i,m as a,t as o}from"./src-B1BCb3C2.js";var s,c,l,u,d;e((()=>{n(),o(),s=t(),c={title:`storybook-addon-tag-badges/functionBadge`,tags:[`var`,`!snapshot`,`version:2.16`],render:()=>(0,s.jsx)(s.Fragment,{})},l={tags:[`func`],decorators:[a({content:(0,s.jsxs)(`p`,{children:[`Story that showcases or documents functions. In the sidebar it appears as `,(0,s.jsx)(`code`,{children:`ƒ(x)`}),`.`]})}),i({source:r`export const YourStory = {
                tags: ['func'],
                render: () => <YourComponent />
            }`})]},u={tags:[`unit`],render:()=>(0,s.jsx)(`div`,{children:`Dummy story to force badge to show in story and not hoisted up`})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['func'],
  decorators: [withStoryCard({
    content: <p>
                    Story that showcases or documents functions. In the sidebar it appears as <code>ƒ(x)</code>.
                </p>
  }), showSource({
    source: dedent\`export const YourStory = {
                tags: ['func'],
                render: () => <YourComponent />
            }\`
  })]
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['unit'],
  render: () => <div>Dummy story to force badge to show in story and not hoisted up</div>
}`,...u.parameters?.docs?.source}}},d=[`FunctionBadge`,`DummyStory`]}))();export{u as DummyStory,l as FunctionBadge,d as __namedExportsOrder,c as default};